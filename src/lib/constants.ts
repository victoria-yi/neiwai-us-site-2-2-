// NEIWAI Design System Constants

export const colors = {
  cream: '#F7F4F0',
  warmWhite: '#FDFCFA',
  ink: '#1A1714',
  sand: '#E8E0D5',
  stone: '#C4B8A8',
  taupe: '#9B8E7E',
  charcoal: '#2C2824',
  accent: '#8B7355',
  blush: '#E8D5C8',
  sage: '#C5CDB8',
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1440,
} as const;

export const navLinks = {
  left: [
    { label: 'Bras', href: '/bras' },
    { label: 'Briefs', href: '/briefs' },
    { label: 'Leggings', href: '/leggings' },
  ],
  right: [] as { label: string; href: string }[],
} as const;

export const megaMenuData = {
  bras: {
    columns: [
      {
        title: 'Barely Zero',
        links: [
          { label: 'Strap Bra — The Original', href: '/bras/barely-zero-strap-bra' },
          { label: 'Anchored Cup Strap Bra', href: '/bras/barely-zero-anchored-cup-strap-bra' },
          { label: 'Anchored Cup Signature Bra', href: '/bras/barely-zero-anchored-cup-signature-bra' },
          { label: 'Scallop Bra', href: '/bras/barely-zero-scallop-bra' },
          { label: 'Scallop Clasp Bra', href: '/bras/barely-zero-scallop-clasp-bra' },
          { label: 'Camisole', href: '/bras/barely-zero-camisole' },
          { label: 'Breeze Bra', href: '/bras/barely-zero-breeze-bra' },
          { label: 'Curvy Clasp Bra', href: '/bras/barely-zero-curvy-clasp-bra' },
          { label: 'Curvy Bra', href: '/bras/barely-zero-curvy-bra' },
          { label: 'Curve Extra Support Bra', href: '/bras/barely-zero-curve-extra-support-bra' },
        ],
      },
      {
        title: 'Shop by Need',
        links: [
          { label: 'For Fuller Busts', href: '/bras?filter=fuller-busts' },
          { label: 'Strapless & Bandeau', href: '/bras?filter=strapless' },
          { label: 'Natural Fiber', href: '/bras?filter=natural-fiber' },
          { label: 'Deep V & Push-Up', href: '/bras?filter=deep-v' },
          { label: 'Shop All Bras', href: '/bras' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI167441.jpg?v=1762145917&width=600',
      alt: 'Barely Zero — The original. Still the standard.',
      caption: 'Barely Zero Strap Bra',
    },
  },
  briefs: {
    columns: [
      {
        title: 'Barely Zero',
        links: [
          { label: 'Superlight Brief', href: '/briefs/barely-zero-superlight-brief' },
          { label: 'Low Waist Brief', href: '/briefs/barely-zero-low-waist-brief' },
          { label: 'Mid Waist Brief', href: '/briefs/barely-zero-mid-waist-brief' },
        ],
      },
      {
        title: 'Multi-Packs',
        links: [
          { label: 'UltraFlex Light Brief 3-Pack', href: '/briefs/ultraflex-light-brief-3-pack' },
          { label: 'UltraFlex Cotton Brief 3-Pack', href: '/briefs/ultraflex-cotton-brief-3-pack' },
        ],
      },
      {
        title: 'Explore',
        links: [
          { label: 'Shop All Briefs', href: '/briefs' },
          { label: 'Size Guide', href: '/briefs#size-guide' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=600',
      alt: 'Barely Zero Low Waist Brief',
      caption: 'Barely Zero Briefs',
    },
  },
  leggings: {
    columns: [
      {
        title: 'Leggings',
        links: [
          { label: 'Barely Zero Flow Leggings', href: '/leggings/barely-zero-flow-leggings' },
          { label: 'Barely Zero Lycra Leggings', href: '/leggings/barely-zero-lycra-leggings' },
        ],
      },
      {
        title: 'Shorts',
        links: [
          { label: 'Barely Zero Flow Shorts', href: '/leggings/barely-zero-flow-shorts' },
        ],
      },
      {
        title: 'Explore',
        links: [
          { label: 'Shop All Leggings', href: '/leggings' },
        ],
      },
    ],
    featuredImage: {
      src: 'https://neiwai.life/cdn/shop/files/20211217NEIWAI9705_1.jpg?v=1729629132&width=600',
      alt: 'Barely Zero Flow Leggings',
      caption: 'Barely Zero Leggings',
    },
  },
} as const;

export const footerLinks = {
  ourWorld: [
    { label: 'Our Philosophy', href: 'https://neiwai.life/pages/our-story' },
    { label: 'The Atelier', href: '/our-world/atelier' },
    { label: 'Journal', href: '/our-world/journal' },
    { label: 'Careers', href: 'https://neiwai.life/pages/press' },
  ],
  customerCare: [
    { label: 'Shipping & Returns', href: 'https://neiwai.life/pages/shipping-returns' },
    { label: 'Size Guide', href: 'https://neiwai.life/pages/size-guide' },
    { label: 'Contact Us', href: 'https://neiwai.life/pages/contact-us' },
    { label: 'FAQ', href: 'https://neiwai.life/pages/faq' },
    { label: 'Archive Sale', href: 'https://neiwai.life/collections/sale-collection' },
  ],
  follow: [
    { label: 'Instagram', href: 'https://www.instagram.com/neiwaiofficial/?hl=en' },
    { label: 'Pinterest', href: 'https://www.pinterest.ca/neiwaiofficial/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@neiwai.life' },
  ],
} as const;

export const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'] as const;

export const colorMap: Record<string, string> = {
  Nude: '#D4B5A0',
  Black: '#1A1714',
  Rose: '#C9A0A0',
  Slate: '#8B8D8E',
  Ivory: '#F5F0E8',
  Blush: '#E8D5C8',
  Sand: '#D5C9B8',
  Charcoal: '#3C3835',
  Cream: '#F7F4F0',
  Sage: '#B8C4A8',
  Oat: '#D8CCBA',
  Navy: '#2C3040',
  White: '#FDFCFA',
  Mocha: '#A0887A',
  Dusty_Rose: '#C8A0A0',
};

// Hero images for collection pages
export const collectionHeroImages = {
  bras: 'https://neiwai.life/cdn/shop/files/20250908-131826.png?v=1757362737&width=2560',
  briefs: 'https://neiwai.life/cdn/shop/files/20250908-104305.jpg?v=1757370825&width=2560',
  leggings: 'https://neiwai.life/cdn/shop/files/20210702NEIWAI0823.jpg?v=1729635212&width=2560',
  ourWorld: 'https://neiwai.life/cdn/shop/files/AboutUs_min.png?v=1722883181&width=2560',
  atelier: 'https://neiwai.life/cdn/shop/files/20250908-104140.jpg?v=1757353319&width=2560',
} as const;
