import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { SEO } from "@/lib/product";

export const metadata: Metadata = {
  title: SEO.title.en,
  description: SEO.description.en,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ja: "/ja",
    },
  },
};

export default function Home() {
  return <LandingPage locale="en" />;
}
