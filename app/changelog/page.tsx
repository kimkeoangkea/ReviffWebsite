import type { Metadata } from "next";
import { ChangelogPage } from "@/components/changelog-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "REVIFF Changelog",
  description: "Version history and release notes for REVIFF by AEC DX Labs.",
  alternates: {
    canonical: PRODUCT.routes.changelog,
    languages: {
      en: PRODUCT.routes.changelog,
      ja: `/ja${PRODUCT.routes.changelog}`,
    },
  },
};

export default function ChangelogRoute() {
  return <ChangelogPage locale="en" />;
}
