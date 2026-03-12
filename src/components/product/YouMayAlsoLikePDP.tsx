'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface YouMayAlsoLikePDPProps {
  products: Product[];
}

export default function YouMayAlsoLikePDP({ products }: YouMayAlsoLikePDPProps) {
  return (
    <section className="border-t border-sand bg-white" data-section="you-may-also-like">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-14 lg:py-20">
        <FadeIn>
          <h2 className="font-display text-[22px] lg:text-[30px] font-light text-ink tracking-tight">
            You may also like
          </h2>
        </FadeIn>

        <div className="mt-10 lg:mt-12 overflow-hidden">
          {products.length === 0 ? (
            <p className="font-body text-[14px] text-taupe">More picks for you.</p>
          ) : (
          <ul className="flex gap-6 lg:gap-10 overflow-x-auto pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-5">
            {products.map((product, i) => (
              <li key={product.id} className="flex-shrink-0 w-[44vw] sm:w-[38vw] lg:w-full">
                <FadeIn delay={i * 0.05}>
                  <Link
                    href={`/${product.category}/${product.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden bg-white border border-sand/50">
                      <Image
                        src={product.cardImage ?? product.images[product.images.length - 1] ?? product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain object-center transition-opacity duration-300 group-hover:opacity-95"
                        sizes="(max-width: 640px) 44vw, (max-width: 1024px) 38vw, 18vw"
                      />
                    </div>
                    <div className="mt-4">
                      <p className="font-body text-[13px] lg:text-[14px] text-ink group-hover:text-accent transition-colors line-clamp-2">
                        {product.name}
                      </p>
                      <p className="font-body text-[13px] text-taupe mt-1">
                        {formatPrice(product.price)}
                        {product.colors.length > 1 && (
                          <span className="ml-1">+ {product.colors.length} colors</span>
                        )}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
          )}
        </div>
      </div>
    </section>
  );
}
