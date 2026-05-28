import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';
import { verifyToken } from '@/lib/contact-token';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  honeypot?: string;
  token?: string;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real;
  return 'unknown';
}

export async function POST(request: Request) {
  // 1. Validate Content-Type
  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Invalid content type' }, { status: 400 });
  }

  // 2. Validate Origin
  const origin = request.headers.get('origin') || request.headers.get('referer') || '';
  const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);
  const isAllowed = allowed.some(o => origin.startsWith(o));
  if (!isAllowed) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // 3. Rate limit by IP
  const ip = getClientIp(request);
  const limit = rateLimit(ip);
  if (!limit.ok) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter ?? 600) } }
    );
  }

  // 4. Parse body
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // 5. Honeypot check
  if (body.honeypot && body.honeypot.trim() !== '') {
    // Silent reject — pretend success to confuse bots
    return NextResponse.json({ ok: true });
  }

  // 6. Token verification
  const tokenCheck = verifyToken(body.token || '');
  if (!tokenCheck.valid) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  // 7. Input validation
  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const message = (body.message || '').trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: 'Invalid name' }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email) || email.length > 200) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json({ error: 'Invalid message' }, { status: 400 });
  }

  // 8. Send email via Resend
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  // Escape HTML to prevent injection in the email itself
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  try {
    const result = await resend.emails.send({
      from: `Portfolio Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New message from ${name} (Portfolio)`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #60a5fa;">New Contact Form Submission</h2>
          <p><strong>From:</strong> ${escape(name)} &lt;${escape(email)}&gt;</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escape(message)}</div>
          <hr style="margin-top: 24px; border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #666;">Sent from your portfolio contact form.</p>
        </div>
      `,
      text: `New contact form submission\n\nFrom: ${name} <${email}>\n\nMessage:\n${message}`,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
