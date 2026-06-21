import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          background: "#0F172A",
        }}
      >
        <div style={{ width: 22, height: 78, background: "#FF5050", transform: "skewX(-12deg)" }} />
        <div style={{ width: 22, height: 102, background: "#BEBEBE", transform: "skewX(-12deg)" }} />
        <div style={{ width: 22, height: 78, background: "#5050FF", transform: "skewX(-12deg)" }} />
      </div>
    ),
    { ...size },
  );
}
