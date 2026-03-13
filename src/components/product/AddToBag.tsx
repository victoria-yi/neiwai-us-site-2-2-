'use client';

import { useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';

export interface AddToBagHandle {
  triggerAdd: () => Promise<void>;
}

interface AddToBagProps {
  disabled?: boolean;
  onAdd?: () => void;
  onNoSizeClick?: () => void;
  compact?: boolean;
}

const AddToBag = forwardRef<AddToBagHandle, AddToBagProps>(function AddToBag(
  { disabled = false, onAdd, onNoSizeClick, compact = false },
  ref
) {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = useCallback(async () => {
    if (state !== 'idle') return;
    if (disabled) {
      onNoSizeClick?.();
      return;
    }

    setState('loading');

    await new Promise((resolve) => setTimeout(resolve, 800));

    setState('success');
    onAdd?.();

    setTimeout(() => {
      setState('idle');
    }, 1500);
  }, [disabled, state, onAdd, onNoSizeClick]);

  useImperativeHandle(ref, () => ({
    triggerAdd: handleClick,
  }), [handleClick]);

  const compactDisabled = state !== 'idle' || (disabled && !onNoSizeClick);
  if (compact) {
    return (
      <motion.button
        onClick={handleClick}
        disabled={compactDisabled}
        className={`w-full h-10 font-body text-[14px] tracking-wide transition-all duration-300 rounded-none ${
          compactDisabled
            ? 'bg-stone text-ink cursor-not-allowed'
            : state === 'success'
            ? 'bg-accent text-cream'
            : 'bg-black text-white hover:opacity-90'
        }`}
        whileTap={!compactDisabled ? { scale: 0.98 } : {}}
      >
        {state === 'loading' && 'Adding...'}
        {state === 'success' && 'Added ✓'}
        {state === 'idle' && 'Add to cart'}
      </motion.button>
    );
  }

  const pdpDisabled = state !== 'idle' || (disabled && !onNoSizeClick);
  return (
    <motion.button
      onClick={handleClick}
      disabled={pdpDisabled}
      className={`w-full h-[46px] font-body text-[15px] tracking-[0.06em] transition-all duration-300 border ${
        pdpDisabled
          ? 'bg-stone text-ink border-stone cursor-not-allowed'
          : state === 'success'
          ? 'bg-accent text-cream border-accent'
          : 'bg-[#E5E5E5] text-ink border-[#E5E5E5] hover:opacity-90'
      }`}
      whileTap={!pdpDisabled ? { scale: 0.98 } : {}}
    >
      {state === 'loading' && (
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Adding...
        </motion.span>
      )}
      {state === 'success' && 'Added ✓'}
      {state === 'idle' && 'Add to cart'}
    </motion.button>
  );
});

export default AddToBag;
