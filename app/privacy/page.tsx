import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route: PRODUCT.routes.privacy,
  title: "Privacy",
  description: "Privacy summary for REVIFF by AEC DX Labs.",
});

export default function PrivacyRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: PRODUCT.routes.home },
          { name: "Privacy", path: PRODUCT.routes.privacy },
        ])}
      />
      <PrivacyPage locale="en" />
    </>
  );
}
