import type { Metadata } from "next";
import { ChangelogPage } from "@/components/changelog-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route: PRODUCT.routes.changelog,
  title: "REVIFF 更新履歴",
  description: "REVIFF by AEC DX Labs のバージョン履歴とリリースノートです。",
});

export default function JapaneseChangelogRoute() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: PRODUCT.name, path: "/ja" },
          { name: "更新履歴", path: `/ja${PRODUCT.routes.changelog}` },
        ])}
      />
      <ChangelogPage locale="ja" />
    </>
  );
}
