# Hobby cohort sales page template

Next.js 14 (App Router) sales funnel: long-form landing, Stripe checkout, Meta Pixel + Conversions API, Microsoft Clarity, and an optional Redis-backed countdown (cookie fallback if `REDIS_URL` is unset).

## Prerequisites

- A [GitHub](https://github.com) account (free)
- A [Vercel](https://vercel.com) account (free tier is enough)
- A **domain** you will use as your public site address, as the **apex** only—for example `yoursite.com` (no `www`). You should **own** it through a registrar (GoDaddy, Namecheap, Cloudflare, etc.) before you start—you will point it to Vercel in **Step 7**. You need it when you set up Clarity in **Step 2** (Clarity asks for a site URL; use `https://yoursite.com` with your real domain).
- The accounts below only for the services you plan to use: [Stripe](https://stripe.com), [Microsoft Clarity](https://clarity.microsoft.com), [Meta Business](https://business.facebook.com) (for Pixel + Conversions API)

---

## Deploy your landing page on Vercel (step by step)

Follow these steps in order. Complete **Steps 1–5** first and keep your **keys** and **IDs** somewhere private (a notes app or password manager) until you paste them in **Step 6**. You do **not** need to install Git or use the terminal for deployment—only your browser (and optionally an AI agent such as Cursor to edit the project for you).

### Step 1: Create or log in to Stripe and copy your API keys

Stripe processes card payments. You need two keys: one **publishable** (starts with `pk_`) and one **secret** (starts with `sk_`).

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register) and create an account, or log in.
2. Open **Developers** (gear or “Developers” in the left sidebar) → **API keys**.
3. **Test vs Live**
  - While you are learning, **Test mode** is on (toggle in the Stripe dashboard). Test keys start with `pk_test_` and `sk_test_`.
  - For real charges, turn **off** Test mode and use **Live** keys (`pk_live_…`, `sk_live_…`) in Vercel **Production** only.
4. Copy:
  - **Publishable key** → you will set it as `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` in Vercel.
  - **Secret key** → click **Reveal** if needed → set as `STRIPE_SECRET_KEY` in Vercel.
5. Treat the **secret** key like a password: do not email it, do not paste it in public chat, do not commit it to Git.

### Step 2: Create a Microsoft Clarity project and copy the Project ID

Clarity records anonymized session replays and heatmaps on your site.

1. Go to [https://clarity.microsoft.com](https://clarity.microsoft.com) and sign in (Microsoft account).
2. Click **Add new project**.
3. Enter a name (for example your product name). For **Website URL** (or **site URL**), enter `**https://`** plus your apex domain from the prerequisites—for example `https://yoursite.com` (same host you will attach in **Step 7**, no `www`).
4. After the project is created, open **Settings** → **Overview** (or the setup/install screen). Find the **Project ID** (a short alphanumeric code, not the long tracking script).
5. Copy that value → you will set it as `NEXT_PUBLIC_CLARITY_PROJECT_ID` in Vercel.

If you skip Clarity, you can leave this variable empty in Vercel; the Clarity snippet will not load.

### Step 3: Find or create your Meta (Facebook) Pixel ID

The **Pixel ID** is a number that identifies your Meta dataset for ads and analytics.

1. Go to [https://business.facebook.com](https://business.facebook.com) and open **Events Manager** (sometimes under **All tools**).
2. If you already have a **data source** of type **Web** / **Pixel**, click it. The Pixel ID often appears in the URL (`pixel_id=…`) or under **Settings** for that data source.
3. If you need a new pixel: in **Events Manager**, use **Connect data** / **Add** → choose **Web** → follow the prompts to create a **Meta Pixel** (you can choose “Install code manually” or “Partner integration” and still finish creation; you only need the ID for this template).
4. Copy the **Pixel ID** (digits only). You will use the **same** ID in two variables in Vercel:
  - `NEXT_PUBLIC_META_PIXEL_ID` (browser)
  - `META_PIXEL_ID` (server, Conversions API)

If you leave both empty, the Meta Pixel and server events are skipped.

### Step 4: Generate a Meta Conversions API access token

The **access token** lets the **server** send conversion events to Meta (alongside the browser pixel). It is **secret**; set it only in Vercel, not in public files.

1. In [Events Manager](https://business.facebook.com), select the **same Pixel** as in Step 3.
2. Open the **Settings** tab for that pixel.
3. Scroll to the **Conversions API** section.
4. Click **Generate access token** (wording may be slightly different).
5. **If that option is missing or Meta asks you to create an app first**, you need a **Meta developer app**: open [developers.facebook.com](https://developers.facebook.com) while logged in, go to **My Apps** → **Create app**, and finish the setup wizard (pick the use case that matches your business or advertising, as the screens describe). Then return to Events Manager → this pixel → **Settings** → **Conversions API** and try **Generate access token** again.
6. If it still does not work, you may need a higher role on the Business (**Admin**) or help from whoever owns the Meta Business account.
7. Copy the token immediately and store it safely. Meta may only show it once.
8. In Vercel you will set it as `META_ACCESS_TOKEN`.

Optional for debugging only: `META_TEST_EVENT_CODE` from Events Manager → **Test events**; omit in production.

### Step 5: (Optional) Redis for countdown sync

If you want the countdown synchronized by IP across browsers, add `REDIS_URL` in Vercel (for example [Upstash](https://upstash.com) Redis). If you skip it, the site still works using cookies only.

### Step 6: Deploy with the Vercel template

You should already have the values from **Steps 1–5**. This step creates a **new GitHub repository** from the template and deploys it—you do everything in the browser; Vercel and GitHub handle the copy.

When you are ready, click **Deploy with Vercel**:

[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAlmorNet%2Fhobby-cohort-sales-page-template&project-name=hobby-cohort-sales-page&repository-name=hobby-cohort-sales-page&env=NEXT_PUBLIC_CLARITY_PROJECT_ID%2CNEXT_PUBLIC_META_PIXEL_ID%2CMETA_PIXEL_ID%2CMETA_ACCESS_TOKEN%2CSTRIPE_SECRET_KEY%2CNEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY&envDescription=Required%20for%20deploy%3B%20add%20META_TEST_EVENT_CODE%20and%20REDIS_URL%20in%20Vercel%20if%20needed%20(see%20README).&envLink=https%3A%2F%2Fgithub.com%2FAlmorNet%2Fhobby-cohort-sales-page-template%23step-6-deploy-with-the-vercel-template)

1. Sign in to Vercel when prompted, connect **GitHub**, and authorize Vercel. When the flow asks, allow it to **create a new repository** under your account from this template (that repository is what Vercel deploys).
2. Before you click **Deploy**, open **Environment Variables** on the import screen (or add them afterward under **Project → Settings → Environment Variables**). Add each name **exactly** as in the table (case-sensitive). For **Production**, use **Live** Stripe keys when you are ready for real payments. Enable the **Production** environment for every variable (and **Preview** too if you want preview deployments to work with test keys).

  | Name                                 | What to paste                        | Notes                                               |
  | ------------------------------------ | ------------------------------------ | --------------------------------------------------- |
  | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (`pk_…`)      | Required for checkout                               |
  | `STRIPE_SECRET_KEY`                  | Stripe secret key (`sk_…`)           | Required for checkout; mark **Sensitive** in Vercel |
  | `NEXT_PUBLIC_CLARITY_PROJECT_ID`     | Clarity Project ID                   | Optional                                            |
  | `NEXT_PUBLIC_META_PIXEL_ID`          | Meta Pixel ID (same number as below) | Optional                                            |
  | `META_PIXEL_ID`                      | Same Meta Pixel ID                   | Optional; use with token for CAPI                   |
  | `META_ACCESS_TOKEN`                  | Token from Step 4                    | Optional; mark **Sensitive**                        |
  | `META_TEST_EVENT_CODE`               | Test code from Events Manager        | Optional; testing only                              |
  | `REDIS_URL`                          | Redis connection URL                 | Optional                                            |

3. Click **Deploy**. Wait for the build to finish; Vercel will show a URL like `https://your-project.vercel.app`. You can share that link immediately; add your own domain in **Step 7** when you are ready.
4. When the code on GitHub changes (for example your agent pushes an update, or you merge edits made in the browser), Vercel can **redeploy automatically**. You do not need to run Git yourself.

### Step 7: Set up your custom domain in Vercel

Use this step when you want visitors to open your site at **your** apex domain (for example `yoursite.com`) instead of only `https://your-project.vercel.app`. Everything below is done in the **browser**. This guide uses the apex only—not `www`.

**What you need:** a domain you already own (from GoDaddy, Namecheap, Google Domains, Cloudflare, Porkbun, etc.). If you have not bought one yet, purchase it from any registrar first.

1. Open [vercel.com](https://vercel.com) and sign in. Open **your project** (click its name on the dashboard).
2. Open the **Settings** tab at the top of the project (not your global account settings).
3. In the left sidebar, click **Domains**.
4. Under **Domains**, type your **apex** domain only—for example `yoursite.com` (no `www`)—then click **Add** (or follow **Continue** if Vercel asks a follow-up question).
5. Vercel shows **DNS instructions** for that hostname. **Keep this page open.** You will add one or more records at your registrar. The values are **unique to your project**—always copy **Type**, **Name** / **Host**, and **Value** / **Points to** from Vercel (do not guess). For an apex domain, Vercel usually shows **A** records to specific IP addresses (use exactly what Vercel lists).
6. Open a **new tab**, go to your **domain registrar** (where you bought the domain), and sign in. Find **DNS**, **DNS records**, or **Manage DNS** for that domain.
7. **Create** the records Vercel asked for (same type, host, and value). If your registrar uses `**@`** for the root / apex domain, use that when Vercel means the apex. Save changes.
8. Return to Vercel → **Settings → Domains**. Wait until the domain shows **Valid Configuration** (green check). This can take a few minutes or, in rare cases, up to **48 hours** while DNS propagates.
9. **HTTPS (SSL):** After the domain validates, Vercel provisions a certificate automatically. You do not need to buy a separate SSL certificate for this setup.

Your landing page and checkout work on the `vercel.app` URL until DNS finishes; update Clarity or ad URLs to the final domain when Step 7 is complete.

---

## Customizing the sales page (`content/page.ts`)

Almost all **words and images** for the long-form landing page, checkout screen, post-purchase copy, and site metadata live in one place: `[content/page.ts](content/page.ts)`. The app reads the exported object `pageContent`; sections under `components/`, plus `[app/page.tsx](app/page.tsx)` and `[app/checkout/page.tsx](app/checkout/page.tsx)`, pull from it—so you usually **only edit this file** (and image files) to rebrand the funnel.

**What to change**

- **Mood Setter and story:** `headline`, `subheadline`, `moodSetterImageSrc` / `moodSetterImageAlt`, `leadBullets`, `problemCopy`, `courseIntro`, and the rest of the top-of-page fields.
- **Modules and bonuses:** `modules` and `bonuses` are **arrays**. Copy an existing entry, change `title`, `description`, `bullets`, and `imageSrc` / `imageAlt`, or remove entries if you want fewer blocks (check the page still reads well).
- **Pricing labels:** `pricing`, `priceAnchoring`, `pricingBlock`, and `valueStack` control the numbers and lines shown around the offer. Keep **displayed prices** and the real charge in sync: `pricing.cents` is the **integer amount in cents** (for example `4700` for $47.00) that Stripe uses at checkout—it must match what you show in `pricing.current`, `valueStack.yourPrice`, and related copy.
- **FAQ:** `faq.items` — each item has `question` and `answer`.
- **Checkout and payment UI:** `checkout`, `paymentForm`, `orderSuccess`.
- **Footer and legal links:** `footer` (`brandName`, `links`). Each link has a `label` (text in the footer) and `href` (path on your site, e.g. `/terms`).
- **Browser tab / SEO:** `site.metadata` (`title`, `description`) and `site.icons` (paths to favicon / Apple touch icon).

**Images** use paths starting with `/`, which map to the `[public/](public/)` folder (for example `/assets/mood-setter.png` → `public/assets/mood-setter.png`). Replace files there or point `imageSrc` at new paths. **PNG is a good default:** the template renders these through Next.js `Image`, which **optimizes delivery** (size and format) for fast loads and strong **Core Web Vitals**—the kind of performance search engines reward alongside good **alt text** (set the `*Alt` fields in `pageContent`). The **first time** a visitor hits a new image, the server may take a moment to build the optimized version; after that, loads are usually quick because the result is **cached**.

**Simple formatting in text** (where the template uses it): wrap phrases in `**double asterisks`** for **bold** and `*single asterisks`* for *italic*. To make a line act like a **section heading** inside a paragraph list, start the string with Markdown-style hashes and a space, e.g. `## Your heading` or `### Smaller heading` (see `problemCopy` in `[content/page.ts](content/page.ts)`).

**Price charged at checkout:** Stripe uses `pageContent.pricing.cents` from `[content/page.ts](content/page.ts)` (see `[app/checkout/actions.ts](app/checkout/actions.ts)`). When you change the offer, update `**pricing.cents`** and the visible dollar strings so they all agree.

**Legal pages (Terms & Privacy):** The footer uses `pageContent.footer.links` (default labels point to `/terms` and `/privacy`). In the Next.js **App Router**, each path needs a matching route: `**/terms`** → `app/terms/page.tsx`, `**/privacy**` → `app/privacy/page.tsx`. Open or create those files and put your legal copy in the page component (headings, paragraphs, lists—normal JSX). If you change an `href` in `footer.links`, add `app/<segment>/page.tsx` for that path so the link does not 404. This template does not include lawyer-vetted text; use content appropriate for your business and jurisdiction.

---

## Run the project on your computer (optional)

For developers only—not part of the browser-only deploy path above. Node.js 20+ recommended.

- Install dependencies and copy env file:

```bash
npm install
cp .env.example .env.local
# Fill in .env.local with your keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Checkout lives at `/checkout`.

Minimum to exercise checkout locally: `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`. Analytics and CAPI no-op when optional IDs or tokens are unset. See `[.env.example](.env.example)` for short field descriptions.

## Scripts


| Command         | Description          |
| --------------- | -------------------- |
| `npm run dev`   | Next.js dev server   |
| `npm run build` | Production build     |
| `npm run start` | Run production build |
| `npm run lint`  | ESLint               |


## License

[MIT](LICENSE). Copyright (c) 2026 AlmorNet.