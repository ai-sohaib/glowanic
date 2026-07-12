import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy/" } };

export default function PrivacyPage() {
  return <section className="section legal-page"><div className="container article-narrow"><p className="eyebrow">Legal</p><h1>Privacy Policy</h1><p>Last updated: July 2026</p><h2>Information collected</h2><p>Glowanic may receive basic technical information such as browser type, device type, referring page and pages viewed when analytics is enabled. The launch website does not include account creation or direct checkout.</p><h2>Affiliate links</h2><p>When you click an Amazon link, Amazon may collect information according to its own privacy notice and cookie practices.</p><h2>Analytics</h2><p>Google Analytics is loaded only when a measurement ID is configured by the site owner. Analytics may use cookies or similar technologies to measure traffic and outbound affiliate clicks.</p><h2>Contact</h2><p>Questions about this policy can be sent to <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></div></section>;
}
