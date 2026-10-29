# Arhwerk website

Production: https://www.arhwerk.ro

## Stack

- **Nuxt 3** (Vue 3) with SSR, Tailwind, `@nuxt/image`, `@vueuse/motion`
- **Contentful** as the CMS — needs `NUXT_PUBLIC_CONTENTFUL_SPACE_ID`, `NUXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN`, `NUXT_PUBLIC_CONTENTFUL_ENVIRONMENT` (see `.env`)
- **Web3Forms** for the contact form — the browser posts directly to `api.web3forms.com` (`components/Contact/Form.vue`)

## Deployment

- **Hosting: Vercel**, project `ovidiu-ions-projects/arhwerk` on the Vercel account ovidiu.ion@extendio.ro. Deployed through Vercel's GitHub integration (no `vercel.json` in the repo; Nuxt is auto-detected): every push to `main` goes to production (Settings → Environments → Production → Branch Tracking); other branches get preview deploys. Runs as SSR on a serverless function, so content is fetched from Contentful at request time. Env vars are set in the Vercel dashboard.
- **DNS: Cloudflare.** `arhwerk.ro` points at Vercel and redirects to `www.arhwerk.ro`, which is proxied through Cloudflare to Vercel.
- **Content updates** need no rebuild: pages are rendered on request, so anything published in Contentful shows up on the next page load.
- Until April 2025 the site was on GitHub Pages via GitHub Actions; those workflows have been removed.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
