'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import type { TechnologyFeature } from '@/lib/products';

interface TechnologyStoryProps {
  features: TechnologyFeature[];
  productName: string;
}

export default function TechnologyStory({ features, productName }: TechnologyStoryProps) {
  const displayFeatures = features.slice(0, 4);

  return (
    <section className="border-t border-sand bg-white" data-section="the-details-that-disappear">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-14 lg:py-20">
        {/* Header — matches neiwai-us-site3 */}
        <FadeIn>
          <p className="font-body text-[11px] font-medium tracking-[0.2em] uppercase text-taupe text-center">
            The construction
          </p>
          <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink text-center mt-3 tracking-tight">
            The details that disappear.
          </h2>
          <span className="block w-12 h-px bg-ink/20 mx-auto mt-4" aria-hidden />
          <p className="font-body text-[14px] lg:text-[15px] text-taupe mt-5 max-w-2xl mx-auto text-center leading-relaxed">
            Each element resolved so nothing shows, nothing shifts, nothing presses. The result is the absence of the garment itself.
          </p>
        </FadeIn>

        {/* Two-column alternating rows: image + text */}
        <div className="mt-12 lg:mt-16 space-y-0">
          {displayFeatures.map((feature, index) => {
            const numberLabel = feature.number;
            const imageLeft = index % 2 === 0;

            return (
              <FadeIn key={feature.number} delay={index * 0.06}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0 ${
                    index > 0 ? 'border-t border-sand' : ''
                  }`}
                >
                  {/* Image column */}
                  {feature.image && (
                    <div
                      className={`relative aspect-square overflow-hidden ${
                        !feature.imageBackgroundColor ? 'bg-stone/30' : ''
                      } ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                      style={feature.imageBackgroundColor ? { backgroundColor: feature.imageBackgroundColor } : undefined}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.headline}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                        style={{
                          objectPosition: feature.imageObjectPosition ?? (index === 0 ? 'center 50%' : 'center 60%'),
                          transform: feature.imageScale ? `scale(${feature.imageScale})` : undefined,
                        }}
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        unoptimized={feature.image.startsWith('/images/')}
                      />
                    </div>
                  )}

                  {/* Text column */}
                  <div
                    className={`flex flex-col justify-center px-6 py-12 lg:py-20 lg:px-14 xl:px-24 bg-warm-white ${
                      imageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <p className="font-body text-[11px] font-semibold tracking-[0.18em] uppercase text-ink">
                      {numberLabel}
                    </p>
                    <h3 className="font-display text-[24px] lg:text-[32px] font-light text-ink tracking-tight mt-4 lg:mt-5">
                      {feature.headline}
                    </h3>
                    <span className="block w-14 h-px bg-ink/25 mt-6 lg:mt-8" aria-hidden />
                    <p className="font-body text-[14px] lg:text-[15px] text-taupe leading-loose mt-6 lg:mt-8 max-w-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
