import type { Metadata } from "next";
import { SupportPage } from "@/components/support-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route: PRODUCT.routes.support,
  title: "Support",
  description: "Support and feedback paths for REVIFF by AEC DX Labs.",
});

export default function SupportRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: PRODUCT.routes.home },
          { name: "Support", path: PRODUCT.routes.support },
        ])}
      />
      <SupportPage locale="en" />
    </>
  );
}
