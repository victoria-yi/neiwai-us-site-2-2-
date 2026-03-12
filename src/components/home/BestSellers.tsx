'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
const products = [
  {
    id: 'brief-002',
    overline: 'Briefs',
    name: 'Barely Zero\nLow Waist Brief',
    tagline: 'The brief that disappears.',
    price: '$15',
    href: '/briefs/barely-zero-low-waist-brief',
    image: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=1200',
    hoverImage: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI33185_1.jpg?v=1736536548&width=1200',
    imageAlt: 'Barely Zero Low Waist Brief',
  },
  {
    id: 'brief-003',
    overline: 'Briefs',
    name: 'Barely Zero\nMid Waist Brief',
    tagline: 'Mid-rise. Seamless. Invisible.',
    price: '$19',
    href: '/briefs/barely-zero-mid-waist-brief',
    image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=1200',
    hoverImage: 'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=1200',
    imageAlt: 'Barely Zero Mid Waist Brief',
  },
  {
    id: 'leg-002',
    overline: 'Leggings',
    name: 'Barely Zero\nFlow Leggings',
    tagline: 'Compression without constriction.',
    price: '$39',
    href: '/leggings/barely-zero-flow-leggings',
    image: 'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=1200',
    hoverImage: 'https://neiwai.life/cdn/shop/products/20211217NEIWAI8421.jpg?v=1706569721&width=1200',
    imageAlt: 'Barely Zero Flow Leggings',
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 lg:py-32 bg-cream">
      {/* Header */}
      <FadeIn>
        <div className="px-6 lg:px-20 max-w-[1440px] mx-auto flex items-baseline justify-between mb-12 lg:mb-16">
          <div>
            <h2 className="font-display text-[32px] lg:text-[40px] font-light text-ink leading-tight">
              Briefs &amp; Leggings
            </h2>
            <p className="font-body text-[13px] text-taupe mt-1.5">Everything you need. Nothing you don&apos;t.</p>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/briefs"
              className="font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
            >
              All Briefs
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="/leggings"
              className="font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group"
            >
              All Leggings
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Product grid */}
      <div className="px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <Link href={product.href} className="group block">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <Image
                      src={product.hoverImage}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </motion.div>
                </div>

                {/* Info */}
                <div className="mt-5 pb-6 border-b border-sand">
                  <p className="font-body text-[12px] font-semibold tracking-[0.1em] uppercase text-ink">{product.overline}</p>
                  <h3 className="font-display text-[22px] lg:text-[24px] font-light text-ink mt-2 leading-[1.2] whitespace-pre-line">
                    {product.name}
                  </h3>
                  <p className="font-body text-[13px] text-taupe mt-2">{product.tagline}</p>
                  <p className="font-body text-[15px] text-ink mt-3">{product.price}</p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Mobile links */}
        <div className="flex lg:hidden items-center gap-8 mt-10">
          <Link href="/briefs" className="font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group">
            All Briefs <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link href="/leggings" className="font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 flex items-center gap-1.5 group">
            All Leggings <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
