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
          <h3>{locale === "ja" ? "フィードバックとお問い合わせ" : "Feedback and contact"}</h3>
          <p className="card-body">
            {locale === "ja"
              ? "修正したい点、ツールで解決できそうなワークフローの課題、または一般的なお問い合わせがあれば、フォームからお送りください。ボタンを押すと Google フォームが開きます。"
              : "Found something worth fixing? Have a workflow problem that a tool could solve? Or just want to get in touch? Use the form to share feedback on any AEC DX Labs tool, suggest ideas, or send a general message. The button opens a Google Form."}
          </p>
          <div className="cta-row">
            <a className="focus-ring btn-secondary" href={PRODUCT.feedbackUrl} target="_blank" rel="noreferrer">
              {locale === "ja" ? "フィードバックを送る・問い合わせる" : "Send feedback or get in touch"}
            </a>
          </div>
          <p className="card-body">
            {locale === "ja"
              ? "Google フォームで開きます。100% 無料。AEC DX Labs は、AEC コミュニティ向けの focused workflow tools を作る個人ラボです。"
              : "Opens Google Forms. 100% free. AEC DX Labs is a personal lab building focused workflow tools for the AEC community."}
          </p>
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
