'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

interface CollectionHeroProps {
  overline?: string;
  headline: string;
  subheadline?: string;
  description?: string;
  image?: string;
  gradient?: string;
  textLight?: boolean;
}

export default function CollectionHero({
  overline,
  headline,
  subheadline,
  description,
  image,
  gradient,
  textLight = false,
}: CollectionHeroProps) {
  const textBase = textLight ? 'text-cream' : 'text-charcoal';
  const textMuted = textLight ? 'text-cream/70' : 'text-charcoal/60';
  const textSub = textLight ? 'text-cream/80' : 'text-charcoal/70';
  const textDesc = textLight ? 'text-cream/60' : 'text-charcoal/50';

  return (
    <section className="relative h-[50vh] lg:h-[60vh] overflow-hidden flex items-end">
      {image ? (
        <>
          <Image
            src={image}
            alt={headline}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-charcoal/10 to-transparent" />
        </>
      ) : gradient ? (
        <div className="absolute inset-0" style={{ background: gradient }} />
      ) : null}
      
      {/* Soft light overlay */}
      {!image && (
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(ellipse at 30% 40%, rgba(255,255,255,0.5) 0%, transparent 60%)`,
        }} />
      )}

      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-20 pb-12 lg:pb-16">
        <FadeIn>
          {overline && (
            <span className={`inline-block font-body text-[11px] font-medium tracking-[0.12em] uppercase ${textMuted} mb-3`}>
              {overline}
            </span>
          )}
          <h1 className={`font-display text-[40px] lg:text-[56px] font-light ${image ? 'text-cream' : textBase} leading-[1.1]`}>
            {headline}
          </h1>
          {subheadline && (
            <p className={`font-body text-[16px] lg:text-[18px] ${image ? 'text-cream/80' : textSub} mt-3 max-w-[500px]`}>
              {subheadline}
            </p>
          )}
          {description && (
            <p className={`font-body text-[14px] ${image ? 'text-cream/60' : textDesc} mt-4 max-w-[480px] leading-relaxed`}>
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
