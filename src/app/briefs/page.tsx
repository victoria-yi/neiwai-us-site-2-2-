'use client';

import { useState, useMemo } from 'react';
import CollectionHero from '@/components/collection/CollectionHero';
import FilterBar from '@/components/collection/FilterBar';
import ProductGrid from '@/components/product/ProductGrid';
import { briefsProducts } from '@/lib/products';

const filters = ['All', 'Singles', '3-Packs'];

function applyFilter(filter: string) {
  if (filter === 'All') return briefsProducts;
  if (filter === 'Singles') return briefsProducts.filter((p) => p.subcategory === 'single');
  if (filter === '3-Packs') return briefsProducts.filter((p) => p.subcategory === '3-pack');
  return briefsProducts;
}

export default function BriefsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeSort, setActiveSort] = useState('Curated');

  const filteredProducts = useMemo(() => {
    let products = applyFilter(activeFilter);

    if (activeSort === 'Price') {
      products = [...products].sort((a, b) => a.price - b.price);
    } else if (activeSort === 'New Arrivals') {
      products = [...products].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return products;
  }, [activeFilter, activeSort]);

  return (
    <>
      <CollectionHero
        headline="Briefs"
        subheadline="Invisible. Stays put."
        description="Seamless construction, laser-cut edges, and fabric engineered to disappear. The Barely Zero brief is the natural companion to the bra."
        image="https://neiwai.life/cdn/shop/files/20250908-104305.jpg?v=1757370825&width=1920"
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-8 lg:py-12">
        <FilterBar
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          activeSort={activeSort}
          onSortChange={setActiveSort}
        />

        <div className="mt-12 lg:mt-16">
          <ProductGrid products={filteredProducts} />
        </div>

        <div className="text-center py-16 lg:py-24">
          <p className="font-body text-[13px] text-taupe">
            You&apos;ve explored the entire collection
          </p>
        </div>
      </div>
    </>
  );
}
