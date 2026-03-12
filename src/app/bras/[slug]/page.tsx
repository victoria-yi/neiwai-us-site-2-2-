'use client';

import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import ProductGallery from '@/components/product/ProductGallery';
import SizeSelector from '@/components/product/SizeSelector';
import ColorSwatches from '@/components/product/ColorSwatches';
import AddToBag from '@/components/product/AddToBag';
import ProductAccordion from '@/components/product/ProductAccordion';
import YouMayAlsoLikePDP from '@/components/product/YouMayAlsoLikePDP';
import VariantSelector from '@/components/product/VariantSelector';
import TechnologyStory from '@/components/product/TechnologyStory';
import VariantComparison from '@/components/product/VariantComparison';
import FloatingCartBar from '@/components/product/FloatingCartBar';
import CompleteTheSetPDP from '@/components/product/CompleteTheSetPDP';
import FadeIn from '@/components/ui/FadeIn';
import Overline from '@/components/ui/Overline';
import { getProductBySlug, getYouMayAlsoLikeBras, getMatchingSetBriefs } from '@/lib/products';
import type { Product } from '@/lib/products';
import { formatPrice } from '@/lib/utils';

function getGalleryProduct(product: Product, variantId: string | null): Product {
  if (!product.variants || !variantId) return product;
  const variant = product.variants.find((v) => v.id === variantId);
  if (!variant) return product;
  return {
    ...product,
    images: variant.images,
    hoverImage: variant.hoverImage,
    colorImages: variant.colorImages,
  };
}

const lineLabels: Record<string, string> = {
  'barely-zero': 'Barely Zero',
  'pure-comfort': 'Pure Comfort',
  'ultraflex': 'UltraFlex',
  'bandeau': 'Bandeau',
  'swan': 'Swan',
  'featherlight': 'Featherlight',
};

export default function BrasProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const hasVariants = !!(product?.variants && product.variants.length > 0);

  useEffect(() => {
    if (product?.variants && product.variants.length > 0 && !selectedVariantId) {
      setSelectedVariantId(product.variants[0].id);
    }
  }, [product, selectedVariantId]);

  const activeColors = useMemo(() => {
    if (!product) return [];
    if (hasVariants && selectedVariantId) {
      const variant = product.variants!.find((v) => v.id === selectedVariantId);
      return variant ? variant.colors : product.colors;
    }
    return product.colors;
  }, [product, hasVariants, selectedVariantId]);

  useEffect(() => {
    if (hasVariants && activeColors.length > 0) {
      setSelectedColor(activeColors[0].name);
    }
  }, [selectedVariantId, hasVariants, activeColors]);

  useEffect(() => {
    if (product && product.sizes.length === 1) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  useEffect(() => {
    if (product && !hasVariants && product.colors.length > 0 && !selectedColor) {
      setSelectedColor(product.colors[0].name);
    }
  }, [product, hasVariants, selectedColor]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-display text-[32px] font-light text-ink">Product not found</h1>
          <Link href="/bras" className="font-body text-[14px] text-accent mt-4 inline-block hover:underline">
            Return to Bras &rarr;
          </Link>
        </div>
      </div>
    );
  }

  const youMayAlsoLike = getYouMayAlsoLikeBras(product, 5);
  const matchingSetBriefs = getMatchingSetBriefs(product, 2);
  const galleryProduct = getGalleryProduct(product, selectedVariantId);
  const activeVariant = hasVariants && selectedVariantId
    ? product.variants!.find((v) => v.id === selectedVariantId)
    : null;

  const lineLabel = lineLabels[product.line] ?? 'Bras';

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

  const handleVariantSelect = (variantId: string) => {
    setSelectedVariantId(variantId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-4">
        <nav className="font-body text-[12px] text-taupe flex items-center gap-2">
          <Link href="/" className="hover:text-ink transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link href="/bras" className="hover:text-ink transition-colors duration-300">Bras</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* PDP Split Layout */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Gallery — 55% */}
          <div className="w-full lg:w-[55%]">
            <ProductGallery product={galleryProduct} selectedColor={selectedColor} />
          </div>

          {/* Product Info — 45% */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-24 lg:self-start">
            <FadeIn>
              <Overline>{lineLabel}</Overline>

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

            {/* Variant Selection */}
            {hasVariants && product.variants && selectedVariantId && (
              <FadeIn delay={0.05}>
                <div className="mt-6">
                  <VariantSelector
                    variants={product.variants}
                    selectedVariantId={selectedVariantId}
                    onSelect={setSelectedVariantId}
                  />
                </div>
                {activeVariant && (
                  <p className="font-body text-[12px] text-taupe mt-2 italic">
                    {activeVariant.description}
                  </p>
                )}
              </FadeIn>
            )}

            {/* Color Selection */}
            <FadeIn delay={0.1}>
              <div className="mt-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-body text-[13px] text-ink">
                    {selectedColor || ''}
                    {selectedColor && activeColors.find((c) => c.name === selectedColor)?.soldOut && (
                      <span className="ml-2 font-body text-[12px] text-taupe">Sold out</span>
                    )}
                  </span>
                </div>
                <ColorSwatches
                  colors={activeColors}
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
        product={galleryProduct}
        selectedColor={selectedColor}
        selectedSize={selectedSize}
      />

      {/* Technology Story — "The details that disappear" */}
      {product.technologyFeatures && product.technologyFeatures.length > 0 && (
        <TechnologyStory
          features={product.technologyFeatures}
          productName={product.name}
        />
      )}

      {/* Complete the set — same as Vercel, directly below The details that disappear */}
      {matchingSetBriefs.length > 0 && (
        <CompleteTheSetPDP briefs={matchingSetBriefs} />
      )}

      {/* You may also like — same as reference neiwai-us-site3 */}
      <YouMayAlsoLikePDP products={youMayAlsoLike} />

      {/* Variant Comparison */}
      {hasVariants && product.variants && selectedVariantId && (
        <VariantComparison
          variants={product.variants}
          selectedVariantId={selectedVariantId}
          onSelect={handleVariantSelect}
        />
      )}
    </div>
  );
}
