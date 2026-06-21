import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Noto_Sans_JP, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import { PRODUCT, SEO } from "@/lib/product";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCT.siteUrl),
  title: {
    default: SEO.title.en,
    template: `%s | ${PRODUCT.name}`,
  },
  description: SEO.description.en,
  keywords: [...SEO.keywords],
  applicationName: PRODUCT.name,
  authors: [{ name: PRODUCT.publisher }],
  creator: PRODUCT.publisher,
  publisher: PRODUCT.publisher,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
  openGraph: {
    type: "website",
    siteName: PRODUCT.name,
    url: PRODUCT.siteUrl,
    title: SEO.title.en,
    description: SEO.description.en,
    images: [
      {
        url: "/og/reviff-og.svg",
        width: 1200,
        height: 630,
        alt: "REVIFF by AEC DX Labs product preview",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f15" },
  ],
};

const themeInitScript = `(function(){try{var s=localStorage.getItem('reviff-theme');var t=s==='light'||s==='dark'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} ${notoSansJp.variable}`}>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YV1LWREYY5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YV1LWREYY5');
          `}
        </Script>
      </body>
    </html>
  );
}
