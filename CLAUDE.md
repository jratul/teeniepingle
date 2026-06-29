# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Teeniepingle (티니핑글) — a single-page Next.js app for browsing/searching/filtering "티니핑" (Tinyping) characters by season and type. Deployed at https://tnpg.vercel.app/. No backend/API routes; everything is static data rendered client-side.

## Commands

Package manager is Yarn 4 (Berry) with PnP (`nodeLinker: pnp` in `.yarnrc.yml`) — use `yarn`, not `npm`.

- `yarn dev` — start dev server
- `yarn build` — production build
- `yarn start` — run production build
- `yarn lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test runner configured in this repo (no Jest/Vitest/Playwright).

## Architecture

This is a Next.js 14 App Router project, but only `src/app/page.tsx` is used as an actual route — there are no other routes or API handlers. All components live flat in `src/app/` (no `components/` subfolder).

**Data layer (`src/app/constant.ts`)**
A single large static data file is the source of truth for all content:
- `pingData: { [seasonFilterKey]: Ping[] }` — every character, grouped by season key (`first`/`second`/`third`/`fourth`/`fifth`)
- `seasonData: Season[]` — season metadata (index, display name, color, filter key)
- `colors` / `pingTypeData` — lookup maps for type→color and type→Korean label (`royal`/`legend`/`normal`/`villain`)
- `PRIMARY_COLOR` — the single brand pink reused across components (e.g. `error.tsx`)
- Each `Ping.img` field maps to an image file at `public/images/pings/{img}.webp`. Adding a new character requires the matching webp to already exist in `public/images/pings/`, otherwise the image renders broken — there is no fallback image.

**State**
- `src/app/store/filterStore.ts` (Zustand) holds the season/type checkbox filter state (`filterGroup`) and per-group "select all" state (`isAllChecked`). `toggleItem`/`toggleAll` mutate filter selections.
- `page.tsx` owns local component state for the search text box and the derived `filteredPingInfo`, recomputed in a `useEffect` whenever `filterGroup` or `searchName` changes (filters `pingData` by checked type + case-insensitive name substring match).

**Component flow**
`page.tsx` → `Filter` (collapsible toggle wrapping `FilterContent`, which renders `CheckBox` items bound to the Zustand store) and one `SeasonFrame` per season with results → `SeasonFrame` renders a grid of `PingItem` (image + name) → clicking a `PingItem` opens `PingDialog` (rendered through `Portal` into the `#portal` div defined in `layout.tsx`) showing a YouTube embed, character line, and `PingTable` (full character detail table).

**LCP / above-the-fold image priority**
`page.tsx` passes `isFirst` only to the first rendered `SeasonFrame`. Inside `SeasonFrame`, the first 5 `PingItem`s of that first season render with `priority` (eager-loaded, no fade-in) while every other item lazy-loads and fades in via `framer-motion`'s `whileInView`. Keep this pattern when reordering or adding seasons — don't mark more than one season's items as `priority`.

**Accessibility**
Click-only interactive elements are deliberately given keyboard semantics: `PingItem`'s card has `role="button"` + `tabIndex={0}` + Enter/Space handling, `PingDialog` has `role="dialog"` + `aria-modal` + `aria-label`, and `CheckBox` has `role="checkbox"` + `aria-checked`. Preserve these when touching those components.

**Styling**
Uses `@emotion/styled` (not Tailwind, not CSS Modules) throughout — all styled components are defined inline at the top of each file.

**Error handling**
`src/app/error.tsx` is a Next.js App Router error boundary (client component) shown on uncaught render errors, with a "다시 시도" button calling `reset()`.

**Fonts**
Pretendard variable font is self-hosted via `next/font/local` in `layout.tsx` (`display: "optional"` to fully avoid layout shift, no Google Fonts CDN).

**Path alias**
`@/*` → `./src/*` (defined in `tsconfig.json`), though most intra-`app` imports currently use relative paths.
