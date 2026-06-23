import type { Metadata } from "next";
import { ComparisonPage } from "@/components/comparison-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  comparisonFaqSchema,
  comparisonWebPageSchema,
  softwareApplicationSchema,
} from "@/lib/structured-data";

const route = PRODUCT.routes.compareBluebeam;
const jaRoute = `/ja${route}`;

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route,
  title: "AEC 図面比較における REVIFF と Bluebeam Revu",
  description:
    "REVIFF と Bluebeam Revu の Compare Documents ワークフローを、AEC の PDF 図面比較の観点で比較します。位置合わせ、部分位置合わせ、雲マーク、価格、ローカル処理、PDF プラットフォーム全体の機能まで解説します。",
  absoluteTitle: true,
});

export default function JapaneseCompareBluebeamRoute() {
  return (
    <>
      <JsonLd
        data={[
          comparisonWebPageSchema("ja", jaRoute),
          softwareApplicationSchema("ja"),
          comparisonFaqSchema("ja"),
          breadcrumbSchema([
            { name: PRODUCT.name, path: "/ja" },
            { name: "比較", path: `/ja${PRODUCT.routes.compare}` },
            { name: "REVIFF と Bluebeam Revu", path: jaRoute },
          ]),
        ]}
      />
      <ComparisonPage locale="ja" />
    </>
  );
}
