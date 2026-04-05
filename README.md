# Hobby cohort sales page template

Next.js 14 (App Router) sales funnel: long-form landing, Stripe checkout, Meta Pixel + Conversions API, Microsoft Clarity, and an optional Redis-backed countdown (cookie fallback if `REDIS_URL` is unset).

## Prerequisites

- Node.js 20+ recommended
- [Stripe](https://stripe.com) account (test keys for development)
- Optional: [Meta Pixel](https://developers.facebook.com/docs/meta-pixel) and CAPI token, [Clarity](https://clarity.microsoft.com/) project, [Redis](https://upstash.com) (or any Redis URL) for countdown sync

## Getting started

```bash
npm install
cp .env.example .env.local
# Fill in .env.local with your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Checkout lives at `/checkout`.

## Environment variables

See [`.env.example`](.env.example) for descriptions. Minimum to exercise checkout locally: `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. Analytics and CAPI are optional if you omit or leave placeholder IDs (components typically no-op when unset). **`META_TEST_EVENT_CODE`** and **`REDIS_URL`** are always optional (testing CAPI and shared countdown, respectively).

## Deploy to Vercel

Set variables in your Vercel project (**Settings → Environment Variables**). For production Stripe, use live keys.

The **Deploy** button below only prompts for variables that are usually required for a working deploy. **Optional** secrets—add them in the Vercel dashboard later if you need them:

- **`META_TEST_EVENT_CODE`** — Meta CAPI test events only; omit in production.
- **`REDIS_URL`** — IP-stable countdown across browsers; if unset, the app uses cookies only.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAlmorNet%2Fhobby-cohort-sales-page-template&project-name=hobby-cohort-sales-page&repository-name=hobby-cohort-sales-page&env=NEXT_PUBLIC_CLARITY_PROJECT_ID%2CNEXT_PUBLIC_META_PIXEL_ID%2CMETA_PIXEL_ID%2CMETA_ACCESS_TOKEN%2CSTRIPE_SECRET_KEY%2CNEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY&envDescription=Required%20for%20deploy%3B%20add%20META_TEST_EVENT_CODE%20and%20REDIS_URL%20in%20Vercel%20if%20needed%20(see%20README).&envLink=https%3A%2F%2Fgithub.com%2FAlmorNet%2Fhobby-cohort-sales-page-template%23deploy-to-vercel)

## Scripts

| Command        | Description        |
| -------------- | ------------------ |
| `npm run dev`  | Next.js dev server |
| `npm run build` | Production build  |
| `npm run start` | Run production build |
| `npm run lint` | ESLint             |

## Optional: Vercel Templates Marketplace

To propose this repo for [Vercel’s template gallery](https://vercel.com/templates), deploy a public demo and use [Submit a template](https://vercel.com/templates/submit) once the README button and `.env.example` are in place.

## License

Private or your choice—update this file when you publish.
