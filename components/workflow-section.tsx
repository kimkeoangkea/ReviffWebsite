import Image from "next/image";
import { WORKFLOW_STEPS } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function WorkflowSection({ locale }: { locale: Locale }) {
  return (
    <section id="workflow" className="section">
      <div className="section-wrap">
        <p className="section-label">Workflow</p>
        <h2 className="section-title">
          {locale === "ja" ? "図面レビューを止めない 3 ステップ。" : "Three connected steps for drawing review."}
        </h2>
        <p className="section-copy">
          {locale === "ja"
            ? "読み込み、位置合わせ、比較、出力までを 1 つの作業画面で進められるように構成します。"
            : "REVIFF keeps the review loop tight: load the drawings, compare the changes, and export the result."}
        </p>

        <div className="workflow-story-grid">
          {WORKFLOW_STEPS.map((step, index) => (
            <article key={step.id} className={`workflow-story ${index % 2 === 1 ? "workflow-story--reverse" : ""}`}>
              <div className="workflow-story__copy">
                <span className="step-card__number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{t(locale, step.title)}</h3>
                <p className="card-body">{t(locale, step.body)}</p>
                <p className="step-card__callout">{t(locale, step.callout)}</p>
              </div>
              <div className="workflow-story__image">
                <Image
                  src={`${step.imageBase}-${locale === "ja" ? "jp" : "en"}.png`}
                  alt={t(locale, step.title)}
                  width={1280}
                  height={840}
                  sizes="(min-width: 768px) 58vw, calc(100vw - 2.5rem)"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
