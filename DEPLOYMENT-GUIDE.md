# Manual GitHub Upload and Deployment

## 1. Replace repository contents

1. Extract this ZIP on your computer.
2. Open your GitHub repository: `ai-sohaib/glowanic`.
3. Delete the incorrect files currently in the repository, or upload this project using GitHub Desktop.
4. Upload **all files inside the extracted folder**, including the hidden `.github` folder.
5. Confirm that `index.html`, `assets`, `products`, `shop`, and `.github` appear at the repository root.

The wrong structure is:

```text
glowanic/glowanic-full-website-repository/index.html
```

The correct structure is:

```text
glowanic/index.html
glowanic/assets/
glowanic/products/
glowanic/.github/
```

## 2. Enable GitHub Pages

Open:

```text
Repository → Settings → Pages
```

Set **Source** to **GitHub Actions**. A push to `main` will run the included workflow.

## 3. Configure the custom domain

The repository contains:

```text
CNAME → www.glowanic.com
```

In Hostinger DNS, use:

```text
A      @      185.199.108.153
A      @      185.199.109.153
A      @      185.199.110.153
A      @      185.199.111.153
CNAME  www    ai-sohaib.github.io
```

Do not delete MX, SPF, DKIM or DMARC records used for email.

## 4. Verify deployment

After the GitHub Actions job completes, test:

- `https://www.glowanic.com/`
- `https://www.glowanic.com/shop/`
- `https://www.glowanic.com/products/acne-treatment-serum/`
- `https://www.glowanic.com/sitemap.xml`

## Local validation

Install Node.js, open the project folder and run:

```bash
npm test
```
