'use client';

import { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  color: string;
  size: string;
  image: string;
  quantity: number;
}

const SHIPPING_THRESHOLD = 99;
const SHIPPING_FEE = 4.95;

interface CartContextValue {
  count: number;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  updateItem: (index: number, updates: { quantity?: number; size?: string }) => void;
  removeItem: (index: number) => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => [...prev, { ...item, quantity: 1 }]);
    setIsDrawerOpen(true);
  }, []);

  const updateItem = useCallback((index: number, updates: { quantity?: number; size?: string }) => {
    setItems((prev) => {
      const next = [...prev];
      const it = next[index];
      if (!it) return prev;
      if (updates.quantity !== undefined) {
        if (updates.quantity <= 0) {
          next.splice(index, 1);
          return next;
        }
        next[index] = { ...it, quantity: updates.quantity };
      }
      if (updates.size !== undefined) {
        next[index] = { ...next[index], size: updates.size };
      }
      return next;
    });
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const { count, subtotal, shipping, total } = useMemo(() => {
    const sub = items.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
    const ship = sub >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    return {
      count: items.reduce((acc, it) => acc + it.quantity, 0),
      subtotal: sub,
      shipping: ship,
      total: sub + ship,
    };
  }, [items]);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  return (
    <CartContext.Provider
      value={{
        count,
        items,
        subtotal,
        shipping,
        total,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    return {
      count: 0,
      items: [],
      subtotal: 0,
      shipping: 0,
      total: 0,
      isDrawerOpen: false,
      openDrawer: () => {},
      closeDrawer: () => {},
      addItem: () => {},
      updateItem: () => {},
      removeItem: () => {},
    };
  }
  return ctx;
}
