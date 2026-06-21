export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "reviff-theme";
export const THEME_ATTRIBUTE = "data-theme";

export function normalizeTheme(value: string | null): Theme | null {
  if (value === "light" || value === "dark") return value;
  return null;
}

export function resolveThemePreference({
  storedValue,
  systemPrefersDark,
}: {
  storedValue: string | null;
  systemPrefersDark: boolean;
}): Theme {
  return normalizeTheme(storedValue) ?? (systemPrefersDark ? "dark" : "light");
}

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  document.documentElement.style.colorScheme = theme;
}
