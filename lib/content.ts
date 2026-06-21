import type { LocalizedText } from "@/lib/locale";

export interface Metric {
  id: string;
  value: LocalizedText;
  label: LocalizedText;
  body: LocalizedText;
}

export interface WorkflowStep {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
  callout: LocalizedText;
  imageBase: string;
}

export interface Feature {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  body: LocalizedText;
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
}

export interface ChangelogSection {
  title: LocalizedText;
  items: LocalizedText[];
  tone?: "blue" | "accent" | "warm" | "default";
}

export interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  label: LocalizedText;
  summary: LocalizedText;
  highlights: { value: LocalizedText; label: LocalizedText }[];
  sections: ChangelogSection[];
}

export const HERO_COPY = {
  eyebrow: {
    en: "REVIFF by AEC DX Labs",
    ja: "REVIFF by AEC DX Labs",
  },
  title: {
    en: "Local PDF and drawing comparison for architects.",
    ja: "建築図面の差分確認を、手元の Windows PC で。",
  },
  body: {
    en: "A 100% local PDF comparison tool for architectural drawing sets. No cloud upload, no signup, no subscription.",
    ja: "建築図面向けの 100% ローカル PDF 比較ツールです。クラウドアップロード不要、サインアップ不要、サブスク不要。",
  },
  primaryCta: {
    en: "Download Free",
    ja: "Microsoft Store で入手",
  },
  primaryHint: {
    en: "No signup. No subscription.",
    ja: "サインアップ不要。サブスク不要。",
  },
  secondaryCta: {
    en: "View v1 changelog",
    ja: "v1 更新履歴を見る",
  },
  specs: [
    { en: "Version 1.0.0.0", ja: "Version 1.0.0.0" },
    { en: "Windows desktop", ja: "Windows デスクトップ" },
    { en: "PDF + images", ja: "PDF + 画像" },
    { en: "Local processing", ja: "ローカル処理" },
  ] as LocalizedText[],
  visualCaption: {
    en: "Split mode supports side-by-side checks, and Diff mode highlights added content in red and removed content in blue.",
    ja: "分割モードで並列確認し、差分モードで追加を赤・削除を青にハイライト表示します。",
  },
} as const;

export const METRICS: Metric[] = [
  {
    id: "local",
    value: { en: "0 cloud uploads", ja: "クラウド送信 0" },
    label: { en: "Data handling", ja: "データ処理" },
    body: {
      en: "Drawing comparison stays on the local Windows machine.",
      ja: "図面比較は Windows PC 上でローカルに処理されます。",
    },
  },
  {
    id: "price",
    value: { en: "Free", ja: "無料" },
    label: { en: "Pricing", ja: "価格" },
    body: {
      en: "No signup, no subscription, no premium feature locked, no watermark.",
      ja: "サインアップ不要、サブスク不要、プレミアム機能ロックなし、透かしなし。",
    },
  },
  {
    id: "formats",
    value: { en: "Store install", ja: "Store 版" },
    label: { en: "Windows path", ja: "Windows 導線" },
    body: {
      en: "Microsoft Store is the install and update path.",
      ja: "Microsoft Store がインストールと更新の導線です。",
    },
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "load",
    title: { en: "1. Load & Align (Page Review)", ja: "1. 読み込みとペアリング（ページ確認）" },
    body: {
      en: "Drop in your Before and After PDF sets and arrange the pages to match. Built-in similarity scoring helps you catch sheet mismatches or scale issues before review begins.",
      ja: "変更前（Before）と変更後（After）の PDF を読み込み、比較するページをペアリングします。類似度スコアにより、レビュー開始前にシートの不一致や尺度のズレを確認できます。",
    },
    callout: { en: "PDF, PNG, JPG, BMP, GIF, TIF", ja: "PDF、PNG、JPG、BMP、GIF、TIF" },
    imageBase: "/media/workflow-1-loading-pdf",
  },
  {
    id: "diff",
    title: { en: "2. Compare & Cloud (Diff Mode)", ja: "2. 差分検出と自動マークアップ（比較）" },
    body: {
      en: "Spot differences instantly using Split or Diff viewing modes with synchronized zoom and pan. REVIFF detects changed regions and generates Cloud Marks around them.",
      ja: "分割（Split）および差分（Diff）モードと、同期されたズーム・パンにより、変更箇所を素早く確認できます。REVIFF は変更領域を検出し、その周囲に雲マークを生成します。",
    },
    callout: { en: "Split / Diff / Cloud Marks", ja: "Split / Diff / 雲マーク" },
    imageBase: "/media/workflow-3-split-mode-cloudmark",
  },
  {
    id: "export",
    title: { en: "3. Export the Deliverable (Export)", ja: "3. レビュー結果のエクスポート（出力）" },
    body: {
      en: "Select changed pages and export the result to PDF or PNG. The output is ready to share with teammates and reviewers.",
      ja: "変更があったページを選択し、結果を PDF または PNG として出力できます。チームやレビュアーへそのまま共有できる形に整えられます。",
    },
    callout: { en: "PDF / PNG deliverables", ja: "PDF / PNG 出力" },
    imageBase: "/media/workflow-4-export",
  },
];

