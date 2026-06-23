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

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route,
  title: "REVIFF vs Bluebeam Revu for AEC Drawing Comparison",
  description:
    "Compare REVIFF with Bluebeam Revu's Compare Documents workflow for AEC PDF drawings, including alignment, Partial Align, Cloudmarks, pricing, local processing, and broader PDF capabilities.",
  absoluteTitle: true,
});

export default function CompareBluebeamRoute() {
  return (
    <>
      <JsonLd
        data={[
          comparisonWebPageSchema("en", route),
          softwareApplicationSchema("en"),
          comparisonFaqSchema("en"),
          breadcrumbSchema([
            { name: PRODUCT.name, path: PRODUCT.routes.home },
            { name: "Compare", path: PRODUCT.routes.compare },
            { name: "REVIFF vs Bluebeam Revu", path: route },
          ]),
        ]}
      />
      <ComparisonPage locale="en" />
    </>
  );
}
