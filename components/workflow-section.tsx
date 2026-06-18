import { WORKFLOW_STEPS } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function WorkflowSection({ locale }: { locale: Locale }) {
  return (
    <section id="workflow" className="section">
      <div className="section-wrap">
        <p className="section-label">Workflow</p>
        <h2 className="section-title">
          {locale === "ja" ? "図面レビューを止めない 4 ステップ。" : "Four connected steps for drawing review."}
        </h2>
        <p className="section-copy">
          {locale === "ja"
            ? "読み込み、位置合わせ、比較、出力までを 1 つの作業画面で進められるように構成します。"
            : "The launch page should introduce REVIFF as a complete review loop: load, align, compare, and deliver."}
        </p>

        <div className="step-grid">
          {WORKFLOW_STEPS.map((step, index) => (
            <article key={step.id} className="step-card">
              <span className="step-card__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{t(locale, step.title)}</h3>
              <p className="card-body">{t(locale, step.body)}</p>
              <p className="step-card__callout">{t(locale, step.callout)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
