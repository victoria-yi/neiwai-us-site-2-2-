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

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showHoverImage = isHovered && product.hoverImage;

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
            src={product.images[0]}
            alt={product.name}
            fill
            className={`object-cover object-top transition-all duration-500 ${
              showHoverImage ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
            } group-hover:scale-[1.03]`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Hover image */}
          {product.hoverImage && (
            <Image
              src={product.hoverImage}
              alt={`${product.name} — alternate view`}
              fill
              className={`object-cover object-top transition-all duration-500 ${
                showHoverImage ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        {/* Info */}
        <div className="mt-4">
          <h3 className="font-body text-[14px] font-medium text-ink leading-snug">
            {product.name}
          </h3>

          {/* Color dots */}
          {product.colors.length > 1 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {product.colors.map((color) => (
                <span
                  key={color.name}
                  className="w-3 h-3 rounded-full border border-sand"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}

          {/* Price — hidden by default, revealed on hover */}
          <p className="font-body text-[14px] text-ink mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
