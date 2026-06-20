import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { localizePath } from "@/lib/locale";
import type { ReactNode } from "react";

interface StaticPageShellProps {
  locale: Locale;
  path: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export function StaticPageShell({ locale, path, eyebrow, title, lead, children }: StaticPageShellProps) {
  return (
    <div className="site-root">
      <SiteHeader locale={locale} currentPath={path} />
      <main id="main-content">
        <div className="section-wrap">
          <Breadcrumbs
            items={[
              { label: PRODUCT.name, href: localizePath(locale, PRODUCT.routes.home) },
              { label: title },
            ]}
          />
        </div>

        <section className="page-hero">
          <div className="section-wrap">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="page-title">{title}</h1>
            {lead ? <p className="hero-lead">{lead}</p> : null}
          </div>
        </section>

        <section className="section">
          <div className="section-wrap">
            <div className="info-panel">{children}</div>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
