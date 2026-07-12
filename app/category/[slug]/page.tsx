import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name} Recommendations`,
    description: category.seoIntro,
    alternates: { canonical: `/category/${category.slug}/` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const categoryProducts = products.filter((product) => product.category === category.slug);

  return (
    <>
      <section className={`page-hero category-hero hero-${category.slug}`}>
        <div className="container narrow">
          <p className="eyebrow">Glowanic Department</p>
          <h1>{category.name}</h1>
          <p>{category.seoIntro}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <AffiliateDisclosure />
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Curated shortlist</p><h2>{categoryProducts.length} focused recommendations</h2></div>
            <p>Each pick links to Amazon so you can confirm current product details before buying.</p>
          </div>
          <div className="product-grid">
            {categoryProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>
    </>
  );
}
