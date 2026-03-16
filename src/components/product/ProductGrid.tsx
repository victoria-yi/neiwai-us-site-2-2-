'use client';

import ProductCard from './ProductCard';
import type { Product } from '@/lib/products';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-x-4 gap-y-7 md:gap-x-6 md:gap-y-12 lg:gap-x-10 lg:gap-y-16">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}
