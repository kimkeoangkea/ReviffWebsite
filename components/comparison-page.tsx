import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreButton } from "@/components/store-button";
import { COMPARISON } from "@/lib/comparison";
import {
  COMPARISON_DECISION,
  COMPARISON_DEFINITION,
  COMPARISON_EVIDENCE,
  COMPARISON_HEADINGS,
  COMPARISON_INTRO,
  COMPARISON_KEY_FACTS,
  COMPARISON_LINKS,
  COMPARISON_METHODOLOGY,
  COMPARISON_QA,
  COMPARISON_TABLE,
} from "@/lib/comparison-content";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";
import { PRODUCT } from "@/lib/product";

/**
 * REVIFF vs Bluebeam Revu comparison page. Fully server-rendered: every claim,
 * the key-facts list, the comparison table, the Q&A, and the methodology are in
 * the initial HTML so they are crawlable and citable without client JS.
 */
export function ComparisonPage({ locale }: { locale: Locale }) {
  const path = PRODUCT.routes.compareBluebeam;

  return (
    <div className="site-root">
      <SiteHeader locale={locale} currentPath={path} />
      <main id="main-content">
        <div className="section-wrap">
          <Breadcrumbs
            items={[
              { label: PRODUCT.name, href: localizePath(locale, PRODUCT.routes.home) },
              { label: t(locale, COMPARISON_INTRO.eyebrow), href: localizePath(locale, PRODUCT.routes.compare) },
              { label: t(locale, COMPARISON_TABLE.colReviff) + " vs Bluebeam Revu" },
            ]}
          />
        </div>

        <section className="page-hero">
          <div className="section-wrap">
            <p className="eyebrow">{t(locale, COMPARISON_INTRO.eyebrow)}</p>
            <h1 className="page-title">{t(locale, COMPARISON_INTRO.title)}</h1>
            <p className="hero-lead">{t(locale, COMPARISON_INTRO.lead)}</p>
          </div>
        </section>

        <section className="section">
          <div className="section-wrap">
            <div className="info-panel">
              <div className="story-body cmp-body">
                {/* What is REVIFF — definition + limitation (§1) */}
                <section aria-labelledby="cmp-what">
                  <h2 id="cmp-what">{t(locale, COMPARISON_DEFINITION.heading)}</h2>
                  <p>{t(locale, COMPARISON_DEFINITION.definition)}</p>
                  <p className="story-callout">{t(locale, COMPARISON_DEFINITION.limitation)}</p>
                </section>

                {/* Key facts (§2) */}
                <section aria-labelledby="cmp-facts">
                  <h2 id="cmp-facts">{t(locale, COMPARISON_HEADINGS.keyFacts)}</h2>
                  <dl className="cmp-facts">
                    {COMPARISON_KEY_FACTS.map((fact) => (
                      <div className="cmp-facts__row" key={fact.term.en}>
                        <dt>{t(locale, fact.term)}</dt>
                        <dd>{t(locale, fact.value)}</dd>
                      </div>
                    ))}
                  </dl>
                </section>

                {/* Comparison table (§4) */}
                <section aria-labelledby="cmp-table">
                  <h2 id="cmp-table">{t(locale, COMPARISON_HEADINGS.table)}</h2>
                  <div className="cmp-table-wrap">
                    <table className="cmp-table">
                      <caption>{t(locale, COMPARISON_TABLE.caption)}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{t(locale, COMPARISON_TABLE.colFeature)}</th>
                          <th scope="col">{t(locale, COMPARISON_TABLE.colReviff)}</th>
                          <th scope="col">{t(locale, COMPARISON_TABLE.colBluebeam)}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {COMPARISON_TABLE.rows.map((row) => (
                          <tr key={row.feature.en}>
                            <th scope="row">{t(locale, row.feature)}</th>
                            <td>{t(locale, row.reviff)}</td>
                            <td>{t(locale, row.bluebeam)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Original product evidence (§12) */}
                <section aria-labelledby="cmp-evidence">
                  <h2 id="cmp-evidence">{t(locale, COMPARISON_HEADINGS.evidence)}</h2>
                  <div className="cmp-evidence">
                    {COMPARISON_EVIDENCE.map((item) => (
                      <figure className="cmp-figure" key={item.videoSrc}>
                        <video
                          className="cmp-figure__video"
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          poster={item.posterSrc}
                          controls={false}
                          disablePictureInPicture
                          tabIndex={-1}
                          aria-label={t(locale, item.alt)}
                        >
                          <source src={item.videoSrc} type="video/mp4" />
                          <source src={item.videoSrcFallback} type="video/mp4" />
                          {/* Fallback for environments without video: the poster still conveys the feature. */}
                          <Image
                            src={item.posterSrc}
                            alt={t(locale, item.alt)}
                            width={640}
                            height={400}
                          />
                        </video>
                        <figcaption>{t(locale, item.caption)}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>

                {/* Answer-first Q&A (§3, §26) */}
                <section aria-labelledby="cmp-qa">
                  <h2 id="cmp-qa">{t(locale, COMPARISON_HEADINGS.qa)}</h2>
                  {COMPARISON_QA.map((item) => (
                    <div className="cmp-qa" key={item.id}>
                      <h3>{t(locale, item.question)}</h3>
                      <p>
                        <strong>{t(locale, item.answer)}</strong>
                      </p>
                      <p>{t(locale, item.detail)}</p>
                    </div>
                  ))}
                </section>

                {/* Decision criteria (§27) */}
                <section aria-labelledby="cmp-decision">
                  <h2 id="cmp-decision">{t(locale, COMPARISON_DECISION.heading)}</h2>
                  <p>{t(locale, COMPARISON_DECISION.reviffFits)}</p>
                  <p>{t(locale, COMPARISON_DECISION.bluebeamFits)}</p>
                  <p>{t(locale, COMPARISON_DECISION.ecosystem)}</p>
                </section>

                {/* Methodology (§11) */}
                <section aria-labelledby="cmp-method">
                  <h2 id="cmp-method">{t(locale, COMPARISON_HEADINGS.methodology)}</h2>
                  <p>{t(locale, COMPARISON_METHODOLOGY.intro)}</p>
                  <dl className="cmp-facts">
                    <div className="cmp-facts__row">
                      <dt>{t(locale, COMPARISON_METHODOLOGY.reviffVersionLabel)}</dt>
                      <dd>{COMPARISON.reviffVersionReviewed}</dd>
                    </div>
                    <div className="cmp-facts__row">
                      <dt>{t(locale, COMPARISON_METHODOLOGY.bluebeamScopeLabel)}</dt>
                      <dd>{t(locale, COMPARISON.bluebeamScope)}</dd>
                    </div>
                    <div className="cmp-facts__row">
                      <dt>{t(locale, COMPARISON_METHODOLOGY.basisLabel)}</dt>
                      <dd>{t(locale, COMPARISON.basis)}</dd>
                    </div>
                    <div className="cmp-facts__row">
                      <dt>{t(locale, COMPARISON_METHODOLOGY.lastVerifiedLabel)}</dt>
                      <dd>
                        <time dateTime={COMPARISON.lastVerifiedDate}>{COMPARISON.lastVerifiedDate}</time>
                      </dd>
                    </div>
                    <div className="cmp-facts__row">
                      <dt>{t(locale, COMPARISON_METHODOLOGY.unverifiedLabel)}</dt>
                      <dd>{t(locale, COMPARISON_METHODOLOGY.unverified)}</dd>
                    </div>
                  </dl>
                  <p>{t(locale, COMPARISON_METHODOLOGY.affiliation)}</p>
                </section>

                {/* Sources (§10) */}
                <section aria-labelledby="cmp-sources">
                  <h2 id="cmp-sources">{t(locale, COMPARISON_HEADINGS.sources)}</h2>
                  <ol className="cmp-sources">
                    {COMPARISON.sources.map((source) => (
                      <li key={source.url}>
                        <a className="story-link" href={source.url} target="_blank" rel="noreferrer">
                          {t(locale, source.title)}
                          <ArrowUpRight size={14} strokeWidth={2.2} />
                        </a>
                        <span className="cmp-sources__meta">
                          {source.publisher} · {t(locale, source.covers)} ·{" "}
                          {locale === "ja" ? "確認日 " : "Accessed "}
                          <time dateTime={source.accessed}>{source.accessed}</time>
                        </span>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Internal links + CTA (§13) */}
                <section aria-labelledby="cmp-next" className="cmp-actions">
                  <h2 id="cmp-next" className="sr-only-heading">
                    {locale === "ja" ? "次のステップ" : "Next steps"}
                  </h2>
                  <div className="story-links">
                    <Link className="story-link" href={`${localizePath(locale, PRODUCT.routes.home)}#workflow`}>
                      {t(locale, COMPARISON_LINKS.exploreFeatures.label)}
                      <ArrowUpRight size={14} strokeWidth={2.2} />
                    </Link>
                  </div>
                  <StoreButton locale={locale} label={COMPARISON_LINKS.install.label} />
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
