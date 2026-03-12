'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import TextLink from '@/components/ui/TextLink';
import { briefsProducts, leggingsProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export default function LivingCollection() {
  const featuredBrief = briefsProducts.find((p) => p.slug === 'barely-zero-low-waist-brief')!;
  const featuredLegging = leggingsProducts.find((p) => p.slug === 'barely-zero-flow-leggings')!;
  const featured = [featuredBrief, featuredLegging].filter(Boolean);

  return (
    <section className="py-24 lg:py-40">
      {/* Hero image / mood block */}
      <div className="relative mb-16 lg:mb-24">
        <div className="h-[50vh] lg:h-[60vh] overflow-hidden relative">
          <Image
            src="https://neiwai.life/cdn/shop/files/20210702NEIWAI0823.jpg?v=1729635212&width=2560"
            alt="Barely Zero Briefs and Leggings"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Soft overlay for text */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 via-transparent to-transparent" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-end pb-12 lg:pb-16 px-6 lg:px-20 max-w-[1440px] mx-auto">
            <FadeIn>
              <Overline className="text-cream/70">Complete the Set</Overline>
              <h2 className="font-display text-[36px] lg:text-[52px] font-light text-cream mt-3 leading-[1.1]">
                Briefs &amp; Leggings
              </h2>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Featured products */}
      <div className="px-6 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {featured.map((product, index) => (
            <FadeIn key={product.id} delay={index * 0.15}>
              <Link href={`/${product.category}/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
                <div className="mt-5">
                  <h3 className="font-body text-[14px] font-medium text-ink">
                    {product.name}
                  </h3>
                  <p className="font-body text-[13px] text-taupe mt-1">
                    {product.sensoryLine}
                  </p>
                  <p className="font-body text-[14px] text-ink mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 lg:gap-8">
            <TextLink href="/briefs">Shop Briefs</TextLink>
            <TextLink href="/leggings">Shop Leggings</TextLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
