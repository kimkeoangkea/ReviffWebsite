import type { LocalizedText } from "@/lib/locale";

/**
 * All localized copy for the comparison hub and the REVIFF vs Bluebeam Revu
 * page. Product facts (version, price, store URL, OS) come from PRODUCT; the
 * freshness/source data comes from COMPARISON. Keep claims here verifiable
 * against the current product and the visible page. Bluebeam is described only
 * at a high, platform-level — no granular internal-feature claims (see plan).
 */

/* ----------------------------- Comparison hub ----------------------------- */

export const COMPARE_HUB = {
  eyebrow: { en: "Compare", ja: "比較" },
  title: {
    en: "REVIFF comparisons",
    ja: "REVIFF の比較",
  },
  lead: {
    en: "How REVIFF's free, local AEC drawing-comparison workflow compares with broader PDF tools. Each comparison is prepared from primary sources and direct use of REVIFF, and states what it does and does not cover.",
    ja: "REVIFF の無料・ローカルな建築図面比較ワークフローを、より広範な PDF ツールと比較します。各比較は一次情報と REVIFF の実利用に基づき、対象範囲と対象外を明記します。",
  },
  cardTitle: {
    en: "REVIFF vs Bluebeam Revu for AEC drawing comparison",
    ja: "AEC 図面比較における REVIFF と Bluebeam Revu",
  },
  cardBody: {
    en: "Where REVIFF and Bluebeam Revu's Compare Documents workflow overlap, how they differ, and which option fits a given drawing-comparison need.",
    ja: "REVIFF と Bluebeam Revu の Compare Documents ワークフローが重なる点、異なる点、そして図面比較のニーズに合う選択肢を解説します。",
  },
  cardCta: {
    en: "Read the REVIFF vs Bluebeam Revu comparison",
    ja: "REVIFF と Bluebeam Revu の比較を読む",
  },
} as const;

/* ------------------------- Comparison page: intro ------------------------- */

export const COMPARISON_INTRO = {
  eyebrow: { en: "Compare", ja: "比較" },
  title: {
    en: "REVIFF vs Bluebeam Revu for AEC Drawing Comparison",
    ja: "AEC 図面比較における REVIFF と Bluebeam Revu",
  },
  /** Answer-first lead paragraph (brief §3, §9). */
  lead: {
    en: "REVIFF and Bluebeam Revu both compare revised drawings and produce visual markup, but they are different kinds of tool. REVIFF is a free, focused Windows utility for comparing AEC drawing revisions locally; Bluebeam Revu is a broad, paid AEC PDF platform that includes comparison alongside markup, measurement, takeoff, and collaboration.",
    ja: "REVIFF と Bluebeam Revu はどちらも改訂図面を比較して視覚的なマークアップを生成しますが、種類の異なるツールです。REVIFF は AEC 図面の改訂をローカルで比較するための無料・専用の Windows ユーティリティであり、Bluebeam Revu は比較に加えてマークアップ、計測、数量拾い、コラボレーションを備えた広範な有料の AEC PDF プラットフォームです。",
  },
} as const;

/* ------------------------ Product definition (§1) ------------------------- */

export const COMPARISON_DEFINITION = {
  heading: { en: "What is REVIFF?", ja: "REVIFF とは？" },
  definition: {
    en: "REVIFF is a free Windows application for locally comparing architectural, engineering, and construction PDF drawing revisions. It provides automatic alignment, Partial Align for independently repositioning selected drawing regions, and automatic Cloudmark output.",
    ja: "REVIFF は、建築・土木・建設の PDF 図面の改訂をローカルで比較する無料の Windows アプリケーションです。自動位置合わせ、選択した図面領域を独立して再配置する部分位置合わせ、そして雲マークの自動出力を備えています。",
  },
  limitation: {
    en: "REVIFF is a focused drawing-comparison utility. It is not a complete PDF editing, measurement, takeoff, or collaboration platform.",
    ja: "REVIFF は図面比較に特化したユーティリティです。完全な PDF 編集・計測・数量拾い・コラボレーションのプラットフォームではありません。",
  },
} as const;

/* ----------------------------- Key facts (§2) ----------------------------- */

export interface KeyFact {
  term: LocalizedText;
  value: LocalizedText;
}

/**
 * Verified product facts. `value` strings that mirror PRODUCT fields are kept
 * as literals here so the definition list reads naturally in both languages;
 * the product page and JSON-LD use the same underlying facts.
 */
