@'
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

function computeBase() {
  // Prefer explicit site URL, else Vercel URL, else localhost
  let raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.VERCEL_URL || "http://localhost:3000";
  // Ensure protocol so new URL(...) never throws
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  try { return new URL(raw); } catch { return new URL("http://localhost:3000"); }
}

export const metadata = {
  metadataBase: computeBase(),
  title: "Inemesit David – Web Designer/Dev & Digital Marketing",
  description:
    "Portfolio of web design/development and digital marketing work: Next.js, Tailwind, GA4, Canva systems, and growth ops.",
  openGraph: {
    title: "Inemesit David – Web Designer/Dev & Digital Marketing",
    description:
      "Next.js + Tailwind builds, GA4 setup, clean UX, and conversion-focused websites.",
    url: "/",
    siteName: "Inemesit David",
    images: ["/og.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Inemesit David – Web Designer/Dev & Digital Marketing",
    description:
      "Next.js + Tailwind builds, GA4 setup, clean UX, and conversion-focused websites.",
    images: ["/og.png"]
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-gray-900">
        <div className="relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-heroTint/40 to-transparent" />
          <div className="relative">
            {children}
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
'@ | Set-Content -Encoding UTF8 -NoNewline .\app\layout.js
