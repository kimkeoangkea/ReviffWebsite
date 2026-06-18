import type { Locale } from "@/lib/locale";
import { HERO_COPY } from "@/lib/content";
import { t } from "@/lib/locale";

export function AppVisual({ locale }: { locale: Locale }) {
  return (
    <div className="app-visual">
      <div className="app-window" aria-label={locale === "ja" ? "REVIFF の比較画面イメージ" : "REVIFF comparison screen preview"}>
        <div className="app-window__chrome">
          <span className="app-window__dots" aria-hidden>
            <span className="app-window__dot" />
            <span className="app-window__dot" />
            <span className="app-window__dot" />
          </span>
          <span>REVIFF / Compare</span>
        </div>

        <div className="mock-shell">
          <aside className="mock-sidebar" aria-hidden="true">
            <div className="mock-phase">
              <div className="mock-pill mock-pill--active">Page Review</div>
              <div className="mock-pill">Compare</div>
              <div className="mock-pill">Export</div>
            </div>
            <div className="mock-page-list">
              <div className="mock-page"><span>94%</span></div>
              <div className="mock-page"><span>Changed</span></div>
              <div className="mock-page"><span>Aligned</span></div>
            </div>
          </aside>

          <div className="mock-canvas">
            <div className="mock-toolbar" aria-hidden="true">
              <span className="mock-tool mock-tool--hot">Diff</span>
              <span className="mock-tool">Align</span>
              <span className="mock-tool">Cloud</span>
              <span className="mock-tool">Layers</span>
              <span className="mock-tool">Export</span>
            </div>

            <div className="mock-drawing" aria-hidden="true">
              <span className="plan-line" style={{ left: "8%", top: "22%", width: "58%" }} />
              <span className="plan-line" style={{ left: "18%", top: "38%", width: "68%" }} />
              <span className="plan-line" style={{ left: "12%", top: "62%", width: "44%" }} />
              <span className="plan-line plan-line--v" style={{ left: "18%", top: "18%", bottom: "20%" }} />
              <span className="plan-line plan-line--v" style={{ left: "45%", top: "24%", bottom: "28%" }} />
              <span className="plan-line plan-line--v" style={{ left: "73%", top: "34%", bottom: "18%" }} />
              <span className="diff-added" style={{ left: "55%", top: "30%", width: "18%", height: "18%" }} />
              <span className="diff-removed" style={{ left: "24%", top: "53%", width: "16%", height: "14%" }} />
              <span className="cloud-mark" style={{ left: "51%", top: "26%", width: "27%", height: "26%" }} />
              <span className="cloud-mark" style={{ left: "20%", top: "49%", width: "24%", height: "22%" }} />
              <span className="annotation-box" style={{ right: "7%", top: "13%" }}>A-12</span>
              <span className="connector-line" style={{ right: "14%", top: "25%" }} />
            </div>
          </div>
        </div>
      </div>

      <p className="caption">{t(locale, HERO_COPY.visualCaption)}</p>
    </div>
  );
}
