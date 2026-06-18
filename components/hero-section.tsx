import Link from "next/link";
import { FileClock } from "lucide-react";
import { StoreButton } from "@/components/store-button";
import { HeroMedia } from "@/components/hero-media";
import { HERO_COPY } from "@/lib/content";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="hero">
      <div className="section-wrap hero-grid">
        <div>
          <p className="eyebrow">{t(locale, HERO_COPY.eyebrow)}</p>
          <h1 className="hero-title">
            {locale === "ja" ? (
              t(locale, HERO_COPY.title)
            ) : (
              <>
                Stop hunting for what{" "}
                <span className="hero-headline-emphasis">
                  <span>chang</span>
                  <span className="hero-headline-blue">e</span>
                  <span className="hero-headline-red">d</span>
                </span>{" "}
                in your drawings.
              </>
            )}
          </h1>
          <p className="hero-lead">{t(locale, HERO_COPY.body)}</p>

          <div className="cta-row">
            <StoreButton locale={locale} label={HERO_COPY.primaryCta} hint={HERO_COPY.primaryHint} />
            <Link className="focus-ring btn-secondary" href={localizePath(locale, PRODUCT.routes.changelog)}>
              <FileClock size={17} strokeWidth={2} />
              {t(locale, HERO_COPY.secondaryCta)}
            </Link>
          </div>

          <p className="hero-specs">{HERO_COPY.specs.map((spec) => t(locale, spec)).join(" · ")}</p>
        </div>

        <HeroMedia locale={locale} />
      </div>
    </section>
  );
}
