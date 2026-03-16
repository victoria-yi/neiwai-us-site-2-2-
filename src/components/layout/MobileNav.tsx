'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { megaMenuData } from '@/lib/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuKey = 'bras' | 'briefs' | 'leggings';

const leftItems = [
  { num: '01', label: 'Bras', key: 'bras' as MenuKey, href: '/bras' },
  { num: '02', label: 'Briefs', key: 'briefs' as MenuKey, href: '/briefs' },
  { num: '03', label: 'Leggings', key: 'leggings' as MenuKey, href: '/leggings' },
  { num: '04', label: 'Sale', href: '/sale', isSale: true },
];

const footerLinks = [
  { label: 'About', href: '/our-world' },
  { label: 'Account', href: '#' },
  { label: 'Contact Us', href: 'https://neiwai.life/pages/contact-us', external: true },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal/40 z-40 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-y-0 left-0 w-full max-w-[400px] bg-white z-50 overflow-y-auto flex flex-col"
          >
            {/* Header — same left padding as nav so logo aligns with Search */}
            <div className="flex items-center justify-between px-4 h-[60px] shrink-0">
              <Link href="/" onClick={onClose} className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="NEIWAI"
                  width={100}
                  height={28}
                  className="h-5 w-auto object-contain"
                />
              </Link>
              <button
                onClick={onClose}
                className="text-ink hover:text-taupe transition-colors duration-300"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </button>
            </div>

            <nav className="px-4 pt-6 pb-12 flex-1 min-h-0">
              {/* Search */}
              <div className="mb-[44px] flex items-baseline gap-3">
                <span className="font-body text-[13px] font-medium tracking-[0.14em] uppercase text-ink shrink-0">
                  Search
                </span>
                <span className="flex-1 h-px bg-ink min-w-0" aria-hidden />
              </div>

              {/* Zara-style: each block = left label (narrow) + right list; no vertical line */}
              <div className="space-y-10">
                {leftItems.map((item) => {
                  const itemKey = 'key' in item ? item.key : undefined;
                  const isBras = itemKey === 'bras';
                  const links =
                    itemKey && itemKey in megaMenuData
                      ? isBras
                        ? null
                        : megaMenuData[itemKey].columns.flatMap((col) => col.links as unknown as { label: string; href: string }[])
                      : [];
                  const brasColumns = isBras ? megaMenuData.bras.columns : null;

                  return (
                    <div key={item.num} className="flex gap-6 items-baseline">
                      {/* Left: 01 Bras — same size as right column, baseline-aligned with first link */}
                      <div className="w-[22%] max-w-[88px] shrink-0">
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={`font-body text-[12px] font-medium tracking-wide hover:opacity-80 transition-colors whitespace-nowrap ${
                            'isSale' in item && item.isSale ? '' : 'text-ink'
                          }`}
                        >
                          <span className="text-taupe">{item.num}</span>
                          <span className="text-taupe"> | </span>
                          <span className={'isSale' in item && item.isSale ? 'text-[#C25835]' : 'text-ink'}>{item.label}</span>
                        </Link>
                      </div>
                      {/* Right: sub-links — Bras: insert "Shop by need" (same weight as Bras) + extra spacing */}
                      <ul className="flex-1 min-w-0 space-y-2">
                        {brasColumns ? (
                          <>
                            {brasColumns[0].links.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={onClose}
                                  className={`font-body text-[12px] text-ink/90 hover:text-ink transition-colors block py-1 ${
                                    sub.label.includes('Sale') ? 'text-[#C25835]' : ''
                                  }`}
                                  {...('external' in sub && sub.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                            <li className="pt-5">
                              <span className="font-body text-[12px] font-medium text-ink">Shop by need</span>
                            </li>
                            {brasColumns[1].links.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={onClose}
                                  className={`font-body text-[12px] text-ink/90 hover:text-ink transition-colors block py-1 ${
                                    sub.label.includes('Sale') ? 'text-[#C25835]' : ''
                                  }`}
                                  {...('external' in sub && sub.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </>
                        ) : (
                          (links ?? []).map((sub) => (
                            <li key={sub.label}>
                              <Link
                                href={sub.href}
                                onClick={onClose}
                                className={`font-body text-[12px] text-ink/90 hover:text-ink transition-colors block py-1 ${
                                  sub.label.includes('Sale') ? 'text-[#C25835]' : ''
                                }`}
                                {...('external' in sub && sub.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  );
                })}

                {/* Light grey divider between Sale and About section */}
                <div className="h-px bg-taupe/40 min-w-0" aria-hidden />

                {/* About, Account, Contact Us — no numbers, separate rows */}
                <div className="space-y-2 pt-10">
                  {footerLinks.map((item) => (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="font-body text-[13px] font-medium text-ink hover:text-taupe transition-colors block py-1"
                        {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </nav>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
