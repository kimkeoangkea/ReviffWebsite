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

const UNAVAILABLE_COPY = {
  label: { en: "Available Soon", ja: "近日配信予定" },
  hint: { en: "Coming to Microsoft Store", ja: "Microsoft Store で近日配信" },
} as const;

export function StoreButton({ locale, label, hint, className = "" }: StoreButtonProps) {
  if (!PRODUCT.storeAvailable) {
    return (
      <button
        type="button"
        disabled
        className={`focus-ring btn-primary btn-primary--unavailable ${className}`}
      >
        <ShoppingBag size={18} strokeWidth={2} />
        <span>
          <span>{t(locale, UNAVAILABLE_COPY.label)}</span>
          <span className="btn-sub">{t(locale, UNAVAILABLE_COPY.hint)}</span>
        </span>
      </button>
    );
  }

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
