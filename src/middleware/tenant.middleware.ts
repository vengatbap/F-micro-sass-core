import { NextRequest, NextResponse } from 'next/server';

export function tenantMiddleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const tenantSlug = hostname.split('.')[0];
  const response = NextResponse.next();
  response.headers.set('x-tenant-id', tenantSlug);
  return response;
}

