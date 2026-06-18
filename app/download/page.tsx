import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "Install REVIFF from Microsoft Store",
  description:
    "Install REVIFF from Microsoft Store. Compare revised PDF drawing sets and supported image files locally on Windows.",
  alternates: {
    canonical: PRODUCT.routes.download,
    languages: {
      en: PRODUCT.routes.download,
      ja: `/ja${PRODUCT.routes.download}`,
    },
  },
};

export default function DownloadRoute() {
  return <DownloadPage locale="en" />;
}
