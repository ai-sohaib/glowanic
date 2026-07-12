import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { AffiliateDisclosure } from "./AffiliateDisclosure";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Image src="/brand/glowanic-logo.jpeg" alt="Glowanic Beauty" width={112} height={112} />
          <p className="footer-copy">Independent beauty recommendations, routine education and carefully organized shopping shortcuts.</p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/shop/">All Picks</Link>
          <Link href="/category/skin-care/">Skin Care</Link>
          <Link href="/category/hair-care/">Hair Care</Link>
          <Link href="/category/beauty-tools/">Beauty Tools</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about/">About Glowanic</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/disclosure/">Affiliate Disclosure</Link>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/terms/">Terms</Link>
        </div>
        <div>
          <h3>Contact</h3>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p className="muted small">Product availability, pricing and seller details are confirmed on Amazon at the time of purchase.</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <AffiliateDisclosure compact />
        <p>© {new Date().getFullYear()} Glowanic Beauty. All rights reserved.</p>
      </div>
    </footer>
  );
}
