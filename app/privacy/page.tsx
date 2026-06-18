import type { Metadata } from "next";
import { PrivacyPage } from "@/components/privacy-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy summary for REVIFF by AEC DX Labs.",
  alternates: {
    canonical: PRODUCT.routes.privacy,
    languages: {
      en: PRODUCT.routes.privacy,
      ja: `/ja${PRODUCT.routes.privacy}`,
    },
  },
};

export default function PrivacyRoute() {
  return <PrivacyPage locale="en" />;
}
