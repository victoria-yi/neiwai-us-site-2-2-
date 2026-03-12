'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (dismissed) setVisible(false);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem('announcement-dismissed', 'true');
    window.dispatchEvent(new CustomEvent('announcement-dismissed'));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 32, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative flex items-center justify-center bg-charcoal text-cream overflow-hidden"
        >
          <p className="font-body text-[11px] tracking-wide">
            Complimentary U.S. shipping on orders above $99
          </p>
          <button
            onClick={dismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone hover:text-cream transition-colors duration-300"
            aria-label="Dismiss announcement"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
