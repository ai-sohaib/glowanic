import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/data/guides";
import { GuideCard } from "@/components/GuideCard";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: { canonical: `/guides/${guide.slug}/` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const more = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="page-hero article-hero">
          <div className="container article-narrow">
            <p className="eyebrow">{guide.category} · {guide.readTime}</p>
            <h1>{guide.title}</h1>
            <p>{guide.excerpt}</p>
          </div>
        </header>
        <div className="container article-narrow article-body">
          <div className="article-notice">This article is general beauty education, not medical advice. Follow product instructions and seek professional care for persistent concerns.</div>
          {guide.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <div className="article-cta">
            <h2>Ready to explore related picks?</h2>
            <p>Browse Glowanic recommendations and verify current product details directly on Amazon.</p>
            <Link href="/shop/" className="button">Browse the shop</Link>
          </div>
        </div>
      </article>
      <section className="section section-dark">
        <div className="container">
          <div className="section-heading light-heading"><p className="eyebrow">More from Glowanic</p><h2>Continue reading</h2></div>
          <div className="guide-grid">{more.map((item) => <GuideCard key={item.slug} guide={item} />)}</div>
        </div>
      </section>
    </>
  );
}
