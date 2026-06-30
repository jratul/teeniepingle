# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

티니핑 도감 — a single-page Next.js app for browsing/searching/filtering "티니핑" (Tinyping) characters by season, type, and color. Deployed at https://tnpg.vercel.app/. No backend/API routes; everything is static data rendered client-side.

## Commands

Package manager is Yarn 4 (Berry) with PnP (`nodeLinker: pnp` in `.yarnrc.yml`) — use `yarn`, not `npm`.

- `yarn dev` — start dev server
- `yarn build` — production build
- `yarn start` — run production build
- `yarn lint` — ESLint (`next/core-web-vitals` + `next/typescript`)

There is no test runner configured in this repo (no Jest/Vitest/Playwright).

## Architecture

This is a Next.js 14 App Router project with a single route (`src/app/page.tsx`). All components live flat in `src/app/` with `hooks/` and `utils/` subdirectories for logic separation.

### Data layer (`src/app/constant.ts`)

The single static data file is the source of truth for all content:

- `pingData: { [filterKey: string]: Ping[] }` — all 132 characters grouped by season key (`first`/`second`/`third`/`fourth`/`fifth`). `Ping.img` maps to `public/images/pings/{img}.webp`. Adding a character requires the matching webp to already exist — there is no fallback image.
- `seasonData: Season[]` — 5 entries (index 0–4), one per season. Each has `seasonIdx` (0–4), `short` (e.g. "1기"), `sub` (e.g. "큐브"), `emoji`, `badgeBg`/`badgeFg` (badge palette), `filterKey`. **`Ping.seasonIdx` is a zero-based index directly into this array (`seasonData[ping.seasonIdx]`).**
- `typeData: { [key: string]: TypeMeta }` — type metadata for `royal`/`legend`/`normal`/`villain`, each with `label`, `emoji`, `fg` (text color), `bg` (badge bg), `tileBg` (card image tile background).
- `colorBucketData: { [key in ColorBucket]: ColorBucketMeta }` — six color-discovery swatches (pink/yellow/green/blue/purple/white) with `label` and `swatch` hex.
- `PRIMARY_COLOR` — brand pink `#ff77ab`, reused in `error.tsx`.

### Color buckets (`src/app/colorBuckets.ts`)

Pre-computed at build time (Node + ffmpeg, not client-side). Each character's dominant color is sampled from its local webp image (26×26 downscale, skip near-white/near-black/transparent pixels, average RGB → HSL bucket). The mapping `{ [img: string]: ColorBucket }` is baked into this file. To regenerate after adding characters, run the color computation script in `.ref/design_handoff_teenieping_dex`.

### State & business logic

- `src/app/hooks/usePingDex.ts` — all filter/sort/group state and derived data. Owns: `q` (search), `season`, `type`, `color`, `sort` (season|name), `detail` (selected ping for modal), `todays` (random pick modal). Derives `groups: PingGroup[]` (filtered+grouped), `resultCount`, `showJump`. Opening detail clears todays and vice-versa. **No Zustand; plain `useState` + `useMemo`.**
- `src/app/utils/chosung.ts` — Korean initial-consonant extraction for 가나다 grouping. Exports `CHO` array and `chosung(str)` function.

### Component flow

`page.tsx` (state assembly) → `Header` (title + search bar + 🎀 random button) + `FilterPanel` (season/type/color/sort chips) + `JumpBar` (가나다 jump nav, only when sort=name) + `ResultGroup`s (group header + grid of `PingCard`) + `EmptyState` + `DetailModal` (Portal) + `TodaysModal` (Portal).

- **`PingCard`** — card with image tile (type-color background), Jua name, season/type badges. Hover lifts with shadow.
- **`ResultGroup`** — renders one group's header + responsive grid. First 5 cards of the first group use `priority` (LCP). All other cards use `framer-motion` `whileInView` fade-in.
- **`DetailModal`** — full character detail: image, name, season+type badges, 대사 (italic), YouTube embed (if any), and info rows (성별/소품/마법/좋아하는 것/싫어하는 것/로미 변신). Closes on Esc, backdrop click, or browser back.
- **`TodaysModal`** — random pick with floating image animation (`floatY`), 다시 뽑기 + 자세히 buttons.
- **`Portal`** — renders children into `#portal` div defined in `layout.tsx`.

### LCP / above-the-fold image priority

`page.tsx` passes `isFirstGroup` only to the first rendered `ResultGroup`. Inside `ResultGroup`, the first 5 `PingCard`s render with `priority` (eager-loaded, no animation) while every other card lazy-loads and fades in via `framer-motion`'s `whileInView`. Keep this pattern when reordering or adding seasons.

### Interactions

- **Search:** case-sensitive substring match on `p.name.includes(q.trim())`. Clear button appears when `q !== ""`.
- **Filters (AND):** season + type + color + search all combine. Each has an "all" reset chip.
- **Sort:** `시즌순` → S1..S5 fixed order. `가나다순` → `localeCompare(b,'ko')`, grouped by 초성.
- **가나다 jump:** clicking a consonant chip computes `el.getBoundingClientRect().top + window.scrollY - 184` and calls `window.scrollTo({top, behavior:'smooth'})`. Uses `data-anchor` attribute on group headers. Does **not** use `scrollIntoView`.
- **Color discovery:** no runtime canvas/proxy computation. Buckets are pre-computed in `colorBuckets.ts`.

### Accessibility

`PingCard` is a `<button>` (native keyboard access). `DetailModal` and `TodaysModal` have `role="dialog"` + `aria-modal="true"` + `aria-label`. Color dot buttons have `aria-pressed` + `aria-label`. Close buttons have `aria-label="닫기"`. FilterPanel chips are `<button>` elements.

### Styling

Uses `@emotion/styled` throughout — styled components defined inline at the top of each file. CSS keyframes (`wiggle`, `popIn`, `floatY`) are defined globally in `globals.css`. Font CSS variables (`--font-jua`, `--font-noto-sans-kr`) are set in `globals.css :root` and referenced in styled components as `var(--font-jua)`. Fonts (Jua + Noto Sans KR) load non-blocking via `<Script strategy="afterInteractive">` in `layout.tsx`.

### Design tokens

- Page background: `#fff5fa`; primary pink: `#ff77ab`; card surface: `#fff`
- Card shadow: `0 4px 14px rgba(255,150,190,.14)`; hover: `0 12px 24px rgba(255,150,190,.3)`
- Radius: cards `22px`, inner tile `18px`, filter panel `24px`, modals `30–32px`, chips `999px`

### Error handling

`src/app/error.tsx` is the Next.js App Router error boundary (client component) shown on uncaught render errors, with a "다시 시도" button calling `reset()`. Uses `PRIMARY_COLOR`.

### Fonts

Jua (display/headings) + Noto Sans KR (body/UI) loaded via `<Script strategy="afterInteractive">` in `layout.tsx` — no render-blocking Google Fonts CDN link in `<head>`. CSS custom properties (`--font-jua`, `--font-noto-sans-kr`) defined in `:root` in `globals.css` allow all styled components to reference them without `next/font` coupling.

### Path alias

`@/*` → `./src/*` (defined in `tsconfig.json`), though most intra-`app` imports use relative paths.
