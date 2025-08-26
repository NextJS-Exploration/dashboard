import { db } from "@/app/lib/db";
import crypto from 'crypto';

export function hashToken(token: string) {
    return crypto.createHash('sha256').update(token).digest('hex')
}

export async function persistRefreshToken({
    userId, jti, familyId, token, expiresAt, userAgent, ip
}: {
    userId: string
    jti: string
    familyId: string
    token: string
    expiresAt: Date
    userAgent?: string
    ip?: string
}) {
    return db.refreshToken.create({
        data: {
            userId,
            jti,
            familyId,
            hashedToken: hashToken(token),
            expiresAt,
            userAgent,
            ip
        }
    })
}

export async function findRefreshByJti( jti: string ) {
    return db.refreshToken.findUnique({ where: { jti } })
}

export async function revokeTokenById( id: string ) {
    await db.refreshToken.update({ where: { id }, data: { revokedAt: new Date() } })
}

export async function revokeFamily( familyId: string ) {
    await db.refreshToken.updateMany({
        where: { familyId, revokedAt: null },
        data: { revokedAt: new Date() }
    })
}