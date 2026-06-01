import { NextResponse } from 'next/server';
import { issueToken } from '@/lib/contact-token';
import { isOriginAllowed } from '@/lib/origin-check';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  // Validate origin
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  if (!isOriginAllowed(origin)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { token, expires } = issueToken();
  return NextResponse.json({ token, expires });
}
