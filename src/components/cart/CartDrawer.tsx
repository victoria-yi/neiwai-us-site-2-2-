'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartDrawer() {
  const { isDrawerOpen, closeDrawer, items, subtotal, shipping, total, updateItem, removeItem } = useCart();

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-ink/30"
            onClick={closeDrawer}
            aria-hidden
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[420px] bg-white flex flex-col shadow-[-8px_0_32px_rgba(0,0,0,0.12)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-sand shrink-0">
              <p className="font-body text-[11px] font-medium tracking-[0.14em] uppercase text-ink">
                {items.length > 0 ? `Your bag [${items.reduce((a, i) => a + i.quantity, 0)}]` : 'Your bag'}
              </p>
              <button
                type="button"
                onClick={closeDrawer}
                className="p-2 -mr-2 text-ink hover:opacity-70 transition-opacity"
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable content — all items */}
            <div className="flex-1 overflow-y-auto">
              {items.map((item, index) => (
                <div key={index} className="px-6 py-4 border-b border-sand">
                  <div className="flex items-stretch gap-3">
                    <div className="relative w-24 shrink-0 overflow-hidden bg-sand min-h-0">
                      <Image
                        src={item.image}
                        alt={item.product.name}
                        fill
                        className="object-cover object-top"
                        sizes="96px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between gap-2">
                        <p className="font-pdp-title text-[13px] font-medium text-ink leading-snug line-clamp-2">
                          {item.product.name}
                        </p>
                        <button
                          type="button"
                          onClick={() => removeItem(index)}
                          className="shrink-0 text-taupe hover:text-ink transition-colors"
                          aria-label="Remove"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <p className="font-body text-[12px] text-taupe mt-0.5">{item.color} | {item.size}</p>
                      <p className="font-body text-[13px] text-ink mt-1">{formatPrice(item.product.price)}</p>

                      {/* Quantity + Size controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-sand">
                          <button
                            type="button"
                            onClick={() => updateItem(index, { quantity: item.quantity - 1 })}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center font-body text-[12px] text-ink border-x border-sand">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateItem(index, { quantity: item.quantity + 1 })}
                            className="w-8 h-8 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        {item.product.sizes.length > 1 && (
                          <select
                            value={item.size}
                            onChange={(e) => updateItem(index, { size: e.target.value })}
                            className="h-8 px-2 pr-7 font-body text-[11px] text-ink border border-sand bg-white cursor-pointer min-w-[52px]"
                          >
                            {item.product.sizes.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {items.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <p className="font-body text-[14px] text-taupe">Your bag is empty.</p>
                </div>
              )}
            </div>

            {/* Footer — totals + CTA */}
            {items.length > 0 && (
              <div className="border-t border-sand shrink-0 px-6 py-5">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between font-body text-[11px] tracking-[0.08em] uppercase text-ink">
                    <span>{items.reduce((a, i) => a + i.quantity, 0)} products</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between font-body text-[11px] tracking-[0.08em] uppercase text-ink">
                    <span>Delivery</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                  <div className="flex justify-between font-body text-[12px] font-medium tracking-[0.08em] uppercase text-ink pt-2 border-t border-sand">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
                <Link
                  href="/cart"
                  onClick={closeDrawer}
                  className="block w-full h-[46px] flex items-center justify-center font-body text-[14px] font-medium tracking-[0.1em] uppercase bg-ink text-white hover:opacity-90 transition-opacity"
                >
                  Checkout
                </Link>
              </div>
            )}

            {items.length === 0 && (
              <div className="px-6 py-5 border-t border-sand shrink-0">
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="w-full h-[46px] font-body text-[14px] font-medium border border-ink text-ink hover:bg-ink hover:text-white transition-colors"
                >
                  Continue shopping
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
