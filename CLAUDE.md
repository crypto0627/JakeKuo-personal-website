# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

This is a **Turbo monorepo** managed with `pnpm` workspaces:

- `apps/personal-web` — Static portfolio/resume site (Next.js 15, deployed to Cloudflare Pages)
- `apps/jake-blog` — Blog platform with admin dashboard (Next.js 16, deployed to Vercel)
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

### Per-app (run inside `apps/personal-web` or `apps/jake-blog`)
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

### jake-blog
- **Rendering:** SSR pages with client-side data fetching (useState/useEffect + `usePosts` hook)
- **Database:** MongoDB Atlas, direct driver (no ORM), singleton connection pattern in `lib/mongodb.ts`
- **Auth:** JWT stored in an `admin-token` HTTP-only cookie; middleware in `proxy.ts` protects `/admin/*` routes
- **API Routes:**
  - `GET/POST/PUT/DELETE /api/posts` — CRUD (POST/PUT/DELETE require admin)
  - `PATCH /api/posts/[slug]` — Increment likes or views
  - `POST /api/admin/signin` — Issues JWT cookie
  - `GET /api/posts/stats` — Blog statistics
- **Environment variables** required: `DATABASE_URI`, `ADMIN_API_KEY`, `JWT_SECRET`

### Shared UI package
`packages/ui` exports shadcn/ui components. Import from `@repo/ui` in either app. New components are added here when they need to be shared.

## Key Conventions

- Path alias `@/*` resolves to all files within each app (configured per-app in `tsconfig.json`)
- MongoDB ObjectIds and Dates must be manually serialized before returning from API routes (no ORM handles this automatically)
- Published/unpublished filtering: public API routes filter `{ published: true }`; admin routes return all posts
- `personal-web` has TypeScript and ESLint errors suppressed during build (`ignoreBuildErrors: true`) — fix errors at the source rather than relying on this
- ISR (`export const revalidate`) is the planned optimization path for `jake-blog` to reduce cold-start latency on Vercel + MongoDB Atlas (Hong Kong region)
