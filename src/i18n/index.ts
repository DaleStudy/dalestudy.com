import { en } from "./en";
import { ko } from "./ko";
import type { Locale, Messages } from "./types";

export function getMessages(locale: Locale): Messages {
  return locale === "en" ? en : ko;
}

/** 한국어 기준 경로를 로케일별 실제 경로로 변환한다. (예: "/about" → "/en/about") */
export function localePath(locale: Locale, path: string): string {
  if (locale === "ko") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** 현재 경로에서 로케일을 판별한다. */
export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

/** 현재 경로를 반대 로케일의 같은 페이지 경로로 변환한다. */
export function switchLocalePath(pathname: string): string {
  if (localeFromPath(pathname) === "en") {
    const stripped = pathname.replace(/^\/en/, "");
    return stripped === "" ? "/" : stripped;
  }
  return pathname === "/" ? "/en" : `/en${pathname}`;
}