export interface FeatureShowcase {
  id: string;
  badge: LocalizedText;
  badgeColor: "blue" | "amber" | "green";
  headline: LocalizedText;
  subline: LocalizedText;
  body: LocalizedText;
  videoSrc: string;
}

export const FEATURE_SHOWCASE: FeatureShowcase[] = [
  {
    id: "auto-align",
    badge: { en: "Auto-align", ja: "自動位置合わせ" },
    badgeColor: "blue",
    headline: { en: "Pages don't line up?", ja: "ページの位置がずれていた？" },
    subline: { en: "One click to fix it.", ja: "ワンクリックで揃えます。" },
    body: {
      en: "When a diff reveals misaligned pages, hit Auto-align and REVIFF corrects scale and offset in one click — then re-runs the comparison cleanly.",
      ja: "差分確認でズレを発見したら、自動位置合わせを実行。スケール・オフセットを補正して、そのまま再比較まで完結します。",
    },
    videoSrc: "/media/1.%20auto-align.mp4",
  },
  {
    id: "partial-align",
    badge: { en: "Partial Align", ja: "部分位置合わせ" },
    badgeColor: "amber",
    headline: { en: "Only part of the page moved?", ja: "シートの一部だけがずれている？" },
    subline: { en: "Crop it. Realign just that area.", ja: "その範囲だけを補正できます。" },
    body: {
      en: "Select a region and realign just that area independently. Works when different parts of a sheet were revised at different scales or positions.",
      ja: "補正したい範囲を選択して、その領域だけを独立して位置合わせできます。シートの異なる箇所が別々に改訂された図面にも対応。",
    },
    videoSrc: "/media/2.%20partial%20align.mp4",
  },
  {
    id: "cloudmark",
    badge: { en: "Cloudmark", ja: "雲マーク" },
    badgeColor: "green",
    headline: { en: "Where exactly did it change?", ja: "どこが変わったか、すぐわかる。" },
    subline: { en: "Every change, circled automatically.", ja: "変更箇所に自動で雲マークを生成。" },
    body: {
      en: "REVIFF detects modified regions and draws cloud marks around them — the standard engineering annotation. Nothing slips through. Export is ready to hand off.",
      ja: "REVIFF が変更領域を検出し、建築・建設図面で標準的な雲マークを自動で描画。見落としなく、そのまま提出できる形で出力されます。",
    },
    videoSrc: "/media/3.%20cloudmark.mp4",
  },
];

export const FEATURES: Feature[] = [
  {
    id: "store",
    eyebrow: { en: "Microsoft Store release", ja: "Microsoft Store リリース" },
    title: { en: "A cleaner v1 install path.", ja: "v1 は、よりわかりやすい導入経路へ。" },
    body: {
      en: "REVIFF v1.0.0.0 is prepared as a Store-first Windows app with MSIX packaging, app identity, supported-file registration, and a foundation for signed update guidance.",
      ja: "REVIFF v1.0.0.0 は Store 優先の Windows アプリとして、MSIX パッケージ、アプリ識別、対応ファイル登録、署名付きアップデート案内の基盤を備えています。",
    },
  },
  {
    id: "review-tools",
    eyebrow: { en: "Review workspace", ja: "レビュー作業画面" },
    title: { en: "More than red and blue pixels.", ja: "赤青の差分表示だけで終わらない。" },
    body: {
      en: "The v1 workflow adds alignment controls, expanded cloud mark styling, compare color presets, and review-ready PDF/PNG output.",
      ja: "v1 では、位置合わせ、雲マークのスタイル、比較色プリセット、レビュー用の PDF/PNG 出力を整えられます。",
    },
  },
  {
    id: "local",
    eyebrow: { en: "Local by design", ja: "ローカル前提の設計" },
    title: { en: "Sensitive drawings stay on the workstation.", ja: "機密性の高い図面を端末の外へ出さない。" },
    body: {
      en: "The comparison workflow is designed for local review on standard Windows workstations, which keeps document handling easier to explain to project and IT stakeholders.",
      ja: "標準的な Windows ワークステーションでローカルレビューできる設計により、プロジェクト関係者や IT 担当者へデータ取り扱いを説明しやすくなります。",
    },
  },
];

