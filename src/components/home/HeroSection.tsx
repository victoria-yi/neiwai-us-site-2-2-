'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroSection({
  headline = 'A second skin, reimagined',
  subheadline = 'Engineered for invisible comfort. Designed for the space between.',
  ctaText = 'Shop Bras',
  ctaLink = '/bras',
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] lg:min-h-[100vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="https://neiwai.life/cdn/shop/files/20250908-131826.png?v=1757362737&width=2160"
          alt="NEIWAI — A second skin, reimagined"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* Gradient overlay for text readability — strong bottom for light images */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 from-5% via-charcoal/40 via-30% to-transparent" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-end pb-24 lg:pb-32 px-6 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[72px] font-light text-cream tracking-wide leading-[1.1] max-w-[800px]"
        >
          {headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 font-body text-[15px] lg:text-[17px] text-cream/80 tracking-wide lg:whitespace-nowrap"
        >
          {subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8"
        >
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 font-body text-[14px] text-cream/90 tracking-wide hover:text-cream transition-colors duration-300 group"
          >
            <span>{ctaText}</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
