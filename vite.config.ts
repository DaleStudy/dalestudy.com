import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";
import { seoFiles } from "./seo-files";

export default defineConfig(({ mode }) => ({
  fmt: {
    ignorePatterns: [
      // TanStack Router와 All Contributors가 자체 포맷으로 관리하는 산출물
      "src/routeTree.gen.ts",
      ".all-contributorsrc",
      // 네이버 웹마스터도구 소유 확인 파일은 원본 바이트를 유지해야 한다
      "public/naver*.html",
    ],
  },
  test: {
    // prerender 검사는 빌드 산출물(dist/client)을 읽으므로 `bun run build` 뒤에 실행한다
    include: ["tests/**/*.test.ts"],
  },
  // 테스트는 빌드 산출물과 순수 데이터만 읽는다. Cloudflare 플러그인은 Vitest 환경과 충돌하므로 뺀다.
  plugins:
    mode === "test"
      ? []
      : [
          cloudflare({ viteEnvironment: { name: "ssr" } }),
          // 마케팅 페이지 전체를 빌드 타임에 정적 HTML로 굽는다 (SEO/AEO 필수 원칙)
          tanstackStart({
            prerender: {
              enabled: true,
              crawlLinks: true,
            },
          }),
          viteReact(),
          seoFiles(),
        ],
}));
