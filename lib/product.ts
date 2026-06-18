import type { LocalizedText } from "@/lib/locale";

const siteUrl = "https://reviff.com";

export const PRODUCT = {
  name: "REVIFF",
  publisher: "AEC DX Labs",
  version: "1.0.0.0",
  siteUrl,
  releaseDate: "2026-06-18",
  storeUrl:
    process.env.NEXT_PUBLIC_MICROSOFT_STORE_URL ??
    "https://apps.microsoft.com/detail/9NXXXXXXXXXX",
  feedbackUrl: process.env.NEXT_PUBLIC_FEEDBACK_URL ?? "https://forms.office.com/",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "hello@aecdxlabs.com",
  routes: {
    home: "/",
    download: "/download",
    changelog: "/changelog",
    privacy: "/privacy",
    support: "/support",
  },
  requirements: {
    system: {
      en: "Windows 10 version 1809 or newer, 64-bit",
      ja: "Windows 10 version 1809 以降、64-bit",
    },
    processor: {
      en: "CPU optimized. No dedicated graphics hardware required.",
      ja: "CPU 最適化。専用 GPU は不要です。",
    },
    formats: {
      en: "PDF plus PNG, JPG, JPEG, BMP, GIF, TIF, and TIFF images",
      ja: "PDF、PNG、JPG、JPEG、BMP、GIF、TIF、TIFF 画像",
    },
  },
} as const;

export const SEO = {
  title: {
    en: "REVIFF by AEC DX Labs | Local PDF and Drawing Comparison",
    ja: "REVIFF by AEC DX Labs | ローカル PDF・図面比較ツール",
  },
  description: {
    en: "REVIFF compares revised PDF drawing sets and supported image files locally on Windows. No cloud upload. Microsoft Store install. Free during the v1 launch.",
    ja: "REVIFF は、改訂 PDF 図面セットと対応画像ファイルを Windows PC 上でローカル比較します。クラウドアップロード不要。Microsoft Store からインストール。v1 ローンチ期間中は無料です。",
  },
  keywords: [
    "REVIFF",
    "offline PDF comparison",
    "architectural drawing review",
    "local PDF diff",
    "drawing comparison app",
    "Microsoft Store PDF comparison",
    "AEC workflow tool",
  ],
} as const;

export interface NavItem {
  id: string;
  label: LocalizedText;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "download", label: { en: "Download", ja: "ダウンロード" }, href: PRODUCT.routes.download },
  { id: "changelog", label: { en: "Changelog", ja: "更新履歴" }, href: PRODUCT.routes.changelog },
  { id: "support", label: { en: "Support", ja: "サポート" }, href: PRODUCT.routes.support },
  { id: "privacy", label: { en: "Privacy", ja: "プライバシー" }, href: PRODUCT.routes.privacy },
];
