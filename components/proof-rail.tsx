import { METRICS } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function ProofRail({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="section-wrap">
        <p className="section-label">{locale === "ja" ? "Proof" : "Proof"}</p>
        <h2 className="section-title">
          {locale === "ja" ? "導入前に伝わる、REVIFF の基本。" : "The REVIFF basics before teams install."}
        </h2>
        <div className="metric-grid">
          {METRICS.map((metric) => (
            <article className="metric-card" key={metric.id}>
              <div className="metric-card__value">{t(locale, metric.value)}</div>
              <div className="card-kicker">{t(locale, metric.label)}</div>
              <p className="card-body">{t(locale, metric.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
