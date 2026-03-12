'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CollectionHero from '@/components/collection/CollectionHero';
import FilterBar from '@/components/collection/FilterBar';
import ProductGrid from '@/components/product/ProductGrid';
import EditorialBreak from '@/components/collection/EditorialBreak';
import { brasProducts } from '@/lib/products';

const filters = ['All', 'Barely Zero', 'Natural Fiber', 'Strapless', 'For Fuller Busts', 'Deep V & Push-Up'];

// URL param → filter label
const FILTER_PARAM_MAP: Record<string, string> = {
  'fuller-busts': 'For Fuller Busts',
  'strapless': 'Strapless',
  'natural-fiber': 'Natural Fiber',
  'deep-v': 'Deep V & Push-Up',
  'barely-zero': 'Barely Zero',
};

// Curated display order — mirrors the pull-down mega menu sequence
const CURATED_ORDER = [
  'bra-003', 'bra-001', 'bra-002', 'bra-004', 'bra-005', 'bra-006', 'bra-010',
  'bra-007', 'bra-008', 'bra-009',
  'bra-011', 'bra-012',
  'bra-013', 'bra-014',
  'bra-015', 'bra-016', 'bra-017',
];

function sortCurated(products: typeof brasProducts) {
  return [...products].sort(
    (a, b) => CURATED_ORDER.indexOf(a.id) - CURATED_ORDER.indexOf(b.id)
  );
}

// Map filter label → line/subcategory values
function applyFilter(filter: string) {
  if (filter === 'All') return sortCurated(brasProducts);
  if (filter === 'Barely Zero') return sortCurated(brasProducts.filter((p) => p.line === 'barely-zero'));
  if (filter === 'Natural Fiber') return brasProducts.filter((p) => p.line === 'pure-comfort' || p.line === 'ultraflex');
  if (filter === 'Strapless') return brasProducts.filter((p) => p.line === 'bandeau');
  if (filter === 'For Fuller Busts') return brasProducts.filter(
    (p) => p.slug.includes('curvy') || p.slug.includes('curve')
  );
  if (filter === 'Deep V & Push-Up') return brasProducts.filter(
    (p) => p.line === 'swan' || p.line === 'featherlight'
  );
  return sortCurated(brasProducts);
}

function BrasPageContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get('filter');
  const initialFilter = (filterParam && FILTER_PARAM_MAP[filterParam]) || 'All';

  const [activeFilter, setActiveFilter] = useState(initialFilter);

  useEffect(() => {
    if (filterParam && FILTER_PARAM_MAP[filterParam]) {
      setActiveFilter(FILTER_PARAM_MAP[filterParam]);
    }
  }, [filterParam]);
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

  const firstBatch = filteredProducts.slice(0, 4);
  const secondBatch = filteredProducts.slice(4);

  return (
    <>
      <CollectionHero
        headline="Bras"
        subheadline="Engineered to disappear."
        description="Seventeen bras built on one idea — support you forget you're wearing. Led by the Barely Zero collection, the standard for invisible comfort."
        image="https://neiwai.life/cdn/shop/files/20250908-131826.png?v=1757362737&width=1920"
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
          <ProductGrid products={firstBatch} />

          {secondBatch.length > 0 && (
            <>
              <EditorialBreak
                quote="Can you feel nothing at all? That was the question we started with."
                attribution="NEIWAI Material Lab"
              />
              <ProductGrid products={secondBatch} />
            </>
          )}
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

export default function BrasPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="font-body text-[14px] text-taupe">Loading...</div>
      </div>
    }>
      <BrasPageContent />
    </Suspense>
  );
}
