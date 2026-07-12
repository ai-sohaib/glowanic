import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Contact", alternates: { canonical: "/contact/" } };

export default function ContactPage() {
  return (
    <>
      <section className="page-hero"><div className="container narrow"><p className="eyebrow">Contact Glowanic</p><h1>Questions, corrections or collaboration ideas?</h1><p>Send a message and include the page or product topic you are referring to.</p></div></section>
      <section className="section"><div className="container contact-card"><h2>Email</h2><a className="button" href={`mailto:${siteConfig.email}?subject=Glowanic%20Website%20Inquiry`}>{siteConfig.email}</a><p className="muted">For Amazon order, return, delivery or account questions, contact Amazon directly through your Amazon account.</p></div></section>
    </>
  );
}
