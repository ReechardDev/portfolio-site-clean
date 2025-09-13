// app/layout.js
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

function computeBase() {
  // Prefer explicit site URL (env), else Vercel URL, else localhost
  let raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_URL ||
    "http://localhost:3000";

  // Ensure protocol so new URL(...) never throws (VERCEL_URL has no protocol)
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;

  try {
    return new URL(raw);
  } catch {
    return new URL("http://localhost:3000");
  }
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
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inemesit David – Web Designer/Dev & Digital Marketing",
    description:
      "Next.js + Tailwind builds, GA4 setup, clean UX, and conversion-focused websites.",
    images: ["/og.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-gray-900">
        {/* Optional GA4 (only renders if NEXT_PUBLIC_GA_ID is set) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        )}

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
