# TechTrend Solutions – website

A SEO-optimised marketing website for TechTrend Solutions, a Danish cybersecurity company targeting SMEs.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and deployed on **Vercel**.

## Pages

| Route | Page |
| --- | --- |
| `/` | Forside / landing |
| `/loesninger` | Løsninger (services) |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog posts (4 articles) |
| `/kontakt` | Kontakt + form |
| `/om-os` | Om os |
| `/faq` | Ofte stillede spørgsmål |

## SEO features

- Per-page `<title>` and `<meta description>` via Next.js Metadata API
- Open Graph + Twitter card metadata
- JSON-LD structured data: Organization, WebSite, Service, BlogPosting, FAQPage, BreadcrumbList
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML (`<h1>`, `<h2>`, `<article>`, `<section>`, `<nav>`)
- Danish lang attribute (`<html lang="da">`)
- Canonical URLs on every page
- Target keywords: cybersikkerhed, IT-sikkerhed for virksomheder, firewall-løsninger, netværksbeskyttelse, cybersikkerhed SMV, IT-sikkerhedsløsninger

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build (test before deploying)

```bash
npm run build
npm run start
```

## Deploy to Vercel (free)

### Option A: Vercel CLI (fastest – ~2 minutes)

```bash
npm i -g vercel        # one-time install
vercel login           # follow the link, sign in with GitHub or email
vercel                 # deploy a preview
vercel --prod          # deploy to production
```

You'll get a live URL like `https://techtrend-solutions.vercel.app`.

### Option B: GitHub + Vercel dashboard (recommended for collaboration)

1. Create a new repo on [github.com/new](https://github.com/new) (e.g. `techtrend-solutions`).
2. From this folder, push the code:
   ```bash
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-user>/techtrend-solutions.git
   git push -u origin main
   ```
3. Go to [vercel.com/new](https://vercel.com/new), import the repo, click **Deploy**. Done.

Every push to `main` redeploys production automatically.

### Custom domain (optional, ~10–15 €/year)

In the Vercel dashboard → your project → **Settings → Domains** → add your domain (e.g. `techtrendsolutions.dk`). Update DNS at your registrar, and update `siteConfig.url` in `lib/site.ts` to the new domain.

## Editing content

| What | Where |
| --- | --- |
| Site name, contact info, nav | `lib/site.ts` |
| Services | `lib/services.ts` |
| Blog posts | `lib/posts.ts` |
| FAQ items | `app/faq/page.tsx` |
| Logo | `app/components/Logo.tsx`, `app/icon.svg` |
| Colors / theme | `app/globals.css` (`@theme` block) |

## Replacing image placeholders

Image placeholders are rendered by `app/components/ImagePlaceholder.tsx`. To use a real image instead:

1. Drop the image into `public/images/`.
2. Replace `<ImagePlaceholder ... />` with Next.js `<Image>`:
   ```tsx
   import Image from "next/image";
   <Image
     src="/images/hero.jpg"
     alt="Beskrivelse for SEO"
     width={1200}
     height={800}
     priority
   />
   ```

`next/image` handles lazy loading, responsive sizing, and modern formats (AVIF/WebP) automatically.

## Contact form

The form on `/kontakt` is **frontend-only** for the demo – it shows a success state but doesn't actually send data. To wire it up later:

- Add a Next.js Server Action / API route (`app/api/contact/route.ts`)
- Or point the form at a service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) (free tiers, just change the form `action`).
