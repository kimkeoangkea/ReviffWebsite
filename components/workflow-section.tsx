import Image from "next/image";
import { WORKFLOW_STEPS } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function WorkflowSection({ locale }: { locale: Locale }) {
  return (
    <section id="workflow" className="workflow-section section">
      <div className="section-wrap">
        <p className="section-label">Workflow</p>
        <h2 className="section-title">
          {locale === "ja" ? "実務に即した3ステップのレビュー・ワークフロー" : "Three connected steps for practical drawing review"}
        </h2>
        <p className="section-copy">
          {locale === "ja"
            ? "インポート、比較、判断の流れがつながり、ツールを切り替えることなくレビューが完結します。"
            : "The flow keeps review moving: import, compare, and decide - without switching between tools."}
        </p>

        <div className="workflow-story-grid">
          {WORKFLOW_STEPS.map((step, index) => (
            <article key={step.id} className={`workflow-story ${index % 2 === 1 ? "workflow-story--image-left" : ""}`}>
              <div className="workflow-story__copy">
                <h3>{t(locale, step.title)}</h3>
                <p className="card-body">{t(locale, step.body)}</p>
              </div>
              <div className="workflow-story__image">
                <Image
                  src={`${step.imageBase}-${locale === "ja" ? "jp" : "en"}.png`}
                  alt={t(locale, step.title)}
                  width={1280}
                  height={840}
                  sizes="(min-width: 768px) 58vw, calc(100vw - 2.5rem)"
                  unoptimized
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
