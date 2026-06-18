import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { PRODUCT } from "@/lib/product";
import type { Locale, LocalizedText } from "@/lib/locale";
import { t } from "@/lib/locale";

interface StoreButtonProps {
  locale: Locale;
  label: LocalizedText;
  hint?: LocalizedText;
  className?: string;
}

export function StoreButton({ locale, label, hint, className = "" }: StoreButtonProps) {
  return (
    <a
      className={`focus-ring btn-primary ${className}`}
      href={PRODUCT.storeUrl}
      target="_blank"
      rel="noreferrer"
    >
      <ShoppingBag size={18} strokeWidth={2} />
      <span>
        <span>{t(locale, label)}</span>
        {hint ? <span className="btn-sub">{t(locale, hint)}</span> : null}
      </span>
      <ArrowUpRight size={15} strokeWidth={2.2} />
    </a>
  );
}
