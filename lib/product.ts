import type { LocalizedText } from "@/lib/locale";

const siteUrl = "https://reviff.com";

export const PRODUCT = {
  name: "REVIFF",
  publisher: "AEC DX Labs",
  version: "1.0.0.0",
  siteUrl,
  releaseDate: "2026-06-18",
  storeAvailable: false,
  storeUrl:
    process.env.NEXT_PUBLIC_MICROSOFT_STORE_URL ??
    "https://apps.microsoft.com/detail/9NP4KTH0HHHJ",
  feedbackUrl:
    process.env.NEXT_PUBLIC_FEEDBACK_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLSeMMP2qF1hmb0sEt3IOFetuyUciCNjrxQSjEx4Nt_4449Dw2g/viewform?usp=dialog",
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
    en: "A 100% local PDF comparison tool for architectural drawing sets. Free on Microsoft Store with no signup, no subscription, no premium feature locked, and no watermark.",
    ja: "建築図面向けの 100% ローカル PDF 比較ツールです。Microsoft Store で無料。サインアップ不要、サブスク不要、プレミアム機能ロックなし、透かしなし。",
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
  { id: "why-free", label: { en: "Why Free", ja: "無料の理由" }, href: "/#why-its-free" },
  { id: "changelog", label: { en: "Changelog", ja: "更新履歴" }, href: PRODUCT.routes.changelog },
  { id: "support", label: { en: "Support", ja: "サポート" }, href: PRODUCT.routes.support },
  { id: "privacy", label: { en: "Privacy", ja: "プライバシー" }, href: PRODUCT.routes.privacy },
];
