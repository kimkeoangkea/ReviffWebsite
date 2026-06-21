import { ImageResponse } from "next/og";
import { PRODUCT } from "@/lib/product";

export const alt = "REVIFF by AEC DX Labs — local PDF and drawing comparison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0b0f15",
          color: "#f6f5f3",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            letterSpacing: 6,
            color: "#9aa3af",
            textTransform: "uppercase",
          }}
        >
          {PRODUCT.publisher}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 28 }}>
            <div style={{ display: "flex", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 26, height: 96, background: "#FF5050", transform: "skewX(-12deg)" }} />
              <div style={{ width: 26, height: 124, background: "#BEBEBE", transform: "skewX(-12deg)" }} />
              <div style={{ width: 26, height: 96, background: "#5050FF", transform: "skewX(-12deg)" }} />
            </div>
            <div style={{ display: "flex", fontSize: 150, fontWeight: 700, letterSpacing: -4 }}>
              {PRODUCT.name}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 44, color: "#cdd3db", marginTop: 12 }}>
            {PRODUCT.tagline.en}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 30, color: "#9aa3af" }}>
          100% local · Free on Microsoft Store · No signup, no watermark
        </div>
      </div>
    ),
    { ...size },
  );
}
