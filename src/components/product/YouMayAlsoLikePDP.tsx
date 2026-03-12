'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface YouMayAlsoLikePDPProps {
  products: Product[];
}

const SCROLL_STEP = 180;

export default function YouMayAlsoLikePDP({ products }: YouMayAlsoLikePDPProps) {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
    };
  }, [products.length]);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -SCROLL_STEP : SCROLL_STEP, behavior: 'smooth' });
  };

  return (
    <section className="border-t border-sand bg-white" data-section="you-may-also-like">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-14 lg:py-20">
        <FadeIn>
          <h2 className="font-display text-[22px] lg:text-[30px] font-light text-ink tracking-tight">
            You may also like
          </h2>
        </FadeIn>

        {/* Mobile: arrows outward, smaller gap; desktop: no arrows, normal gap */}
        <div className="mt-10 lg:mt-12 relative overflow-visible">
          {products.length === 0 ? (
            <p className="font-body text-[14px] text-taupe">More picks for you.</p>
          ) : (
            <>
              {/* Arrows outside overflow div so they can sit outward (mobile only) */}
              <button
                type="button"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 border border-sand shadow-sm text-ink disabled:opacity-30 disabled:pointer-events-none lg:hidden"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M12 16l-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 border border-sand shadow-sm text-ink disabled:opacity-30 disabled:pointer-events-none lg:hidden"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M8 4l6 6-6 6" />
                </svg>
              </button>

              <div className="overflow-hidden lg:overflow-visible">
                <ul
                ref={scrollRef}
                className="flex gap-2 lg:gap-10 overflow-x-auto scroll-smooth scrollbar-hide pb-2 -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible lg:grid lg:grid-cols-5"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
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
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
