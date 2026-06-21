import type { Metadata } from "next";
import { SupportPage } from "@/components/support-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route: PRODUCT.routes.support,
  title: "サポート",
  description: "REVIFF by AEC DX Labs のサポートとフィードバック導線です。",
});

export default function JapaneseSupportRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: "/ja" },
          { name: "サポート", path: `/ja${PRODUCT.routes.support}` },
        ])}
      />
      <SupportPage locale="ja" />
    </>
  );
}
