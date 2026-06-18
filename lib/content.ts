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
    en: "Compare revised PDF drawing sets and supported image files on your Windows PC. No cloud upload. Microsoft Store install. Free during the v1 launch.",
    ja: "改訂 PDF 図面セットと対応画像ファイルを、Windows PC 上で比較できます。クラウドアップロード不要。Microsoft Store からインストール。v1 ローンチ期間中は無料です。",
  },
  primaryCta: {
    en: "Get it from Microsoft Store",
    ja: "Microsoft Store で入手",
  },
  primaryHint: {
    en: "Store link is configurable before launch",
    ja: "公開前に Store リンクを差し替え可能",
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
    en: "Review Before and After drawings, align mismatched pages, highlight changed regions, and export the result for your team.",
    ja: "Before / After 図面を確認し、位置ずれを合わせ、変更箇所を可視化して、チーム向けの結果として出力できます。",
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
    value: { en: "Free during v1", ja: "v1 期間は無料" },
    label: { en: "Launch pricing", ja: "ローンチ価格" },
    body: {
      en: "The first Store release is positioned for adoption and feedback.",
      ja: "最初の Store リリースは、導入とフィードバックを重視しています。",
    },
  },
  {
    id: "formats",
    value: { en: "PDF + images", ja: "PDF + 画像" },
    label: { en: "Input support", ja: "対応ファイル" },
    body: {
      en: "Use PDFs or supported raster image files in the same review workflow.",
      ja: "PDF と対応ラスター画像を同じレビュー手順で扱えます。",
    },
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "load",
    title: { en: "1. Load and pair sheets", ja: "1. 読み込みとペア確認" },
    body: {
      en: "Drop in the Before and After set, then review page pairing, similarity, file type, and sheet size before comparison starts.",
      ja: "Before / After のセットを読み込み、比較前にページ対応、類似度、ファイル形式、シートサイズを確認します。",
    },
    callout: { en: "PDF, PNG, JPG, BMP, GIF, TIF", ja: "PDF、PNG、JPG、BMP、GIF、TIF" },
  },
  {
    id: "align",
    title: { en: "2. Align what moved", ja: "2. 位置ずれを合わせる" },
    body: {
      en: "Use auto align, manual point alignment, or partial alignment when revised drawings shifted, rotated, scaled, or moved only in one area.",
      ja: "図面全体の移動、回転、倍率差、または一部だけの移動に対して、自動位置合わせ、手動点指定、部分位置合わせを使えます。",
    },
    callout: { en: "Auto, manual, and partial alignment", ja: "自動・手動・部分位置合わせ" },
  },
  {
    id: "review",
    title: { en: "3. Compare and mark changes", ja: "3. 差分確認とマークアップ" },
    body: {
      en: "Switch between split and diff views, tune compare colors, generate revision clouds, and add annotation layers, labels, shapes, or connectors.",
      ja: "分割表示と差分表示を切り替え、比較色を調整し、雲マークや注釈レイヤー、ラベル、図形、コネクターを追加できます。",
    },
    callout: { en: "Clouds, labels, shapes, connectors", ja: "雲マーク、ラベル、図形、コネクター" },
  },
  {
    id: "deliver",
    title: { en: "4. Export the review", ja: "4. レビュー結果を書き出す" },
    body: {
      en: "Export changed pages to PDF or PNG so the result fits into standard drawing review and Acrobat-based handoff workflows.",
      ja: "変更ページを PDF または PNG として書き出し、一般的な図面レビューや Acrobat ベースの共有フローに接続できます。",
    },
    callout: { en: "PDF / PNG deliverables", ja: "PDF / PNG 出力" },
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
      en: "The v1 workflow adds alignment controls, richer cloud styling, compare color presets, layer organization, annotation boxes, shape elements, and connector styling for review-ready output.",
      ja: "v1 では、位置合わせ、雲マークのスタイル、比較色プリセット、レイヤー整理、注釈ボックス、図形要素、コネクター設定までレビュー用の出力を整えられます。",
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
      en: "REVIFF is free during the v1 launch so architectural users can try the Store release and send practical workflow feedback.",
      ja: "REVIFF は v1 ローンチ期間中無料です。建築実務のユーザーに Store 版を試してもらい、実際のワークフローに基づくフィードバックを集めるためです。",
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
      en: "The v1 launch uses Microsoft Store distribution to make install, update, and product identity clearer for Windows users.",
      ja: "v1 ローンチでは、Windows ユーザーにとってインストール、更新、製品識別をわかりやすくするため Microsoft Store 配布を採用します。",
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
      en: "The first REVIFF release moves the drawing comparison workflow into a Store-first Windows app with stronger alignment, review, annotation, and update foundations.",
      ja: "最初の REVIFF リリースでは、図面比較ワークフローを Store 優先の Windows アプリへ移行し、位置合わせ、レビュー、注釈、アップデート基盤を強化しました。",
    },
    highlights: [
      { value: { en: "1.0.0.0", ja: "1.0.0.0" }, label: { en: "Release version", ja: "リリースバージョン" } },
      { value: { en: "Store/MSIX", ja: "Store/MSIX" }, label: { en: "Distribution", ja: "配布形式" } },
      { value: { en: "PDF + images", ja: "PDF + 画像" }, label: { en: "Input scope", ja: "入力対応" } },
      { value: { en: "Alignment", ja: "位置合わせ" }, label: { en: "Auto / manual / partial", ja: "自動・手動・部分" } },
    ],
    sections: [
      {
        title: { en: "Store and Windows integration", ja: "Store と Windows 連携" },
        tone: "accent",
        items: [
          {
            en: "Prepared Microsoft Store/MSIX packaging for the v1.0.0.0 release.",
            ja: "v1.0.0.0 リリース向けに Microsoft Store/MSIX パッケージを準備しました。",
          },
          {
            en: "Added supported-file registration so Windows can offer REVIFF for PDFs and supported images.",
            ja: "PDF と対応画像に対して Windows から REVIFF を選べるよう、対応ファイル登録を追加しました。",
          },
          {
            en: "Added a signed remote update-gate foundation for future update guidance.",
            ja: "今後のアップデート案内に向けて、署名付きリモート更新ゲートの基盤を追加しました。",
          },
        ],
      },
      {
        title: { en: "Alignment and comparison", ja: "位置合わせと比較" },
        tone: "blue",
        items: [
          {
            en: "Added auto alignment, manual point alignment, and partial alignment for shifted drawing content.",
            ja: "移動した図面内容に対応するため、自動位置合わせ、手動点指定、部分位置合わせを追加しました。",
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
        title: { en: "Review markup", ja: "レビュー用マークアップ" },
        tone: "warm",
        items: [
          {
            en: "Added richer layer organization, annotation boxes, shape elements, connectors, and connector styling.",
            ja: "レイヤー整理、注釈ボックス、図形要素、コネクター、コネクターのスタイル設定を強化しました。",
          },
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
];

export const DOWNLOAD_COPY = {
  title: {
    en: "Install REVIFF from Microsoft Store",
    ja: "Microsoft Store から REVIFF をインストール",
  },
  body: {
    en: "The v1 release is distributed through Microsoft Store only. The Store URL is controlled by one launch config value, so the final Partner Center link can be swapped in when it is ready.",
    ja: "v1 リリースは Microsoft Store のみで配布します。Store URL は 1 つの設定値で管理されるため、Partner Center の最終リンクが準備でき次第差し替えられます。",
  },
  steps: [
    {
      title: { en: "Open the Store listing", ja: "Store ページを開く" },
      body: {
        en: "Use the primary button to open the configured Microsoft Store destination.",
        ja: "メインボタンから、設定済みの Microsoft Store 宛先を開きます。",
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
