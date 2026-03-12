'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '@/lib/products';

const SWIPE_THRESHOLD = 50;

interface ProductGalleryProps {
  product: Product;
  selectedColor?: string | null;
}

export default function ProductGallery({ product, selectedColor }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const thumbnails = product.images;
  const mainImageSrc = product.images[activeIndex] ?? product.images[0];
  const totalImages = thumbnails.length;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(index, totalImages - 1)));
    },
    [totalImages]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // Mobile: swipe handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current == null) return;
      const endX = e.changedTouches[0].clientX;
      const delta = touchStartX.current - endX;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      if (delta > 0) goNext();
      else goPrev();
    },
    [goPrev, goNext]
  );

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    const onScroll = () => updateScrollState();
    el.addEventListener('scroll', onScroll);
    const raf = requestAnimationFrame(() => updateScrollState());
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [product.images.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const thumb = el.querySelector(`[data-thumb-index="${activeIndex}"]`);
    thumb?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }, [activeIndex]);

  const scrollThumbnails = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    if (direction === 'left' && !canScrollLeft) return;
    if (direction === 'right' && !canScrollRight) return;
    const scrollAmount = 88;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Main Image — mobile: swipeable + dots overlay; desktop: unchanged */}
      <div
        className="relative aspect-[3/4] overflow-hidden bg-sand touch-pan-y select-none lg:select-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={mainImageSrc}
              alt={`${product.name} — image ${activeIndex + 1}`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 55vw"
              priority={activeIndex === 0}
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Mobile only: dot indicators overlaid on image (like neiwai.life) */}
        {totalImages > 1 && (
          <div
            className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 lg:hidden"
            aria-hidden
          >
            {thumbnails.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-colors ${
                  activeIndex === index
                    ? 'h-1.5 w-1.5 bg-white'
                    : 'h-1.5 w-1.5 border border-white bg-transparent'
                }`}
                aria-label={`Image ${index + 1} of ${totalImages}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail strip — desktop only (hidden on mobile) */}
      <div className="mt-4 hidden lg:flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollThumbnails('left')}
          disabled={!canScrollLeft}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-ink hover:text-accent transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll thumbnails left"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
            <path d="M12 16l-6-6 6-6" />
          </svg>
        </button>

        <div
          ref={scrollRef}
          className="flex-1 min-w-0 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide flex justify-start gap-3 py-1"
        >
          {thumbnails.map((img, index) => (
            <button
              key={index}
              data-thumb-index={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? 'ring-1 ring-ink ring-offset-2 ring-offset-cream'
                  : 'opacity-60 hover:opacity-100'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={img}
                alt={`${product.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollThumbnails('right')}
          disabled={!canScrollRight}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-ink hover:text-accent transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Scroll thumbnails right"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
            <path d="M8 4l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
