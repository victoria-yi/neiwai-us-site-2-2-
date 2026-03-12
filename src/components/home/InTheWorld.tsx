'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';

export default function InTheWorld() {
  // Real NEIWAI lifestyle/editorial images in masonry grid
  // Full-body editorial/lifestyle shots only — no cropped product shots
  const galleryItems = [
    {
      // Two models together, full body, BZ bras + lounge pants
      src: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.jpg?v=1762149203&width=600',
      alt: 'NEIWAI Barely Zero editorial',
      aspect: 'aspect-[3/4]',
    },
    {
      // Model in classic cozy pajama set, full body lifestyle
      src: 'https://neiwai.life/cdn/shop/files/20230408-NEIWAI7738.jpg?v=1694803212&width=600',
      alt: 'NEIWAI loungewear lifestyle',
      aspect: 'aspect-[1/1]',
    },
    {
      // Model in silk pajama set, full body editorial
      src: 'https://neiwai.life/cdn/shop/files/20230408-NEIWAI5607.jpg?v=1688583183&width=600',
      alt: 'NEIWAI silk pajama editorial',
      aspect: 'aspect-[4/5]',
    },
    {
      // Model in Barely Zero Wisp Bra, full body pose
      src: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=600',
      alt: 'Barely Zero Wisp Bra editorial',
      aspect: 'aspect-[3/4]',
    },
    {
      // Cocoon jacket / cardigan, full body lifestyle
      src: 'https://neiwai.life/cdn/shop/files/Copyof20240531_65576-min_9ceae961-9c14-4def-b14a-858a29288c46.jpg?v=1728005978&width=600',
      alt: 'NEIWAI cashmere cardigan lifestyle',
      aspect: 'aspect-[1/1]',
    },
    {
      // Scallop bra, full body editorial with model
      src: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI158792.jpg?v=1764127456&width=600',
      alt: 'NEIWAI Barely Zero Scallop editorial',
      aspect: 'aspect-[4/5]',
    },
  ];

  return (
    <section className="py-24 lg:py-40 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <Overline>In the World</Overline>
          <p className="font-body text-[13px] text-taupe mt-3">
            Worn in life. Captured without filter.
          </p>
        </div>
      </FadeIn>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 gap-4 lg:gap-6">
        {galleryItems.map((item, index) => (
          <FadeIn key={index} delay={index * 0.08}>
            <motion.div
              className={`${item.aspect} mb-4 lg:mb-6 overflow-hidden break-inside-avoid relative`}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </motion.div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/neiwai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-[13px] text-taupe hover:text-accent transition-colors duration-300"
          >
            Follow @neiwai
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
