import Link from 'next/link';

interface TextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}

export default function TextLink({
  href,
  children,
  className = '',
  arrow = true,
}: TextLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 font-body text-[15px] text-ink transition-colors duration-300 hover:text-accent group ${className}`}
    >
      <span>{children}</span>
      {arrow && (
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
