'use client';

import { motion } from 'framer-motion';
import type { ProductVariant } from '@/lib/products';

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelect: (variantId: string) => void;
}

export default function VariantSelector({
  variants,
  selectedVariantId,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="space-y-2">
      <span className="font-body text-[13px] text-ink">Style</span>
      <div className="flex gap-3">
        {variants.map((variant) => {
          const isActive = selectedVariantId === variant.id;
          return (
            <button
              key={variant.id}
              onClick={() => onSelect(variant.id)}
              className={`relative flex-1 text-left px-4 py-3 border transition-all duration-300 group ${
                isActive
                  ? 'border-ink bg-warm-white'
                  : 'border-sand hover:border-stone bg-transparent'
              }`}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="variant-indicator"
                  className="absolute top-2 right-3 w-1.5 h-1.5 rounded-full bg-ink"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span
                className={`block font-body text-[13px] font-medium transition-colors duration-300 ${
                  isActive ? 'text-ink' : 'text-taupe group-hover:text-ink'
                }`}
              >
                {variant.label}
              </span>
              <span
                className={`block font-body text-[11px] mt-0.5 transition-colors duration-300 ${
                  isActive ? 'text-taupe' : 'text-stone group-hover:text-taupe'
                }`}
              >
                {variant.sublabel}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
