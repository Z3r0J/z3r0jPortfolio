import crypto from 'crypto';

const TOKEN_TTL_MS = 10 * 60 * 1000; // 10 minutes
const usedTokens = new Set<string>();

// Cleanup used tokens periodically
function cleanup() {
  if (usedTokens.size > 5000) {
    usedTokens.clear();
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

export function verifyToken(token: string): { valid: boolean; reason?: string } {
  if (!token || typeof token !== 'string') return { valid: false, reason: 'missing' };

  try {
    const decoded = Buffer.from(token, 'base64url').toString('utf8');
    const parts = decoded.split('.');
    if (parts.length !== 3) return { valid: false, reason: 'malformed' };

    const [expiresStr, nonce, providedSig] = parts;
    const payload = `${expiresStr}.${nonce}`;
    const expectedSig = sign(payload, getSecret());

    if (providedSig !== expectedSig) return { valid: false, reason: 'invalid signature' };

    const expires = parseInt(expiresStr, 10);
    if (Number.isNaN(expires) || expires < Date.now()) {
      return { valid: false, reason: 'expired' };
    }

    if (usedTokens.has(nonce)) return { valid: false, reason: 'already used' };

    usedTokens.add(nonce);
    cleanup();
    return { valid: true };
  } catch {
    return { valid: false, reason: 'parse error' };
  }
}
