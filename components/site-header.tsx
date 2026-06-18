import Link from "next/link";
import { ReviffMark } from "@/components/reviff-mark";
import { NAV_ITEMS, PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { alternateLocalePath, localizePath, t } from "@/lib/locale";

interface SiteHeaderProps {
  locale: Locale;
  currentPath?: string;
}

export function SiteHeader({ locale, currentPath = "/" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="section-wrap header-inner">
        <Link className="brand-lockup focus-ring" href={localizePath(locale, PRODUCT.routes.home)}>
          <span className="brand-mark">
            <ReviffMark />
          </span>
          <span>
            <span className="brand-kicker">{PRODUCT.publisher}</span>
            <span className="brand-name">{PRODUCT.name}</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label={locale === "ja" ? "サイトナビゲーション" : "Site navigation"}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} className="nav-link focus-ring" href={localizePath(locale, item.href)}>
              {t(locale, item.label)}
            </Link>
          ))}
          <Link className="lang-link focus-ring" href={alternateLocalePath(locale, currentPath)}>
            {locale === "ja" ? "English" : "日本語"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
