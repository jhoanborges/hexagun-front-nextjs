# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
yarn dev      # Start development server (localhost:3000)
yarn build    # Production build
yarn start    # Start production server
yarn lint     # Run ESLint
```

Note: No testing framework is currently configured.

## Architecture Overview

This is a **Next.js 14 corporate website** for Hexagun using the App Router, TypeScript, and Tailwind CSS.

### Directory Structure

- **`app/`** - Next.js App Router pages and API routes
  - `api/verify-recaptcha/` - Server-side reCAPTCHA verification
  - Pages: home, about-us, services, portfolio, contact
- **`components/`** - React components
  - `ui/` - shadcn/ui base components (auto-generated, ESLint-ignored)
  - Feature components for marketing sections
- **`hooks/`** - Custom React hooks (toast system)
- **`lib/`** - Utilities (`cn` function for class merging)

### Key Patterns

**Styling**: Tailwind CSS with CSS variables (HSL format), dark mode via class strategy. Theme colors defined in `globals.css`.

**State Management**: Lightweight, hook-based. No global state library. Uses:
- react-hook-form + Zod for forms
- next-themes for theme switching (defaults to dark, system detection disabled)
- Custom toast hook with reducer pattern

**Component Pattern**: All pages are client components ("use client") following:
```
AnimatedBackground → SiteHeader → Main Content → SiteFooter
```

**Data Fetching**:
- Client-side via axios in useEffect
- External API: `https://hexagun-web-master-91iq03.laravel.cloud/api/`
- Images hosted on: `bucket.hexagun.mx`

**Form Handling**: react-hook-form with Zod schemas, reCAPTCHA v3 protection, EmailJS for sending.

### External Services

- **EmailJS**: Contact form email delivery
- **Google reCAPTCHA v3**: Bot protection (server-side verification via API route)
- **External Laravel API**: Portfolio and certifications data

### Import Alias

Use `@/*` for imports (maps to project root). Example: `import { cn } from "@/lib/utils"`

### Configuration Files

- `components.json` - shadcn/ui settings (RSC enabled)
- `next.config.mjs` - Image optimization disabled, remote image patterns
- `tailwind.config.ts` - Custom animations (accordion, shimmer, marquee, shiny-text)
