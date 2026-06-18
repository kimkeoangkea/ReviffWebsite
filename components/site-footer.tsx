import Link from "next/link";
import { NAV_ITEMS, PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { localizePath, t } from "@/lib/locale";

export function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <p>
          © 2026 {PRODUCT.publisher}. {PRODUCT.name} {PRODUCT.version}.
        </p>
        <div className="footer-links">
          {NAV_ITEMS.map((item) => (
            <Link key={item.id} className="footer-link focus-ring" href={localizePath(locale, item.href)}>
              {t(locale, item.label)}
            </Link>
          ))}
          <a className="footer-link focus-ring" href={`mailto:${PRODUCT.supportEmail}`}>
            {PRODUCT.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
