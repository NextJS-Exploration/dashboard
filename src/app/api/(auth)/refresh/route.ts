import { findRefreshByJti, hashToken, revokeFamily } from "@/app/lib/jwt/store";
import { newId, signAccessToken, signRefreshToken, verifyRefresh } from "@/app/lib/jwt/token";
import { db } from "@/app/lib/db";
import { errorResponse, successResponse } from "@/app/lib/apiResponse";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { getUserById } from "@/services/user.service";

export async function POST(req: NextRequest) {
    const userAgent = req.headers.get("user-agent") as string || "unknown";
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() as string || "unknown"

    try {
        const refreshCookie = req.cookies.get('RefreshToken')?.value
        if (!refreshCookie) return errorResponse(401, "Cookie not found")

        const { payload } = await verifyRefresh(refreshCookie)

        const userId = payload.sub as string
        const jti = payload.jti as string
        const familyId = payload.fid as string
        const tokenVersion = (payload.tv as number) ?? 0
        let user = await getUserById(userId)
        let rec = await findRefreshByJti(jti)
        const hash = hashToken(refreshCookie)

        if ( rec == null || rec.hashedToken !== hash || rec.revokedAt) {
            try {
                await revokeFamily(familyId)
            } catch(err) {
                return errorResponse(500, "Internal server error", err)
            }
            return errorResponse(401, "Token reuse detected")
        }

        const newJti = newId()
        const newPayload = {
            userId,
            familyId,
            jti: newJti,
            tokenVersion
        }

        const newAccessToken = await signAccessToken(userId, user.role)
        const newRefreshToken = await signRefreshToken(newPayload)

        await db.$transaction([
            db.refreshToken.update({
                where: { id: rec.id },
                data: { revokedAt: new Date() }
            }),
            db.refreshToken.create({
                data: {
                    userId,
                    jti: newJti,
                    familyId,
                    hashedToken: hashToken(newRefreshToken),
                    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                    userAgent,
                    ip
                }
            })
        ])

        const cookieStore = await cookies();
        cookieStore.set({
            name: 'AccessToken',
            value: newAccessToken,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
            path: '/',
            sameSite: 'strict'
        });
        cookieStore.set({
            name: 'RefreshToken',
            value: newRefreshToken,
            secure: process.env.NODE_ENV === "production",
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
            path: '/',
            sameSite: 'strict'
        });

        return successResponse(
            200, "Token refreshed", {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            }
        )
    } catch(err: any) {
        console.error("error refreshing token",err)
        return errorResponse(err.message ?? "Cannot refresh token", err.status ?? 500, err.error ?? null)
    }
}