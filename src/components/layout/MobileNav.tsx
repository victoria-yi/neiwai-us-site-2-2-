'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks, megaMenuData } from '@/lib/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const allLinks = [...navLinks.left, ...navLinks.right];

  const toggleExpand = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label);
  };

  const megaMenuKeys: Record<string, 'bras' | 'briefs' | 'leggings'> = {
    'Bras': 'bras',
    'Briefs': 'briefs',
    'Leggings': 'leggings',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal/60 z-40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-y-0 left-0 w-full max-w-[400px] bg-charcoal z-50 overflow-y-auto"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 h-[60px]">
              <span className="font-display text-cream text-[20px] font-light tracking-[0.2em]">
                NEIWAI
              </span>
              <button
                onClick={onClose}
                className="text-stone hover:text-cream transition-colors duration-300"
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-6 pt-8">
              <ul className="space-y-1">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <Link
                    href="/"
                    onClick={onClose}
                    className="block py-4 font-display text-[28px] font-light text-cream tracking-wide hover:text-blush transition-colors duration-300"
                  >
                    Home
                  </Link>
                </motion.li>
                {navLinks.left.map((link, index) => {
                  const menuKey = megaMenuKeys[link.label];
                  const hasSubmenu = !!menuKey;
                  const menuData = menuKey ? megaMenuData[menuKey] : null;
                  const isExpanded = expandedMenu === link.label;

                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + index * 0.05, duration: 0.4 }}
                    >
                      {hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => toggleExpand(link.label)}
                            className="w-full flex items-center justify-between py-4 font-display text-[28px] font-light text-cream tracking-wide"
                          >
                            <span>{link.label}</span>
                            <motion.span
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-stone text-[16px]"
                            >
                              ▾
                            </motion.span>
                          </button>

                          <AnimatePresence>
                            {isExpanded && menuData && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="pb-4 pl-4 space-y-6">
                                  {menuData.columns.map((column) => (
                                    <div key={column.title}>
                                      <h4 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-taupe mb-3">
                                        {column.title}
                                      </h4>
                                      <ul className="space-y-2">
                                        {column.links.map((subLink) => (
                                          <li key={subLink.label}>
                                            <Link
                                              href={subLink.href}
                                              onClick={onClose}
                                              className={`font-body text-[15px] transition-colors duration-300 ${
                                                subLink.label === 'Shop All Bras'
                                                  ? 'hover:opacity-80'
                                                  : 'text-stone hover:text-cream'
                                              }`}
                                              {...(subLink.label === 'Shop All Bras' && { style: { color: '#C25835' } })}
                                            >
                                              {subLink.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="block py-4 font-display text-[28px] font-light text-cream tracking-wide hover:text-blush transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.li>
                  );
                })}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + navLinks.left.length * 0.05, duration: 0.4 }}
                >
                  <Link
                    href="/sale"
                    onClick={onClose}
                    className="block py-4 font-display text-[28px] font-light tracking-wide hover:opacity-80 transition-opacity duration-300"
                    style={{ color: '#C25835' }}
                  >
                    Sale
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.12 + (navLinks.left.length + 1) * 0.05, duration: 0.4 }}
                >
                  <Link
                    href="/our-world"
                    onClick={onClose}
                    className="block py-4 font-display text-[28px] font-light text-cream tracking-wide hover:text-blush transition-colors duration-300"
                  >
                    About
                  </Link>
                </motion.li>
                {navLinks.right.map((link, index) => {
                  return (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + (navLinks.left.length + 2 + index) * 0.05, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="block py-4 font-display text-[28px] font-light text-cream tracking-wide hover:text-blush transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            {/* Secondary Links */}
            <div className="px-6 pt-12 pb-8 border-t border-charcoal mt-8">
              <ul className="space-y-3">
                {['Search', 'Account', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      onClick={onClose}
                      className="font-body text-[14px] text-stone hover:text-cream transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
