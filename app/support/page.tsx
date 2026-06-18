import type { Metadata } from "next";
import { SupportPage } from "@/components/support-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "Support",
  description: "Support and feedback paths for REVIFF by AEC DX Labs.",
  alternates: {
    canonical: PRODUCT.routes.support,
    languages: {
      en: PRODUCT.routes.support,
      ja: `/ja${PRODUCT.routes.support}`,
    },
  },
};

export default function SupportRoute() {
  return <SupportPage locale="en" />;
}
