# Glowanic Beauty

Production storefront for **www.glowanic.com**, deployed automatically with GitHub Pages.

## What is included

- Premium responsive beauty storefront
- Skin Care, Hair Care and Beauty Tools departments
- 18 curated recommendation pages
- Search, filters, favorites and a browser-based Glowanic bag
- 6 SEO-focused editorial beauty guides
- Amazon affiliate links and disclosure pages
- Structured data, canonical URLs, sitemap, robots.txt and PWA manifest
- Optimized local assets with no external font or image dependency

## Deployment

The complete optimized site is stored in `glowanic-site.zip`. The GitHub Actions workflow extracts it and deploys it to GitHub Pages on every push to `main`.

## Configure Amazon Associates

Open **Repository Settings → Secrets and variables → Actions → Variables** and create:

- `AMAZON_ASSOCIATE_TAG` — your exact Amazon US Tracking ID, such as `glowanic-20`
- `CONTACT_EMAIL` — your public website email, such as `hello@glowanic.com`

The deployment workflow injects these values into the static site. Until the Amazon variable is added, the temporary tag `glowanic-20` remains in the links.

## Custom domain

The deployment package and repository use `www.glowanic.com` as the primary GitHub Pages domain. Keep the Hostinger `www` CNAME pointed to `ai-sohaib.github.io` and the four GitHub Pages A records on the apex domain.

## Affiliate disclosure

As an Amazon Associate I earn from qualifying purchases.
