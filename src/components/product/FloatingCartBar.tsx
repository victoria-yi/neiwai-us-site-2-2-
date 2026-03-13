'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AddToBag from './AddToBag';
import type { Product, ProductColor } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface FloatingCartBarProps {
  product: Product;
  selectedColor: string | null;
  selectedSize: string | null;
  /** When provided (e.g. variant PDP), use these instead of product.colors */
  colors?: ProductColor[];
  onColorSelect?: (color: string) => void;
  onSizeSelect?: (size: string) => void;
  onAddToBag?: () => void;
  onNoSizeClick?: () => void;
}

function getDisplayImage(product: Product, selectedColor: string | null): string {
  if (selectedColor && product.colorImages?.[selectedColor]?.[0]) {
    return product.colorImages[selectedColor][0];
  }
  return product.images[0] ?? product.hoverImage ?? '';
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const m = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(m.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

export default function FloatingCartBar({
  product,
  selectedColor,
  selectedSize,
  colors: colorsProp,
  onColorSelect,
  onSizeSelect,
  onAddToBag,
  onNoSizeClick,
}: FloatingCartBarProps) {
  const [visible, setVisible] = useState(false);
  const [addState, setAddState] = useState<'idle' | 'loading' | 'success'>('idle');
  const isDesktop = useIsDesktop();
  const colors = colorsProp ?? product.colors;

  useEffect(() => {
    if (!isDesktop) {
      setVisible(true);
      return;
    }
    const sentinel = document.getElementById('pdp-form-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isDesktop]);

  const displayImage = getDisplayImage(product, selectedColor);
  const disabled = !selectedSize;

  const handleAddToCart = async () => {
    if (addState !== 'idle') return;
    if (disabled) {
      onNoSizeClick?.();
      return;
    }
    setAddState('loading');
    await new Promise((r) => setTimeout(r, 800));
    setAddState('success');
    onAddToBag?.();
    setTimeout(() => setAddState('idle'), 1500);
  };

  const handleBuyNow = async () => {
    if (disabled) {
      onNoSizeClick?.();
      return;
    }
    await handleAddToCart();
    // Could navigate to checkout here
  };

  const barContent = isDesktop ? (
    <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-3">
      <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
        {/* Logo / product thumbnail — circular */}
        <div className="relative w-10 h-10 shrink-0 overflow-hidden bg-charcoal rounded-full">
          {displayImage ? (
            <Image
              src={displayImage}
              alt={product.name}
              fill
              className="object-cover"
              sizes="40px"
            />
          ) : (
            <span className="absolute inset-0 flex items-center justify-center font-display text-[14px] font-medium text-cream">
              {product.name.charAt(0)}
            </span>
          )}
        </div>
        {/* Product name + price inline */}
        <div className="font-body text-[15px] text-ink shrink-0">
          <span className="font-light">{product.name}</span>
          <span className="ml-4 font-medium">{formatPrice(product.price)}</span>
        </div>
        {/* Spacer — pushes color/size block right toward the Add to cart button */}
        <div className="flex-1 min-w-[80px]" aria-hidden />
        {/* Color swatches */}
        {colors.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            {colors.map((c) => {
              const isActive = selectedColor === c.name;
              return (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => onColorSelect?.(c.name)}
                  className={`w-6 h-6 rounded-full shrink-0 transition-all duration-200 ${
                    isActive ? 'ring-2 ring-ink ring-offset-1 ring-offset-cream' : 'ring-1 ring-sand hover:ring-stone'
                  }`}
                  style={{ backgroundColor: c.hex }}
                  aria-label={`Color ${c.name}`}
                />
              );
            })}
          </div>
        )}
        {/* Size buttons — sharp corners */}
        {product.sizes.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            {product.sizes.map((size) => {
              const isActive = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => onSizeSelect?.(size)}
                  className={`min-w-[52px] h-8 px-3 font-body text-[12px] rounded-none transition-all duration-200 ${
                    isActive
                      ? 'bg-charcoal text-cream'
                      : 'bg-cream text-ink border border-charcoal/20 hover:border-charcoal'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        )}
        {/* Size and Fit label */}
        {product.sizes.length > 1 && (
          <span className="font-body text-[11px] text-taupe shrink-0">Size and Fit</span>
        )}
        {/* Add to cart — 190px gap from color/size, pure black button */}
        <div className="ml-[190px] w-full max-w-[200px] shrink-0">
          <AddToBag
            disabled={disabled}
            onAdd={onAddToBag}
            onNoSizeClick={onNoSizeClick}
            compact
          />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full pt-3 pb-[20px] px-0">
      <button
        type="button"
        onClick={handleAddToCart}
        disabled={addState !== 'idle'}
        className="flex-1 h-[53px] font-body text-[15px] font-medium tracking-wide bg-white text-ink border-0 disabled:bg-white disabled:text-ink disabled:cursor-not-allowed active:opacity-90 transition-opacity"
      >
        {addState === 'loading' && 'Adding...'}
        {addState === 'success' && 'Added ✓'}
        {addState === 'idle' && 'Add to cart'}
      </button>
      <button
        type="button"
        onClick={handleBuyNow}
        disabled={addState !== 'idle'}
        className="flex-1 h-[53px] font-body text-[15px] font-medium tracking-wide bg-ink text-white border-0 disabled:bg-ink disabled:text-white disabled:opacity-60 disabled:cursor-not-allowed active:opacity-90 transition-opacity"
      >
        Buy now
      </button>
    </div>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={isDesktop ? { y: 100, opacity: 0 } : undefined}
          animate={{ y: 0, opacity: 1 }}
          exit={isDesktop ? { y: 100, opacity: 0 } : undefined}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-cream/98 backdrop-blur-md border-t border-sand shadow-[0_-4px 24px rgba(0,0,0,0.06)]"
        >
          {barContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
