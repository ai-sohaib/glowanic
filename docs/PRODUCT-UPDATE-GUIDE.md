# Updating Products

All launch products are stored in:

```text
data/products.ts
```

Each product supports:

- `name`: public recommendation title
- `category`: `skin-care`, `hair-care`, or `beauty-tools`
- `subcategory`: the label shown above the title
- `summary`: short editorial explanation
- `bestFor`: use-case list
- `highlights`: buying or usage considerations
- `searchKeyword`: Amazon search term used when no ASIN is supplied
- `asin`: optional exact Amazon product identifier
- `featured`: controls homepage inclusion
- `editorScore`: Glowanic editorial score; do not present it as an Amazon customer rating
- `art`: local illustration style

## Adding a product

1. Duplicate one product object.
2. Give it a unique URL-safe `slug`.
3. Use an evidence-based summary and avoid medical promises.
4. Add the exact ASIN only after checking the Amazon listing.
5. Run `npm run typecheck` and `npm run build`.

## Replacing local illustrations

Use only images that Glowanic owns or is permitted to display. Do not download and republish Amazon listing images unless the applicable Amazon program tools and license expressly allow that use.
