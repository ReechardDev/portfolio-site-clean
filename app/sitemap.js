// app/sitemap.js
export default function sitemap() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
  const base = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  const pages = ["", "/about", "/work", "/services", "/resources", "/articles", "/contact"];
  return pages.map((p) => ({
    url: `${base}${p || "/"}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
