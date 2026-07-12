import Image from "next/image";
import Link from "next/link";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import { ProductCard } from "@/components/ProductCard";
import { GuideCard } from "@/components/GuideCard";
import { categories, products } from "@/data/products";
import { guides } from "@/data/guides";

export default function HomePage() {
  const featured = products.filter((product) => product.featured).slice(0, 6);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Beauty, made easier to choose</p>
            <h1>Glow naturally.<br />Shop confidently.</h1>
            <p className="hero-lead">Curated skin care, hair care and beauty tools—organized around real routines, practical needs and smarter product discovery.</p>
            <div className="hero-actions">
              <Link href="/shop/" className="button">Explore Beauty Picks</Link>
              <Link href="/guides/simple-acne-prone-skin-routine/" className="button button-secondary">Read Our Guides</Link>
            </div>
            <div className="hero-points">
              <span>Routine-first recommendations</span>
              <span>Clear Amazon shopping links</span>
              <span>No stale price claims</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-logo-card">
              <Image src="/brand/glowanic-logo.jpeg" alt="Glowanic Beauty logo" width={640} height={640} priority />
            </div>
            <div className="floating-card floating-one">Skin Care<br /><strong>Glow-focused picks</strong></div>
            <div className="floating-card floating-two">Beauty Tools<br /><strong>Practical at-home finds</strong></div>
          </div>
        </div>
      </section>

      <div className="container disclosure-wrap"><AffiliateDisclosure /></div>

      <section className="section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Shop by routine</p><h2>Three focused beauty departments</h2></div>
            <p>Built from your keyword research: high-interest categories supported by lower-difficulty, purchase-ready subtopics.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link key={category.slug} href={`/category/${category.slug}/`} className={`category-card category-${index + 1}`}>
                <span className="category-number">0{index + 1}</span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="text-link">Explore {category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Editor selections</p><h2>Featured beauty picks</h2></div>
            <Link href="/shop/" className="text-link">View all recommendations</Link>
          </div>
          <div className="product-grid">
            {featured.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-panel">
            <p className="eyebrow">Why Glowanic</p>
            <h2>Less hype. More routine fit.</h2>
            <p>Glowanic is designed as a beauty recommendation destination—not a checkout store. We help readers understand categories, compare use cases and continue to Amazon when they are ready to verify the latest price, seller and availability.</p>
            <Link href="/about/" className="button button-secondary">How we choose</Link>
          </div>
          <div className="editorial-stats">
            <div><strong>3</strong><span>core departments</span></div>
            <div><strong>14</strong><span>launch-ready product topics</span></div>
            <div><strong>100%</strong><span>transparent sponsored links</span></div>
            <div><strong>US</strong><span>Amazon market focus</span></div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading light-heading split-heading">
            <div><p className="eyebrow">Glowanic Journal</p><h2>Practical beauty guides</h2></div>
            <p>Helpful articles to support informed product choices and safer routines.</p>
          </div>
          <div className="guide-grid">
            {guides.slice(0, 3).map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
          </div>
        </div>
      </section>
    </>
  );
}
