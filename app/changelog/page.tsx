import type { Metadata } from "next";
import { ChangelogPage } from "@/components/changelog-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route: PRODUCT.routes.changelog,
  title: "REVIFF Changelog",
  description: "Version history and release notes for REVIFF by AEC DX Labs.",
});

export default function ChangelogRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: PRODUCT.routes.home },
          { name: "Changelog", path: PRODUCT.routes.changelog },
        ])}
      />
      <ChangelogPage locale="en" />
    </>
  );
}
