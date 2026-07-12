import Link from "next/link";
import type { Product } from "@/data/products";
import { amazonProductUrl } from "@/lib/amazon";
import { AmazonLink } from "./AmazonLink";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="product-card">
      <Link href={`/product/${product.slug}/`} className="product-art-link" aria-label={`Read about ${product.name}`}>
        <ProductArt type={product.art} label={product.name} />
      </Link>
      <div className="product-card-body">
        <div className="product-meta">
          <span>{product.subcategory}</span>
          <span>Editor score {product.editorScore.toFixed(1)}</span>
        </div>
        <p className="eyebrow">{product.eyebrow}</p>
        <h3><Link href={`/product/${product.slug}/`}>{product.name}</Link></h3>
        <p>{product.summary}</p>
        <div className="product-actions">
          <Link href={`/product/${product.slug}/`} className="text-link">View details</Link>
          <AmazonLink href={amazonProductUrl({ asin: product.asin, keyword: product.searchKeyword })} className="button button-small">
            Check on Amazon
          </AmazonLink>
        </div>
      </div>
    </article>
  );
}
