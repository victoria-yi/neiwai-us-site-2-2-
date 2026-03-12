'use client';

import { useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

const products = [
  {
    id: 'strap-bra',
    overline: 'Barely Zero · Strap Bra',
    name: 'The original.\nThe golden standard.',
    description:
      'Made from CloudFit nylon, developed to move with the body without binding. Wire-free, foam-free, fully seamless.',
    price: '$39',
    href: '/bras/barely-zero-strap-bra',
    image:
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=1600',
    imageAlt: 'Barely Zero Strap Bra',
    badge: null,
  },
  {
    id: 'scallop-bra',
    overline: 'Barely Zero · Scallop',
    name: 'The evolution.\nStructure without weight.',
    description:
      'A scalloped V-neckline with fixed molded cups. Pull-on, no clasps, no underwire. Invisible under clothing.',
    price: '$59',
    href: '/bras/barely-zero-scallop-bra',
    image:
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI158792.jpg?v=1764127456&width=1600',
    imageAlt: 'Barely Zero Scallop Bra',
    badge: 'New',
  },
];

export default function FeaturedBras() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    setActiveIndex(
      Math.round(scrollRef.current.scrollLeft / scrollRef.current.offsetWidth),
    );
  }, []);

  const goTo = (i: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: i * scrollRef.current.offsetWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="bg-cream py-20 lg:py-32">
      {/* Header */}
      <FadeIn>
        <div className="px-6 lg:px-20 max-w-[1440px] mx-auto flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <h2 className="font-display text-[32px] lg:text-[40px] font-light text-ink leading-tight">
              Featured
            </h2>
            <p className="font-body text-[13px] text-taupe mt-1.5">
              The bras that started it all.
            </p>
          </div>
          <Link
            href="/bras"
            className="font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
          >
            All Bras
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </FadeIn>

      {/* Mobile: horizontal snap scroll */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none px-6"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-4" style={{ width: `${products.length * 85}vw` }}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group block snap-start"
              style={{ width: `${80}vw` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="80vw"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#7A2C2C] flex items-center justify-center">
                    <span className="font-body text-[8px] tracking-[0.08em] uppercase text-cream font-semibold">
                      New
                    </span>
                  </div>
                )}
              </div>
              <div className="pt-5 pb-5 border-b border-sand">
                <p className="font-body text-[12px] font-semibold tracking-[0.1em] uppercase text-ink">
                  {product.overline}
                </p>
                <h3 className="font-display text-[22px] font-light text-ink mt-2 leading-[1.2] whitespace-pre-line">
                  {product.name}
                </h3>
                <p className="font-body text-[13px] text-taupe mt-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <p className="font-body text-[15px] text-ink">{product.price}</p>
                  <span className="font-body text-[11px] tracking-[0.12em] uppercase text-taupe group-hover:text-accent transition-colors duration-300 flex items-center gap-1">
                    Shop
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dots */}
      <div className="flex lg:hidden justify-center gap-2 mt-6">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to product ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex
                ? 'w-6 h-1.5 bg-ink'
                : 'w-1.5 h-1.5 bg-stone/40 hover:bg-stone'
            }`}
          />
        ))}
      </div>

      {/* Desktop: two editorial cards side by side */}
      <div className="hidden lg:block px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-8 xl:gap-12">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.12}>
              <Link href={product.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </motion.div>
                  {product.badge && (
                    <div className="absolute top-5 left-5 z-10 w-11 h-11 rounded-full bg-[#7A2C2C] flex items-center justify-center">
                      <span className="font-body text-[9px] tracking-[0.1em] uppercase text-cream font-semibold">
                        New
                      </span>
                    </div>
                  )}
                </div>

                {/* Info below image */}
                <div className="pt-6 pb-6 border-b border-stone/20">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-[12px] font-semibold tracking-[0.1em] uppercase text-ink">
                        {product.overline}
                      </p>
                      <h3 className="font-display text-[26px] xl:text-[30px] font-light text-ink mt-3 leading-[1.15] whitespace-pre-line">
                        {product.name}
                      </h3>
                      <p className="font-body text-[14px] text-taupe mt-3 leading-relaxed max-w-[420px]">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5">
                    <p className="font-body text-[16px] text-ink">{product.price}</p>
                    <span className="font-body text-[11px] tracking-[0.14em] uppercase text-taupe group-hover:text-accent transition-colors duration-300 flex items-center gap-1.5">
                      Shop
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
