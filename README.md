# Glowanic Beauty

A polished, responsive Amazon Associates beauty recommendation website for **glowanic.com**.

![Glowanic Beauty](public/brand/glowanic-logo.jpeg)

## Included

- Next.js 16 + React 19 + TypeScript
- fully static export for fast, low-cost hosting
- responsive premium Glowanic brand design using the supplied logo
- Skin Care, Hair Care and Beauty Tools category pages
- 14 launch product recommendation pages
- searchable and filterable shop
- editorial beauty guides
- SEO metadata, canonical URLs, sitemap, robots and structured data
- Amazon Associate tagged link generator
- disclosure, privacy, terms, about and contact pages
- optional GA4 outbound affiliate-click tracking
- GitHub Pages deployment workflow
- ready for Vercel, Netlify, Cloudflare Pages or GitHub Pages

## Important launch requirement

Replace the placeholder Amazon tag with your real US Associates tag.

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://glowanic.com
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=your-real-tag-20
NEXT_PUBLIC_CONTACT_EMAIL=hello@glowanic.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run typecheck
npm run build
```

The static website is generated in the `out` folder.

## Recommended deployment: Vercel

1. Create a new GitHub repository and upload this project.
2. In Vercel, choose **Add New Project** and import the repository.
3. Add the environment variables shown above.
4. Deploy.
5. Add `glowanic.com` and `www.glowanic.com` under Vercel project domains.
6. Apply the DNS records Vercel provides at your domain registrar.

## GitHub Pages deployment

The repository contains `.github/workflows/pages.yml` and `public/CNAME`.

1. Push the project to the `main` branch.
2. In repository settings, open **Pages** and select **GitHub Actions** as the source.
3. Under **Secrets and variables → Actions → Variables**, add:
   - `AMAZON_ASSOCIATE_TAG`
   - `CONTACT_EMAIL`
   - `GA_MEASUREMENT_ID` (optional)
4. Run the workflow or push a commit.
5. Configure the DNS records required by GitHub Pages for `glowanic.com`.

## Editing products

Products are maintained in `data/products.ts`. Detailed instructions are in:

- `docs/PRODUCT-UPDATE-GUIDE.md`
- `docs/AMAZON-INTEGRATION.md`
- `docs/KEYWORD-STRATEGY.md`

## Amazon model

Glowanic is an editorial affiliate storefront. Customers complete purchases on Amazon; Glowanic does not collect payment, process orders or provide Amazon order support.

The launch build intentionally avoids fixed Amazon prices and copied customer reviews. For live catalog data, use Amazon's newer Creators API in a secure server-side deployment after your account receives access.
