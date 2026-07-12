import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function AmazonLink({ href, children, className = "", ...props }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={className}
      data-affiliate-link="amazon"
      {...props}
    >
      {children}
    </a>
  );
}
