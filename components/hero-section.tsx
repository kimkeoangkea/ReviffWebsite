import Link from "next/link";
import { FileClock } from "lucide-react";
import { ReviffMark } from "@/components/reviff-mark";
import { StoreButton } from "@/components/store-button";
import { HeroMedia } from "@/components/hero-media";
import { HERO_COPY } from "@/lib/content";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";

export function HeroSection({ locale }: { locale: Locale }) {
  const title =
    locale === "ja" ? (
      <>
        見落とさない、
        <br />
        <span className="hero-headline-ja-line">
          <span className="hero-headline-nowrap">
            <span className="hero-headline-char--new">新</span>
            <span className="hero-headline-char--old">旧</span>
          </span>
          図面の比較。
        </span>
      </>
    ) : (
      <>
        Stop hunting for what{" "}
        <span className="hero-headline-emphasis hero-headline-emphasis--plain">
          <span>chang</span>
          <span className="hero-headline-blue">e</span>
          <span className="hero-headline-red">d</span>
        </span>{" "}
        in your drawings.
      </>
    );

  return (
    <section id="hero" className="hero">
      <div className="section-wrap">
        <div className="hero-copy-stack">
          <div className="hero-brand-lockup">
            <span className="hero-brand-lockup__mark">
              <ReviffMark size={128} />
            </span>
            <div className="hero-brand-lockup__meta">
              <span className="hero-brand-lockup__rule" />
              <p className="eyebrow">{t(locale, HERO_COPY.eyebrow)}</p>
            </div>
          </div>

          <h1 className={`hero-title${locale === "ja" ? " hero-title--ja" : ""}`}>{title}</h1>
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
      </div>

      <HeroMedia locale={locale} />
    </section>
  );
}