export const COMPARISON_KEY_FACTS: KeyFact[] = [
  {
    term: { en: "Product name", ja: "製品名" },
    value: { en: "REVIFF", ja: "REVIFF" },
  },
  {
    term: { en: "Publisher", ja: "提供元" },
    value: { en: "AEC DX Labs", ja: "AEC DX Labs" },
  },
  {
    term: { en: "Product type", ja: "製品種別" },
    value: {
      en: "AEC PDF drawing-comparison application",
      ja: "AEC 向け PDF 図面比較アプリケーション",
    },
  },
  {
    term: { en: "Operating system", ja: "対応 OS" },
    value: {
      en: "Windows 10 (version 1809 or newer, 64-bit) and Windows 11",
      ja: "Windows 10（version 1809 以降、64-bit）および Windows 11",
    },
  },
  {
    term: { en: "Version reviewed", ja: "レビュー対象バージョン" },
    value: { en: "1.0.0.0", ja: "1.0.0.0" },
  },
  {
    term: { en: "Price", ja: "価格" },
    value: { en: "Free", ja: "無料" },
  },
  {
    term: { en: "Account required", ja: "アカウント要否" },
    value: { en: "No", ja: "不要" },
  },
  {
    term: { en: "Processing", ja: "処理方法" },
    value: {
      en: "Local, on the user's Windows device",
      ja: "ユーザーの Windows 端末上でローカル処理",
    },
  },
  {
    term: { en: "Distribution", ja: "配布形式" },
    value: { en: "Microsoft Store", ja: "Microsoft Store" },
  },
  {
    term: { en: "Main functions", ja: "主な機能" },
    value: {
      en: "Auto-align, Partial Align, visual difference detection, and automatic Cloudmark output",
      ja: "自動位置合わせ、部分位置合わせ、差分検出、雲マークの自動出力",
    },
  },
  {
    term: { en: "Intended users", ja: "想定ユーザー" },
    value: {
      en: "Architects, engineers, contractors, reviewers, and BIM/CAD teams",
      ja: "建築士、エンジニア、施工者、レビュアー、BIM/CAD チーム",
    },
  },
  {
    term: { en: "Not included", ja: "含まれない機能" },
    value: {
      en: "Full PDF editing, takeoff, measurement, and team collaboration platform",
      ja: "完全な PDF 編集、数量拾い、計測、チームコラボレーションのプラットフォーム",
    },
  },
];

/* --------------------------- Comparison table (§4) ------------------------ */

export interface ComparisonRow {
  feature: LocalizedText;
  reviff: LocalizedText;
  bluebeam: LocalizedText;
}

