# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio SPA for Jean Carlos Reyes. Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, deployed on Vercel.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run start` — Serve production build locally
- `npm run lint` — Run ESLint

## Architecture

**Stack**: Next.js 15 · React 18 · TypeScript · Tailwind CSS v4 · Framer Motion 11 · EmailJS

**Entry flow**: `src/app/layout.tsx` (LangProvider + Menu) → `src/app/page.tsx` (single-page with all sections).

**Routing**: Single page with section anchors. The only route is `/`. `not-found.tsx` shows a styled 404 page.

**Sections** (rendered in order on `/`):
- Hero — gradient name, CTAs, tech stack pills
- About — profile photo, bio, stats grid
- Experience — vertical timeline with alternating cards + education grid
- Projects — curated project cards with stack badges
- Skills — bento grid layout with category-colored cards + certifications
- Contact — EmailJS form with glassmorphism styling
- Footer — copyright, social links

**i18n**: Custom React Context solution. `src/i18n/LangContext.tsx` + `src/providers/LangProvider.tsx`. Translation JSON files in `src/i18n/{en,es}.json`. The `Text` component renders strings by key. Language persisted in localStorage, read via `useEffect`.

**Data layer**: Typed arrays in `src/data/` (experience, education, projects, skills, certifications, social links). EmailJS credentials in `.env.local`.

**Design system**: Tailwind CSS v4 with `@theme` tokens in `globals.css`. Custom `@utility` directives: `glass`, `glass-hover`, `gradient-text`, `gradient-border`, `text-glow-cyan`. Dark glassmorphism theme with cyan/purple accent colors.

**UI Components** (`src/components/ui/`): Section, Container, GlassCard, GradientText, Badge — reusable primitives for consistent glass/gradient styling.

**Animations**: Framer Motion with typed variants in `src/lib/animations.ts`. Reduced-motion aware via `src/lib/motion.ts`.

## Key Conventions

- TypeScript for all files. `'use client'` for components using browser APIs, context, or framer-motion.
- Tailwind utility classes only — no CSS Modules, no Bootstrap.
- Translation keys must exist in both `en.json` and `es.json`.
- Animation variants follow `hidden`/`visible` naming for new components, `offscreen`/`onscreen` for legacy.
- Images use `next/image`. Fonts use `next/font/google` (Inter + JetBrains Mono).
- EmailJS credentials in `.env.local` with `NEXT_PUBLIC_` prefix.
- Section components live in `src/components/sections/`.

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, not-found, loading, globals.css)
├── components/
│   ├── Menu/         # Navigation (glassmorphism sticky header)
│   ├── sections/     # Page sections (Hero, About, Experience, Projects, Skills, Contact, Footer)
│   └── ui/           # Reusable primitives (Section, GlassCard, GradientText, Badge, Container)
├── data/             # Typed static data (experience, education, projects, skills, certifications, social)
├── i18n/             # Translation system (LangContext, Text, en.json, es.json)
├── lib/              # Animations (variants) + motion (reduced-motion helper)
├── providers/        # LangProvider (React Context)
└── types/            # TypeScript interfaces
```

## Deployment

Vercel with Next.js framework preset. Ensure `NEXT_PUBLIC_EMAILJS_*` env vars are set.
