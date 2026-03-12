import CollectionHero from '@/components/collection/CollectionHero';
import Link from 'next/link';

export default function SalePage() {
  return (
    <>
      <CollectionHero
        headline="Sale"
        subheadline="Limited-time offers."
        description="Clearance items and special offers. Shop our archive sale for reduced prices on select styles."
        image="https://neiwai.life/cdn/shop/files/20250908-131826.png?v=1757362737&width=1920"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24 text-center">
        <p className="font-body text-taupe mb-8 max-w-[480px] mx-auto">
          Browse our archive sale for discounted styles. New items added regularly.
        </p>
        <Link
          href="https://neiwai.life/collections/sale-collection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-ink px-8 py-4 font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:bg-ink hover:text-cream transition-all duration-300"
        >
          Shop Archive Sale
          <span>→</span>
        </Link>
      </div>
    </>
  );
}
