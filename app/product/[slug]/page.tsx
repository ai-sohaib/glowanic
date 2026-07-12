import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/data/products";
import { amazonProductUrl } from "@/lib/amazon";
import { AmazonLink } from "@/components/AmazonLink";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ProductArt } from "@/components/ProductArt";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/product/${product.slug}/` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  const amazonUrl = amazonProductUrl({ asin: product.asin, keyword: product.searchKeyword });
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: product.name,
    description: product.summary,
    author: { "@type": "Organization", name: "Glowanic Beauty" },
  };

  return (
    <>
      <section className="product-detail-hero">
        <div className="container product-detail-grid">
          <div className="product-detail-art"><ProductArt type={product.art} label={product.name} /></div>
          <div className="product-detail-copy">
            <p className="eyebrow">{product.subcategory} · {product.eyebrow}</p>
            <h1>{product.name}</h1>
            <p className="product-summary">{product.summary}</p>
            <div className="score-line"><strong>{product.editorScore.toFixed(1)}</strong><span>Glowanic editor score</span></div>
            <div className="detail-actions">
              <AmazonLink href={amazonUrl} className="button">Check latest details on Amazon</AmazonLink>
              <Link href={`/category/${product.category}/`} className="button button-secondary">Browse category</Link>
            </div>
            <p className="muted small">We do not display a fixed price because Amazon pricing and availability can change. Verify all details on the Amazon listing.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container detail-content-grid">
          <div>
            <AffiliateDisclosure />
            <h2>Who this category may suit</h2>
            <ul className="check-list">{product.bestFor.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="detail-card">
            <h2>What to look for</h2>
            <ul>{product.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
            <p className="medical-note">Beauty content is educational and is not medical advice. Patch-test where appropriate and consult a qualified professional for persistent skin or scalp concerns.</p>
          </div>
        </div>
      </section>
      <section className="section section-tint">
        <div className="container">
          <div className="section-heading"><p className="eyebrow">Keep exploring</p><h2>Related recommendations</h2></div>
          <div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
