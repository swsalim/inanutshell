import { writingConfig } from '@/config/writing';
import { NextRequest, NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const res = NextResponse.next();

  // Convert the request URL pathname into segments
  const pathSegments = request.nextUrl.pathname.split('/').filter(Boolean);

  // Guard clause for ensuring pathSegments has at least two parts: category and slug
  if (pathSegments.length !== 2) return NextResponse.next();

  if (!writingConfig?.categories) return NextResponse.next();

  const [requestCategory, requestSlug] = pathSegments; // This assumes the first segment is the category in kebab-case

  for (const category of writingConfig?.categories) {
    // Check if the category is published and if the requested slug matches a category's slug
    if (category?.published && requestCategory === category?.slug) {
      // Since category matches and it's published, we can optionally rewrite or just continue
      // If you need to rewrite to a specific structure, you can do so here
      // For now, this simply allows the request to proceed as indication of a valid category match
      const url = request.nextUrl.clone();
      url.pathname = `/category/${requestCategory}/${requestSlug}`;
      return NextResponse.rewrite(url);
    }
  }

  return res;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/seo/:path*', '/dev/:path*', '/indie-hacking/:path*'],
};
