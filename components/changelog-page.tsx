import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CHANGELOG } from "@/lib/content";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";

export function ChangelogPage({ locale }: { locale: Locale }) {
  return (
    <div className="site-root">
      <SiteHeader locale={locale} currentPath={PRODUCT.routes.changelog} />
      <main id="main-content">
        <div className="section-wrap">
          <Breadcrumbs
            items={[
              { label: PRODUCT.name, href: localizePath(locale, PRODUCT.routes.home) },
              { label: t(locale, { en: "Changelog", ja: "更新履歴" }) },
            ]}
          />
        </div>

        <section className="page-hero">
          <div className="section-wrap">
            <p className="eyebrow">Release Notes</p>
            <h1 className="page-title">{locale === "ja" ? "REVIFF 更新履歴" : "REVIFF changelog"}</h1>
            <p className="hero-lead">
              {locale === "ja"
                ? "REVIFF の公開バージョンと、図面比較ワークフローに関する主な変更点です。"
                : "Version history and launch notes for REVIFF, focused on the drawing comparison workflow."}
            </p>
          </div>
        </section>

        <section className="section">
          <div className="section-wrap">
            {CHANGELOG.map((entry) => (
              <article className="changelog-entry" key={entry.id}>
                <div className="changelog-entry__meta">
                  <span>{entry.date}</span>
                  <span>{t(locale, entry.label)}</span>
                </div>
                <h2>{entry.version}</h2>
                <p className="section-copy">{t(locale, entry.summary)}</p>

                <div className="highlight-grid">
                  {entry.highlights.map((highlight) => (
                    <div className="highlight-card" key={highlight.value.en}>
                      <strong>{t(locale, highlight.value)}</strong>
                      <p className="card-kicker">{t(locale, highlight.label)}</p>
                    </div>
                  ))}
                </div>

                <div className="changelog-sections">
                  {entry.sections.map((section) => (
                    <section className={`changelog-section changelog-section--${section.tone ?? "default"}`} key={section.title.en}>
                      <h3>{t(locale, section.title)}</h3>
                      <ul>
                        {section.items.map((item) => (
                          <li key={item.en}>{t(locale, item)}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
