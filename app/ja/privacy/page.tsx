import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route: PRODUCT.routes.privacy,
  title: "プライバシー",
  description: "REVIFF by AEC DX Labs のプライバシー概要です。",
});

export default function JapanesePrivacyRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: "/ja" },
          { name: "プライバシー", path: `/ja${PRODUCT.routes.privacy}` },
        ])}
      />
      <PrivacyPage locale="ja" />
    </>
  );
}
