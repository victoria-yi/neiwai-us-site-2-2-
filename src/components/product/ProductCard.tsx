'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

function getDisplayImage(product: Product, colorName: string | null, colorIndex: number): string {
  if (colorName && product.colorImages?.[colorName]?.length) {
    return product.colorImages[colorName][0];
  }
  if (product.colors.length > 1 && product.images.length > 0) {
    const idx = colorIndex % product.images.length;
    return product.images[idx];
  }
  return product.images[0];
}

function getHoverImage(product: Product, colorName: string | null, colorIndex: number): string | undefined {
  if (colorName && product.colorImages?.[colorName]?.length) {
    const imgs = product.colorImages[colorName];
    return imgs[1] ?? imgs[0];
  }
  if (product.colors.length > 1 && product.images.length > 1) {
    const idx = (colorIndex + 1) % product.images.length;
    return product.images[idx];
  }
  return product.hoverImage;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(product.colors[0]?.name ?? null);
  const selectedColorIndex = product.colors.findIndex((c) => c.name === selectedColor);
  const safeColorIndex = selectedColorIndex >= 0 ? selectedColorIndex : 0;
  const displayImage = getDisplayImage(product, selectedColor, safeColorIndex);
  const hoverImageUrl = getHoverImage(product, selectedColor, safeColorIndex);
  const showHoverImage = isHovered && hoverImageUrl;
  const hasMultipleColors = product.colors.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={`/${product.category}/${product.slug}`}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-sand">
          {/* Primary image */}
          <Image
            src={displayImage}
            alt={product.name}
            fill
            className={`object-cover object-top transition-all duration-500 ${
              showHoverImage ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
            } group-hover:scale-[1.03]`}
            sizes="(max-width: 768px) 50vw, 50vw"
          />
          {/* Hover image */}
          {hoverImageUrl && (
            <Image
              src={hoverImageUrl}
              alt={`${product.name} — alternate view`}
              fill
              className={`object-cover object-top transition-all duration-500 ${
                showHoverImage ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
              }`}
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          )}
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="font-pdp-title text-[14px] md:text-[16px] font-normal md:font-medium text-ink leading-snug">
            {product.name}
          </h3>

          {/* Color dots — larger on PC, clickable when colorImages exist */}
          {product.colors.length > 1 && (
            <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((color) => {
                const isSelected = selectedColor === color.name;
                const isClickable = hasMultipleColors && (product.colorImages?.[color.name]?.length ?? product.images.length > 0);
                return isClickable ? (
                  <button
                    key={color.name}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedColor(color.name);
                    }}
                    className={`w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] rounded-full border transition-all duration-200 ${
                      isSelected ? 'border-0 ring-[1px] ring-stone ring-offset-2 ring-offset-white' : 'border border-sand hover:border-stone'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`View ${color.name}`}
                  />
                ) : (
                  <span
                    key={color.name}
                    className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px] rounded-full border border-sand"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                );
              })}
            </div>
          )}

          {/* Price — always visible, 1 size smaller on mobile */}
          <p className="font-body text-[14px] md:text-[16px] text-ink mt-2">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
