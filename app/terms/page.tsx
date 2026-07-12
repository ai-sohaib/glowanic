import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use", alternates: { canonical: "/terms/" } };

export default function TermsPage() {
  return <section className="section legal-page"><div className="container article-narrow"><p className="eyebrow">Legal</p><h1>Terms of Use</h1><p>Last updated: July 2026</p><h2>Educational content</h2><p>Glowanic Beauty provides general beauty information and product-category guidance. The content is not medical advice and is not a substitute for diagnosis or treatment from a qualified professional.</p><h2>External purchases</h2><p>Glowanic does not process product orders. Purchases made after following an Amazon link are subject to Amazon and seller terms, pricing, availability, delivery, returns and customer-service policies.</p><h2>Accuracy</h2><p>We aim to keep editorial content useful, but product formulations, listings, pricing and availability can change. Confirm current information on the retailer page before purchase or use.</p><h2>Intellectual property</h2><p>The Glowanic name, logo, site design and original editorial content may not be reproduced without permission.</p></div></section>;
}
