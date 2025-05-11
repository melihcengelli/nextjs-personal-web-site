import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Desteklenen diller
const locales = ['tr', 'en']

// Varsayılan dil
const defaultLocale = 'tr'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname starts with a supported language
  const pathnameIsMissingLocale = ['tr', 'en'].every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = 'tr' // Default locale

    // e.g. incoming request is /products
    // The new URL is /tr/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
} 