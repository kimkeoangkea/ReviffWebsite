import type { MetadataRoute } from "next";
import { COMPARISON } from "@/lib/comparison";
import { PRODUCT } from "@/lib/product";

// Each route carries its own lastmod so dates reflect real content changes,
// not the build time. Comparison pages use the human-maintained verification
// date from COMPARISON; product pages use the release date.
const routes: { path: string; lastmod: string; priority: number }[] = [
  { path: PRODUCT.routes.home, lastmod: PRODUCT.releaseDate, priority: 1 },
  { path: PRODUCT.routes.download, lastmod: PRODUCT.releaseDate, priority: 0.7 },
  { path: PRODUCT.routes.changelog, lastmod: PRODUCT.releaseDate, priority: 0.7 },
  { path: PRODUCT.routes.privacy, lastmod: PRODUCT.releaseDate, priority: 0.7 },
  { path: PRODUCT.routes.support, lastmod: PRODUCT.releaseDate, priority: 0.7 },
  { path: PRODUCT.routes.compare, lastmod: COMPARISON.lastVerifiedDate, priority: 0.7 },
  { path: PRODUCT.routes.compareBluebeam, lastmod: COMPARISON.lastVerifiedDate, priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path: route, lastmod, priority }) => {
    const path = route === "/" ? "" : route;
    const jaPath = route === "/" ? "/ja" : `/ja${route}`;
    const lastModified = new Date(lastmod);
    const languages = {
      en: `${PRODUCT.siteUrl}${path}`,
      ja: `${PRODUCT.siteUrl}${jaPath}`,
      "x-default": `${PRODUCT.siteUrl}${path}`,
    };

    return [
      {
        url: `${PRODUCT.siteUrl}${path}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority,
        alternates: { languages },
      },
      {
        url: `${PRODUCT.siteUrl}${jaPath}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: route === "/" ? 0.9 : priority - 0.1,
        alternates: { languages },
      },
    ];
  });
}
