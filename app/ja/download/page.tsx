import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { JsonLd } from "@/components/json-ld";
import { PRODUCT } from "@/lib/product";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, softwareApplicationSchema } from "@/lib/structured-data";

const title = "Microsoft Store から REVIFF をインストール";
const description =
  "REVIFF を Microsoft Store からインストール。改訂 PDF 図面セットと対応画像ファイルを Windows PC 上でローカル比較します。";

export const metadata: Metadata = buildPageMetadata({
  locale: "ja",
  route: PRODUCT.routes.download,
  title,
  description,
});

export default function JapaneseDownloadRoute() {
  return (
    <>
      <JsonLd
        data={[
          softwareApplicationSchema("ja"),
          breadcrumbSchema([
            { name: PRODUCT.name, path: "/ja" },
            { name: "ダウンロード", path: `/ja${PRODUCT.routes.download}` },
          ]),
        ]}
      />
      <DownloadPage locale="ja" />
    </>
  );
}
