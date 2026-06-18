import type { Locale } from "@/lib/locale";

export function StorySection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="section-wrap">
        <div className="story-panel">
          <div className="story-side">
            <p className="section-label">Maker Context</p>
            <h2 className="section-title">
              {locale === "ja" ? "建築実務から生まれた小さな道具。" : "A focused tool from architectural practice."}
            </h2>
            <span className="story-drawing">
              <span>{locale === "ja" ? "Project" : "Project"}</span>
              <strong>REVIFF / STORE</strong>
            </span>
          </div>

          <div className="story-body">
            <p>
              {locale === "ja"
                ? "REVIFF は、改訂図面セットを手作業で見比べる負担を減らすために作られた、建築レビュー向けのローカル比較ツールです。"
                : "REVIFF is built around a familiar AEC review problem: revised drawing sets still get checked manually, page by page, under time pressure."}
            </p>
            <p>
              {locale === "ja"
                ? "総合的な文書管理システムを目指すのではなく、変更箇所を見つけ、位置ずれを合わせ、レビュー用に共有できる状態へ整えることに集中します。"
                : "The product stays intentionally focused. It does not try to replace document management; it helps teams see what changed, align what moved, and prepare review output."}
            </p>
            <div className="story-callout">
              {locale === "ja"
                ? "REVIFF は、無料で使える Store 版として公開し、実務からのフィードバックを次の改善に接続します。"
                : "REVIFF is free on Microsoft Store, keeps comparison local, and gives drawing-review teams a direct path to send practical feedback."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
