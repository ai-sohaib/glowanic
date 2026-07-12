import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/shop/", label: "Shop" },
  { href: "/category/skin-care/", label: "Skin Care" },
  { href: "/category/hair-care/", label: "Hair Care" },
  { href: "/category/beauty-tools/", label: "Beauty Tools" },
  { href: "/guides/simple-acne-prone-skin-routine/", label: "Guides" },
  { href: "/about/", label: "About" },
];

export function Header() {
  return (
    <>
      <div className="announcement">Curated beauty finds for smarter, simpler routines.</div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Glowanic Beauty home">
            <Image
              src="/brand/glowanic-logo.jpeg"
              alt="Glowanic Beauty — Glow Naturally, Shine Confidently"
              width={82}
              height={82}
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <Link href="/shop/" className="button button-small header-cta">Shop Picks</Link>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <div className="mobile-menu-panel">
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
