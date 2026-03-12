'use client';

import Link from 'next/link';
import { footerLinks } from '@/lib/constants';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Our World */}
          <div>
            <h3 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-stone mb-6">
              Our World
            </h3>
            <ul className="space-y-3">
              {footerLinks.ourWorld.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="font-body text-[13px] text-stone hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-stone mb-6">
              Customer Care
            </h3>
            <ul className="space-y-3">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="font-body text-[13px] text-stone hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-stone mb-6">
              Follow
            </h3>
            <ul className="space-y-3">
              {footerLinks.follow.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-[13px] text-stone hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-body text-[11px] font-medium tracking-[0.12em] uppercase text-stone mb-6">
              Stay Informed
            </h3>
            <p className="font-body text-[13px] text-stone mb-5 leading-relaxed">
              Receive seasonal edits, studio notes, and early access.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 bg-transparent border border-stone/30 text-cream placeholder:text-stone/50 font-body text-[13px] px-4 py-2.5 focus:outline-none focus:border-cream/50 transition-colors duration-300"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 border border-stone/30 border-l-0 text-stone hover:text-cream hover:border-cream/50 transition-colors duration-300"
                aria-label="Subscribe"
              >
                {subscribed ? '✓' : '→'}
              </button>
            </form>
            {subscribed && (
              <p className="font-body text-[12px] text-accent mt-2">
                Welcome to our world.
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 lg:mt-24 pt-6 border-t border-stone/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-[12px] text-stone/50">
            Copyright © 2026 NEIWAI. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 justify-center md:justify-end">
            {[
              { label: 'Privacy Policy', href: 'https://neiwai.life/pages/privacy-policy' },
              { label: 'Terms of Service', href: 'https://neiwai.life/pages/terms-of-service' },
              { label: 'Accessibility', href: '#' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-body text-[12px] text-stone/50 hover:text-stone transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
