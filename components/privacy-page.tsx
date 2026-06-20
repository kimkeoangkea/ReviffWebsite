import { StaticPageShell } from "@/components/static-page-shell";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";

export function PrivacyPage({ locale }: { locale: Locale }) {
  return (
    <StaticPageShell
      locale={locale}
      path={PRODUCT.routes.privacy}
      eyebrow="Privacy"
      title={locale === "ja" ? "プライバシー" : "Privacy"}
    >
      <div className="story-body">
        <h2>{locale === "ja" ? "ローカル処理" : "Local processing"}</h2>
        <p>
          {locale === "ja"
            ? "REVIFF の比較ワークフローは Windows PC 上で実行されます。図面ファイルを REVIFF のサーバーへアップロードする設計ではありません。"
            : "The REVIFF comparison workflow runs on the Windows PC. It is not designed to upload drawing files to a REVIFF server."}
        </p>

        <h2>{locale === "ja" ? "ウェブサイト" : "Website"}</h2>
        <p>
          {locale === "ja"
            ? "このサイトは製品情報、更新履歴、サポート導線を提供します。問い合わせやフィードバックを送信した場合、その送信内容と連絡先情報を返信や改善目的で扱うことがあります。"
            : "This website provides product information, release notes, and support paths. If you submit feedback or contact support, the submitted details and contact information may be used to respond and improve the product."}
        </p>

        <h2>{locale === "ja" ? "Microsoft Store" : "Microsoft Store"}</h2>
        <p>
          {locale === "ja"
            ? "インストール、更新、Store 上の利用情報は Microsoft Store の仕組みに従って処理されます。"
            : "Install, update, and Store usage details are handled through Microsoft Store systems."}
        </p>

        <h2>{locale === "ja" ? "連絡先" : "Contact"}</h2>
        <p>
          {locale === "ja"
            ? `プライバシーに関する問い合わせは ${PRODUCT.supportEmail} までご連絡ください。`
            : `For privacy questions, contact ${PRODUCT.supportEmail}.`}
        </p>
      </div>
    </StaticPageShell>
  );
}
