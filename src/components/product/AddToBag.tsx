'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface AddToBagProps {
  disabled?: boolean;
  onAdd?: () => void;
  compact?: boolean;
}

export default function AddToBag({ disabled = false, onAdd, compact = false }: AddToBagProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleClick = async () => {
    if (disabled || state !== 'idle') return;
    
    setState('loading');
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setState('success');
    onAdd?.();
    
    setTimeout(() => {
      setState('idle');
    }, 1500);
  };

  if (compact) {
    return (
      <motion.button
        onClick={handleClick}
        disabled={disabled || state !== 'idle'}
        className={`w-full h-10 font-body text-[13px] tracking-wide transition-all duration-300 ${
          disabled
            ? 'bg-sand text-stone cursor-not-allowed'
            : state === 'success'
            ? 'bg-accent text-cream'
            : 'bg-charcoal text-cream hover:bg-ink'
        }`}
        whileTap={!disabled ? { scale: 0.98 } : {}}
      >
        {state === 'loading' && 'Adding...'}
        {state === 'success' && 'Added ✓'}
        {state === 'idle' && (disabled ? 'Select Size' : 'Add to Bag')}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      disabled={disabled || state !== 'idle'}
      className={`w-full max-w-[320px] h-[46px] font-body text-[13px] tracking-[0.06em] transition-all duration-300 border ${
        disabled
          ? 'bg-cream text-stone border-sand cursor-not-allowed'
          : state === 'success'
          ? 'bg-accent text-cream border-accent'
          : 'bg-charcoal text-cream border-charcoal hover:bg-ink hover:border-ink'
      }`}
      whileTap={!disabled ? { scale: 0.98 } : {}}
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
      {state === 'idle' && (disabled ? 'Select a Size' : 'Add to Bag')}
    </motion.button>
  );
}