export const FAQ: FaqItem[] = [
  {
    id: "price",
    question: { en: "Is REVIFF free?", ja: "REVIFF は無料ですか？" },
    answer: {
      en: "Yes. REVIFF is free. No signup, no subscription, no premium feature locked, and no watermark.",
      ja: "はい。REVIFF は無料です。サインアップ不要、サブスク不要、プレミアム機能ロックなし、透かしなしです。",
    },
  },
  {
    id: "offline",
    question: { en: "Does REVIFF upload drawings?", ja: "図面はアップロードされますか？" },
    answer: {
      en: "No. The comparison workflow runs locally on your Windows PC.",
      ja: "いいえ。比較ワークフローは Windows PC 上でローカルに実行されます。",
    },
  },
  {
    id: "formats",
    question: { en: "What file types can it compare?", ja: "どのファイル形式に対応していますか？" },
    answer: {
      en: "REVIFF supports PDF and common image formats including PNG, JPG, JPEG, BMP, GIF, TIF, and TIFF.",
      ja: "REVIFF は PDF のほか、PNG、JPG、JPEG、BMP、GIF、TIF、TIFF などの一般的な画像形式に対応します。",
    },
  },
  {
    id: "store",
    question: { en: "Why Microsoft Store only?", ja: "なぜ Microsoft Store のみですか？" },
    answer: {
      en: "Microsoft Store keeps install, updates, and product identity clearer for Windows users.",
      ja: "Microsoft Store により、Windows ユーザーにとってインストール、更新、製品識別がわかりやすくなります。",
    },
  },
];

