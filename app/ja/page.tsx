import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { SEO } from "@/lib/product";

export const metadata: Metadata = {
  title: SEO.title.ja,
  description: SEO.description.ja,
  alternates: {
    canonical: "/ja",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
};

export default function JapaneseHome() {
  return <LandingPage locale="ja" />;
}
