type Bucket = { count: number; resetAt: number };
const store = new Map<string, Bucket>();

const MAX_REQUESTS = 3;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const CLEANUP_THRESHOLD = 1000;

function cleanup(now: number) {
  for (const [key, bucket] of store.entries()) {
    if (bucket.resetAt < now) store.delete(key);
  }
}

export function rateLimit(ip: string): { ok: boolean; retryAfter?: number } {
  const now = Date.now();

  // Opportunistic cleanup when the map grows large
  if (store.size > CLEANUP_THRESHOLD) cleanup(now);

  const bucket = store.get(ip);

  if (!bucket || bucket.resetAt < now) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { ok: true };
}
