import { NextResponse } from 'next/server';
import { issueToken } from '@/lib/contact-token';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  // Validate origin
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);

  const isAllowed = allowed.some(o => origin.startsWith(o));
  if (!isAllowed) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { token, expires } = issueToken();
  return NextResponse.json({ token, expires });
}
