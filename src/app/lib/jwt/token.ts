import * as jose from 'jose'

const ACCESS_TTL = '1d'
const REFRESH_TTL_SECONDS = 60 * 60 * 24 * 7
const ALG = 'HS256'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

export function newId() {
    return crypto.randomUUID()
}

export async function signAccessToken(userId: string, roles: string, tokenVersion = 0) {
    return new jose.SignJWT({ roles, tv: tokenVersion })
        .setProtectedHeader({ alg: ALG })
        .setSubject( userId )
        .setExpirationTime( ACCESS_TTL )
        .sign( secret )
}

export async function signRefreshToken(payload: {
    userId: string,
    familyId: string,
    jti: string,
    tokenVersion?: number
}) {
    const { userId, familyId, jti, tokenVersion = 0 } = payload
    const exp = Math.floor(Date.now() / 1000) + REFRESH_TTL_SECONDS

    return new jose.SignJWT({ typ: 'refresh', fid: familyId, jti: jti, tv: tokenVersion })
        .setProtectedHeader({ alg: ALG })
        .setSubject( userId )
        .setExpirationTime( exp )
        .sign( secret )
}

export async function verifyAccess( token: string ) {
    return await jose.jwtVerify( token, secret )
}

export async function verifyRefresh( token: string ) {
    const res = await jose.jwtVerify( token, secret )
    if ( res.payload.typ !== 'refresh' ) throw {
        status: 406,
        message: 'Invalid refresh type'
    }
    return res
}