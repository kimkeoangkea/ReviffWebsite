import { Mail, MessageSquareText, Store } from "lucide-react";
import { StoreButton } from "@/components/store-button";
import { StaticPageShell } from "@/components/static-page-shell";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";

export function SupportPage({ locale }: { locale: Locale }) {
  return (
    <StaticPageShell
      locale={locale}
      path={PRODUCT.routes.support}
      eyebrow="Support"
      title={locale === "ja" ? "サポート" : "Support"}
      lead={
        locale === "ja"
          ? "REVIFF の問い合わせ、フィードバック、Store 導線です。"
          : "Support, feedback, and Store paths for REVIFF."
      }
    >
      <div className="feature-grid" style={{ marginTop: 0 }}>
        <article className="feature-card">
          <p className="card-kicker"><Mail size={16} /> {locale === "ja" ? "Email" : "Email"}</p>
          <h3>{locale === "ja" ? "直接問い合わせる" : "Contact support"}</h3>
          <p className="card-body">
            {locale === "ja"
              ? "図面比較の不具合、Store インストール、業務利用の質問はこちらへ。"
              : "Use email for drawing comparison issues, Store install questions, and workflow questions."}
          </p>
          <div className="cta-row">
            <a className="focus-ring btn-secondary" href={`mailto:${PRODUCT.supportEmail}`}>
              {PRODUCT.supportEmail}
            </a>
          </div>
        </article>

        <article className="feature-card">
          <p className="card-kicker"><MessageSquareText size={16} /> Feedback</p>
          <h3>{locale === "ja" ? "実務フィードバックを送る" : "Send workflow feedback"}</h3>
          <p className="card-body">
            {locale === "ja"
              ? "実際のレビュー手順に基づくフィードバックを重視します。"
              : "Practical feedback from real drawing review workflows is the priority."}
          </p>
          <div className="cta-row">
            <a className="focus-ring btn-secondary" href={PRODUCT.feedbackUrl} target="_blank" rel="noreferrer">
              {locale === "ja" ? "フォームを開く" : "Open form"}
            </a>
          </div>
        </article>

        <article className="feature-card">
          <p className="card-kicker"><Store size={16} /> Microsoft Store</p>
          <h3>{locale === "ja" ? "Store ページを開く" : "Open the Store listing"}</h3>
          <p className="card-body">
            {locale === "ja"
              ? "Microsoft Store がインストールと更新のメイン導線です。"
              : "Microsoft Store is the primary path for install and updates."}
          </p>
          <div className="cta-row">
            <StoreButton locale={locale} label={{ en: "Open Store", ja: "Store を開く" }} />
          </div>
        </article>
      </div>
    </StaticPageShell>
  );
}
