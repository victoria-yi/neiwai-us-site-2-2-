'use client';

import { useState, useMemo } from 'react';
import CollectionHero from '@/components/collection/CollectionHero';
import FilterBar from '@/components/collection/FilterBar';
import ProductGrid from '@/components/product/ProductGrid';
import { leggingsProducts } from '@/lib/products';

const filters = ['All', 'Leggings', 'Shorts'];

// Curated order — mirrors mega menu: Flow Leggings → Lycra Leggings → Shorts
const CURATED_ORDER = ['leg-002', 'leg-001', 'leg-003'];

function sortCurated(products: typeof leggingsProducts) {
  return [...products].sort(
    (a, b) => CURATED_ORDER.indexOf(a.id) - CURATED_ORDER.indexOf(b.id)
  );
}

function applyFilter(filter: string) {
  if (filter === 'All') return sortCurated(leggingsProducts);
  if (filter === 'Leggings') return leggingsProducts.filter((p) => p.subcategory === 'leggings');
  if (filter === 'Shorts') return leggingsProducts.filter((p) => p.subcategory === 'shorts');
  return sortCurated(leggingsProducts);
}

export default function LeggingsPage() {
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
        headline="Leggings"
        subheadline="Compression. Without the weight."
        description="Barely Zero fabric applied to a legging silhouette — high-waist, seamless, and designed for the day you don't want to change between activities."
        image="https://neiwai.life/cdn/shop/files/20210702NEIWAI0823.jpg?v=1729635212&width=1920"
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