export const COMPARISON_TABLE = {
  caption: {
    en: "REVIFF compared with the Bluebeam Revu Compare Documents workflow. Each cell names the product it describes.",
    ja: "REVIFF と Bluebeam Revu の Compare Documents ワークフローの比較。各セルは対象製品を明記しています。",
  },
  colReviff: { en: "REVIFF", ja: "REVIFF" },
  colBluebeam: { en: "Bluebeam Revu", ja: "Bluebeam Revu" },
  colFeature: { en: "Aspect", ja: "項目" },
  rows: [
    {
      feature: { en: "Primary purpose", ja: "主な用途" },
      reviff: {
        en: "REVIFF is a focused AEC drawing-revision comparison utility.",
        ja: "REVIFF は AEC 図面改訂の比較に特化したユーティリティです。",
      },
      bluebeam: {
        en: "Bluebeam Revu is a broad AEC PDF platform that includes drawing comparison.",
        ja: "Bluebeam Revu は図面比較を含む広範な AEC PDF プラットフォームです。",
      },
    },
    {
      feature: { en: "Pricing", ja: "価格" },
      reviff: {
        en: "REVIFF is free; no account is required.",
        ja: "REVIFF は無料で、アカウントは不要です。",
      },
      bluebeam: {
        en: "Bluebeam Revu is a paid product; a Bluebeam ID is required to use it.",
        ja: "Bluebeam Revu は有料製品で、利用には Bluebeam ID が必要です。",
      },
    },
    {
      feature: { en: "Platform", ja: "プラットフォーム" },
      reviff: {
        en: "REVIFF runs on Windows 10 and Windows 11.",
        ja: "REVIFF は Windows 10 および Windows 11 で動作します。",
      },
      bluebeam: {
        en: "Bluebeam Revu is available on Windows, with separate Bluebeam apps for other platforms.",
        ja: "Bluebeam Revu は Windows で利用でき、他のプラットフォーム向けには別の Bluebeam アプリがあります。",
      },
    },
    {
      feature: { en: "Drawing comparison", ja: "図面比較" },
      reviff: {
        en: "REVIFF compares two drawing revisions and highlights differences.",
        ja: "REVIFF は 2 つの図面改訂を比較し、差分をハイライトします。",
      },
      bluebeam: {
        en: "Bluebeam Revu compares documents through its Compare Documents workflow.",
        ja: "Bluebeam Revu は Compare Documents ワークフローで書類を比較します。",
      },
    },
    {
      feature: { en: "Alignment", ja: "位置合わせ" },
      reviff: {
        en: "REVIFF provides automatic alignment, and Partial Align can independently reposition a selected region of a sheet.",
        ja: "REVIFF は自動位置合わせを備え、部分位置合わせによってシート内の選択領域を独立して再配置できます。",
      },
      bluebeam: {
        en: "Bluebeam Revu supports document alignment as part of its comparison workflow.",
        ja: "Bluebeam Revu は比較ワークフローの一部として書類の位置合わせに対応します。",
      },
    },
    {
      feature: { en: "Change markup", ja: "変更マークアップ" },
      reviff: {
        en: "REVIFF automatically draws Cloudmarks around detected changes and exports to PDF or PNG.",
        ja: "REVIFF は検出した変更箇所に雲マークを自動で描画し、PDF または PNG に出力します。",
      },
      bluebeam: {
        en: "Bluebeam Revu produces visual markup and supports a wider markup and annotation toolset.",
        ja: "Bluebeam Revu は視覚的なマークアップを生成し、より幅広いマークアップ・注釈ツールを備えます。",
      },
    },
    {
      feature: { en: "Processing location", ja: "処理場所" },
      reviff: {
        en: "REVIFF processes drawings locally on the Windows device.",
        ja: "REVIFF は Windows 端末上でローカルに図面を処理します。",
      },
      bluebeam: {
        en: "Bluebeam Revu runs on the desktop and also offers cloud-based collaboration features.",
        ja: "Bluebeam Revu はデスクトップで動作し、クラウドベースのコラボレーション機能も提供します。",
      },
    },
    {
      feature: { en: "Beyond comparison", ja: "比較以外の機能" },
      reviff: {
        en: "REVIFF does not include measurement, takeoff, full PDF editing, or a collaboration platform.",
        ja: "REVIFF には計測、数量拾い、完全な PDF 編集、コラボレーションプラットフォームは含まれません。",
      },
      bluebeam: {
        en: "Bluebeam Revu includes markup, measurement, takeoff, and project-document collaboration.",
        ja: "Bluebeam Revu はマークアップ、計測、数量拾い、プロジェクト書類のコラボレーションを備えます。",
      },
    },
  ] as ComparisonRow[],
} as const;

/* ------------------- Answer-first Q&A sections (§3, §26) ------------------ */

export interface ComparisonQa {
  id: string;
  question: LocalizedText;
  /** Direct answer first. */
  answer: LocalizedText;
  /** Supporting explanation after the direct answer. */
  detail: LocalizedText;
}

/**
 * Distinct from the homepage FAQ (lib/content.ts FAQ) to avoid duplicate FAQ
 * schema. These power both the visible Q&A and `comparisonFaqSchema`.
 */
