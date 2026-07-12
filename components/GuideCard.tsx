import Link from "next/link";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="guide-card">
      <div className="guide-card-top">
        <span>{guide.category}</span>
        <span>{guide.readTime}</span>
      </div>
      <h3><Link href={`/guides/${guide.slug}/`}>{guide.title}</Link></h3>
      <p>{guide.excerpt}</p>
      <Link className="text-link" href={`/guides/${guide.slug}/`}>Read the guide</Link>
    </article>
  );
}
