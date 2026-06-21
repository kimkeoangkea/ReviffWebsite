import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/structured-data";

const title = "Install REVIFF from Microsoft Store";
const description =
  "Install REVIFF from Microsoft Store. Compare revised PDF drawing sets and supported image files locally on Windows.";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  route: PRODUCT.routes.download,
  title,
  description,
});

export default function DownloadRoute() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema("en"),
          breadcrumbSchema([
            { name: PRODUCT.name, path: PRODUCT.routes.home },
            { name: "Download", path: PRODUCT.routes.download },
          ]),
        ]}
      />
      <DownloadPage locale="en" />
    </>
  );
}
