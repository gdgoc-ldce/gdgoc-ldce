const FALLBACK_BASE_URL = "http://localhost:3000";

function normalizeBase(url: string): string {
  return url.replace(/\/+$/, "");
}

function ensureProtocol(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
}

export function getSiteUrl(): string {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL;

  if (explicitUrl) {
    return normalizeBase(ensureProtocol(explicitUrl));
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return normalizeBase(ensureProtocol(vercelUrl));
  }

  return FALLBACK_BASE_URL;
}

export function absoluteUrl(path: string = "/"): string {
  const base = getSiteUrl();

  if (path === "/" || path.length === 0) {
    return base;
  }

  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
