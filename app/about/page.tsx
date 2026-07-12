import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how Glowanic Beauty organizes practical beauty recommendations and transparent Amazon shopping links.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero"><div className="container narrow"><p className="eyebrow">About Glowanic</p><h1>Glow naturally. Choose confidently.</h1><p>Glowanic Beauty helps readers navigate crowded beauty categories with practical explanations, routine-led organization and transparent shopping links.</p></div></section>
      <section className="section"><div className="container prose-grid">
        <div><h2>Our purpose</h2><p>Beauty shopping can feel overwhelming. We simplify discovery by grouping products around routine steps, concerns and practical use cases—not by presenting every option as a must-have.</p><p>The launch structure focuses on Skin Care, Hair Care and Beauty Tools, informed by US keyword research supplied for the Glowanic project.</p></div>
        <div className="detail-card"><h2>Our editorial principles</h2><ul><li>Explain who a product category may suit.</li><li>Separate editorial guidance from commercial links.</li><li>Avoid fixed price claims that may become outdated.</li><li>Send readers to Amazon to confirm seller, stock and current details.</li><li>Use clear affiliate disclosures across the site.</li></ul></div>
      </div></section>
      <section className="section section-tint"><div className="container centered-cta"><h2>Explore the Glowanic shortlist</h2><p>Start with a focused department or browse every launch recommendation.</p><Link className="button" href="/shop/">Shop all picks</Link></div></section>
    </>
  );
}
