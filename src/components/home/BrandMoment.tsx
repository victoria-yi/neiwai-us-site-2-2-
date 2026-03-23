'use client';

import FadeIn from '@/components/ui/FadeIn';

interface BrandMomentProps {
  quote?: string;
  attribution?: string;
  variant?: 'quote' | 'philosophy' | 'image';
}

export default function BrandMoment({
  quote = '"The space between inner comfort and outer beauty — that is where NEIWAI lives."',
  attribution = '',
  variant = 'quote',
}: BrandMomentProps) {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 relative overflow-hidden bg-charcoal">
      <div className="relative max-w-[800px] mx-auto text-center">
        <FadeIn duration={0.8}>
          {variant === 'quote' && (
            <>
              <blockquote className="font-display text-[24px] sm:text-[36px] lg:text-[41px] font-light text-cream/90 leading-[1.3] tracking-wide italic text-center">
                {quote}
              </blockquote>
              {attribution && (
                <p className="font-body text-[13px] text-stone mt-8 tracking-wide text-center">
                  — {attribution}
                </p>
              )}
              <p className="font-body text-[9px] font-medium tracking-[0.14em] uppercase text-stone mt-10 text-center">
                Brand Philosophy
              </p>
            </>
          )}

          {variant === 'philosophy' && (
            <>
              <p className="font-display text-[48px] lg:text-[72px] font-light text-cream/10 mb-4">
                内外
              </p>
              <h2 className="font-display text-[28px] lg:text-[36px] font-light text-cream leading-[1.3]">
                Inside and outside
              </h2>
              <p className="font-body text-[15px] text-stone mt-6 max-w-[480px] mx-auto leading-relaxed">
                Two characters. One philosophy. The harmony between what is felt
                and what is seen — this is the space NEIWAI inhabits.
              </p>
            </>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
