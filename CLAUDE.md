# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

This is a **Turbo monorepo** managed with `pnpm` workspaces:

- `apps/personal-web` — Static portfolio/resume site (Next.js 15, deployed to Cloudflare Pages)

Currently the only workspace is `apps/*`. There is no shared `packages/` layer — the
unused `@repo/ui`, `@repo/eslint-config`, and `@repo/typescript-config` packages were
removed. Add one back under `packages/` (and to `pnpm-workspace.yaml`) only when a
second app actually needs to share code.

## Commands

### Root (runs across all apps via Turbo)

```bash
pnpm dev          # Start all dev servers
pnpm build        # Build all apps
pnpm lint         # Lint all apps
pnpm format       # Format with Prettier (TS, TSX, MD)
pnpm check-types  # TypeScript type checking
```

### Per-app (run inside `apps/personal-web`)

```bash
npm run dev
npm run build
npm run lint
```

Node >= 18 and pnpm@9.0.0 are required.

## Architecture

### personal-web

- **Output:** Static export (`output: 'export'`), no server-side runtime
- **Data:** All data is statically imported from `data/` files (`projects.ts`, `navigation.ts`, etc.) — no API calls
- **Styling:** Tailwind CSS v3 + shadcn/ui (default style), dark mode via `next-themes` (class strategy)
- **Analytics:** Google Analytics + Google Tag Manager wired in layout

### Internationalization

The site is bilingual (Traditional Chinese / English) and **defaults to `zh-TW`**.

- `lib/i18n.ts` — `Locale`, the `Localized<T>` helper, and every UI string, grouped per page
- `components/language-provider.tsx` — context + `useLanguage()`; persists to `localStorage` and syncs `<html lang>`
- `components/ui/language-toggle.tsx` — the switcher, mounted once in `DashboardLayout` so it appears on every page

Page content that varies by language (projects, jobs, degrees, awards) is typed as
`Localized<T>` — a `{ "zh-TW": ..., en: ... }` record — and read with `value[locale]`.
Any component that reads the locale must be a Client Component.

To add a string: put it in the matching dictionary in `lib/i18n.ts`, then read it via
`const { locale } = useLanguage()`. Never hard-code user-visible copy in a component.

The `period` fields on experience entries keep the literal `"Present"` sentinel because
`useDuration` parses it; only the _display_ is localized.

### UI components

`components/ui/` holds only the shadcn components actually in use (badge, button, card)
plus project-specific ones. Pull in a new shadcn component when you need it rather than
keeping the full library checked in.

## Key Conventions

- Path alias `@/*` resolves to all files within each app (configured per-app in `tsconfig.json`)
- `personal-web` has TypeScript and ESLint errors suppressed during build (`ignoreBuildErrors: true`) — fix errors at the source rather than relying on this
