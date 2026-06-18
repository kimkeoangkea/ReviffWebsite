import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "Noto Sans JP", "system-ui", "sans-serif"],
        sans: ["Space Grotesk", "Noto Sans JP", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"],
      },
      colors: {
        brand: {
          accent: "var(--accent)",
          ink: "var(--text-primary)",
          muted: "var(--text-muted)",
          surface: "var(--bg-surface)",
        },
      },
      boxShadow: {
        card: "var(--shadow-card)",
        soft: "var(--shadow-soft)",
      },
    },
  },
  plugins: [],
};

export default config;