export const CHANGELOG: ChangelogEntry[] = [
  {
    id: "v1-0-0-0",
    version: "REVIFF v1.0.0.0",
    date: "2026-06-18",
    label: { en: "First Store release", ja: "初回 Store リリース" },
    summary: {
      en: "The first REVIFF release moves the drawing comparison workflow into a Store-first Windows app with stronger alignment, comparison, cloud mark styling, and update foundations.",
      ja: "最初の REVIFF リリースでは、図面比較ワークフローを Store 優先の Windows アプリへ移行し、位置合わせ、比較、雲マークのスタイル、アップデート基盤を強化しました。",
    },
    highlights: [
      { value: { en: "1.0.0.0", ja: "1.0.0.0" }, label: { en: "Release version", ja: "リリースバージョン" } },
      { value: { en: "Store/MSIX", ja: "Store/MSIX" }, label: { en: "Distribution", ja: "配布形式" } },
      { value: { en: "PDF + images", ja: "PDF + 画像" }, label: { en: "Input scope", ja: "入力対応" } },
      { value: { en: "Alignment", ja: "位置合わせ" }, label: { en: "Auto / partial", ja: "自動・部分" } },
    ],
    sections: [
      {
        title: { en: "Alignment and comparison", ja: "位置合わせと比較" },
        tone: "blue",
        items: [
          {
            en: "Added auto alignment and partial alignment for shifted drawing content.",
            ja: "移動した図面内容に対応するため、自動位置合わせと部分位置合わせを追加しました。",
          },
          {
            en: "Improved structural raster preprocessing and diff refresh handling for aligned pages.",
            ja: "位置合わせ後のページに対して、構造的なラスタ前処理と差分更新処理を改善しました。",
          },
          {
            en: "Expanded compare color controls with presets, custom colors, and changed-page refresh.",
            ja: "プリセット、カスタム色、変更ページ更新を含む比較色コントロールを拡張しました。",
          },
        ],
      },
      {
        title: { en: "Cloud marks and export", ja: "雲マークと出力" },
        tone: "warm",
        items: [
          {
            en: "Expanded cloud mark appearance controls for stroke, fill, opacity, and change-type color scope.",
            ja: "線、塗り、透明度、変更タイプ別の色範囲など、雲マークの外観設定を拡張しました。",
          },
          {
            en: "Kept export focused on review-ready PDF and PNG deliverables.",
            ja: "レビュー結果として扱いやすい PDF と PNG 出力に引き続き対応しています。",
          },
        ],
      },
    ],
  },
  {
    id: "beta-v0-9-0",
    version: "BETA v0.9.0",
    date: "2026-03-19",
    label: { en: "First public beta", ja: "初回パブリックベータ" },
    summary: {
      en: "First public beta release, originally published as PDF Diff. This version introduced the core local workflow for loading two drawing sets, comparing pages, reviewing detected changes, and exporting results.",
      ja: "PDF Diff として公開した初回パブリックベータです。2 つの図面セットを読み込み、ページを比較し、検出された変更を確認し、結果を書き出すまでのローカル完結ワークフローを導入しました。",
    },
    highlights: [
      { value: { en: "Local-first", ja: "ローカル完結" }, label: { en: "Drawing set comparison", ja: "図面セット比較" } },
      { value: { en: "Split / Diff", ja: "分割 / 差分" }, label: { en: "Review modes", ja: "レビュー表示" } },
      { value: { en: "Cloud Marks", ja: "雲マーク" }, label: { en: "Beta markup workflow", ja: "ベータのマークアップ機能" } },
      { value: { en: "PDF + PNG", ja: "PDF + PNG" }, label: { en: "Export output", ja: "書き出し形式" } },
      { value: { en: "EN / JA", ja: "英語 / 日本語" }, label: { en: "Language support", ja: "言語対応" } },
    ],
    sections: [
      {
        title: { en: "Core comparison", ja: "比較の基本機能" },
        tone: "blue",
        items: [
          {
            en: "Compare Before and After PDF drawing sets locally.",
            ja: "Before / After の PDF 図面セットをローカル環境で比較できるようにしました。",
          },
          {
            en: "Compare selected pages or the full drawing set.",
            ja: "選択したページのみ、または図面セット全体を比較できるようにしました。",
          },
          {
            en: "Review page thumbnails with similarity scoring to identify changed sheets faster.",
            ja: "類似度スコア付きのサムネイルで、変更のあるシートを素早く特定できるようにしました。",
          },
          {
            en: "Detect page-size mismatches and apply preview size matching when sheets do not align cleanly.",
            ja: "ページサイズの不一致を検出し、図面の位置やサイズが合っていない場合でもプレビュー上でサイズ合わせできるようにしました。",
          },
        ],
      },
      {
        title: { en: "Reviewing changes", ja: "変更レビュー" },
        tone: "accent",
        items: [
          {
            en: "Use Split and Diff viewing modes for side-by-side review and change-focused inspection.",
            ja: "分割モードと差分モードを使い分けて、左右に並べての比較や、差分に特化したレビューを行えるようにしました。",
          },
          {
            en: "Use synced zoom and pan, fit-to-screen, and full-screen controls for closer review.",
            ja: "同期ズーム・パン、画面に合わせる表示、全画面表示で細部まで確認できるようにしました。",
          },
          {
            en: "Switch between Before, After, and Result layers while working in Diff view.",
            ja: "Diff 表示中に Before / After / Result レイヤーを切り替えられるようにしました。",
          },
          {
            en: "Adjust compare colors with presets and custom color controls.",
            ja: "プリセットとカスタム設定で比較色を調整できるようにしました。",
          },
          {
            en: "Move through changed pages faster with built-in keyboard shortcuts.",
            ja: "組み込みのキーボードショートカットで変更ページを素早く移動できるようにしました。",
          },
        ],
      },
      {
        title: { en: "Diff markers and cloud marks", ja: "差分マーカーと雲マーク" },
        tone: "warm",
        items: [
          {
            en: "Generate cloud marks for the current page or all selected changed pages.",
            ja: "現在のページ、または選択した変更ページすべてに雲マークを生成できるようにしました。",
          },
          {
            en: "Browse detected regions more easily from the dedicated Changes tab.",
            ja: "Changes タブから検出領域を見やすく確認できるようにしました。",
          },
          {
            en: "Merge, break apart, move, and resize cloud marks during review.",
            ja: "レビュー中に雲マークの結合、分割、移動、サイズ変更ができるようにしました。",
          },
          {
            en: "Undo and redo cloud mark edits while refining change areas.",
            ja: "変更範囲の調整中に、雲マーク編集の元に戻す・やり直しができるようにしました。",
          },
          {
            en: "Adjust cloud numbering and size controls for clearer review output.",
            ja: "レビュー結果を見やすくするために、雲マークの番号やサイズを調整できるようにしました。",
          },
        ],
      },
      {
        title: { en: "Export and workflow polish", ja: "書き出しとワークフロー改善" },
        tone: "default",
        items: [
          {
            en: "Export results to PDF or PNG.",
            ja: "結果を PDF または PNG に書き出せるようにしました。",
          },
          {
            en: "Export all pages, clear selections, or export changed pages only.",
            ja: "全ページ、選択したページ、または変更があったページのみの書き出しに対応しました。",
          },
          {
            en: "Create export-ready output with cloud mark overlays and automatic file naming.",
            ja: "雲マークをオーバーレイ表示した状態で、ファイル名を自動付与して書き出せるようにしました。",
          },
          {
            en: "Track longer jobs with progress feedback and cancellation support.",
            ja: "進捗バーの表示とキャンセル機能により、時間のかかる処理の状況を確認できるようにしました。",
          },
          {
            en: "Review larger drawing sets more smoothly during page-to-page navigation.",
            ja: "大きな図面セットでもページ移動をよりスムーズに行えるようにしました。",
          },
        ],
      },
      {
        title: { en: "Settings and utility", ja: "設定とユーティリティ" },
        tone: "blue",
        items: [
          {
            en: "Save preferences for viewer mode, default cloud mark behavior, and language.",
            ja: "ビューモード、雲マークのデフォルト設定、言語設定を保存できるようにしました。",
          },
          {
            en: "Use the app in English or Japanese.",
            ja: "アプリを英語と日本語で使えるようにしました。",
          },
          {
            en: "Open the Help & Shortcuts panel for quicker onboarding.",
            ja: "Help & Shortcuts パネルで素早く使い始められるようにしました。",
          },
          {
            en: "Access the Settings and About dialog for version and product details.",
            ja: "Settings ダイアログや About ダイアログからバージョン情報や製品情報を確認できるようにしました。",
          },
          {
            en: "View application logs and third-party notices from built-in utility screens.",
            ja: "ユーティリティ画面から、アプリのログやサードパーティライセンス情報を確認できるようにしました。",
          },
        ],
      },
    ],
  },
];

