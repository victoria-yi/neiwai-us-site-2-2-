'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '@/lib/products';

interface ProductGalleryProps {
  product: Product;
  selectedColor?: string | null;
}

export default function ProductGallery({ product, selectedColor }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Thumbnails and main image both use product.images — clicking a thumbnail shows that image
  const thumbnails = product.images;
  const mainImageSrc = product.images[activeIndex] ?? product.images[0];

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  // Start with strip scrolled to the left so first thumbnails are visible; sync scroll state
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = 0;
    const onScroll = () => updateScrollState();
    el.addEventListener('scroll', onScroll);
    const raf = requestAnimationFrame(() => {
      updateScrollState();
    });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [product.images.length]);

  // Scroll active thumbnail into view (keep it visible when changing selection)
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
    const scrollAmount = 88; // thumb width + gap
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Main Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
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
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnail strip — horizontal scroll with arrows */}
      <div className="mt-4 flex items-center gap-2">
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
