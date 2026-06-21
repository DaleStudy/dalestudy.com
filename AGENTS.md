# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## 프로젝트 개요

달레 스터디 커뮤니티의 공식 웹사이트(dalestudy.com). TanStack Start와 daleui 디자인 시스템으로 만들었으며 Cloudflare Workers에 배포된다. 마케팅 페이지 전체가 빌드 타임에 정적 HTML로 prerender된다(SEO 필수 원칙).

## 주요 명령어

```bash
bun install          # 의존성 설치
bun run dev          # 개발 서버 (vp dev, http://localhost:5173)
bun run build        # 프로덕션 빌드 (vp build, 전체 페이지 prerender 포함)
bun run typecheck    # 타입 검사 (tsc --noEmit)
bunx vp check        # 포맷·린트 검사 (--fix로 자동 수정)
```

툴체인은 [Vite+](https://viteplus.dev)를 사용한다. 생성 파일 `src/routeTree.gen.ts`는 포맷 대상에서 제외되어 있다(.prettierignore).

배포는 main push 시 Cloudflare Workers Builds가 자동으로 수행한다. 수동 배포가 필요하면 빌드 후 `bunx wrangler deploy`.

## 아키텍처

- **src/routes/**: 파일 기반 라우팅. 한국어가 루트(`/about`), 영어는 `/en` 미러(`/en/about`). 페이지를 추가하면 반드시 두 로케일의 라우트 파일을 모두 만든다
- **src/pages/**: 로케일과 무관한 실제 페이지 컴포넌트. 라우트 파일은 head 메타와 로케일만 주입하는 얇은 래퍼다
- **src/i18n/**: `ko.ts`와 `en.ts`는 `Messages` 타입으로 강제되는 쌍이다. 카피를 수정하면 반드시 두 언어를 함께 수정한다
- **src/seo.ts**: 페이지별 title/description/canonical/hreflang/OG 메타 생성 헬퍼
- **src/links.ts**: 모든 외부 URL의 중앙 관리 지점
- **public/**: `sitemap.xml`, `robots.txt`, `llms.txt`, `og.png`. 라우트를 추가하면 sitemap과 llms.txt도 갱신한다

## 컨벤션

- 패키지 매니저: **Bun** (bun.lock 사용)
- 색상·radius·서체는 daleui 토큰의 CSS 변수만 사용한다. 유일한 로컬 확장은 `site.css`의 teal→violet 그라데이션 변수(`--grad-*`, 라이트/다크 변형)다
- 내비게이션 성격의 CTA는 daleui `Button`(순수 `<button>`) 대신 `LinkButton`(`<a>`)을 쓴다 — 크롤러가 링크를 따라갈 수 있어야 한다
- 내부 링크의 동적 경로 문자열은 `AppLink` 컴포넌트를 통해서만 쓴다
- 한국어 텍스트는 전역 `word-break: keep-all`을 전제로 작성한다
- PR 전에 `bun run typecheck`, `bunx vp check`, `bun run build`가 통과해야 한다
