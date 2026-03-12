'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    quote: 'I put it on and forgot about it entirely. By the end of the day I realized — that absence of awareness is the whole point.',
    name: 'Loni',
    meta: 'Oakland · Yoga instructor',
  },
  {
    quote: "Three years in, and it's still the first thing I reach for. I've stopped buying intimates anywhere else.",
    name: 'Sarah',
    meta: 'New York · Teacher',
  },
  {
    quote: 'The quality is completely out of proportion with the price — in the best possible way.',
    name: 'Jen',
    meta: 'Providence · Nurse',
  },
  {
    quote: 'Nothing else comes close to how it feels. I own seven colors.',
    name: 'Maria',
    meta: 'Austin · Soccer mom',
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((next: number, dir: number) => {
    setDirection(dir);
    setIndex(next);
  }, []);

  const prev = () => {
    const next = (index - 1 + reviews.length) % reviews.length;
    goTo(next, -1);
  };

  const next = () => {
    const next = (index + 1) % reviews.length;
    goTo(next, 1);
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  const review = reviews[index];

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-20 bg-cream overflow-hidden">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Section label + counter */}
        <div className="flex items-center justify-center gap-4 mb-10 lg:mb-14">
          <p className="font-body text-[16px] sm:text-[18px] lg:text-[20px] font-medium tracking-[0.12em] uppercase text-ink">
            In Their Own Words
          </p>
          <span className="text-stone/40">·</span>
          <p className="font-body text-[14px] sm:text-[16px] text-stone tabular-nums">
            {String(index + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
          </p>
        </div>

        {/* Quote */}
        <div className="relative min-h-[260px] lg:min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <blockquote className="font-display text-[28px] sm:text-[34px] lg:text-[46px] xl:text-[54px] font-light text-ink leading-[1.25] italic">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <p className="font-body text-[14px] text-ink mt-8 tracking-wide">
                — {review.name}
                {review.meta && <span className="text-taupe"> · {review.meta}</span>}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls — centered */}
        <div className="flex items-center justify-center gap-6 mt-14 lg:mt-18">
          <button
            onClick={prev}
            aria-label="Previous review"
            className="w-10 h-10 border border-stone/50 flex items-center justify-center text-ink hover:border-ink transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 1L3 7l6 6" />
            </svg>
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-2.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                aria-label={`Go to review ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === index ? 'w-8 h-1.5 bg-ink' : 'w-1.5 h-1.5 bg-stone/40 hover:bg-stone'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next review"
            className="w-10 h-10 border border-stone/50 flex items-center justify-center text-ink hover:border-ink transition-colors duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 1l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Auto-progress bar */}
        <div className="mt-8 mx-auto w-full max-w-[200px] h-px bg-sand overflow-hidden">
          <motion.div
            key={index}
            className="h-full bg-accent origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>
      </div>
    </section>
  );
}
