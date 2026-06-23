import type { LocalizedText } from "@/lib/locale";
import { PRODUCT } from "@/lib/product";

/**
 * Single source of truth for the REVIFF vs Bluebeam Revu comparison page.
 *
 * This object feeds BOTH the visible page text and the JSON-LD structured data,
 * so the two can never drift apart. Every claim here must be supported by the
 * current product and by the visible page content.
 *
 * HOW TO UPDATE (do this when product capabilities, sources, or scope change):
 *   1. `lastVerifiedDate` — set to the date a human actually re-checked the
 *      claims below. DO NOT wire this to the build date; it must only change
 *      after a real re-verification (see brief §24).
 *   2. `reviffVersionReviewed` — follows PRODUCT.version automatically; bump
 *      PRODUCT.version in lib/product.ts on release.
 *   3. `bluebeamScope` / `basis` — adjust if the comparison scope changes.
 *   4. `sources` — keep these pointing at primary documentation only. Update
 *      `accessed` when re-checked. Avoid affiliate/blog/forum sources.
 *   5. Comparison rows, key facts, and Q&A live in lib/comparison-content.ts.
 *
 * The two companies are NOT affiliated. This page evaluates REVIFF against the
 * Bluebeam Revu desktop "Compare Documents" workflow at a high level, not every
 * capability of the wider Bluebeam platform.
 */

export interface ComparisonSource {
  title: LocalizedText;
  publisher: string;
  /** What this source supports, in user-facing language. */
  covers: LocalizedText;
  url: string;
  /** ISO date the source was last accessed/verified. */
  accessed: string;
}

export const COMPARISON = {
  /** REVIFF version the comparison was prepared against. */
  reviffVersionReviewed: PRODUCT.version,

  /** Bluebeam product/workflow evaluated. */
  bluebeamScope: {
    en: "Bluebeam Revu desktop Compare Documents workflow",
    ja: "Bluebeam Revu デスクトップ版の Compare Documents（書類比較）ワークフロー",
  },

  /** When this comparison page was first published. */
  publishedDate: "2026-06-23",

  /**
   * When a person last re-checked the claims on this page. Update by hand only
   * after a real re-verification — never on every build.
   */
  lastVerifiedDate: "2026-06-23",

  /** What the findings are based on. */
  basis: {
    en: "publicly available Bluebeam product documentation and direct use of REVIFF 1.0",
    ja: "一般に公開されている Bluebeam の製品ドキュメントと、REVIFF 1.0 の実利用に基づきます",
  },

  /** Primary sources shown near the relevant claims. */
  sources: [
    {
      title: {
        en: "Bluebeam Revu — official product site",
        ja: "Bluebeam Revu — 公式製品サイト",
      },
      publisher: "Bluebeam, Inc.",
      covers: {
        en: "Bluebeam Revu platform scope, editions, and pricing",
        ja: "Bluebeam Revu のプラットフォーム範囲、エディション、価格",
      },
      url: "https://www.bluebeam.com/solutions/revu",
      accessed: "2026-06-23",
    },
    {
      title: {
        en: "Bluebeam Revu — Compare Documents documentation",
        ja: "Bluebeam Revu — Compare Documents のドキュメント",
      },
      publisher: "Bluebeam, Inc.",
      covers: {
        en: "Bluebeam Revu document comparison and alignment behavior",
        ja: "Bluebeam Revu の書類比較と位置合わせの挙動",
      },
      url: "https://support.bluebeam.com/",
      accessed: "2026-06-23",
    },
  ] as readonly ComparisonSource[],
} as const;
