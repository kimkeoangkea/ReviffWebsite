import { FAQ } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function FaqSection({ locale }: { locale: Locale }) {
  return (
    <section className="section faq-section">
      <div className="section-wrap">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">{locale === "ja" ? "Trust and FAQ" : "Trust and FAQ"}</h2>
        <p className="section-copy">
          {locale === "ja"
            ? "IT とセキュリティ確認で最初に見られる信頼シグナルを、よくある質問と並べて表示します。"
            : "Core trust signals stay visible alongside the questions people ask first."}
        </p>
        <div className="faq-layout">
          <aside className="trust-panel">
            <p className="card-kicker">{locale === "ja" ? "Trust Signals" : "Trust Signals"}</p>
            <h3>{locale === "ja" ? "IT とセキュリティ確認のための短い保証。" : "Short operational assurances for IT and security review."}</h3>
            <div className="trust-list">
              <div>
                <strong>{locale === "ja" ? "Offline by default" : "Offline by default"}</strong>
                <p>{locale === "ja" ? "比較はローカルで実行され、図面はワークステーション上に残ります。" : "No cloud dependency in the review path. Drawings stay on your workstation."}</p>
              </div>
              <div>
                <strong>{locale === "ja" ? "Store install" : "Store install"}</strong>
                <p>{locale === "ja" ? "Microsoft Store がインストールと更新の導線です。" : "Microsoft Store is the install and update path for Windows users."}</p>
              </div>
              <div>
                <strong>{locale === "ja" ? "Free to use" : "Free to use"}</strong>
                <p>{locale === "ja" ? "サインアップ不要、サブスク不要、透かしなしで使えます。" : "No signup, no subscription, no premium feature locked, and no watermark."}</p>
              </div>
            </div>
          </aside>
          <div className="faq-list">
            <p className="card-kicker">{locale === "ja" ? "Common Questions" : "Common Questions"}</p>
            {FAQ.map((item, index) => (
              <article className="faq-card" key={item.id}>
                <span className="faq-card__number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t(locale, item.question)}</h3>
                  <p className="card-body">{t(locale, item.answer)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
