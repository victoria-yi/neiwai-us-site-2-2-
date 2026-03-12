'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

interface YouMayAlsoLikeCardProps {
  product: Product;
}

/** Compact card for "You may also like" — matches neiwai-us-site3.vercel.app layout. */
export default function YouMayAlsoLikeCard({ product }: YouMayAlsoLikeCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const showHoverImage = isHovered && product.hoverImage;
  const colorCount = product.colors?.length ?? 0;

  return (
    <Link
      href={`/${product.category}/${product.slug}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sand">
        <Image
          src={product.cardImage ?? product.images[0]}
          alt={product.name}
          fill
          className={`object-cover object-top transition-all duration-500 ${
            showHoverImage ? 'opacity-0 scale-[1.02]' : 'opacity-100 scale-100'
          } group-hover:scale-[1.03]`}
          sizes="(max-width: 768px) 40vw, 18vw"
        />
        {product.hoverImage && (
          <Image
            src={product.hoverImage}
            alt={`${product.name} — alternate view`}
            fill
            className={`object-cover object-top transition-all duration-500 ${
              showHoverImage ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
            }`}
            sizes="(max-width: 768px) 40vw, 18vw"
          />
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-body text-[14px] font-medium text-ink leading-snug">
          {product.name}
        </h3>
        <p className="font-body text-[14px] text-taupe mt-1">
          {formatPrice(product.price)}
          {colorCount > 0 && (
            <span className="text-ink"> + {colorCount} color{colorCount !== 1 ? 's' : ''}</span>
          )}
        </p>
      </div>
    </Link>
  );
}
