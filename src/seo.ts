import type { Locale } from "./i18n/types";
import { localePath } from "./i18n";

export const SITE_URL = "https://dalestudy.com";

// 정식 도메인은 아직 구 사이트가 차지하고 있어 베타에서 서빙한다.
// 정식 오픈 시 `${SITE_URL}/og.png`로 되돌릴 것.
export const OG_IMAGE_URL = "https://beta.dalestudy.com/og.png";

interface PageHeadOptions {
  locale: Locale;
  /** 한국어 기준 경로 (예: "/about", "/programs/leetcode") */
  path: string;
  title: string;
  description: string;
}

/** 페이지별 title, description, canonical, hreflang, Open Graph 메타를 생성한다. */
export function pageHead({ locale, path, title, description }: PageHeadOptions) {
  const koUrl = SITE_URL + path;
  const enUrl = SITE_URL + localePath("en", path);
  const url = locale === "ko" ? koUrl : enUrl;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: locale === "ko" ? "달레 스터디" : "DaleStudy" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:locale", content: locale === "ko" ? "ko_KR" : "en_US" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          locale === "ko"
            ? "달레 스터디: 평범한 개발자들이 함께 만드는 특별한 프로젝트"
            : "DaleStudy: Ordinary developers building extraordinary projects",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "ko", href: koUrl },
      { rel: "alternate", hrefLang: "en", href: enUrl },
      { rel: "alternate", hrefLang: "x-default", href: koUrl },
    ],
  };
}
