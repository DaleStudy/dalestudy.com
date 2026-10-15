import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { localePath } from "./src/i18n";
import { ko } from "./src/i18n/ko";
import { SITE_URL } from "./src/seo";

/** prerender된 페이지로 sitemap.xml과 llms.txt를 만든다. */
export function seoFiles(): Plugin {
  return {
    name: "dalestudy:seo-files",
    // prerender가 끝난 뒤 실행되도록 tanstackStart() 뒤에 등록한다
    enforce: "post",
    buildApp: {
      order: "post",
      async handler(builder) {
        const clientDir = path.resolve(
          builder.config.root,
          builder.environments.client.config.build.outDir,
        );
        const pages = collectPages(clientDir);
        if (pages.length === 0) {
          throw new Error(`[seo-files] ${clientDir}에서 prerender된 페이지를 찾지 못했습니다.`);
        }

        const koPages = pages
          .filter((page) => page !== "/en" && !page.startsWith("/en/"))
          .sort((a, b) => menuOrder(a) - menuOrder(b));

        writeFileSync(path.join(clientDir, "sitemap.xml"), buildSitemap(koPages));
        const template = readFileSync(
          path.resolve(builder.config.root, "llms.template.txt"),
          "utf8",
        );
        writeFileSync(
          path.join(clientDir, "llms.txt"),
          buildLlmsTxt(template, clientDir, pages, koPages),
        );
      },
    },
  };
}

/** `about/index.html` 같은 prerender 결과를 슬래시 없는 정규 경로(`/about`)로 모은다. */
function collectPages(clientDir: string): string[] {
  const pages: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name !== "assets") walk(path.join(dir, entry.name));
      } else if (entry.name === "index.html") {
        const relative = path.relative(clientDir, dir).split(path.sep).join("/");
        pages.push(relative === "" ? "/" : `/${relative}`);
      }
    }
  };
  walk(clientDir);
  return pages.sort();
}

/** 홈, 헤더 메뉴, 프로그램 카드 순서를 따르고 메뉴에 없는 페이지는 뒤로 보낸다. */
function menuOrder(page: string): number {
  if (page === "/") return 0;
  const [section, slug] = page.split("/").slice(1);
  const sections = Object.keys(ko.nav);
  const sectionIndex = sections.indexOf(section);
  const slugIndex = ko.programs.cards.findIndex((card) => card.slug === slug);
  return ((sectionIndex === -1 ? sections.length : sectionIndex) + 1) * 100 + slugIndex + 1;
}

function buildSitemap(koPages: string[]): string {
  const urls = koPages.flatMap((page) => {
    const koUrl = SITE_URL + page;
    const enUrl = SITE_URL + localePath("en", page);
    const alternates = [
      `    <xhtml:link rel="alternate" hreflang="ko" href="${koUrl}"/>`,
      `    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>`,
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${koUrl}"/>`,
    ];
    return [koUrl, enUrl].map((loc) =>
      ["  <url>", `    <loc>${loc}</loc>`, ...alternates, "  </url>"].join("\n"),
    );
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}

/** 템플릿의 `{{pages}}`를 한국어 페이지의 title·description 목록으로 채운다. */
function buildLlmsTxt(template: string, clientDir: string, pages: string[], koPages: string[]) {
  const unknown = [...template.matchAll(/https:\/\/dalestudy\.com(\/[^\s)]*)?/g)]
    .map((match) => match[1] ?? "/")
    .filter((page) => !pages.includes(page));
  if (unknown.length > 0) {
    throw new Error(
      `[seo-files] llms.template.txt가 가리키는 존재하지 않는 페이지: ${unknown.join(", ")}`,
    );
  }
  if (!template.includes("{{pages}}")) {
    throw new Error("[seo-files] llms.template.txt에 {{pages}} 자리가 없습니다.");
  }

  const list = koPages
    .filter((page) => page !== "/")
    .map((page) => {
      const html = readFileSync(path.join(clientDir, page, "index.html"), "utf8");
      const title = readHead(html, /<title>([^<]*)<\/title>/, page).split(" | ")[0];
      const description = readHead(html, /<meta name="description" content="([^"]*)"/, page);
      return `- [${title}](${SITE_URL + page}): ${description}`;
    });
  return template.replace("{{pages}}", list.join("\n"));
}

function readHead(html: string, pattern: RegExp, page: string): string {
  const value = html.match(pattern)?.[1];
  if (!value) {
    throw new Error(`[seo-files] ${page}에서 ${pattern}을 찾지 못했습니다.`);
  }
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&");
}
