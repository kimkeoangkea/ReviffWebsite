import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "プライバシー",
  description: "REVIFF by AEC DX Labs のプライバシー概要です。",
  alternates: {
    canonical: `/ja${PRODUCT.routes.privacy}`,
    languages: {
      en: PRODUCT.routes.privacy,
      ja: `/ja${PRODUCT.routes.privacy}`,
    },
  },
};

export default function JapanesePrivacyRoute() {
  return <PrivacyPage locale="ja" />;
}
