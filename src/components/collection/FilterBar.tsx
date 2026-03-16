'use client';

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
