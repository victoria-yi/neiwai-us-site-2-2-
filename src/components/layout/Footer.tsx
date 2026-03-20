'use client';

import Link from 'next/link';
import { footerLinks } from '@/lib/constants';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#E2E2DE] text-ink">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        {/* Top section: Newsletter (left) + Link columns (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20 items-start">
          {/* Newsletter - left side */}
          <div className="lg:col-span-5">
            <h3 className="font-pdp-title text-[30px] lg:text-[38px] font-light text-ink mb-4 -mt-[5px]">
              Stay In The Loop
            </h3>
            <p className="font-body text-[13px] text-ink/80 mb-6 leading-relaxed max-w-[280px]">
              Be the first to know about new collections and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="flex items-end border-b border-ink pb-1 max-w-[280px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 min-w-0 bg-transparent border-none text-ink placeholder:text-ink/50 font-body text-[13px] px-0 py-2 focus:outline-none focus:ring-0"
                required
              />
              <button
                type="submit"
                className="flex-shrink-0 px-2 py-2 text-ink hover:opacity-70 transition-opacity"
                aria-label="Subscribe"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

          {/* Link columns - right side */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h4 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-ink mb-4">
                Customer Care
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.customerCare.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="font-body text-[13px] text-ink/90 hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-ink mb-4">
                Discover
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.discover.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="font-body text-[13px] text-ink/90 hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-ink mb-4">
                Social
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.social.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[13px] text-ink/90 hover:text-ink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-body text-[11px] text-ink/70">
            © {new Date().getFullYear()}, NEIWAI
          </p>
        </div>
      </div>
    </footer>
  );
}