export const COMPARISON_QA: ComparisonQa[] = [
  {
    id: "replacement",
    question: {
      en: "Is REVIFF a Bluebeam replacement?",
      ja: "REVIFF は Bluebeam の代替になりますか？",
    },
    answer: {
      en: "REVIFF is not a replacement for the complete Bluebeam Revu platform. It is a focused alternative for users who mainly need the drawing-comparison workflow.",
      ja: "REVIFF は Bluebeam Revu プラットフォーム全体の代替ではありません。主に図面比較のワークフローを必要とするユーザー向けの、特化型の選択肢です。",
    },
    detail: {
      en: "Bluebeam Revu covers comparison plus markup, measurement, takeoff, and collaboration across the project document set. REVIFF covers the comparison step only. If a team needs the wider platform, REVIFF does not replace it.",
      ja: "Bluebeam Revu は比較に加え、プロジェクト書類全体にわたるマークアップ、計測、数量拾い、コラボレーションを担います。REVIFF は比較の工程のみを担います。広範なプラットフォームが必要なチームにとって、REVIFF はその代替にはなりません。",
    },
  },
  {
    id: "local",
    question: {
      en: "Does REVIFF process drawings locally?",
      ja: "REVIFF は図面をローカルで処理しますか？",
    },
    answer: {
      en: "Yes. REVIFF processes drawings locally on the user's Windows device and does not upload them to a REVIFF server.",
      ja: "はい。REVIFF はユーザーの Windows 端末上でローカルに図面を処理し、REVIFF のサーバーへアップロードすることはありません。",
    },
    detail: {
      en: "The comparison workflow runs on the workstation, which keeps drawing files within the local environment during review.",
      ja: "比較ワークフローはワークステーション上で実行されるため、レビュー中も図面ファイルはローカル環境内に保持されます。",
    },
  },
  {
    id: "reviff-better",
    question: {
      en: "When is REVIFF the better choice?",
      ja: "どのような場合に REVIFF が適していますか？",
    },
    answer: {
      en: "REVIFF is likely the better fit when a user needs free, local, signup-free AEC drawing comparison on Windows and does not require a full PDF platform.",
      ja: "フルの PDF プラットフォームを必要とせず、Windows 上で無料・ローカル・サインアップ不要の AEC 図面比較を求める場合、REVIFF が適しています。",
    },
    detail: {
      en: "It is most relevant on workstations without an appropriate Bluebeam subscription, or when the task is simply to find and mark up what changed between two drawing revisions.",
      ja: "適切な Bluebeam サブスクリプションがないワークステーションや、2 つの図面改訂間で何が変わったかを見つけてマークアップするだけの作業に最も適しています。",
    },
  },
  {
    id: "bluebeam-better",
    question: {
      en: "When is Bluebeam Revu the better choice?",
      ja: "どのような場合に Bluebeam Revu が適していますか？",
    },
    answer: {
      en: "Bluebeam Revu is likely the better fit when a user needs integrated markup, measurement, takeoff, collaboration, and wider project-document workflows.",
      ja: "統合されたマークアップ、計測、数量拾い、コラボレーション、より広範なプロジェクト書類のワークフローを必要とする場合、Bluebeam Revu が適しています。",
    },
    detail: {
      en: "Organizations that already standardize on Bluebeam may prefer to remain in that ecosystem. REVIFF is most relevant when the comparison task needs to be available without the broader platform or subscription.",
      ja: "すでに Bluebeam を標準としている組織は、そのエコシステム内にとどまることを好む場合があります。REVIFF は、広範なプラットフォームやサブスクリプションなしで比較作業を行える必要がある場合に最も適しています。",
    },
  },
];

/* --------------------------- Decision criteria (§27) ---------------------- */

export const COMPARISON_DECISION = {
  heading: {
    en: "Which tool should an AEC team choose?",
    ja: "AEC チームはどちらを選ぶべきか？",
  },
  reviffFits: {
    en: "REVIFF is likely the better fit when a user needs free, local, signup-free AEC drawing comparison on Windows and does not require a full PDF platform.",
    ja: "フルの PDF プラットフォームを必要とせず、Windows 上で無料・ローカル・サインアップ不要の AEC 図面比較を求める場合、REVIFF が適しています。",
  },
  bluebeamFits: {
    en: "Bluebeam Revu is likely the better fit when a user needs integrated markup, measurement, takeoff, batch processing, collaboration, and wider project-document workflows.",
    ja: "統合されたマークアップ、計測、数量拾い、バッチ処理、コラボレーション、より広範なプロジェクト書類のワークフローを必要とする場合、Bluebeam Revu が適しています。",
  },
  ecosystem: {
    en: "Users whose organizations already standardize on Bluebeam may prefer to remain in that ecosystem. REVIFF is most relevant when the comparison task needs to be available without the broader platform or subscription.",
    ja: "すでに Bluebeam を標準としている組織のユーザーは、そのエコシステム内にとどまることを好む場合があります。REVIFF は、広範なプラットフォームやサブスクリプションなしで比較作業を行える必要がある場合に最も適しています。",
  },
} as const;

/* ----------------------------- Section headings --------------------------- */

export const COMPARISON_HEADINGS = {
  keyFacts: { en: "REVIFF key facts", ja: "REVIFF の基本情報" },
  table: {
    en: "REVIFF and Bluebeam Revu at a glance",
    ja: "REVIFF と Bluebeam Revu の概要比較",
  },
  evidence: {
    en: "REVIFF alignment and Cloudmark in use",
    ja: "REVIFF の位置合わせと雲マークの実例",
  },
  qa: { en: "Common questions", ja: "よくある質問" },
  methodology: {
    en: "How this comparison was prepared",
    ja: "この比較の作成方法",
  },
  sources: { en: "Sources", ja: "出典" },
} as const;

