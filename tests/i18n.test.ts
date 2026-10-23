import { expect, test } from "vite-plus/test";
import { en } from "../src/i18n/en";
import { ko } from "../src/i18n/ko";

/**
 * `Messages` 타입은 키가 있는지만 강제한다. 배열 길이가 어긋나거나 한쪽 문구가 비어도
 * 타입 검사는 통과하므로, 두 언어의 실제 값을 끝까지 따라가며 모양을 비교한다.
 */
function diffShape(a: unknown, b: unknown, path: string): string[] {
  if (typeof a === "string" && typeof b === "string") {
    const problems: string[] = [];
    if (a.trim() === "") problems.push(`${path}: 한국어 문구가 비어 있다`);
    if (b.trim() === "") problems.push(`${path}: 영어 문구가 비어 있다`);
    return problems;
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length)
      return [`${path}: 배열 길이가 다르다 (ko ${a.length}, en ${b.length})`];
    return a.flatMap((item, i) => diffShape(item, b[i], `${path}[${i}]`));
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    return [...keys].flatMap((key) => {
      const left = (a as Record<string, unknown>)[key];
      const right = (b as Record<string, unknown>)[key];
      if (left === undefined) return [`${path}.${key}: 한국어에 없다`];
      if (right === undefined) return [`${path}.${key}: 영어에 없다`];
      return diffShape(left, right, `${path}.${key}`);
    });
  }
  return typeof a === typeof b ? [] : [`${path}: 값의 종류가 다르다`];
}

test("한국어와 영어 문구는 같은 모양이고 비어 있는 값이 없다", () => {
  expect(diffShape(ko, en, "messages")).toEqual([]);
});
