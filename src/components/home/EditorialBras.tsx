'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import { brasProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

const EDITORIAL_SLUGS = ['pure-comfort-triangle-bra', 'bandeau-bra', 'featherlight-push-up-bra'];

export default function EditorialBras() {
  const products = EDITORIAL_SLUGS.map((slug) =>
    brasProducts.find((p) => p.slug === slug)
  ).filter(Boolean) as typeof brasProducts;

  return (
    <section className="bg-sand py-16 lg:py-24">
      <FadeIn>
        <div className="px-6 lg:px-20 max-w-[1440px] mx-auto flex items-end justify-between mb-10 lg:mb-14">
          <div>
            <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink leading-tight">
              Beyond Barely Zero
            </h2>
            <p className="font-body text-[14px] text-prose mt-[9px]">
              Pure Comfort, Bandeau, Featherlight — more ways to feel nothing.
            </p>
          </div>
          <Link
            href="/bras"
            className="hidden sm:flex font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 items-center gap-1.5 group"
          >
            All Bras
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </FadeIn>

      <div className="px-6 lg:px-20 max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, i) => (
          <FadeIn key={product.id} delay={i * 0.1}>
            <Link href={`/bras/${product.slug}`} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-cream">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  {product.hoverImage && (
                    <Image
                      src={product.hoverImage}
                      alt={product.name}
                      fill
                      className="object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  )}
                </motion.div>
              </div>
              <div className="mt-5 pb-6 border-b border-stone/30">
                <p className="font-body text-[13px] text-taupe">{product.lifestyleLine}</p>
                <h3 className="font-display text-[16px] sm:text-[18px] lg:text-[24px] font-light text-ink mt-2 leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis">
                  {product.name}
                </h3>
                <p className="font-body text-[16px] lg:text-[15px] text-ink mt-3">{formatPrice(product.price)}</p>
                <span className="font-body text-[12px] text-ink underline mt-2 inline-block group-hover:opacity-80 transition-opacity">
                  Shop Now
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