/* ------------------------- Methodology section (§11) ---------------------- */

export const COMPARISON_METHODOLOGY = {
  intro: {
    en: "This comparison evaluates REVIFF against Bluebeam Revu's desktop Compare Documents workflow using publicly available product documentation and REVIFF version 1.0. It does not evaluate every capability in the wider Bluebeam platform. Product features, plan availability, and pricing may change.",
    ja: "この比較は、一般に公開されている製品ドキュメントと REVIFF version 1.0 を用いて、REVIFF を Bluebeam Revu のデスクトップ版 Compare Documents ワークフローと比較したものです。Bluebeam プラットフォーム全体のすべての機能を評価するものではありません。製品機能、プランの提供状況、価格は変更される場合があります。",
  },
  reviffVersionLabel: { en: "REVIFF version reviewed", ja: "レビュー対象の REVIFF バージョン" },
  bluebeamScopeLabel: { en: "Bluebeam workflow evaluated", ja: "評価した Bluebeam ワークフロー" },
  basisLabel: { en: "Basis of findings", ja: "評価の根拠" },
  lastVerifiedLabel: { en: "Last verified", ja: "最終確認日" },
  unverifiedLabel: { en: "Could not be independently verified", ja: "独立して検証できなかった点" },
  unverified: {
    en: "Exact Bluebeam plan tiers, batch limits, and edition-specific feature availability were not independently tested and may vary by plan and version.",
    ja: "Bluebeam の正確なプラン階層、バッチ処理の上限、エディション別の機能提供状況は独自に検証しておらず、プランやバージョンにより異なる場合があります。",
  },
  affiliation: {
    en: "AEC DX Labs and Bluebeam are not affiliated. REVIFF and Bluebeam Revu are independent products.",
    ja: "AEC DX Labs と Bluebeam は提携関係にありません。REVIFF と Bluebeam Revu はそれぞれ独立した製品です。",
  },
} as const;

/* --------------------------- Product evidence (§12) ----------------------- */

export interface EvidenceItem {
  videoSrc: string;
  videoSrcFallback: string;
  posterSrc: string;
  caption: LocalizedText;
  alt: LocalizedText;
}

/** Reuses the existing feature videos/posters with comparison-specific captions. */
export const COMPARISON_EVIDENCE: EvidenceItem[] = [
  {
    videoSrc: "/media/2.%20partial%20align.mp4",
    videoSrcFallback: "/media/2.%20partial%20align-web.mp4",
    posterSrc: "/media/screenshotMS/4.png",
    caption: {
      en: "REVIFF Partial Align independently realigns a region of a drawing sheet whose details were repositioned in the revision.",
      ja: "REVIFF の部分位置合わせは、改訂で位置が変わった図面シートの一部領域を独立して再配置します。",
    },
    alt: {
      en: "REVIFF Partial Align independently aligning a moved architectural detail within a PDF drawing sheet.",
      ja: "REVIFF の部分位置合わせが、PDF 図面シート内で移動した建築ディテールを独立して位置合わせしている様子。",
    },
  },
  {
    videoSrc: "/media/3.%20cloudmark.mp4",
    videoSrcFallback: "/media/3.%20cloudmark-web.mp4",
    posterSrc: "/media/screenshotMS/2.png",
    caption: {
      en: "REVIFF detects changed regions between two drawing revisions and draws Cloudmarks around them automatically.",
      ja: "REVIFF は 2 つの図面改訂間の変更領域を検出し、その周囲に雲マークを自動で描画します。",
    },
    alt: {
      en: "REVIFF automatically drawing revision Cloudmarks around detected changes between two PDF drawing revisions.",
      ja: "REVIFF が 2 つの PDF 図面改訂間で検出した変更箇所に、改訂雲マークを自動で描画している様子。",
    },
  },
];

/* ----------------------------- Internal links ----------------------------- */

export const COMPARISON_LINKS = {
  exploreFeatures: {
    label: { en: "Explore REVIFF alignment features", ja: "REVIFF の位置合わせ機能を見る" },
  },
  install: {
    label: { en: "Install REVIFF from the Microsoft Store", ja: "Microsoft Store から REVIFF をインストール" },
  },
  fromHome: {
    label: { en: "Compare REVIFF with Bluebeam Revu", ja: "REVIFF と Bluebeam Revu を比較する" },
  },
} as const;