export const DOWNLOAD_COPY = {
  title: {
    en: "Install REVIFF from Microsoft Store",
    ja: "Microsoft Store から REVIFF をインストール",
  },
  body: {
    en: "REVIFF is free on Microsoft Store. No signup, no subscription, no premium feature locked, and no watermark.",
    ja: "REVIFF は Microsoft Store で無料です。サインアップ不要、サブスク不要、プレミアム機能ロックなし、透かしなしです。",
  },
  steps: [
    {
      title: { en: "Open the Store listing", ja: "Store ページを開く" },
      body: {
        en: "Use the primary button to open the Microsoft Store page.",
        ja: "メインボタンから Microsoft Store ページを開きます。",
      },
    },
    {
      title: { en: "Install on Windows", ja: "Windows にインストール" },
      body: {
        en: "Install REVIFF on a 64-bit Windows desktop that meets the Store requirements.",
        ja: "Store 要件を満たす 64-bit Windows デスクトップに REVIFF をインストールします。",
      },
    },
    {
      title: { en: "Open drawings locally", ja: "図面をローカルで開く" },
      body: {
        en: "Load PDF sets or supported image files and keep the review workflow on your machine.",
        ja: "PDF セットまたは対応画像ファイルを読み込み、レビュー作業を手元の端末で完結できます。",
      },
    },
  ],
} as const;
