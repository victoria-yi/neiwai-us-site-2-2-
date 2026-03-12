'use client';

import { motion } from 'framer-motion';

interface FilterBarProps {
  filters: string[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  sortOptions?: string[];
  activeSort?: string;
  onSortChange?: (sort: string) => void;
}

export default function FilterBar({
  filters,
  activeFilter,
  onFilterChange,
  sortOptions = ['Curated', 'New Arrivals', 'Price'],
  activeSort = 'Curated',
  onSortChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 border-b border-sand">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`relative px-4 py-2 font-body text-[13px] tracking-wide transition-all duration-300 ${
              activeFilter === filter
                ? 'text-ink'
                : 'text-taupe hover:text-ink'
            }`}
          >
            {filter}
            {activeFilter === filter && (
              <motion.div
                layoutId="filterIndicator"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-ink"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-3">
        <span className="font-body text-[11px] tracking-[0.12em] uppercase text-taupe">
          Sort
        </span>
        <div className="flex gap-2">
          {sortOptions.map((sort) => (
            <button
              key={sort}
              onClick={() => onSortChange?.(sort)}
              className={`font-body text-[13px] transition-colors duration-300 ${
                activeSort === sort ? 'text-ink' : 'text-stone hover:text-ink'
              }`}
            >
              {sort}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
