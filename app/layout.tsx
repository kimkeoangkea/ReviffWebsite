import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import { PRODUCT, SEO } from "@/lib/product";

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
  themeColor: "#f6f5f3",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
