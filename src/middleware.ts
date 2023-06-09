import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/developer') {
        return NextResponse.redirect(new URL('/developer/dashboard', request.url))
    }
}

export const config = {
    matcher: ['/developer/:path*']
}