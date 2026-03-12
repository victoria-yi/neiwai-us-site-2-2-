#!/usr/bin/env node
/**
 * Sync PDP main images from neiwai.life (original site) to new site products.
 * Run: node scripts/sync-original-pdp-images.mjs
 * Reads scripts/original-handle-mapping.json and src/lib/products.ts,
 * fetches each original product JSON, then rewrites each product's images + hoverImage.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const mappingPath = join(root, 'scripts/original-handle-mapping.json');
const productsPath = join(root, 'src/lib/products.ts');

const mapping = JSON.parse(readFileSync(mappingPath, 'utf8'));

function shopifySrcToNeiwai(src) {
  if (!src) return '';
  const m = src.match(/cdn\.shopify\.com\/s\/files\/1\/0457\/6392\/0021\/(.+)/);
  if (m) {
    const pathAndQuery = m[1];
    const suffix = pathAndQuery.includes('width=') ? '' : '&width=800';
    return `https://neiwai.life/cdn/shop/${pathAndQuery}${suffix}`;
  }
  if (src.includes('neiwai.life')) return src.includes('width=') ? src : `${src}&width=800`;
  return src;
}

async function fetchProductImages(handle) {
  const url = `https://neiwai.life/products/${handle}.json`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const images = (data.product?.images || [])
      .sort((a, b) => (a.position || 0) - (b.position || 0))
      .map((img) => shopifySrcToNeiwai(img.src))
      .filter(Boolean);
    const first = data.product?.image;
    const hoverImage = first ? shopifySrcToNeiwai(first.src) : images[1] || images[0];
    return { images, hoverImage };
  } catch (e) {
    console.error(handle, e.message);
    return null;
  }
}

let productsTs = readFileSync(productsPath, 'utf8');

for (const [slug, handle] of Object.entries(mapping)) {
  const data = await fetchProductImages(handle);
  if (!data || !data.images.length) {
    console.warn(`Skip ${slug} (${handle}): no images`);
    continue;
  }
  const imagesStr = data.images.map((u) => `      '${u}'`).join(',\n');
  const hoverStr = data.hoverImage ? `\n    hoverImage: '${data.hoverImage}',` : '';

  const slugEsc = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `(slug: '${slugEsc}'[\\s\\S]*?)(images: \\[[\\s\\S]*?\\],)\\s*(hoverImage: '[^']*',)?\\s*`,
    'm'
  );
  const replacement = `$1images: [\n${imagesStr}\n    ],${hoverStr} `;
  const newContent = productsTs.replace(re, replacement);
  if (newContent === productsTs) {
    console.warn(`Pattern not found for ${slug}`);
    continue;
  }
  productsTs = newContent;
  console.log(`Updated ${slug}`);
}

writeFileSync(productsPath, productsTs);
console.log('Done. products.ts updated.');
