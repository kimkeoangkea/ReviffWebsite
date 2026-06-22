import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/locale";

export function WhyFreeSection({ locale }: { locale: Locale }) {
  return (
    <section id="why-its-free" className="section maker-section">
      <div className="section-wrap">
        <div className="why-free-split">
          <div className="why-free-split__header">
            <p className="why-free-split__eyebrow">
              {locale === "ja" ? "無料の理由" : "Why free"}
            </p>
            <h2 className="why-free-split__title">
              {locale === "ja" ? "REVIFF が無料である理由" : "Why REVIFF is free"}
            </h2>
          </div>

          <div className="why-free-split__body">
            <p>
              {locale === "ja"
                ? "REVIFF は PDF Diff として始まりました。東京を拠点とする建築デザイナーが AEC DX Labs のもとで進める個人のワークフロー研究であり、図面の改訂確認の手作業を、チームのやり方を変えることなく減らせるかを検証するために作りました。"
                : "REVIFF began as PDF Diff — a personal workflow research project built by an architectural designer in Tokyo under AEC DX Labs, to test whether manual revision checking could be simplified without changing how teams already work."}
            </p>
            <p>
              {locale === "ja"
                ? "コア比較ツールは無料です。サインアップもなく、透かしもなく、目的は研究と AEC コミュニティへの実用的な価値です。比較は 100% ローカルで動くため、クラウド基盤も関与していません。"
                : "The core comparison tool is free. No signup, no watermark — the goal is research and practical value for the AEC community. Because comparison runs 100% locally, there is also no cloud infrastructure involved."}
            </p>
            <p className="why-free-split__note">
              {locale === "ja"
                ? "REVIFF はその研究の続きであり、現在は Microsoft Store で、個人・商用問わず無料でご利用いただけます。"
                : "REVIFF continues that research — now on Microsoft Store, free for personal and commercial use."}
            </p>
            <div className="why-free-split__actions">
              <a
                className="btn-secondary focus-ring"
                href="https://www.aecdxlabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                {locale === "ja" ? "元のプロジェクトを見る" : "Explore the original project"}
                <ArrowUpRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
