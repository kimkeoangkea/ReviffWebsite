import { FAQ } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";
import { PRODUCT, SEO } from "@/lib/product";

const ORG_ID = `${PRODUCT.siteUrl}/#organization`;
const WEBSITE_ID = `${PRODUCT.siteUrl}/#website`;

type Schema = Record<string, unknown>;

/** Publisher organization (AEC DX Labs). Site-wide. */
export function organizationSchema(): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: PRODUCT.publisher,
    url: PRODUCT.siteUrl,
    logo: `${PRODUCT.siteUrl}/icon.svg`,
    email: PRODUCT.supportEmail,
    ...(PRODUCT.sameAs.length > 0 ? { sameAs: [...PRODUCT.sameAs] } : {}),
  };
}

/** The website itself. Site-wide. */
export function websiteSchema(locale: Locale): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: PRODUCT.name,
    url: PRODUCT.siteUrl,
    inLanguage: locale === "ja" ? "ja-JP" : "en-US",
    publisher: { "@id": ORG_ID },
  };
}

/** The REVIFF desktop app. Home + download pages. */
export function softwareApplicationSchema(locale: Locale): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: PRODUCT.name,
    description: SEO.description[locale],
    applicationCategory: "DesignApplication",
    operatingSystem: "Windows 10, Windows 11",
    softwareVersion: PRODUCT.version,
    datePublished: PRODUCT.releaseDate,
    inLanguage: locale === "ja" ? "ja-JP" : "en-US",
    url: PRODUCT.siteUrl,
    downloadUrl: PRODUCT.storeUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      t(locale, { en: "Split mode comparison", ja: "分割モード比較" }),
      t(locale, { en: "Diff mode highlighting", ja: "差分モードのハイライト" }),
      t(locale, { en: "Cloud Marks auto-detection", ja: "雲マーク自動検出" }),
      t(locale, { en: "Auto-align and partial align", ja: "自動位置合わせ・部分位置合わせ" }),
      t(locale, { en: "100% local, offline processing", ja: "100% ローカル・オフライン処理" }),
    ],
    publisher: { "@id": ORG_ID },
  };
}

/** FAQ page schema built from the shared FAQ content. Home pages. */
export function faqSchema(locale: Locale): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "ja" ? "ja-JP" : "en-US",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: t(locale, item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(locale, item.answer),
      },
    })),
  };
}

export interface BreadcrumbEntry {
  name: string;
  /** Path relative to site root, e.g. "/download". */
  path: string;
}

/** Breadcrumb trail for static pages. */
export function breadcrumbSchema(entries: BreadcrumbEntry[]): Schema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: `${PRODUCT.siteUrl}${entry.path}`,
    })),
  };
}
