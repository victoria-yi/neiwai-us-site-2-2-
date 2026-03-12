'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import { brasProducts, leggingsProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export default function CuratedGrid() {
  // Hand-pick 3 hero products across categories
  const featured = [
    brasProducts.find((p) => p.slug === 'barely-zero-anchored-cup-strap-bra')!,
    brasProducts.find((p) => p.slug === 'barely-zero-curvy-clasp-bra')!,
    leggingsProducts.find((p) => p.slug === 'barely-zero-flow-leggings')!,
  ].filter(Boolean);

  const descriptors = [
    'Adaptive Fit Technology — conforms to your body',
    'Fuller bust support, still barely there',
    'Compression without constriction',
  ];

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <Overline>The Edit</Overline>
        </div>
      </FadeIn>

      {/* Asymmetric grid: one large + two small */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Large featured card */}
        <FadeIn className="lg:col-span-7" delay={0.1}>
          <Link href={`/${featured[0].category}/${featured[0].slug}`} className="group block">
            <div className="relative aspect-[3/4] overflow-hidden bg-sand">
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <Image
                  src={featured[0].images[0]}
                  alt={featured[0].name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
              </motion.div>
            </div>
            <div className="mt-4">
              <h3 className="font-body text-[14px] font-medium text-ink">
                {featured[0].name}
              </h3>
              <p className="font-body text-[13px] text-taupe mt-1">
                {descriptors[0]}
              </p>
              <p className="font-body text-[14px] text-ink mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {formatPrice(featured[0].price)}
              </p>
            </div>
          </Link>
        </FadeIn>

        {/* Two smaller cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
          {featured.slice(1).map((product, index) => (
            <FadeIn key={product.id} delay={0.2 + index * 0.1}>
              <Link href={`/${product.category}/${product.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </motion.div>
                </div>
                <div className="mt-4">
                  <h3 className="font-body text-[14px] font-medium text-ink">
                    {product.name}
                  </h3>
                  <p className="font-body text-[13px] text-taupe mt-1">
                    {descriptors[index + 1]}
                  </p>
                  <p className="font-body text-[14px] text-ink mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
