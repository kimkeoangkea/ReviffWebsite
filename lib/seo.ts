import type { Metadata } from "next";
import type { Locale } from "@/lib/locale";
import { PRODUCT } from "@/lib/product";

/** Map a route to its localized path (e.g. "/download" -> "/ja/download" for ja). */
export function localizedRoute(locale: Locale, route: string): string {
  const ja = route === "/" ? "/ja" : `/ja${route}`;
  return locale === "en" ? route : ja;
}

interface PageMetadataInput {
  locale: Locale;
  /** Canonical EN route, e.g. "/" or "/download". */
  route: string;
  title: string;
  description: string;
  /** Set true when `title` already contains the brand, to bypass the "%s | REVIFF" template. */
  absoluteTitle?: boolean;
}

/**
 * Build per-page Metadata with canonical, en/ja/x-default hreflang, and
 * localized Open Graph. Open Graph images are injected automatically by the
 * file-based app/opengraph-image route, so they are intentionally omitted here.
 */
export function buildPageMetadata({
  locale,
  route,
  title,
  description,
  absoluteTitle,
}: PageMetadataInput): Metadata {
  const en = route;
  const ja = route === "/" ? "/ja" : `/ja${route}`;
  const canonical = locale === "en" ? en : ja;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages: {
        en,
        ja,
        "x-default": en,
      },
    },
    openGraph: {
      type: "website",
      siteName: PRODUCT.name,
      url: `${PRODUCT.siteUrl}${canonical}`,
      title,
      description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}
