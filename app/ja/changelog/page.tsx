import type { Metadata } from "next";
import { ChangelogPage } from "@/components/changelog-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "REVIFF 更新履歴",
  description: "REVIFF by AEC DX Labs のバージョン履歴とリリースノートです。",
  alternates: {
    canonical: `/ja${PRODUCT.routes.changelog}`,
    languages: {
      en: PRODUCT.routes.changelog,
      ja: `/ja${PRODUCT.routes.changelog}`,
    },
  },
};

export default function JapaneseChangelogRoute() {
  return <ChangelogPage locale="ja" />;
}
