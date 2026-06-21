/// <reference types="vite/client" />
import { createRootRoute, HeadContent, Outlet, Scripts, useLocation } from "@tanstack/react-router";
import jetbrainsMonoCss from "@fontsource-variable/jetbrains-mono/index.css?url";
import daleuiCss from "daleui/styles.css?url";
import pretendardCss from "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css?url";
import type { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { localeFromPath } from "../i18n";
import { NotFoundPage } from "../pages/NotFoundPage";
import { SITE_URL } from "../seo";
import siteCss from "../styles/site.css?url";

/** 첫 페인트 전에 저장된 테마를 적용해 다크모드 깜빡임을 막는다. */
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

const gtmScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-57XX6LZ3');`;

const jsonLd = JSON.stringify([
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "달레 스터디",
    alternateName: "DaleStudy",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [
      "https://github.com/DaleStudy",
      "https://linkedin.com/company/dalestudy",
      "https://dales.link/discord",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "달레 스터디",
    url: SITE_URL,
    inLanguage: ["ko", "en"],
  },
]);

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "stylesheet", href: pretendardCss },
      { rel: "stylesheet", href: jetbrainsMonoCss },
      { rel: "stylesheet", href: daleuiCss },
      { rel: "stylesheet", href: siteCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    scripts: [
      { children: themeInitScript },
      { children: gtmScript },
      { type: "application/ld+json", children: jsonLd },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundPage,
});

function RootComponent() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);

  return (
    <RootDocument locale={locale}>
      <Header locale={locale} />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer locale={locale} />
    </RootDocument>
  );
}

function RootDocument({ children, locale }: Readonly<{ children: ReactNode; locale: string }>) {
  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-57XX6LZ3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <div className="site-root">{children}</div>
        <Scripts />
      </body>
    </html>
  );
}
