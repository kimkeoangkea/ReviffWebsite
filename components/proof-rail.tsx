import { FAQ, METRICS } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function ProofRail({ locale }: { locale: Locale }) {
  const quickFaq = FAQ.slice(0, 3);

  return (
    <section className="section quick-answers">
      <div className="section-wrap">
        <p className="section-label">{locale === "ja" ? "Quick Answers" : "Quick Answers"}</p>
        <h2 className="section-title">
          {locale === "ja" ? "最初に聞かれる質問への短い答え。" : "Short answers to the questions people ask first."}
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
        <div className="quick-answer-grid">
          {quickFaq.map((item) => (
            <article className="quick-answer" key={item.id}>
              <h3>{t(locale, item.question)}</h3>
              <p>{t(locale, item.answer)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
