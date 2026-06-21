import { useLocation } from "@tanstack/react-router";
import { Icon } from "daleui";
import { useState } from "react";
import { getMessages, localePath, switchLocalePath } from "../i18n";
import type { Locale } from "../i18n/types";
import { AppLink } from "./AppLink";
import { LinkButton } from "./LinkButton";
import { Logo } from "./Logo";
import { DISCORD_URL } from "../links";

function toggleTheme() {
  const root = document.documentElement;
  const dark = root.classList.toggle("dark");
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    // 사파리 프라이빗 모드 등 localStorage 접근 불가 환경에서는 토글만 동작
  }
}

export function Header({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.about, to: localePath(locale, "/about") },
    { label: t.nav.programs, to: localePath(locale, "/programs") },
    { label: t.nav.community, to: localePath(locale, "/community") },
    { label: t.nav.sponsor, to: localePath(locale, "/sponsor") },
  ];

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <div className="site-header-left">
          <AppLink
            className="site-logo"
            to={localePath(locale, "/")}
            onClick={closeMenu}
            aria-label={locale === "ko" ? "달레 스터디 홈" : "DaleStudy home"}
          >
            <Logo />
            <span>{t.siteName}</span>
          </AppLink>
          <nav className="site-nav" aria-label={locale === "ko" ? "주 메뉴" : "Main menu"}>
            {navItems.map((item) => (
              <AppLink
                key={item.to}
                to={item.to}
                aria-current={isActive(item.to) ? "page" : undefined}
              >
                {item.label}
              </AppLink>
            ))}
          </nav>
        </div>
        <div className="site-header-actions">
          <AppLink
            className="header-icon-btn"
            to={switchLocalePath(pathname)}
            aria-label={locale === "ko" ? "Switch to English" : "한국어로 전환"}
          >
            {t.langSwitch}
          </AppLink>
          <button
            type="button"
            className="header-icon-btn"
            onClick={toggleTheme}
            aria-label={locale === "ko" ? "다크 모드 전환" : "Toggle dark mode"}
          >
            <span className="theme-icon-moon">
              <Icon name="moon" size="sm" />
            </span>
            <span className="theme-icon-sun">
              <Icon name="sun" size="sm" />
            </span>
          </button>
          <span className="desktop-cta">
            <LinkButton href={DISCORD_URL} size="md">
              <Icon name="Discord" size="sm" />
              {t.cta.joinDiscord}
            </LinkButton>
          </span>
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={locale === "ko" ? "메뉴 열기" : "Open menu"}
          >
            <Icon name={menuOpen ? "x" : "menu"} size="sm" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label={locale === "ko" ? "모바일 메뉴" : "Mobile menu"}>
          {navItems.map((item) => (
            <AppLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              aria-current={isActive(item.to) ? "page" : undefined}
            >
              {item.label}
            </AppLink>
          ))}
          <LinkButton href={DISCORD_URL} size="md">
            <Icon name="Discord" size="sm" />
            {t.cta.joinDiscord}
          </LinkButton>
        </nav>
      )}
    </header>
  );
}
