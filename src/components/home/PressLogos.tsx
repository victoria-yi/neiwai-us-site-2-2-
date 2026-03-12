'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const pressOutlets = [
  {
    name: 'Forbes',
    src: 'https://neiwai.life/cdn/shop/files/Forbes_f07b32d5-1b8e-426d-8026-0042208b69f0.png?v=1747349190&width=200',
    width: 100,
    height: 28,
  },
  {
    name: 'ELLE',
    src: 'https://neiwai.life/cdn/shop/files/Elle_e581cc51-ebe6-45b0-b66c-110191ead67c.png?v=1747349190&width=200',
    width: 70,
    height: 28,
  },
  {
    name: 'Cosmopolitan',
    src: 'https://neiwai.life/cdn/shop/files/Cosmopolitan_23ad823b-8f29-470a-a49b-6e72b5ac83cf.png?v=1747349190&width=200',
    width: 140,
    height: 20,
  },
  {
    name: 'Glossy',
    src: 'https://neiwai.life/cdn/shop/files/Glossy_a810b1a3-aad6-4ff3-a850-7470acfb31df.png?v=1747349190&width=200',
    width: 90,
    height: 22,
  },
];

export default function PressLogos() {
  return (
    <section className="py-16 lg:py-24 px-6 lg:px-20 border-t border-sand/50">
      <div className="max-w-[1440px] mx-auto">
        <FadeIn>
          <p className="font-body text-[11px] tracking-[0.12em] uppercase text-taupe text-center mb-10">
            Recognized by
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-12 lg:gap-20 flex-wrap">
            {pressOutlets.map((outlet) => (
              <div
                key={outlet.name}
                className="relative opacity-50 hover:opacity-80 transition-opacity duration-300"
                style={{ width: outlet.width, height: outlet.height }}
              >
                <Image
                  src={outlet.src}
                  alt={outlet.name}
                  fill
                  className="object-contain"
                  sizes={`${outlet.width}px`}
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
