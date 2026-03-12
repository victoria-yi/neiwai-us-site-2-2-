'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const pressOutlets = [
  {
    name: 'Forbes',
    src: 'https://neiwai.life/cdn/shop/files/Forbes_f07b32d5-1b8e-426d-8026-0042208b69f0.png?v=1747349190&width=300',
    width: 120,
    height: 32,
  },
  {
    name: 'ELLE',
    src: 'https://neiwai.life/cdn/shop/files/Elle_e581cc51-ebe6-45b0-b66c-110191ead67c.png?v=1747349190&width=300',
    width: 80,
    height: 32,
  },
  {
    name: 'Cosmopolitan',
    src: 'https://neiwai.life/cdn/shop/files/Cosmopolitan_23ad823b-8f29-470a-a49b-6e72b5ac83cf.png?v=1747349190&width=300',
    width: 160,
    height: 24,
  },
  {
    name: 'Glossy',
    src: 'https://neiwai.life/cdn/shop/files/Glossy_a810b1a3-aad6-4ff3-a850-7470acfb31df.png?v=1747349190&width=300',
    width: 105,
    height: 26,
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-20 bg-sand/30">
      <div className="max-w-[800px] mx-auto text-center">
        {/* Press logos — above the email, bigger */}
        <FadeIn>
          <p className="font-body text-[10px] tracking-[0.12em] uppercase text-taupe text-center mb-8">
            Recognized by
          </p>
          <div className="flex items-center justify-center gap-10 lg:gap-16 flex-nowrap mb-16">
            {pressOutlets.map((outlet) => (
              <div
                key={outlet.name}
                className="relative opacity-60 hover:opacity-80 transition-opacity duration-300"
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

        <FadeIn delay={0.15}>
          <h2 className="font-display text-[28px] lg:text-[36px] font-light text-ink">
            Join our world
          </h2>
          <p className="font-body text-[14px] text-taupe mt-4 leading-relaxed">
            Receive seasonal edits, studio notes, and early access.
          </p>
        </FadeIn>

        <FadeIn delay={0.25}>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 flex max-w-[400px] mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-white border border-sand text-ink placeholder:text-stone font-body text-[14px] px-5 py-3 focus:outline-none focus:border-accent transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-charcoal text-cream font-body text-[14px] hover:bg-ink transition-colors duration-300"
                aria-label="Subscribe"
              >
                →
              </button>
            </form>
          ) : (
            <div className="mt-8">
              <p className="font-body text-[15px] text-accent">
                Welcome to our world. We&apos;ll be in touch.
              </p>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
