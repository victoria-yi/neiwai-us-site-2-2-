'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
  const { items, subtotal, shipping, total, updateItem, removeItem } = useCart();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <h1 className="font-display text-[28px] lg:text-[36px] font-light text-ink">Your bag</h1>
        {items.length > 0 ? (
          <div className="mt-8">
            <div className="space-y-6">
              {items.map((item, i) => (
                <div key={i} className="flex gap-4 py-6 border-b border-sand">
                  <div className="relative w-20 h-24 shrink-0 overflow-hidden bg-sand">
                    <Image
                      src={item.image}
                      alt={item.product.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-pdp-title text-[14px] font-medium text-ink">{item.product.name}</p>
                    <p className="font-body text-[12px] text-taupe mt-1">{item.size} | {item.color}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border border-sand">
                        <button
                          type="button"
                          onClick={() => updateItem(i, { quantity: item.quantity - 1 })}
                          className="w-9 h-9 flex items-center justify-center text-ink hover:bg-sand"
                        >
                          −
                        </button>
                        <span className="w-9 h-9 flex items-center justify-center font-body text-[13px] border-x border-sand">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateItem(i, { quantity: item.quantity + 1 })}
                          className="w-9 h-9 flex items-center justify-center text-ink hover:bg-sand"
                        >
                          +
                        </button>
                      </div>
                      {item.product.sizes.length > 1 && (
                        <select
                          value={item.size}
                          onChange={(e) => updateItem(i, { size: e.target.value })}
                          className="h-9 px-3 font-body text-[12px] border border-sand bg-white"
                        >
                          {item.product.sizes.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      )}
                      <button
                        type="button"
                        onClick={() => removeItem(i)}
                        className="font-body text-[12px] text-taupe hover:text-ink"
                      >
                        Remove
                      </button>
                    </div>
                    <p className="font-body text-[14px] text-ink mt-2">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 max-w-md space-y-2">
              <div className="flex justify-between font-body text-[14px] text-ink">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between font-body text-[14px] text-ink">
                <span>Delivery</span>
                <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between font-body text-[16px] font-medium text-ink pt-2 border-t border-sand">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="font-body text-[14px] text-taupe mt-4">Your bag is empty.</p>
        )}
        <Link
          href="/bras"
          className="inline-block mt-6 font-body text-[14px] text-ink underline hover:text-accent transition-colors"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
