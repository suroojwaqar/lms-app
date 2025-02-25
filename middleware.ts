import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const isPublicPath = path.startsWith('/(auth)') || 
                       path === '/login' || 
                       path === '/signup' || 
                       path === '/forgot-password' ||
                       path === '/verify-code'

  const token = request.cookies.get('token')?.value || ''

  // Redirect to login if trying to access protected route without token
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Redirect to dashboard if trying to access auth pages while logged in
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// Add your protected routes patterns here
export const config = {
  matcher: [
    '/(adminpanel)/:path*',
    '/(student)/:path*',
    '/(parent)/:path*',
    '/(teacher)/:path*',
    '/login',
    '/signup',
    '/forgot-password',
    '/verify-code',
    '/dashboard',
  ]
}
