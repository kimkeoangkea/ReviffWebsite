import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { JsonLd } from "@/components/json-ld";
import { SEO } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { faqSchema, softwareApplicationSchema } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route: "/",
  title: SEO.title.en,
  description: SEO.description.en,
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema("en"), faqSchema("en")]} />
      <LandingPage locale="en" />
    </>
  );
}
