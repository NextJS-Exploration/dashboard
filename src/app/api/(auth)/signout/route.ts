import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/app/lib/db";
import { successResponse } from "@/app/lib/apiResponse";
import { verifyRefresh } from "@/app/lib/jwt/token";

export async function POST(req: NextRequest) {
  const refreshCookie = req.cookies.get('RefreshToken')?.value

  if (refreshCookie) {
    const { payload } = await verifyRefresh(refreshCookie)
    const fim = payload.fid as string
    try {
      await db.refreshToken.updateMany({
        where: { familyId: fim},
        data: {
          revokedAt: new Date()
        }
      });
    } catch (err) {
      console.error("Failed to revoke refresh token:", err);
    }
    const cookieStore = await cookies()
    cookieStore.delete("AccessToken")
    cookieStore.delete("RefreshToken")
  } else {
    console.log("No refresh token")
  }
  
  return successResponse(200, "Signed out", null)
}
