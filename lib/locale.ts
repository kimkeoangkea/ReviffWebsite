export type Locale = "en" | "ja";

export interface LocalizedText {
  en: string;
  ja: string;
}

export function t(locale: Locale, text: LocalizedText): string {
  return text[locale];
}

export function localizePath(locale: Locale, path: string): string {
  if (locale === "en") {
    return path;
  }

  if (path === "/") {
    return "/ja";
  }

  return `/ja${path}`;
}

export function alternateLocalePath(locale: Locale, path: string): string {
  return locale === "en" ? localizePath("ja", path) : path;
}
