'use client';

import FadeIn from '@/components/ui/FadeIn';

interface EditorialBreakProps {
  quote: string;
  attribution?: string;
  gradient?: string;
}

export default function EditorialBreak({
  quote,
  attribution,
  gradient = 'linear-gradient(180deg, #F7F4F0 0%, #E8E0D5 50%, #F7F4F0 100%)',
}: EditorialBreakProps) {
  return (
    <div className="col-span-full py-16 lg:py-24">
      <FadeIn>
        <div
          className="py-16 lg:py-24 px-8 text-center"
          style={{ background: gradient }}
        >
          <blockquote className="font-display text-[24px] lg:text-[32px] font-light text-ink italic max-w-[600px] mx-auto leading-[1.35]">
            {quote}
          </blockquote>
          {attribution && (
            <p className="font-body text-[12px] text-taupe mt-6">
              — {attribution}
            </p>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
