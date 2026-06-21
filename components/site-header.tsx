"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ReviffMark } from "@/components/reviff-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { NAV_ITEMS, PRODUCT } from "@/lib/product";
import type { Locale } from "@/lib/locale";
import { alternateLocalePath, localizePath, t } from "@/lib/locale";
import {
  applyTheme,
  normalizeTheme,
  resolveThemePreference,
  THEME_STORAGE_KEY,
  type Theme,
} from "@/lib/theme";

interface SiteHeaderProps {
  locale: Locale;
  currentPath?: string;
}

export function SiteHeader({ locale, currentPath = "/" }: SiteHeaderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileHeaderHidden, setIsMobileHeaderHidden] = useState(false);
  const [isMobileHeaderElevated, setIsMobileHeaderElevated] = useState(false);
  const [mobileHeaderHeight, setMobileHeaderHeight] = useState(0);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);
  const mobileMenuId = useId();

  // Theme sync
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => {
      const next = resolveThemePreference({
        storedValue: window.localStorage.getItem(THEME_STORAGE_KEY),
        systemPrefersDark: media.matches,
      });
      applyTheme(next);
      setTheme(next);
    };
    syncTheme();
    const onSystemChange = () => {
      if (normalizeTheme(window.localStorage.getItem(THEME_STORAGE_KEY))) return;
      const next = media.matches ? "dark" : "light";
      applyTheme(next);
      setTheme(next);
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  // Lock body scroll when menu is open; close on Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  // Don't hide header while menu is open
  useEffect(() => {
    if (isMobileMenuOpen) setIsMobileHeaderHidden(false);
  }, [isMobileMenuOpen]);

  // Track header height for spacer
  useEffect(() => {
    const headerNode = headerRef.current;
    if (!headerNode) return;
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setMobileHeaderHeight(mq.matches ? headerNode.offsetHeight : 0);
    };
    const observer = new ResizeObserver(update);
    observer.observe(headerNode);
    update();
    mq.addEventListener("change", update);
    return () => {
      observer.disconnect();
      mq.removeEventListener("change", update);
    };
  }, []);

  // Scroll hide/show
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");

    const setHidden = (v: boolean) => setIsMobileHeaderHidden((c) => (c === v ? c : v));
    const setElevated = (v: boolean) => setIsMobileHeaderElevated((c) => (c === v ? c : v));

    const tick = () => {
      rafIdRef.current = null;
      const cur = window.scrollY;
      const prev = lastScrollYRef.current;
      lastScrollYRef.current = cur;

      if (!mq.matches) {
        setHidden(false);
        setElevated(false);
        return;
      }

      setElevated(cur > 10);

      if (isMobileMenuOpen || cur <= 12 || cur < prev - 1) {
        setHidden(false);
        return;
      }
      if (cur > 48 && cur > prev + 2) {
        setHidden(true);
      }
    };

    const onScroll = () => {
      if (rafIdRef.current !== null) return;
      rafIdRef.current = window.requestAnimationFrame(tick);
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    mq.addEventListener("change", onScroll);
    return () => {
      if (rafIdRef.current !== null) window.cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onScroll);
    };
  }, [isMobileMenuOpen]);

  const handleToggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    try { window.localStorage.setItem(THEME_STORAGE_KEY, next); } catch {}
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const headerClass = [
    "site-header",
    isMobileHeaderHidden ? "site-header--mobile-hidden" : "",
    isMobileHeaderElevated ? "site-header--mobile-scrolled" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <header ref={headerRef} className={headerClass}>
        <div className="section-wrap">

          {/* ── Mobile row (hidden on md+ via CSS) ── */}
          <div>
            <div className="mobile-nav-row">
              <Link className="brand-lockup focus-ring" href={localizePath(locale, PRODUCT.routes.home)}>
                <span className="brand-mark">
                  <ReviffMark />
                </span>
                <span>
                  <span className="brand-kicker">{PRODUCT.publisher}</span>
                  <span className="brand-name">{PRODUCT.name}</span>
                </span>
              </Link>

              <div className="mobile-nav-actions">
                <ThemeToggle theme={theme} onToggle={handleToggle} compact />
                <Link className="lang-link focus-ring" href={alternateLocalePath(locale, currentPath)}>
                  {locale === "ja" ? "EN" : "JP"}
                </Link>
                <button
                  type="button"
                  className="focus-ring mobile-menu-trigger"
                  aria-label={locale === "ja" ? "メニューを開く" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls={mobileMenuId}
                  onClick={() => setIsMobileMenuOpen((v) => !v)}
                >
                  <span className="mobile-menu-trigger__icon" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </span>
                  <span className="mobile-menu-trigger__label">
                    {isMobileMenuOpen
                      ? (locale === "ja" ? "閉じる" : "Close")
                      : (locale === "ja" ? "メニュー" : "Menu")}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ── Desktop row (hidden on <md via CSS .header-desktop) ── */}
          <div className="header-desktop header-inner">
            <Link className="brand-lockup focus-ring" href={localizePath(locale, PRODUCT.routes.home)}>
              <span className="brand-mark">
                <ReviffMark />
              </span>
              <span>
                <span className="brand-kicker">{PRODUCT.publisher}</span>
                <span className="brand-name">{PRODUCT.name}</span>
              </span>
            </Link>

            <nav className="nav-links" aria-label={locale === "ja" ? "サイトナビゲーション" : "Site navigation"}>
              {NAV_ITEMS.map((item) => (
                <Link key={item.id} className="nav-link focus-ring" href={localizePath(locale, item.href)}>
                  {t(locale, item.label)}
                </Link>
              ))}
              <ThemeToggle theme={theme} onToggle={handleToggle} />
              <Link className="lang-link focus-ring" href={alternateLocalePath(locale, currentPath)}>
                {locale === "ja" ? "English" : "日本語"}
              </Link>
            </nav>
          </div>

        </div>
      </header>

      {/* Spacer keeps page content from jumping under fixed mobile header */}
      <div
        className="mobile-header-spacer"
        style={mobileHeaderHeight > 0 ? { height: mobileHeaderHeight } : undefined}
        aria-hidden
      />

      {/* ── Mobile menu overlay ── */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-layer" role="presentation">
          <button
            type="button"
            className="mobile-menu-backdrop"
            onClick={closeMobileMenu}
            aria-label={locale === "ja" ? "メニューを閉じる" : "Close menu"}
          />
          <div
            id={mobileMenuId}
            className="mobile-menu-sheet"
            role="dialog"
            aria-modal="true"
            aria-label={locale === "ja" ? "ナビゲーション" : "Navigation"}
          >
            <div className="mobile-menu-head">
              <span className="mobile-menu-kicker">
                {locale === "ja" ? "ナビゲーション" : "Navigation"}
              </span>
              <button type="button" className="mobile-menu-close focus-ring" onClick={closeMobileMenu}>
                {locale === "ja" ? "閉じる" : "Close"}
              </button>
            </div>

            <nav className="mobile-menu-links" aria-label={locale === "ja" ? "サイトナビゲーション" : "Site navigation"}>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  className="mobile-menu-link focus-ring"
                  href={localizePath(locale, item.href)}
                  onClick={closeMobileMenu}
                >
                  {t(locale, item.label)}
                </Link>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <ThemeToggle theme={theme} onToggle={handleToggle} />
              <Link
                className="lang-link focus-ring"
                href={alternateLocalePath(locale, currentPath)}
                onClick={closeMobileMenu}
              >
                {locale === "ja" ? "English" : "日本語"}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
