'use client';

import { useState, useRef, useEffect } from 'react';

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
  sortOptions = ['Curated', 'New Arrivals', 'Ascending price', 'Descending price'],
  activeSort = 'Curated',
  onSortChange,
}: FilterBarProps) {
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    if (sortOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [sortOpen]);

  return (
    <div className="py-6 border-b border-sand">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`relative px-4 py-2 font-body text-[12px] lg:text-[13px] tracking-wide transition-all duration-300 rounded-sm border ${
                isActive
                  ? 'text-ink border-ink'
                  : 'text-taupe hover:text-ink border-taupe/20 hover:border-ink/20'
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-3">
        <span className="font-body text-[11px] tracking-[0.12em] uppercase text-taupe shrink-0">
          Sort
        </span>
        <div ref={sortRef} className="relative">
          <button
            type="button"
            onClick={() => setSortOpen((o) => !o)}
            className="flex items-center gap-2 font-body text-[12px] lg:text-[13px] text-ink bg-white border border-taupe/20 rounded-sm px-4 py-2 min-w-[140px] justify-between hover:border-ink/40 transition-colors duration-300"
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
            aria-label={`Sort by: ${activeSort}`}
          >
            <span>{activeSort}</span>
            <svg className={`w-3 h-3 text-taupe transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 4l4 4 4-4" />
            </svg>
          </button>
          {sortOpen && (
            <ul
              role="listbox"
              className="absolute right-0 top-full py-1 min-w-full bg-white border border-sand border-t-0 rounded-b-sm shadow-[0_4px_16px_rgba(0,0,0,0.08)] z-50"
              aria-label="Sort options"
            >
              {sortOptions.map((sort) => {
                const isSelected = activeSort === sort;
                return (
                  <li
                    key={sort}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onSortChange?.(sort);
                      setSortOpen(false);
                    }}
                    className={`flex items-center justify-between gap-3 px-4 py-2.5 font-body text-[12px] lg:text-[13px] cursor-pointer transition-colors duration-200 ${
                      isSelected ? 'text-ink bg-sand/30' : 'text-taupe hover:text-ink hover:bg-sand/20'
                    }`}
                  >
                    {sort}
                    {isSelected && (
                      <svg className="w-3.5 h-3.5 text-ink shrink-0" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 7l4 4 6-8" />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
      </div>
    </div>
  );
}
