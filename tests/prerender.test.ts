import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, test } from "vite-plus/test";
import { localePath } from "../src/i18n";
import { programSlugs } from "../src/i18n/types";
import { SITE_URL } from "../src/seo";

/**
 * `bun run build` 가 만든 정적 HTML을 검사한다. 이 사이트는 SEO를 위해 모든 페이지를
 * 빌드 타임에 prerender하므로, 산출물이 곧 검색 엔진과 사용자가 받는 화면이다.
 */
const CLIENT_DIR = path.resolve(import.meta.dirname, "../dist/client");
const ROUTES_DIR = path.resolve(import.meta.dirname, "../src/routes");

if (!existsSync(CLIENT_DIR)) {
  throw new Error("dist/client 가 없습니다. `bun run build` 를 먼저 실행해 주세요.");
}

/**
 * 한국어 라우트 파일에서 있어야 할 페이지를 뽑는다. prerender는 링크를 따라가며
 * 페이지를 찾으므로, 어디에서도 링크하지 않은 페이지는 조용히 빠진다.
 */
function expectedKoPages(): string[] {
  const pages: string[] = [];
  const walk = (dir: string, prefix: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name !== "en") walk(path.join(dir, entry.name), `${prefix}/${entry.name}`);
        continue;
      }
      const name = entry.name.replace(/\.tsx$/, "");
      if (name.startsWith("__")) continue;
      if (name === "$slug") pages.push(...programSlugs.map((slug) => `${prefix}/${slug}`));
      else pages.push(name === "index" ? prefix || "/" : `${prefix}/${name}`);
    }
  };
  walk(ROUTES_DIR, "");
  return pages.sort();
}

/** `about/index.html` 같은 산출물을 `/about` 경로로 모은다. */
function builtPages(): string[] {
  const pages: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (entry.name !== "assets") walk(path.join(dir, entry.name));
      } else if (entry.name === "index.html") {
        const relative = path.relative(CLIENT_DIR, dir).split(path.sep).join("/");
        pages.push(relative === "" ? "/" : `/${relative}`);
      }
    }
  };
  walk(CLIENT_DIR);
  return pages.sort();
}

function readPage(page: string): string {
  return readFileSync(path.join(CLIENT_DIR, page, "index.html"), "utf8");
}

/** 태그 안의 속성을 이름 → 값으로 읽는다. 속성 순서에 기대지 않기 위해서다. */
function attributesOf(tag: string): Record<string, string> {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]));
}

function tagsOf(html: string, name: string): Record<string, string>[] {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "g"))].map((m) => attributesOf(m[0]));
}

const koPages = expectedKoPages();
const allPages = koPages.flatMap((page) => [page, localePath("en", page)]).sort();

test("모든 라우트가 두 언어로 prerender된다", () => {
  expect(builtPages()).toEqual(allPages);
});

describe.each(allPages)("%s", (page) => {
  const html = readPage(page);
  const head = html.slice(0, html.indexOf("</head>"));
  const koPage = page === "/en" ? "/" : page.replace(/^\/en(?=\/)/, "");
  const locale = koPage === page ? "ko" : "en";

  test("html lang이 로케일과 같다", () => {
    expect(attributesOf(html.match(/<html\b[^>]*>/)![0]).lang).toBe(locale);
  });

  test("title과 description이 있다", () => {
    expect(head.match(/<title>([^<]*)<\/title>/)?.[1].trim()).toBeTruthy();
    const description = tagsOf(head, "meta").find((m) => m.name === "description");
    expect(description?.content.trim()).toBeTruthy();
  });

  test("canonical과 hreflang이 두 언어 페이지를 가리킨다", () => {
    const links = tagsOf(head, "link");
    const koUrl = SITE_URL + koPage;
    const enUrl = SITE_URL + localePath("en", koPage);

    expect(links.find((l) => l.rel === "canonical")?.href).toBe(locale === "ko" ? koUrl : enUrl);
    const alternates = Object.fromEntries(
      links.filter((l) => l.rel === "alternate").map((l) => [l.hrefLang, l.href]),
    );
    expect(alternates).toEqual({ ko: koUrl, en: enUrl, "x-default": koUrl });
  });

  // 섹션 앵커는 `<section id>` 와 `SectionHeading anchor` 두 곳에 같은 슬러그를 적어야 한다.
  // 어긋나도 타입 검사와 빌드는 통과하고 눌러도 반응 없는 링크만 남는다.
  test("페이지 안 앵커 링크가 실제로 있는 id를 가리킨다", () => {
    const broken = tagsOf(html, "a")
      .map((a) => a.href)
      .filter((href) => href?.includes("#") && !href.startsWith("http"))
      .filter((href) => {
        const [target, id] = href.split("#");
        const targetHtml = target === "" ? html : readPage(target);
        return !targetHtml.includes(` id="${id}"`);
      });
    expect(broken).toEqual([]);
  });
});
