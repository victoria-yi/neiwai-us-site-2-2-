'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import TextLink from '@/components/ui/TextLink';

export default function BarelyZeroStory() {
  return (
    <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        {/* Image — 60% */}
        <FadeIn className="w-full lg:w-[60%]" direction="left">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=1600"
              alt="Barely Zero Strap Bra — The original. Still the standard."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          </div>
        </FadeIn>

        {/* Text — 40% */}
        <div className="w-full lg:w-[40%]">
          <FadeIn delay={0.1}>
            <Overline>Barely Zero &middot; Strap Bra</Overline>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-[32px] lg:text-[40px] font-light text-ink mt-4 leading-[1.15]">
              The original. Still the standard.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-[15px] lg:text-[16px] text-taupe mt-6 leading-relaxed max-w-[400px]">
              Thin adjustable straps, no clasps, no underwire. The Strap Bra is the piece that defined 
              the Barely Zero category — a bra worn for its absence rather than its presence. Made from 
              CloudFit nylon, developed to move with the body without binding.
            </p>
          </FadeIn>

          {/* Key feature callouts */}
          <FadeIn delay={0.35}>
            <div className="mt-6 flex flex-col gap-2">
              {[
                'CloudFit nylon — ultra-elastic, breathable, moisture-wicking',
                'Wire-free, foam-free, fully seamless',
                'Thin adjustable straps — invisible under anything',
                'One size. Adapts across a wide range of body types',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-body text-[13px] text-taupe">{point}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="font-body text-[16px] text-ink mt-6">
              $39
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-6">
              <TextLink href="/bras/barely-zero-strap-bra">Discover the Strap Bra</TextLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
