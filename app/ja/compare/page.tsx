import type { Metadata } from "next";
import { ComparisonHub } from "@/components/comparison-hub";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route: PRODUCT.routes.compare,
  title: "REVIFF の比較",
  description:
    "REVIFF の無料・ローカルな AEC 図面比較ワークフローを、より広範な PDF ツールと比較します。まずは REVIFF と Bluebeam Revu の比較から。",
});

export default function JapaneseCompareHubRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: "/ja" },
          { name: "比較", path: `/ja${PRODUCT.routes.compare}` },
        ])}
      />
      <ComparisonHub locale="ja" />
    </>
  );
}
