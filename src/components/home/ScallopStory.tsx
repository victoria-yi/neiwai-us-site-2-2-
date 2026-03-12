'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import TextLink from '@/components/ui/TextLink';

export default function ScallopStory() {
  return (
    <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center">
        {/* Image — 60% (right on desktop, top on mobile) */}
        <FadeIn className="w-full lg:w-[60%]" direction="right">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <Image
              src="https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI158792.jpg?v=1764127456&width=1600"
              alt="Barely Zero Scallop Bra — 3D precision-molded, invisible under everything"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            {/* NEW badge */}
            <div className="absolute top-6 left-6 bg-ink/90 backdrop-blur-sm px-3 py-1.5">
              <span className="font-body text-[11px] tracking-[0.14em] uppercase text-cream">
                New
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Text — 40% (left on desktop) */}
        <div className="w-full lg:w-[40%]">
          <FadeIn delay={0.1}>
            <Overline>Barely Zero &middot; Scallop</Overline>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-display text-[32px] lg:text-[40px] font-light text-ink mt-4 leading-[1.15]">
              The scallop that holds its shape.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="font-body text-[15px] lg:text-[16px] text-taupe mt-6 leading-relaxed max-w-[400px]">
              A delicate scalloped V-neckline and fixed molded cups — structure without weight. 
              Pull-on with no clasps or underwire. The cups stay fixed, the neckline stays crisp, 
              and the silhouette remains invisible under clothing.
            </p>
          </FadeIn>

          {/* Key tech callouts */}
          <FadeIn delay={0.35}>
            <div className="mt-6 flex flex-col gap-2">
              {[
                'Scalloped V-neckline — fixed cups that hold all day',
                'Pull-on construction, no clasps, no underwire',
                'Seamless side panels, invisible under fitted tops',
                'Also available: Scallop Clasp Bra for adjustable fit',
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
              $59
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="mt-6">
              <TextLink href="/bras/barely-zero-scallop-bra">Discover the Scallop Bra</TextLink>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
