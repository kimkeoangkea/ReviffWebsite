import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { StaticPageShell } from "@/components/static-page-shell";
import { COMPARE_HUB } from "@/lib/comparison-content";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";
import { PRODUCT } from "@/lib/product";

/**
 * /compare hub. Explains the purpose of REVIFF comparisons and links to the
 * Bluebeam Revu comparison. No empty cards for future (Adobe/Diffchecker) pages.
 */
export function ComparisonHub({ locale }: { locale: Locale }) {
  return (
    <StaticPageShell
      locale={locale}
      path={PRODUCT.routes.compare}
      eyebrow={t(locale, COMPARE_HUB.eyebrow)}
      title={t(locale, COMPARE_HUB.title)}
      lead={t(locale, COMPARE_HUB.lead)}
    >
      <div className="story-body">
        <Link
          className="cmp-hub-card focus-ring"
          href={localizePath(locale, PRODUCT.routes.compareBluebeam)}
        >
          <h2>{t(locale, COMPARE_HUB.cardTitle)}</h2>
          <p>{t(locale, COMPARE_HUB.cardBody)}</p>
          <span className="story-link">
            {t(locale, COMPARE_HUB.cardCta)}
            <ArrowUpRight size={14} strokeWidth={2.2} />
          </span>
        </Link>
      </div>
    </StaticPageShell>
  );
}
