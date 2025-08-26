// middleware.ts
import { NextResponse, NextRequest } from 'next/server'
import * as jose from 'jose'
import { errorResponse } from './app/lib/apiResponse'

const secret = new TextEncoder().encode(process.env.JWT_SECRET)

async function verifyAccess(token?: string) {
  if (!token) return null
  try {
    const { payload } = await jose.jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}

export default async function middleware(request: NextRequest) {
  const access = request.cookies.get('AccessToken')?.value
  const payload = await verifyAccess(access)
  const userId = payload?.sub as string | undefined
  const roles = (payload?.roles as { id: string; role: string }[]) || []

  // normalize path (remove trailing slash if present)
  const pathname = request.nextUrl.pathname.replace(/\/$/, '')

  // allow refresh redirect route
  if (pathname.startsWith('/refresh-redirect')) {
    return NextResponse.next()
  }

  // allow refresh API
  if (pathname === '/api/refresh') {
    return NextResponse.next()
  }

  // prevent authenticated users from accessing signin/signup pages
  if ((pathname === '/signin' || pathname === '/signup') && userId) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  if ((pathname === '/api/signin' || pathname === '/api/signup') && userId) {
    return errorResponse(409, 'Access denied!')
  }

  // protect dashboard routes
  if (pathname.startsWith('/dashboard')) {
    if (!userId) {
      return NextResponse.redirect(
        new URL(`/refresh-redirect${pathname}`, request.url)
      )
    }
  }

  // protect API routes except public ones
  if (pathname.startsWith('/api')) {
    const isPublicApi =
      pathname.startsWith('/api/signup') ||
      pathname.startsWith('/api/signin') ||
      pathname.startsWith('/api/signout') ||
      pathname.startsWith('/api/refresh')

    if (!userId && !isPublicApi) {
      return errorResponse(409, 'Access token expired')
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/refresh-redirect/:path*',
    '/api/refresh',
    '/dashboard/:path*',
    '/signout',
    '/signin',
    '/signup',
    '/api/:path*',
  ],
}
