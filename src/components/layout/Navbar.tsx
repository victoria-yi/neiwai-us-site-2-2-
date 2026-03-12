'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { navLinks } from '@/lib/constants';
import MegaMenu from './MegaMenu';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<'bras' | 'briefs' | 'leggings' | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTop = 'top-0';

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const menuKeyMap: Record<string, 'bras' | 'briefs' | 'leggings'> = {
    'Bras': 'bras',
    'Briefs': 'briefs',
    'Leggings': 'leggings',
  };

  const handleMenuHover = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    const key = menuKeyMap[label];
    if (key) {
      setHoveredMenu(key);
    }
  };

  const handleHeaderLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 200);
  };

  const handleMenuEnter = () => {
    // Mouse entered the mega menu — cancel close
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const handleMenuClose = () => {
    setHoveredMenu(null);
  };

  const isHome = pathname === '/';

  const navBg = scrolled || hoveredMenu
    ? 'bg-cream/95 backdrop-blur-md border-b border-sand/50'
    : 'bg-transparent';

  const textColor = scrolled || hoveredMenu || !isHome ? 'text-ink' : 'text-cream';

  return (
    <>
      <header
        className={`fixed ${navTop} left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
        onMouseLeave={handleHeaderLeave}
      >
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-20 h-[60px] lg:h-[72px] flex items-center justify-between">
          {/* Left Nav — Desktop */}
          <div className="hidden lg:flex items-center gap-8 flex-1">
            <Link
              href="/"
              onMouseEnter={() => setHoveredMenu(null)}
              className={`font-body text-[14px] font-normal tracking-wide transition-colors duration-300 hover:text-accent ${textColor} ${
                pathname === '/'
                  ? 'relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-accent'
                  : ''
              }`}
            >
              Home
            </Link>
            {navLinks.left.map((link) => (
              <div
                key={link.label}
                onMouseEnter={() => handleMenuHover(link.label)}
                className="relative py-5"
              >
                <Link
                  href={link.href}
                  className={`font-body text-[14px] font-normal tracking-wide transition-colors duration-300 hover:text-accent ${textColor} ${
                    pathname.startsWith(link.href)
                      ? 'after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-accent'
                      : ''
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <Link
              href="/sale"
              onMouseEnter={() => setHoveredMenu(null)}
              className={`font-body text-[14px] font-normal tracking-wide transition-opacity duration-300 hover:opacity-80 ${
                pathname === '/sale'
                  ? 'relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-[#C25835]'
                  : ''
              }`}
              style={{ color: '#C25835' }}
            >
              Sale
            </Link>
            <Link
              href="/our-world"
              onMouseEnter={() => setHoveredMenu(null)}
              className={`font-body text-[14px] font-normal tracking-wide transition-colors duration-300 hover:text-accent ${textColor} ${
                pathname.startsWith('/our-world')
                  ? 'relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-accent'
                  : ''
              }`}
            >
              About
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden ${textColor} transition-colors duration-300`}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h18M3 16h18" />
            </svg>
          </button>

          {/* Center Logo */}
          <Link
            href="/"
            className={`font-display text-[20px] font-light tracking-[0.2em] transition-colors duration-300 ${textColor} absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:text-center lg:flex-1 lg:flex lg:justify-center`}
          >
            NEIWAI
          </Link>

          {/* Right Nav */}
          <div className="flex items-center gap-6 lg:gap-8 flex-1 justify-end">
            {/* Search */}
            <button
              onMouseEnter={() => setHoveredMenu(null)}
              className={`transition-colors duration-300 hover:text-accent ${textColor}`}
              aria-label="Search"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="8.5" cy="8.5" r="6" />
                <path d="M13 13l5 5" />
              </svg>
            </button>

            {/* Account — Desktop */}
            <button
              className={`hidden lg:block transition-colors duration-300 hover:text-accent ${textColor}`}
              aria-label="Account"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="7" r="4" />
                <path d="M2 19c0-4.418 3.582-8 8-8s8 3.582 8 8" />
              </svg>
            </button>

            {/* Bag */}
            <button
              className={`relative transition-colors duration-300 hover:text-accent ${textColor}`}
              aria-label="Shopping bag"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h12l1 12H3L4 6z" />
                <path d="M7 6V4a3 3 0 016 0v2" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-accent text-cream text-[10px] flex items-center justify-center font-body font-medium">
                0
              </span>
            </button>
          </div>
        </nav>

        {/* Mega Menu — inside header so hover zone is continuous */}
        <AnimatePresence>
          {hoveredMenu && (
            <MegaMenu
              menuKey={hoveredMenu}
              onClose={handleMenuClose}
              onMouseEnter={handleMenuEnter}
            />
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Nav */}
      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
