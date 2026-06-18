import type { MetadataRoute } from "next";
import { PRODUCT } from "@/lib/product";

const routes = [
  PRODUCT.routes.home,
  PRODUCT.routes.download,
  PRODUCT.routes.changelog,
  PRODUCT.routes.privacy,
  PRODUCT.routes.support,
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const path = route === "/" ? "" : route;
    const jaPath = route === "/" ? "/ja" : `/ja${route}`;

    return [
      {
        url: `${PRODUCT.siteUrl}${path}`,
        lastModified: new Date(PRODUCT.releaseDate),
        changeFrequency: "weekly",
        priority: route === "/" ? 1 : 0.7,
        alternates: {
          languages: {
            en: `${PRODUCT.siteUrl}${path}`,
            ja: `${PRODUCT.siteUrl}${jaPath}`,
          },
        },
      },
      {
        url: `${PRODUCT.siteUrl}${jaPath}`,
        lastModified: new Date(PRODUCT.releaseDate),
        changeFrequency: "weekly",
        priority: route === "/" ? 0.9 : 0.6,
        alternates: {
          languages: {
            en: `${PRODUCT.siteUrl}${path}`,
            ja: `${PRODUCT.siteUrl}${jaPath}`,
          },
        },
      },
    ];
  });
}
