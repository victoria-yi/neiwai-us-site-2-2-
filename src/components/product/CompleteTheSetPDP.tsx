'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface CompleteTheSetPDPProps {
  briefs: Product[];
}

export default function CompleteTheSetPDP({ briefs }: CompleteTheSetPDPProps) {
  if (briefs.length === 0) return null;

  return (
    <section className="bg-warm-white/70 py-16 lg:py-24">
      <div className="px-6 lg:px-20 max-w-[1440px] mx-auto">
        {/* Header — centered, refined typography */}
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-[26px] lg:text-[34px] font-light text-ink leading-tight tracking-[0.02em]">
              Complete the set
            </h2>
            <Link
              href="/briefs"
              className="inline-flex items-center gap-2 mt-4 font-body text-[11px] tracking-[0.14em] uppercase text-ink hover:text-accent transition-colors duration-300 group"
            >
              Shop Briefs
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </FadeIn>

        {/* Product cards — same grid, images full width */}
        <div className="grid grid-cols-2 gap-4 lg:gap-8">
          {briefs.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.12}>
              <Link href={`/${p.category}/${p.slug}`} className="group block w-[85%] max-w-[85%] mx-auto">
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={p.images[0]}
                    alt={p.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, 45vw"
                  />
                </div>
                <div className="pt-5 pb-2 border-b border-stone/30">
                  <h3 className="font-display text-[17px] sm:text-[21px] lg:text-[25px] font-light text-ink leading-[1.2]">
                    {p.name}
                  </h3>
                  <div className="flex items-center justify-between mt-3">
                    <p className="font-body text-[14px] lg:text-[15px] text-ink">{formatPrice(p.price)}</p>
                    <span className="font-body text-[11px] tracking-[0.12em] uppercase text-taupe group-hover:text-accent transition-colors duration-300 flex items-center gap-1">
                      Select a size
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
