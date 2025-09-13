// app/robots.js
export default function robots() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
  const base = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
