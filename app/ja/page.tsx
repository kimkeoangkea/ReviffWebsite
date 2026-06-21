import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { JsonLd } from "@/components/json-ld";
import { SEO } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { faqSchema, softwareApplicationSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route: "/",
  title: SEO.title.ja,
  description: SEO.description.ja,
  absoluteTitle: true,
});

export default function JapaneseHome() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema("ja"), faqSchema("ja")]} />
      <LandingPage locale="ja" />
    </>
  );
}
