import { useLocation } from "@tanstack/react-router";
import { localeFromPath } from ".";
import type { Locale } from "./types";

/** 현재 경로에서 로케일을 읽는다. */
export function useLocale(): Locale {
  return localeFromPath(useLocation().pathname);
}
