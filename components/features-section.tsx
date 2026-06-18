import { FEATURES } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function FeaturesSection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="section-wrap">
        <p className="section-label">Product Focus</p>
        <h2 className="section-title">
          {locale === "ja" ? "REVIFF は、図面変更を見つけるための専用ツール。" : "REVIFF is focused on finding drawing changes."}
        </h2>
        <p className="section-copy">
          {locale === "ja"
            ? "新しいサイトでは、Store 配布、ローカル処理、レビュー用の実務機能を中心に伝えます。"
            : "The standalone site presents it as a focused Windows product for AEC revision review: local processing, Store install, and review-ready output."}
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
