'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductGallery from '@/components/product/ProductGallery';
import SizeSelector from '@/components/product/SizeSelector';
import ColorSwatches from '@/components/product/ColorSwatches';
import AddToBag from '@/components/product/AddToBag';
import ProductAccordion from '@/components/product/ProductAccordion';
import ProductCard from '@/components/product/ProductCard';
import TechnologyStory from '@/components/product/TechnologyStory';
import FloatingCartBar from '@/components/product/FloatingCartBar';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import { getProductBySlug, getRelatedProducts } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

export default function LeggingsProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    if (product && product.sizes.length === 1) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product && product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0].name);
    }
  }, [product, selectedColor]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-[32px] font-light text-ink">Product not found</h1>
          <Link href="/leggings" className="font-body text-[14px] text-accent mt-4 inline-block hover:underline">
            Return to Leggings &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product, 3);

  const accordionItems = [
    {
      title: 'Materials',
      content: product.details.composition,
    },
    {
      title: 'Care Instructions',
      content: product.details.care,
    },
    {
      title: 'Fit Guide',
      content: product.details.fit,
    },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
        <nav className="font-body text-[12px] text-taupe flex items-center gap-2">
          <Link href="/" className="hover:text-ink transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link href="/leggings" className="hover:text-ink transition-colors duration-300">Leggings</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* PDP Split Layout */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Gallery — 55% */}
          <div className="w-full lg:w-[55%]">
            <ProductGallery product={product} selectedColor={selectedColor} />
          </div>

          {/* Product Info — 45% */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24 lg:self-start">
            <FadeIn>
              <Overline>Barely Zero</Overline>

              <h1 className="font-display text-[24px] lg:text-[28px] font-light text-ink mt-3">
                {product.name}
              </h1>

              <p className="font-body text-[16px] text-ink mt-3">
                {formatPrice(product.price)}
              </p>

              <div className="mt-5 border border-sand bg-warm-white">
                <div className="px-5 pt-4 pb-5">
                  <p className="font-display text-[11px] font-light tracking-[0.16em] uppercase text-taupe/70 mb-3">
                    Why You&apos;ll Love It
                  </p>
                  <p className="font-body text-[16px] text-ink leading-snug">
                    {product.lifestyleLine}
                  </p>
                </div>
                {product.technologyFeatures && product.technologyFeatures.length > 0 && (
                  <div className="border-t border-sand px-5 py-4 bg-sand/10">
                    <p className="font-display text-[11px] font-light tracking-[0.16em] uppercase text-taupe/70 mb-3">
                      Highlights
                    </p>
                    <ul className="flex flex-col gap-2">
                      {product.technologyFeatures.slice(0, 3).map((f) => (
                        <li key={f.number} className="flex items-center gap-2.5">
                          <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                          <span className="font-body text-[14px] text-taupe">{f.headline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p className="font-body text-[14px] text-taupe mt-4 leading-relaxed">
                {product.description}
              </p>
            </FadeIn>

            {/* Color Selection */}
            <FadeIn delay={0.1}>
              <div className="mt-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-body text-[13px] text-ink">
                    {selectedColor || ''}
                  </span>
                </div>
                <ColorSwatches
                  colors={product.colors}
                  selectedColor={selectedColor}
                  onSelect={setSelectedColor}
                />
              </div>
            </FadeIn>

            {/* Size Selection */}
            {product.sizes.length > 1 && (
              <FadeIn delay={0.15}>
                <div className="mt-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-body text-[13px] text-ink">Size</span>
                    <button className="font-body text-[12px] text-accent hover:underline">
                      Size Guide
                    </button>
                  </div>
                  <SizeSelector
                    sizes={product.sizes}
                    selectedSize={selectedSize}
                    onSelect={setSelectedSize}
                  />
                </div>
              </FadeIn>
            )}

            {product.sizes.length === 1 && (
              <FadeIn delay={0.15}>
                <div className="mt-5 flex items-center gap-2">
                  <span className="font-body text-[13px] text-ink">Size:</span>
                  <span className="font-body text-[13px] text-taupe">{product.sizes[0]}</span>
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.2}>
              <div className="mt-7" id="pdp-form-sentinel">
                <AddToBag disabled={!selectedSize} />
              </div>
            </FadeIn>

            {/* Trust signals */}
            <p className="mt-6 font-body text-[14px] text-taupe">
              Free shipping over $99&nbsp;&nbsp;·&nbsp;&nbsp;Easy returns within 30 days
            </p>

            <FadeIn delay={0.25}>
              <div className="mt-4">
                <ProductAccordion items={accordionItems} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Floating Cart Bar */}
      <FloatingCartBar
        product={product}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />

      {/* Technology Story */}
      {product.technologyFeatures && product.technologyFeatures.length > 0 && (
        <TechnologyStory
          features={product.technologyFeatures}
          productName={product.name}
        />
      )}

      {/* Complete the Look */}
      {relatedProducts.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:pb-32 lg:py-24 border-t border-sand">
          <FadeIn>
            <Overline>Complete the Look</Overline>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
