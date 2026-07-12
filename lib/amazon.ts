const DEFAULT_TAG = "your-associate-tag-20";

export const associateTag = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || DEFAULT_TAG;

export function amazonProductUrl({ asin, keyword }: { asin?: string; keyword: string }) {
  const base = asin
    ? `https://www.amazon.com/dp/${encodeURIComponent(asin)}`
    : `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;

  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}tag=${encodeURIComponent(associateTag)}`;
}

export function amazonCategoryUrl(keyword: string) {
  return amazonProductUrl({ keyword });
}

export const isAmazonConfigured = associateTag !== DEFAULT_TAG;
