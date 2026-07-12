# Amazon Associates Integration

## What is already integrated

The storefront is designed for the **Amazon Associates US program** and already includes:

- tagged Amazon search/product URLs generated in `lib/amazon.ts`
- `rel="sponsored nofollow"` on Amazon outbound links
- the required Amazon Associate disclosure across the website
- click tracking support through GA4 when a measurement ID is configured
- no local checkout, customer account or order handling
- no fixed Amazon pricing, stock or seller claims that can become stale

## Required before launch

Set this variable in Vercel or GitHub repository variables:

```text
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=your-real-tag-20
```

For GitHub Pages, create an Actions variable named `AMAZON_ASSOCIATE_TAG` under:

**Repository Settings → Secrets and variables → Actions → Variables**

The website uses Amazon search links until an ASIN is added to a product record. To link an exact item, open `data/products.ts` and add:

```ts
asin: "B0XXXXXXXX",
```

The generated link then becomes an exact `/dp/ASIN` Amazon link with your Associate tag.

## Live Amazon product data

Amazon's older Product Advertising API documentation states that PA-API was deprecated on May 15, 2026 in favor of the **Creators API**. Live price, offer, image and availability data should therefore be implemented with the Creators API rather than starting a new PA-API integration.

Live API data requires:

1. an approved Amazon Associates account
2. Creators API access and credentials
3. a secure server-side environment (credentials must never be exposed in browser code)
4. compliance with Amazon's content caching and display requirements

This repository intentionally uses safe manual tagged links at launch. It can be upgraded to server-rendered Creators API data after access is approved.

## Important compliance checks

Before publishing:

- add `https://glowanic.com` to your Associates account's website list
- keep the disclosure visible
- do not describe Amazon as sponsoring or endorsing Glowanic
- do not copy Amazon customer reviews into the site
- verify that any manually added product image is licensed for your use
- confirm current Amazon rules before changing price, review or image handling
