# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio SPA for Jean Carlos Reyes. Next.js 15 (App Router) + TypeScript, deployed on Vercel.

## Commands

- `npm run dev` — Start dev server (Next.js)
- `npm run build` — Production build
- `npm run start` — Serve production build locally
- `npm run lint` — Run ESLint

## Architecture

**Stack**: Next.js 15 · React 18 · TypeScript · Bootstrap 5.3 · Framer Motion 11 · EmailJS

**Entry flow**: `src/app/layout.tsx` (LangProvider + BootstrapClient + Menu) → route `page.tsx` files.

**Routing** (file-system, App Router):
- `/` — Home (hero, timeline, skills, contacts, footer)
- `/projects` — Projects with category filter
- `/social` — Social media links
- `not-found.tsx` — Redirects to `/`
- `loading.tsx` — Spinner fallback during route transitions

**i18n**: Custom React Context solution. `src/i18n/LangContext.tsx` + `src/providers/LangProvider.tsx` provide the active dictionary. Translation JSON files in `src/i18n/{en,es}.json`. The `Text` component (`src/i18n/Text.tsx`) renders translated strings by key. Language preference persisted in localStorage (`"Lang"`), read via `useEffect` to avoid SSR issues.

**Data layer**: All portfolio content (projects, education, skills, social links) lives as typed arrays in `src/data/`. No backend or API calls except EmailJS for the contact form (credentials in `.env.local`).

**Animations**: Framer Motion with scroll-triggered InView animations. Reusable typed animation presets in `src/lib/animations.ts` (offscreen/onscreen variants).

**Styling**: Bootstrap 5.3 utilities + CSS Modules per component (`.module.css`). Global styles in `src/app/globals.css`. Fonts loaded via `next/font/google` (Barlow, Lato, Poppins).

## Key Conventions

- Functional components only. TypeScript for all new files.
- `'use client'` directive required for components using: framer-motion, useContext, useState, useEffect, browser APIs.
- CSS Modules for component styles (`.module.css`), Bootstrap classes used as string literals.
- Translation keys must exist in both `en.json` and `es.json` simultaneously.
- Animation objects follow the `offscreen`/`onscreen` variant naming convention.
- Images use `next/image` component. CSS background images stay as `url()`.
- Route-specific metadata goes in route `layout.tsx` files (since page components may be `'use client'`).
- EmailJS credentials are in `.env.local` (prefixed `NEXT_PUBLIC_`), never hardcoded.

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable UI components with co-located CSS Modules
├── data/          # Static typed data arrays (projects, education, skills, social)
├── i18n/          # Translation system (context, JSON dictionaries, Text component)
├── lib/           # Shared utilities (animation presets)
├── providers/     # React context providers (LangProvider)
└── types/         # Shared TypeScript interfaces
```

## Deployment

Vercel with Next.js framework preset — no custom config needed. Ensure `NEXT_PUBLIC_EMAILJS_*` env vars are set in Vercel project settings.
