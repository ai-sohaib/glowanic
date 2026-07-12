import type { Metadata } from "next";
import { AffiliateDisclosure } from "@/components/AffiliateDisclosure";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Shop Beauty Picks",
  description: "Browse Glowanic Beauty recommendations across skin care, hair care and beauty tools.",
  alternates: { canonical: "/shop/" },
};

export default function ShopPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container narrow">
          <p className="eyebrow">Glowanic Shop</p>
          <h1>Beauty picks, organized for real routines</h1>
          <p>Search by product type, concern or use case. Final pricing, availability and seller details are shown on Amazon.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <AffiliateDisclosure />
          <ShopClient />
        </div>
      </section>
    </>
  );
}
