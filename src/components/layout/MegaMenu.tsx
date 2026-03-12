'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { megaMenuData } from '@/lib/constants';

interface MegaMenuProps {
  menuKey: 'bras' | 'briefs' | 'leggings';
  onClose: () => void;
  onMouseEnter?: () => void;
}

export default function MegaMenu({ menuKey, onClose, onMouseEnter }: MegaMenuProps) {
  const data = megaMenuData[menuKey];
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 w-full bg-warm-white border-b border-sand z-50"
      onMouseEnter={onMouseEnter}
    >
      <div className="max-w-[1440px] mx-auto px-20 py-12 flex gap-12">
        {/* Link Columns */}
        <div className="flex-1 flex gap-16">
          {data.columns.map((column) => (
            <div key={column.title} className="min-w-[160px]">
              <h3 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-taupe mb-5">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`font-body text-[14px] transition-colors duration-300 ${
                        link.label === 'Shop All Bras'
                          ? 'hover:opacity-80'
                          : 'text-ink hover:text-accent'
                      }`}
                      {...(link.label === 'Shop All Bras' && { style: { color: '#C25835' } })}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="w-[320px] flex-shrink-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-sand">
            <Image
              src={data.featuredImage.src}
              alt={data.featuredImage.alt}
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
          <p className="font-body text-[12px] text-taupe mt-3">
            {data.featuredImage.caption}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
