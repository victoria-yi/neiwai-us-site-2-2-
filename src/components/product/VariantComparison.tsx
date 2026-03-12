'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import type { ProductVariant } from '@/lib/products';

interface VariantComparisonProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelect: (variantId: string) => void;
}

export default function VariantComparison({
  variants,
  selectedVariantId,
  onSelect,
}: VariantComparisonProps) {
  if (variants.length < 2) return null;

  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24 border-t border-sand">
      <FadeIn>
        <Overline>Choose Your Style</Overline>
        <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink mt-4">
          Same sculpted cup. Two closure options.
        </h2>
        <p className="font-body text-[14px] text-taupe mt-3 max-w-lg leading-relaxed">
          Both styles share the same 3D-molded cup, scallop edge, and Barely Zero fabric.
          The only difference is how it closes.
        </p>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        {variants.map((variant) => {
          const isActive = selectedVariantId === variant.id;
          return (
            <FadeIn key={variant.id}>
              <button
                onClick={() => onSelect(variant.id)}
                className={`w-full text-left group transition-all duration-300 ${
                  isActive ? 'ring-2 ring-ink ring-offset-4 ring-offset-cream' : ''
                }`}
              >
                {/* Variant image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                  <Image
                    src={variant.images[0]}
                    alt={variant.label}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Active badge */}
                  {isActive && (
                    <div className="absolute top-4 left-4 bg-ink text-cream px-3 py-1">
                      <span className="font-body text-[11px] tracking-[0.08em] uppercase">
                        Selected
                      </span>
                    </div>
                  )}
                </div>

                {/* Label area */}
                <div className="mt-4">
                  <h3 className="font-display text-[20px] lg:text-[22px] font-light text-ink">
                    {variant.label}
                  </h3>
                  <p className="font-body text-[13px] text-taupe mt-1">
                    {variant.sublabel}
                  </p>
                  <p className="font-body text-[13px] text-taupe mt-3 leading-relaxed max-w-sm">
                    {variant.description}
                  </p>

                  {/* Color count */}
                  <p className="font-body text-[12px] text-accent mt-3">
                    {variant.colors.length} color{variant.colors.length !== 1 ? 's' : ''} available
                  </p>
                </div>
              </button>
            </FadeIn>
          );
        })}
      </div>

      {/* Shared specs callout */}
      <FadeIn>
        <div className="mt-12 p-6 lg:p-8 bg-blush/15 flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex-1">
            <h4 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-taupe mb-2">
              Shared in Both Styles
            </h4>
            <ul className="space-y-1.5">
              {[
                '3D precision-molded fixed cup',
                'Signature scallop wave edge',
                'One-piece bonded cup + lining',
                'Liquid-foam ventilated cup (1mm thin)',
                'Deodorizing yarn technology',
                '72% Nylon, 28% Spandex',
              ].map((spec) => (
                <li key={spec} className="font-body text-[13px] text-taupe flex items-start gap-2">
                  <span className="text-accent mt-0.5 flex-shrink-0">&#x2022;</span>
                  {spec}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-taupe mb-2">
              The Difference
            </h4>
            <div className="space-y-3">
              <div>
                <span className="font-body text-[13px] text-ink font-medium">Seamless Back</span>
                <p className="font-body text-[12px] text-taupe mt-0.5">
                  Pull-on design with no hardware. Completely smooth under clothing — ideal for fitted tops, backless styles, and sleepwear.
                </p>
              </div>
              <div>
                <span className="font-body text-[13px] text-ink font-medium">Back Clasp</span>
                <p className="font-body text-[12px] text-taupe mt-0.5">
                  Hook-and-eye back clasp for adjustable tension and easy on/off. Fine-tune the fit to your preference — ideal for all-day structured wear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
