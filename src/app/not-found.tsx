import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
      <p className="font-display text-[48px] lg:text-[64px] font-light text-ink">404</p>
      <p className="font-body text-[16px] text-taupe mt-2">This page could not be found.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="font-body text-[14px] text-ink underline hover:text-accent transition-colors"
        >
          Home
        </Link>
        <Link
          href="/bras/barely-zero-strap-bra"
          className="font-body text-[14px] text-ink underline hover:text-accent transition-colors"
        >
          Barely Zero Strap Bra (PDP)
        </Link>
        <Link
          href="/bras"
          className="font-body text-[14px] text-ink underline hover:text-accent transition-colors"
        >
          Bras
        </Link>
      </div>
    </div>
  );
}
