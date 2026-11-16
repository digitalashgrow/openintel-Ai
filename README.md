# OpenIntel AI — Phase 0

Foundation, design system and SaaS dashboard for an AI-powered OSINT platform.

## Stack
- Next.js 16 (App Router), React 19, TypeScript (strict)
- Tailwind CSS 4, shadcn/ui, Lucide, Recharts
- Supabase (PostgreSQL + Auth)
- Zod, React Hook Form

## Setup

1. Install dependencies
```bash
npm install
```

2. Configure environment
```bash
cp .env.example .env.local
# fill in Supabase credentials
```

3. Database setup
- Create a Supabase project.
- Run `supabase/migrations/0001_init.sql` against your database (via Supabase SQL editor or `supabase db push`).

4. Run locally
```bash
npm run dev
```

5. Build
```bash
npm run build
```

## Scripts
- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — production start
- `npm run lint` — ESLint

## Environment variables
See `.env.example`.

## Security notes
- `SUPABASE_SERVICE_ROLE_KEY` and `GEMINI_API_KEY` are server-only. Never expose in client code.
- Authentication and authorization are enforced server-side and via RLS.
- Intelligence integrations are not implemented in Phase 0; module pages are UI foundations.

## Phase 0 acceptance
See project specification. All module interfaces are navigable; protected routes reject unauthenticated requests when Supabase is configured.