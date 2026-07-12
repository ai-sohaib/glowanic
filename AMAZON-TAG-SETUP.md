# Amazon Associates Tag Setup

The placeholder tracking tag is:

```text
glowanic-20
```

Do not promote the website until this matches the exact Tracking ID shown in Amazon Associates Central.

## Recommended GitHub method

Open:

```text
Repository → Settings → Secrets and variables → Actions → Variables
```

Create this repository variable:

```text
Name: AMAZON_ASSOCIATE_TAG
Value: your exact Amazon tracking ID
```

The deployment workflow automatically replaces the placeholder while publishing the site.

## Manual method

Replace every occurrence of `glowanic-20` in:

- `assets/data.js`
- `assets/app.js`
- HTML files inside `products/`

Then commit and redeploy.

## Verification

Open a product page and click **View current options on Amazon**. The destination URL must include:

```text
&tag=YOUR-TRACKING-ID
```
