'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AddToBag from './AddToBag';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface FloatingCartBarProps {
  product: Product;
  selectedColor: string | null;
  selectedSize: string | null;
  onAddToBag?: () => void;
}

function getDisplayImage(product: Product, selectedColor: string | null): string {
  if (selectedColor && product.colorImages?.[selectedColor]?.[0]) {
    return product.colorImages[selectedColor][0];
  }
  return product.images[0] ?? product.hoverImage ?? '';
}

export default function FloatingCartBar({
  product,
  selectedColor,
  selectedSize,
  onAddToBag,
}: FloatingCartBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('pdp-form-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const displayImage = getDisplayImage(product, selectedColor);
  const disabled = !selectedSize;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-cream/98 backdrop-blur-md border-t border-sand shadow-[0_-4px 24px rgba(0,0,0,0.06)]"
        >
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
            <div className="flex items-center gap-4 lg:gap-6">
              {/* Thumbnail */}
              <div className="relative w-14 h-14 lg:w-16 lg:h-16 shrink-0 overflow-hidden bg-sand rounded">
                {displayImage && (
                  <Image
                    src={displayImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                )}
              </div>

              {/* Product info */}
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[14px] lg:text-[16px] font-light text-ink truncate">
                  {product.name}
                </h3>
                <p className="font-body text-[14px] text-ink mt-0.5">
                  {formatPrice(product.price)}
                </p>
                {(selectedColor || selectedSize) && (
                  <p className="font-body text-[12px] text-taupe mt-1">
                    {[selectedColor, selectedSize].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>

              {/* Add to Bag */}
              <div className="w-full max-w-[200px] lg:max-w-[240px] shrink-0">
                <AddToBag
                  disabled={disabled}
                  onAdd={onAddToBag}
                  compact
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
