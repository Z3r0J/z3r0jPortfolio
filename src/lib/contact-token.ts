import crypto from 'crypto';

const TOKEN_TTL_MS = 10 * 60 * 1000; // 10 minutes

// Maps used nonce -> expiry timestamp. Entries removed only when expired.
const usedTokens = new Map<string, number>();
const USED_CLEANUP_THRESHOLD = 5000;

function cleanup() {
  if (usedTokens.size <= USED_CLEANUP_THRESHOLD) return;
  const now = Date.now();
  for (const [nonce, expiry] of usedTokens.entries()) {
    if (expiry < now) usedTokens.delete(nonce);
  }
}

function getSecret(): string {
  const secret = process.env.CONTACT_TOKEN_SECRET;
  if (!secret) throw new Error('CONTACT_TOKEN_SECRET not configured');
  return secret;
}

function sign(payload: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(payload).digest('hex');
}

export function issueToken(): { token: string; expires: number } {
  const secret = getSecret();
  const expires = Date.now() + TOKEN_TTL_MS;
  const nonce = crypto.randomBytes(16).toString('hex');
  const payload = `${expires}.${nonce}`;
  const signature = sign(payload, secret);
  const token = Buffer.from(`${payload}.${signature}`).toString('base64url');
  return { token, expires };
}

export function verifyToken(token: string): { valid: boolean; reason?: string; nonce?: string } {
  if (!token || typeof token !== 'string') return { valid: false, reason: 'missing' };

  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf8');
    const parts = decoded.split('.');
    if (parts.length !== 3) return { valid: false, reason: 'malformed' };

    const [expiresStr, nonce, providedSig] = parts;
    const payload = `${expiresStr}.${nonce}`;
    const expectedSig = sign(payload, getSecret());

    // Constant-time signature comparison
    const sigBuf = Buffer.from(providedSig);
    const expBuf = Buffer.from(expectedSig);
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
      return { valid: false, reason: 'invalid signature' };
    }

    const expires = parseInt(expiresStr, 10);
    if (Number.isNaN(expires) || expires < Date.now()) {
      return { valid: false, reason: 'expired' };
    }

    if (usedTokens.has(nonce)) return { valid: false, reason: 'already used' };

    return { valid: true, nonce };
  } catch {
    return { valid: false, reason: 'parse error' };
  }
}

/** Marks a nonce as used. Call ONLY after the submission is fully accepted. */
export function consumeToken(nonce: string): void {
  const expires = Date.now() + TOKEN_TTL_MS;
  usedTokens.set(nonce, expires);
  cleanup();
}
