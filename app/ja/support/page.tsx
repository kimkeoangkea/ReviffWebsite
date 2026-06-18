import type { Metadata } from "next";
import { SupportPage } from "@/components/support-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "サポート",
  description: "REVIFF by AEC DX Labs のサポートとフィードバック導線です。",
  alternates: {
    canonical: `/ja${PRODUCT.routes.support}`,
    languages: {
      en: PRODUCT.routes.support,
      ja: `/ja${PRODUCT.routes.support}`,
    },
  },
};

export default function JapaneseSupportRoute() {
  return <SupportPage locale="ja" />;
}
