import { FEATURES } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function FeaturesSection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="section-wrap">
        <p className="section-label">V1 Positioning</p>
        <h2 className="section-title">
          {locale === "ja" ? "旧ベータ版ではなく、REVIFF として紹介する。" : "Introduce it as REVIFF, not an old beta."}
        </h2>
        <p className="section-copy">
          {locale === "ja"
            ? "新しいサイトでは、Store 配布、ローカル処理、レビュー用の実務機能を中心に伝えます。"
            : "The standalone site should move the story from a beta utility to a focused Windows product for AEC revision review."}
        </p>

        <div className="feature-grid">
          {FEATURES.map((feature) => (
            <article className="feature-card" key={feature.id}>
              <p className="card-kicker">{t(locale, feature.eyebrow)}</p>
              <h3>{t(locale, feature.title)}</h3>
              <p className="card-body">{t(locale, feature.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
