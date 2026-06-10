# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

This is a **Turbo monorepo** managed with `pnpm` workspaces:

- `apps/personal-web` — Static portfolio/resume site (Next.js 15, deployed to Cloudflare Pages)
- `packages/ui` — Shared shadcn/ui component library
- `packages/eslint-config` — Shared ESLint config
- `packages/typescript-config` — Shared TypeScript config

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

### Shared UI package
`packages/ui` exports shadcn/ui components. Import from `@repo/ui` in either app. New components are added here when they need to be shared.

## Key Conventions

- Path alias `@/*` resolves to all files within each app (configured per-app in `tsconfig.json`)
- `personal-web` has TypeScript and ESLint errors suppressed during build (`ignoreBuildErrors: true`) — fix errors at the source rather than relying on this
