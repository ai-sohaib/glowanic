import Link from "next/link";

export default function NotFound() {
  return <section className="section"><div className="container empty-state"><p className="eyebrow">404</p><h1>This page has lost its glow.</h1><p>The link may have changed, or the page may not exist yet.</p><Link href="/" className="button">Return home</Link></div></section>;
}
