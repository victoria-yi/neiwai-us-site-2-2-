'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
const items = [
  {
    id: 'bra',
    overline: 'Bras',
    name: 'Barely Zero Strap Bra',
    tagline: 'The original. Still the golden standard.',
    price: '$39',
    href: '/bras/barely-zero-strap-bra',
    cta: 'Shop Bra',
    image: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=1200',
    imageAlt: 'Barely Zero Strap Bra',
  },
  {
    id: 'brief',
    overline: 'Briefs',
    name: 'Barely Zero Low Waist Brief',
    tagline: 'The brief that disappears.',
    price: '$15',
    href: '/briefs/barely-zero-low-waist-brief',
    cta: 'Shop Brief',
    image: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=1200',
    imageAlt: 'Barely Zero Low Waist Brief',
  },
];

export default function CompleteTheSet() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      {/* Header */}
      <FadeIn>
        <div className="px-6 lg:px-20 max-w-[1440px] mx-auto flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <h2 className="font-display text-[32px] lg:text-[40px] font-light text-ink leading-tight">
              Complete the Set
            </h2>
            <p className="font-body text-[14px] text-taupe mt-1.5">
              The bra and the brief, designed as one.
            </p>
          </div>
          <Link
            href="/briefs"
            className="hidden sm:flex font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 items-center gap-1.5 group"
          >
            Shop Briefs
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </FadeIn>

      {/* Two editorial product cards */}
      <div className="px-6 lg:px-20 max-w-[1440px] mx-auto grid grid-cols-2 gap-4 lg:gap-8">
        {items.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.12}>
            <Link href={item.href} className="group block">
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, 45vw"
                />
              </div>

              {/* Info below image */}
              <div className="pt-5 pb-2 border-b border-stone/30">
                <p className="font-body text-[12px] font-semibold tracking-[0.1em] uppercase text-ink">{item.overline}</p>
                <h3 className="font-display text-[18px] sm:text-[22px] lg:text-[26px] font-light text-ink mt-2 leading-[1.2]">
                  {item.name}
                </h3>
                <p className="font-body text-[13px] text-taupe mt-2 hidden sm:block">{item.tagline}</p>
                <div className="flex items-center justify-between mt-3">
                  <p className="font-body text-[14px] lg:text-[15px] text-ink">{item.price}</p>
                  <span className="font-body text-[11px] tracking-[0.12em] uppercase text-taupe group-hover:text-accent transition-colors duration-300 flex items-center gap-1">
                    {item.cta}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
