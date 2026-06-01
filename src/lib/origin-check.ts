/**
 * Validates a request's Origin/Referer header against an allowlist
 * using exact origin comparison (not prefix matching).
 */
export function isOriginAllowed(headerValue: string): boolean {
  if (!headerValue) return false;

  const allowed = (process.env.CONTACT_ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  let requestOrigin: string;
  try {
    // URL() parses both an Origin (http://host:port) and a Referer (full URL)
    requestOrigin = new URL(headerValue).origin;
  } catch {
    return false;
  }

  return allowed.some((o) => {
    try {
      return new URL(o).origin === requestOrigin;
    } catch {
      return false;
    }
  });
}
