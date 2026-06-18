import { CheckCircle2, Copy, MonitorDown } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreButton } from "@/components/store-button";
import { DOWNLOAD_COPY } from "@/lib/content";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";

export function DownloadPage({ locale }: { locale: Locale }) {
  return (
    <div className="site-root">
      <SiteHeader locale={locale} currentPath={PRODUCT.routes.download} />
      <main id="main-content">
        <div className="section-wrap">
          <Breadcrumbs
            items={[
              { label: PRODUCT.name, href: localizePath(locale, PRODUCT.routes.home) },
              { label: t(locale, { en: "Download", ja: "ダウンロード" }) },
            ]}
          />
        </div>

        <section className="page-hero">
          <div className="section-wrap">
            <p className="eyebrow">Microsoft Store</p>
            <h1 className="page-title">{t(locale, DOWNLOAD_COPY.title)}</h1>
            <p className="hero-lead">{t(locale, DOWNLOAD_COPY.body)}</p>
            <div className="cta-row">
              <StoreButton
                locale={locale}
                label={{ en: "Open Microsoft Store", ja: "Microsoft Store を開く" }}
                hint={{ en: "Configured by NEXT_PUBLIC_MICROSOFT_STORE_URL", ja: "NEXT_PUBLIC_MICROSOFT_STORE_URL で設定" }}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-wrap">
            <div className="info-panel">
              <p className="section-label">Requirements</p>
              <h2 className="section-title">{locale === "ja" ? "Store 版の前提条件。" : "Store release requirements."}</h2>
              <div className="requirements-grid">
                <div className="requirement">
                  <CheckCircle2 size={18} />
                  <p>{t(locale, PRODUCT.requirements.system)}</p>
                </div>
                <div className="requirement">
                  <MonitorDown size={18} />
                  <p>{t(locale, PRODUCT.requirements.processor)}</p>
                </div>
                <div className="requirement">
                  <Copy size={18} />
                  <p>{t(locale, PRODUCT.requirements.formats)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-wrap">
            <p className="section-label">{locale === "ja" ? "Install Flow" : "Install Flow"}</p>
            <h2 className="section-title">{locale === "ja" ? "公開時の導線は 3 ステップ。" : "The launch install path is three steps."}</h2>
            <div className="step-grid">
              {DOWNLOAD_COPY.steps.map((step, index) => (
                <article className="step-card" key={step.title.en}>
                  <span className="step-card__number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{t(locale, step.title)}</h3>
                  <p className="card-body">{t(locale, step.body)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
