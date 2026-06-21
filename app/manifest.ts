import type { MetadataRoute } from "next";
import { PRODUCT, SEO } from "@/lib/product";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PRODUCT.name} by ${PRODUCT.publisher}`,
    short_name: PRODUCT.name,
    description: SEO.description.en,
    start_url: "/",
    display: "browser",
    lang: "en",
    background_color: "#f6f5f3",
    theme_color: "#0b0f15",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
      },
      {
        src: "/apple-icon",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  };
}
