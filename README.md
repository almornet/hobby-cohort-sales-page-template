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

See [`.env.example`](.env.example) for descriptions. Minimum to exercise checkout locally: `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. Analytics and CAPI are optional if you omit or leave placeholder IDs (components typically no-op when unset).

## Deploy to Vercel

Set the same variables in your Vercel project (**Settings → Environment Variables**). For production Stripe, use live keys. Add a Redis integration if you want the countdown deadline shared per IP across devices.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAlmorNet%2Fhobby-cohort-sales-page-template&project-name=hobby-cohort-sales-page&repository-name=hobby-cohort-sales-page&env=NEXT_PUBLIC_CLARITY_PROJECT_ID%2CNEXT_PUBLIC_META_PIXEL_ID%2CMETA_PIXEL_ID%2CMETA_ACCESS_TOKEN%2CMETA_TEST_EVENT_CODE%2CSTRIPE_SECRET_KEY%2CNEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY%2CREDIS_URL&envDescription=Copy%20from%20.env.example%20and%20README%20environment%20section.&envLink=https%3A%2F%2Fgithub.com%2FAlmorNet%2Fhobby-cohort-sales-page-template%23environment-variables)

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
