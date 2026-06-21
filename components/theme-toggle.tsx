"use client";

import type { Theme } from "@/lib/theme";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
  compact?: boolean;
}

export function ThemeToggle({ theme, onToggle, compact = false }: ThemeToggleProps) {
  const nextLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const currentLabel = theme === "dark" ? "Dark" : "Light";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={["focus-ring theme-toggle", compact ? "theme-toggle--compact" : ""].filter(Boolean).join(" ")}
      aria-pressed={theme === "dark"}
      aria-label={nextLabel}
      title={nextLabel}
    >
      <span className="theme-toggle__icon" aria-hidden>
        {theme === "dark" ? (
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 2.7a7.1 7.1 0 1 0 4.8 10.8A7.4 7.4 0 0 1 12.5 2.7Z" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3.5" />
            <path d="M10 1.8v2.2M10 16v2.2M3.3 3.3l1.6 1.6M15.1 15.1l1.6 1.6M1.8 10H4M16 10h2.2M3.3 16.7l1.6-1.6M15.1 4.9l1.6-1.6" />
          </svg>
        )}
      </span>
      <span className="theme-toggle__value">{currentLabel}</span>
    </button>
  );
}
