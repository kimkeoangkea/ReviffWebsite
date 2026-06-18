import type { Metadata } from "next";
import { DownloadPage } from "@/components/download-page";
import { PRODUCT } from "@/lib/product";

export const metadata: Metadata = {
  title: "Microsoft Store から REVIFF をインストール",
  description:
    "REVIFF を Microsoft Store からインストール。改訂 PDF 図面セットと対応画像ファイルを Windows PC 上でローカル比較します。",
  alternates: {
    canonical: `/ja${PRODUCT.routes.download}`,
    languages: {
      en: PRODUCT.routes.download,
      ja: `/ja${PRODUCT.routes.download}`,
    },
  },
};

export default function JapaneseDownloadRoute() {
  return <DownloadPage locale="ja" />;
}
