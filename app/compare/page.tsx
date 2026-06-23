import type { Metadata } from "next";
import { ComparisonHub } from "@/components/comparison-hub";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route: PRODUCT.routes.compare,
  title: "Compare REVIFF",
  description:
    "How REVIFF's free, local AEC drawing-comparison workflow compares with broader PDF tools, starting with REVIFF vs Bluebeam Revu.",
});

export default function CompareHubRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: PRODUCT.routes.home },
          { name: "Compare", path: PRODUCT.routes.compare },
        ])}
      />
      <ComparisonHub locale="en" />
    </>
  );
}
