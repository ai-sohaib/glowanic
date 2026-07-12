import type { Metadata } from "next";

export const metadata: Metadata = { title: "Affiliate Disclosure", alternates: { canonical: "/disclosure/" } };

export default function DisclosurePage() {
  return <section className="section legal-page"><div className="container article-narrow"><p className="eyebrow">Transparency</p><h1>Affiliate Disclosure</h1><p><strong>As an Amazon Associate I earn from qualifying purchases.</strong></p><p>Some links on Glowanic Beauty are affiliate links. When a reader clicks a qualifying link and makes a purchase, Glowanic may earn a commission at no additional cost to the reader.</p><p>Amazon does not sponsor, endorse or control Glowanic Beauty. Product pricing, availability, seller information, shipping, returns and customer service are handled by Amazon and the applicable seller.</p><p>Editorial descriptions are designed to help readers understand product categories and use cases. A commercial relationship does not guarantee a positive recommendation.</p></div></section>;
}
