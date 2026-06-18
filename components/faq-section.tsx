import { FAQ } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { t } from "@/lib/locale";

export function FaqSection({ locale }: { locale: Locale }) {
  return (
    <section className="section">
      <div className="section-wrap">
        <p className="section-label">FAQ</p>
        <h2 className="section-title">{locale === "ja" ? "最初に答えるべき質問。" : "Questions the launch page should answer."}</h2>
        <div className="faq-grid">
          {FAQ.map((item) => (
            <article className="faq-card" key={item.id}>
              <h3>{t(locale, item.question)}</h3>
              <p className="card-body">{t(locale, item.answer)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
