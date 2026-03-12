export interface ProductColor {
  name: string;
  hex: string;
  soldOut?: boolean;
}

export interface ProductVariant {
  id: string;
  label: string;
  sublabel: string;
  images: string[];
  hoverImage?: string;
  colorImages?: Record<string, string[]>;
  colors: ProductColor[];
  description: string;
}

export interface TechnologyFeature {
  number: string;
  headline: string;
  description: string;
  image?: string;
  /** CSS object-position for the feature image (e.g. 'center 25%') */
  imageObjectPosition?: string;
  /** Scale factor for zooming the image (e.g. 1.5 for 150% zoom) */
  imageScale?: number;
  /** Optional background color for the image container (e.g. '#f5f5f5') */
  imageBackgroundColor?: string;
  icon?: 'invisible' | 'molding' | 'stretch' | 'breathe' | 'durability' | 'anchor' | 'comfort';
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: 'bras' | 'briefs' | 'leggings';
  line: 'barely-zero' | 'pure-comfort' | 'ultraflex' | 'bandeau' | 'swan' | 'featherlight';
  subcategory: string;
  colors: ProductColor[];
  sizes: string[];
  isNew?: boolean;
  images: string[];
  hoverImage?: string;
  /** White-background card image for "You may also like" etc. */
  cardImage?: string;
  colorImages?: Record<string, string[]>;
  description: string;
  details: {
    composition: string;
    care: string;
    fit: string;
  };
  sensoryLine: string;
  lifestyleLine: string;
  variants?: ProductVariant[];
  technologyFeatures?: TechnologyFeature[];
}

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA — 25 Keep List products
// Categories: bras (17) · briefs (5) · leggings (3)
// Lines: barely-zero · pure-comfort · ultraflex · bandeau · swan · featherlight
// Selling points updated from 260302 NEIWAI US_Keep_List_Product.xlsx
// ─────────────────────────────────────────────────────────────

export const brasProducts: Product[] = [
  // ── Barely Zero Line ──────────────────────────────────────
  {
    id: 'bra-001',
    slug: 'barely-zero-anchored-cup-strap-bra',
    name: 'Barely Zero Anchored Cup Strap Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Lilac Ash', hex: '#B8A8B8' },
      { name: 'Peach Pure', hex: '#E8C8B8' },
      { name: 'Asparagus Green', hex: '#B8C4A8' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/Barely Zero Anchored Cup Strap Bra/1.png',
      '/images/Barely Zero Anchored Cup Strap Bra/2.png',
      '/images/Barely Zero Anchored Cup Strap Bra/3.png',
      '/images/Barely Zero Anchored Cup Strap Bra/4.png',
      '/images/Barely Zero Anchored Cup Strap Bra/5.png',
      '/images/Barely Zero Anchored Cup Strap Bra/6.png',
      '/images/Barely Zero Anchored Cup Strap Bra/7.png',
    ],
    hoverImage: '/images/Barely Zero Anchored Cup Strap Bra/1.png',
    cardImage: '/images/strap-bra-card-white.png',
    colorImages: {
      'Eggwhite': [
        '/images/Barely Zero Anchored Cup Strap Bra/1.png',
        '/images/Barely Zero Anchored Cup Strap Bra/2.png',
        '/images/Barely Zero Anchored Cup Strap Bra/3.png',
        '/images/Barely Zero Anchored Cup Strap Bra/4.png',
        '/images/Barely Zero Anchored Cup Strap Bra/5.png',
        '/images/Barely Zero Anchored Cup Strap Bra/6.png',
        '/images/Barely Zero Anchored Cup Strap Bra/7.png',
      ],
      'Black': [
        '/images/Barely Zero Anchored Cup Strap Bra/1.png',
        '/images/Barely Zero Anchored Cup Strap Bra/2.png',
        '/images/Barely Zero Anchored Cup Strap Bra/3.png',
        '/images/Barely Zero Anchored Cup Strap Bra/4.png',
        '/images/Barely Zero Anchored Cup Strap Bra/5.png',
        '/images/Barely Zero Anchored Cup Strap Bra/6.png',
        '/images/Barely Zero Anchored Cup Strap Bra/7.png',
      ],
      'Treacly Almond': [
        '/images/Barely Zero Anchored Cup Strap Bra/1.png',
        '/images/Barely Zero Anchored Cup Strap Bra/2.png',
        '/images/Barely Zero Anchored Cup Strap Bra/3.png',
        '/images/Barely Zero Anchored Cup Strap Bra/4.png',
        '/images/Barely Zero Anchored Cup Strap Bra/5.png',
        '/images/Barely Zero Anchored Cup Strap Bra/6.png',
        '/images/Barely Zero Anchored Cup Strap Bra/7.png',
      ],
      'Lilac Ash': [
        '/images/Barely Zero Anchored Cup Strap Bra/1.png',
        '/images/Barely Zero Anchored Cup Strap Bra/2.png',
        '/images/Barely Zero Anchored Cup Strap Bra/3.png',
        '/images/Barely Zero Anchored Cup Strap Bra/4.png',
        '/images/Barely Zero Anchored Cup Strap Bra/5.png',
        '/images/Barely Zero Anchored Cup Strap Bra/6.png',
        '/images/Barely Zero Anchored Cup Strap Bra/7.png',
      ],
      'Peach Pure': [
        '/images/Barely Zero Anchored Cup Strap Bra/1.png',
        '/images/Barely Zero Anchored Cup Strap Bra/2.png',
        '/images/Barely Zero Anchored Cup Strap Bra/3.png',
        '/images/Barely Zero Anchored Cup Strap Bra/4.png',
        '/images/Barely Zero Anchored Cup Strap Bra/5.png',
        '/images/Barely Zero Anchored Cup Strap Bra/6.png',
        '/images/Barely Zero Anchored Cup Strap Bra/7.png',
      ],
      'Asparagus Green': [
        '/images/Barely Zero Anchored Cup Strap Bra/1.png',
        '/images/Barely Zero Anchored Cup Strap Bra/2.png',
        '/images/Barely Zero Anchored Cup Strap Bra/3.png',
        '/images/Barely Zero Anchored Cup Strap Bra/4.png',
        '/images/Barely Zero Anchored Cup Strap Bra/5.png',
        '/images/Barely Zero Anchored Cup Strap Bra/6.png',
        '/images/Barely Zero Anchored Cup Strap Bra/7.png',
      ],
    },
    description: 'Thin straps, no underwire, no adjustment required. Adaptive Fit Technology allows the one-size construction to conform to the body rather than the other way around. Anchored cups — secured at the base — stay positioned through movement. The seams are gone. The hardware is gone. The bra remains.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'For best results, hand wash with a light detergent in cold water.',
      fit: 'One size. Adaptive Fit Technology conforms to different body shapes without adjustment.',
    },
    sensoryLine: 'One size. Adapts to yours.',
    lifestyleLine: 'The seams are gone. The hardware is gone. The bra remains.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without any adjustment — the bra adapts to you, not the other way around.',
        image: '/images/Barely Zero Anchored Cup Strap Bra/0129 内外2216 adaptive.jpg',
        imageObjectPosition: 'center 20%',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Anchored Cups',
        description: 'Secured at the base for consistent, shift-free shaping from morning to night — soft, natural support that holds position through movement.',
        image: '/images/NO251WU1601_-12_1%20%E5%9B%BA%E5%AE%9A%E6%9D%AF.webp',
        imageObjectPosition: 'center 30%',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Fully Seamless Exterior',
        description: 'No underwire, no foam padding, no hardware. Pairs invisibly under any layer for a completely no-show finish.',
        image: '/images/Barely Zero Anchored Cup Strap Bra/0129 内外2511_1 seamlessjpg.jpg',
        imageObjectPosition: 'center 20%',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-002',
    slug: 'barely-zero-anchored-cup-signature-bra',
    name: 'Barely Zero Anchored Cup Signature Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Treacly Almond', hex: '#DDD2C7' },
      { name: 'Lilac Ash', hex: '#E2D9DB' },
      { name: 'Icy Purple', hex: '#C8D1DE' },
      { name: 'Eggwhite', hex: '#F7F7F7' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17255.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17270.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32312.jpg',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32371.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI18218.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32620_1.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32633.jpg',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16998.webp',
      '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16835.png',
    ],
    hoverImage: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17255.webp',
    cardImage: '/images/anchored-cup-signature-bra-card.png',
    colorImages: {
      'Black': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17255.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI17270.webp',
      ],
      'Treacly Almond': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16364_2087098d-adca-42e7-89da-ef4c3e9f3af5.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32312.jpg',
      ],
      'Lilac Ash': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32620_1.webp',
      ],
      'Icy Purple': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI18218.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32633.jpg',
      ],
      'Eggwhite': [
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0216NEIWAI32371.webp',
        '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/2025-08-28NEIWAI16998.webp',
      ],
    },
    description: 'Wide straps. Anchored cups. No underwire. The Signature Bra is the most supported expression of the Barely Zero construction — designed for busts that need weight distribution without compression. Soft natural shaping with no foam, no structure, nothing pressing.',
    details: {
      composition: '68% Polyamide, 32% Spandex',
      care: 'For best results, hand wash with a light detergent in cold water.',
      fit: 'One size. Wide shoulder straps distribute weight evenly — designed for larger busts.',
    },
    sensoryLine: 'The Barely Zero silhouette, fully resolved.',
    lifestyleLine: 'Shape that holds without shifting. Support without compression.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without any adjustment — the bra adapts to you, not the other way around.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/0129%2002%20%E5%86%85%E5%A4%963093%20adaptive%20fit.jpg',
        imageObjectPosition: 'center 10%',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Anchored Cup Architecture',
        description: 'Cups secured at the base provide shape that holds without shifting or collapsing — natural form from construction, not padding.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/NO251WU1601_-12_1%20%E5%9B%BA%E5%AE%9A%E6%9D%AF.webp',
        imageObjectPosition: 'center 40%',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Wide Strap Support',
        description: 'Wide shoulder straps distribute weight evenly — designed specifically for larger busts that need support without compression.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/84f83942cab84c0e81429ba237890465%E5%AE%BD%E8%82%A9%E5%B8%A6.jpeg',
        imageObjectPosition: 'center 33%',
        icon: 'anchor',
      },
      {
        number: '04',
        headline: 'Invisible Under Everything',
        description: 'Smooth seamless exterior with no underwire, no foam, and no visible lines under fitted clothing.',
        image: '/images/Barely%20Zero%20Anchored%20Cup%20Signature%20Bra/d133b6f3369c4808917d4337b04b828d%20invisiable.jpeg',
        imageObjectPosition: 'center 43%',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-003',
    slug: 'barely-zero-strap-bra',
    name: 'Barely Zero Strap Bra',
    price: 39,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Fluffy Peach', hex: '#E5E2DD' },
      { name: 'Cinnamon Taste', hex: '#B8956E' },
      { name: 'Black Truffle', hex: '#D4C4B0' },
    ],
    sizes: ['One Size'],
    images: [
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16085.jpg?v=1757376293&width=800',
      'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
      'https://neiwai.life/cdn/shop/files/NEI001_N211WU1120_BarelyZeroSpaghetti_CinnamonTaste_OM_ALT_8_1.jpg?v=1757376271&width=800',
      '/images/NEI001_N211WU1120_BarelyZeroSpaghetti_CinnamonTaste_OM_Detail_52_1-5d2e691f-93d4-4afe-b113-b6a856c7df37.png',
      '/images/20210111NEIWAI36915-10035604-24e3-4c51-adfe-54d809b99654.png',
      '/images/20210111__NEIWAI36948_-eb5f8c5e-196b-4936-9513-f5b64ce159b6.png',
      '/images/20210422_Evy_2021BarelyZeroPackage18_1-f7299dbe-c197-49ca-b38b-1d2675726894.png',
      '/images/CopyofNW241WU1146_NW241WU1147-133d7f81-2200-482c-a020-07f688cbfbad.png',
      '/images/the%20original/Copy_of_N211WU1120_b2fadbfd-b9d0-45e2-b7f8-11b735280c05.webp',
      '/images/the%20original/Copy_of_N211WU1120.webp',
      '/images/the%20original/Copy_of_N211WU1120_db7e511e-ec78-4023-995b-8e0da655602d.webp',
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/2025-08-28NEIWAI16969.jpg?v=1757376271&width=800',
    description: 'Thin adjustable straps, no clasps, no underwire. The Strap Bra is the piece that defined the Barely Zero category — a bra worn for its absence rather than its presence. Made from CloudFit nylon, an adaptive blend developed to move with the body without binding.',
    details: {
      composition: '68% CloudFit nylon blend, 32% Spandex',
      care: 'Dissolve a gentle detergent in cold water (86°F/30°C max) and fully immerse. Gently press/knead, then rinse. Hang or lay flat to dry in a cool, shaded place.',
      fit: 'One size. Wire-free, foam-free, fully seamless — designed to disappear. Adapts across a wide range of body types.',
    },
    sensoryLine: 'The original. Still the standard.',
    lifestyleLine: 'The bra defined by its absence, not its presence.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable, moisture-wicking — an adaptive blend developed to move with the body without binding or compressing.',
        image: '/images/Barely%20Zore%20N202WU1116%20.jpg',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Wire-Free. Foam-Free.',
        description: 'Fully seamless construction. No visible edges, no seam imprints — a clean, barely-there feel under everything.',
        image: '/images/Barely%20Zero%20Spaghetti%20Strap%20Bra_Cinnamon%20Taste_03.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'One Size, Adaptive',
        description: 'One-size construction adapts across a wide range of body types — thin adjustable straps for a clean sightline under anything.',
        image: '/images/Barely%20Zero%20Spaghetti%20Strap%20Bra_Cinnamon%20Taste_05.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'anchor',
      },
    ],
  },
  {
    id: 'bra-004',
    slug: 'barely-zero-scallop-bra',
    name: 'Barely Zero Scallop Bra',
    price: 59,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
      { name: 'Lotus Root', hex: '#D0C0B0', soldOut: true },
      { name: 'Asparagus Green', hex: '#B8C4A8' },
      { name: 'Icy Purple', hex: '#C8C0D0', soldOut: true },
      { name: 'Treacly Almond', hex: '#D4B5A0', soldOut: true },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI158792.webp',
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI162012_eccd6926-58ef-4a36-9ddd-f76beec553d9.webp',
      '/images/Barely%20Zero%20Scallop%20Bra/Barely_Zero_Fixed_Cup_Wavy_3x4_1.webp',
      '/images/Barely%20Zero%20Scallop%20Bra/20211217%20NEIWAI9121%20%E6%8B%B7%E8%B4%9D.jpg',
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI178131.webp',
      '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI17747.webp',
      '/images/Barely Zero Scallop Bra/调颜色后.jpg',
    ],
    hoverImage: '/images/Barely%20Zero%20Scallop%20Bra/2025-08-28NEIWAI158792.webp',
    cardImage: 'https://neiwai.life/cdn/shop/files/2_f6871b0c-dec7-474c-a6b8-34fb5efb1ee6.png?v=1770860761&width=1646',
    description: 'A delicate scalloped V-neckline and fixed molded cups — the Scallop Bra brings structure to the Barely Zero collection without adding weight. Pull-on with no clasps or underwire. The cups stay fixed, the neckline stays crisp, and the silhouette remains invisible under clothing.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Cup retains shape wash after wash.',
      fit: 'Available in XS-S and M-L. Fixed cup with sculpted shape — slightly snug for natural shaping.',
    },
    sensoryLine: 'The scallop that holds its shape.',
    lifestyleLine: 'From meeting to dinner, without a thought.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Bisous Cups™',
        description: 'Featuring a scalloped V-neckline and crease-resistant Bisous Cups™ that maintain shape all day. Provides lightweight structure, hugs your curves, and makes care effortless.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/NO251WU1111_-3.jpg',
        imageObjectPosition: 'center 50%',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Adjustable Fit',
        description: 'Personalized strap adjustment paired with pull-on ease — the structure of a molded bra with the comfort of Barely Zero.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/20211220_NEIWAI2377_adjust.png',
        imageObjectPosition: 'center 30%',
        imageBackgroundColor: '#f5f5f5',
        icon: 'stretch',
      },
      {
        number: '03',
        headline: 'Flo Support™',
        description: 'Wire-free lift that holds position without compression — engineered support that adapts rather than restricts.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/NW221WU1198%E6%9D%8F%E4%BB%81%E7%B2%89%20%E4%BE%A7%E9%9D%A2%20k%E5%8F%AF%E6%9B%BF%E6%8D%A2ajust%20.png',
        imageObjectPosition: 'center 50%',
        icon: 'anchor',
      },
      {
        number: '04',
        headline: 'Pull-On Simplicity',
        description: 'No clasps, no underwire, no adjustment. Seamless side panels for a smooth line under fitted tops.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/20211220%20NEIWAI2435%20%E6%8B%B7%E8%B4%9D%20pull%20on.jpg',
        imageObjectPosition: 'center 40%',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-005',
    slug: 'barely-zero-scallop-clasp-bra',
    name: 'Barely Zero Scallop Clasp Bra',
    price: 59,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Dark Brown', hex: '#4A3830' },
      { name: 'Lotus Root', hex: '#D2C1B9' },
      { name: 'Treacly Almond', hex: '#DDD2C7' },
      { name: 'Black', hex: '#000000' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI180512.webp',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI18075.jpg',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI16321.jpg',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI162012.webp',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI15953.jpg',
      '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI16012.jpg',
    ],
    hoverImage: '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/2025-08-28NEIWAI180512.webp',
    cardImage: 'https://neiwai.life/cdn/shop/files/NO251WU1111_2f86129a-4b5b-49db-a972-7485e857e977.jpg?v=1762149070&width=1646',
    description: 'The Scallop Clasp Bra adds a wave-inspired back clasp to the Fixed Cup Wavy silhouette — an upgrade that introduces fine-tuned fit without changing what the style does well. Bisous Cups™ for breathable, natural shaping. Flo Support™ for stay-put structure. The scallop neckline remains.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in XS-S and M-L. Minimal clasp-back closure for an adjustable, precise fit.',
    },
    sensoryLine: 'The Scallop, with adjustability.',
    lifestyleLine: 'The same scallop neckline. Fine-tuned fit.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Bisous Cups™',
        description: 'Featuring a scalloped V-neckline and crease-resistant Bisous Cups™ that maintain shape all day. Provides lightweight structure, hugs your curves, and makes care effortless.',
        image: '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/NO251WU1111_-3%20bious%20cup.jpg',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Flo Support™',
        description: 'Wire-free lift that holds position without compression — engineered support that adapts rather than restricts.',
        image: '/images/Barely%20Zero%20Scallop%20Bra/NW221WU1198%E6%9D%8F%E4%BB%81%E7%B2%89%20%E4%BE%A7%E9%9D%A2%20k%E5%8F%AF%E6%9B%BF%E6%8D%A2ajust%20.png',
        imageBackgroundColor: '#E9E7E4',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Clasp-Back Precision',
        description: 'Minimal clasp-back closure for an adjustable, precise fit with a seamless exterior — no visible hardware under clothing.',
        image: '/images/Barely%20Zero%20Scallop%20Clasp%20Bra/NO251WU1111_-2.jpg',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'bra-006',
    slug: 'barely-zero-camisole',
    name: 'Barely Zero Camisole',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'camisole',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Camisole/5.26_0803%20layer.webp',
      '/images/Barely%20Zero%20Camisole/5.26_0781.webp',
      '/images/Barely%20Zero%20Camisole/5.26_0788.webp',
      '/images/Barely%20Zero%20Camisole/5.26_0775.webp',
      '/images/Barely%20Zero%20Camisole/BarelyZeroCamisole_1715.webp',
      '/images/Barely%20Zero%20Camisole/5.26_1705.webp',
      '/images/Barely%20Zero%20Camisole/5.26_1710.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Camisole/5.26_0803%20layer.webp',
    cardImage: 'https://neiwai.life/cdn/shop/files/NW242WF3204.jpg?v=1721417912&width=1646',
    description: 'Barely Zero integral cups built into a camisole body — full support without a separate bra underneath. The hem falls cleanly as a layer or on its own. The construction is the same as the rest of the Barely Zero collection: seamless, adaptive, designed to disappear.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold or machine wash gentle. Lay flat to dry.',
      fit: 'Available in XS-S and M-L. Thin adjustable straps. Smooth seamless construction — no visible lines under any fit.',
    },
    sensoryLine: 'The bra, extended.',
    lifestyleLine: 'Layered under linen or worn alone. One piece, no compromise.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Built-In Cups',
        description: 'Integral Barely Zero cups with full support — no separate bra required. The support system is part of the garment.',
        image: '/images/Barely%20Zero%20Camisole/NW242WF3204_7879ee2d-54b5-47a2-ae28-6a1ab2bc7fc5.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 30%',
      },
      {
        number: '02',
        headline: 'Seamless Construction',
        description: 'Smooth seamless throughout with thin adjustable straps — no visible lines under any fit, no compromise on shaping.',
        image: '/images/Barely%20Zero%20Camisole/BarelyZeroCamisole_1715.webp',
        icon: 'invisible',
        imageObjectPosition: 'center 30%',
      },
      {
        number: '03',
        headline: 'Layer or Wear Solo',
        description: 'Longer hem that layers cleanly under shirts and jackets or wears as a standalone top — one piece, two functions.',
        image: '/images/Barely%20Zero%20Camisole/5.26_0803%20layer.webp',
        icon: 'comfort',
        imageObjectPosition: 'center 30%',
      },
    ],
  },
  {
    id: 'bra-007',
    slug: 'barely-zero-curvy-clasp-bra',
    name: 'Barely Zero Curvy Clasp Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Caramel', hex: '#B89070' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/BZ_Fixed_Cup_Clasp_Bra_Black_3x4_1.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU11103_BarelyZeroFixedCupClasp_Caramel_OM_Side_5_1.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211217NEIWAI9806_31049b84-59a1-47dd-8a8e-1e79c2c5e9a1.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211217NEIWAI9841_eef02dff-4054-4e65-9e66-057e18941c88.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211217NEIWAI9877_06f5efa6-f794-4fa4-ac99-98437a729356.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU11103-_NW221WU1320_7f66eeae-e316-403c-a9db-c483409ed802.webp',
      '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NW221WU1320-01_0d6214d1-c83d-45a1-bce9-0ce6270403b3.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/BZ_Fixed_Cup_Clasp_Bra_Black_3x4_1.webp', description: 'Flo Support™ and Bisous Cups™ — two technologies developed to bring the Barely Zero experience to fuller bust proportions. Structured where support is needed. Weightless everywhere else. Back clasp for adjustable fit. Note: this bra adapts to the body over the first few wears.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in S–XL. If you\'re in between sizes, size up. Bra adapts to the body after first few wears.',
    },
    sensoryLine: 'Fuller cups. Still barely there.',
    lifestyleLine: 'Wireless support engineered for fuller bust proportions.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Bisous Cups™',
        description: 'Soft interior structure engineered for fuller bust natural shaping — gentle contouring without rigid padding or underwire.',
        image: '/images/Barely Zero Curvy Clasp Bra/image_1_is_the_bra_that_needs_correction_image_2_is_the_reference_showing_the_correct_structure_adj_fw1dwx0xhfn6pegxkn70.jpg',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Flo Support™',
        description: 'Wire-free lift that holds position without compression or digging — full support through tension geometry, not hardware.',
        image: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/NEI009_NW221WU11103_Barely-Zero-Fixed-Cup-Clasp_Caramel_OM_Detail_8.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 90%',
      },
      {
        number: '03',
        headline: 'Clasp-Back Precision',
        description: 'Minimal clasp-back closure for an adjustable, precise fit with a seamless exterior — no visible hardware under clothing.',
        image: '/images/Barely%20Zero%20Curvy%20Clasp%20Bra/20211220NEIWAI1753_2e461c61-fdad-4ea1-b160-dcdb20d2852b.%E5%90%8E%E8%83%8Cwebp.webp',
        icon: 'invisible',
        imageObjectPosition: 'center 30%',
      },
    ],
  },
  {
    id: 'bra-008',
    slug: 'barely-zero-curvy-bra',
    name: 'Barely Zero Curvy Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI18116.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32353.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32371_a93fac00-e713-45b9-9f6e-802f7c672ba3.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32359.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17856_f73eee67-943b-42ce-9701-fd667ea7f404.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17865.webp',
      '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17954.jpg',
      '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32513.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI18116.webp', description: 'The Curvy Bra extends the Barely Zero wireless construction to a fuller cup range — wider straps, deeper anchored cups, and the same adaptive stretch fabric as the rest of the collection. Designed for everyday wear, postpartum, and body changes that standard sizing doesn\'t account for.',
    details: {
      composition: 'Barely Zero CloudFit nylon blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach.',
      fit: 'Available in S–XL. Wider straps distribute weight evenly. Deeper anchored cups for fuller proportions.',
    },
    sensoryLine: 'Wire-free for curves.',
    lifestyleLine: 'Everyday wear, postpartum, and everything in between.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Adaptive Fit Technology',
        description: 'One-size construction that conforms to different body shapes without any adjustment — the bra adapts to you, not the other way around.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/0216NEIWAI32383%20adaptive.webp',
        icon: 'stretch',
        imageObjectPosition: 'center 65%',
      },
      {
        number: '02',
        headline: 'Anchored Cup Architecture',
        description: 'Cups for secure, natural shaping at fuller proportions — anchored at the base so they hold position throughout the day.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/NO251WU1601_-12_1%20%E5%9B%BA%E5%AE%9A%E6%9D%AF.webp',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Wider Straps',
        description: 'Improved weight distribution and shoulder comfort — designed for fuller proportions without the strap dig of conventional bras.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI18297%E8%82%A9%E5%B8%A6.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 38%',
        imageScale: 1.5,
      },
      {
        number: '04',
        headline: 'Everyday Versatility',
        description: 'Wire-free with body-hugging adaptive stretch fabric. Designed for everyday wear, nursing, and fluctuating fit — no compression, no digging.',
        image: '/images/Barely%20Zero%20Curvy%20Bra/2025-08-28NEIWAI17635%20versatility.jpg',
        icon: 'comfort',
        imageObjectPosition: 'center 20%',
      },
    ],
  },
  {
    id: 'bra-009',
    slug: 'barely-zero-curve-extra-support-bra',
    name: 'Barely Zero Curve Extra Support Bra',
    price: 49,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    colors: [
      { name: 'Vanilla Bean', hex: '#F0E8D8' },
      { name: 'Dark Chocolate', hex: '#3C2820' },
    ],
    sizes: ['S/M', 'L/XL'],
    images: [
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai23076.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai23109.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai22745.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai22768.webp',
      '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai22756.webp',
    ],
    hoverImage: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622neiwai23076.webp', description: 'Fits a 37.5"–43.5" full bust, A–DDD cup. The Curve Extra Support Bra extends the Barely Zero range with an adjustable back clasp, wider spaghetti straps, and removable pads. The interior is modal-lined for breathability. The exterior is seamless.',
    details: {
      composition: 'Outer: 66% CloudFit nylon blend, 34% Spandex | Lining: 86% Modal, 14% Spandex',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in S/M and L/XL. Wider band and deeper cups for extra support.',
    },
    sensoryLine: 'The widest fit range in the collection.',
    lifestyleLine: 'For curves that need more without giving up comfort.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Extended Fit Range',
        description: 'Fits full bust 37.5"–43.5", A–DDD cup — designed for fluctuating sizes and easy gifting across the widest range in the collection.',
        image: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/0622%20neiwai22728%20%281%29%20extended.jpg',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Adjustable Wide Straps',
        description: 'Wide spaghetti straps and back buckle closure for a customizable, secure fit that distributes weight comfortably.',
        image: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/20260305-154700%E8%82%A9%E5%B8%A6.jpg',
        icon: 'anchor',
      },
      {
        number: '03',
        headline: 'Removable Pads',
        description: 'Wear with or without. Modal-lined interior for next-to-skin softness with 66% CloudFit nylon blend, 34% Spandex construction.',
        image: '/images/Barely%20Zero%20Curve%20Extra%20Support%20Bra/CopyofNW241WU1146_NW241WU1147%E8%83%B8%E5%9E%AB%E6%94%B9%E8%89%B2.webp',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'bra-010',
    slug: 'barely-zero-breeze-bra',
    name: 'Barely Zero Breeze Bra',
    price: 55,
    category: 'bras',
    line: 'barely-zero',
    subcategory: 'bra',
    isNew: true,
    colors: [
      { name: 'Sugar Swizzle', hex: '#E8E6E4' },
      { name: 'Lilac Ash', hex: '#B8A8BD' },
    ],
    sizes: ['XS-S', 'M-L'],
    images: [
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_1.webp',
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123.webp',
      '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_2.webp',
      '/images/Barely%20Zero%20Breeze%20Bra/251117neiwai25344%20%E6%8B%B7%E8%B4%9D.jpg',
      '/images/Barely%20Zero%20Breeze%20Bra/FlatLay_CroppingTemplate_Blue_8_14498bbb-f30d-4c9c-96e3-a476d00ed373.webp',
      '/images/Barely Zero Breeze Bra/purple.jpg',
    ],
    hoverImage: '/images/Barely%20Zero%20Breeze%20Bra/NO261WU1123_1.webp', description: 'CloudFit fabric on the outside, real silk on the inside — the Breeze Bra is the warm-weather expression of the Barely Zero line. Minimal clasp-back with flat hardware that disappears under fabric. The 360° stretch maintains shape through repeated wear.',
    details: {
      composition: 'Outer: 67% Nylon, 33% Spandex. Inner: 54% Mulberry Silk, 46% Spandex.',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach. Do not iron.',
      fit: 'Available in XS-S and M-L. Back clasp with adjustable band. Anchored cups.',
    },
    sensoryLine: 'Silk-touch. Clasp back. For warmer days.',
    lifestyleLine: 'Made for warmth. Made for summer.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Silk-Touch Fabric',
        description: 'Outer layer: classic CloudFit fabric. Inner layer: real silk — a naturally cool, airy construction designed for warm weather wear and sensitive skin.',
        image: '/images/Barely Zero Breeze Bra/改褶皱.jpg',
        icon: 'breathe',
      },
      {
        number: '02',
        headline: 'Soft Clasp Back',
        description: 'Clasp-back closure with flat, minimal hardware — adjustable fit without bulk or pressure points.',
        image: '/images/Barely%20Zero%20Breeze%20Bra/251117neiwai25361%20%E6%8B%B7%E8%B4%9D.jpg',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: '360° Adaptive Stretch',
        description: 'Excellent stretch and full shape recovery through repeated wear and wash — lightweight with a subtle natural sheen.',
        image: '/images/Barely%20Zero%20Breeze%20Bra/251117neiwai25352%20%E6%8B%B7%E8%B4%9D.jpg',
        icon: 'stretch',
      },
    ],
  },
  // ── Pure Comfort Line ──────────────────────────────────────
  {
    id: 'bra-011',
    slug: 'pure-comfort-triangle-bra',
    name: 'Pure Comfort Triangle Bra',
    price: 49,
    category: 'bras',
    line: 'pure-comfort',
    subcategory: 'bra',
    colors: [
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Ecru', hex: '#E8DED0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Nude Pink', hex: '#D8B8A8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/Pure Comfort Triangle Bra /7月2NEIWAIOrange24214变浅.jpg',
      '/images/Pure Comfort Triangle Bra /7月2NEIWAIOrange24194变浅2.jpg',
      '/images/Pure Comfort Triangle Bra /7月2NEIWAIOrange24188变浅2.jpg',
      '/images/Pure Comfort Triangle Bra /20231129-NEIWAI_00071.webp',
      '/images/Pure Comfort Triangle Bra /20231129-NEIWAI_00081.webp',
      '/images/Pure Comfort Triangle Bra /20231129-NEIWAI_00093.webp',
      '/images/Pure Comfort Triangle Bra /FlatLay_CroppingTemplate_Blue_1_71c5cb61-41db-49a3-aa30-aaeae94f633d.webp',
      '/images/Pure Comfort Triangle Bra /FlatLay_CroppingTemplate_Blue_2_4d59ab9f-d1f0-4e58-b397-3f46243bbeec.webp',
      '/images/Pure Comfort Triangle Bra /FlatLay_CroppingTemplate_Blue_25.webp',
      '/images/Pure Comfort Triangle Bra /FlatLay_CroppingTemplate_Blue_edb7e685-1e33-4e3b-8a3b-b619303c0be8.webp',
    ],
    hoverImage: '/images/Pure Comfort Triangle Bra /7月2NEIWAIOrange24214变浅.jpg', description: 'TENCEL™ Modal, cotton, and LYCRA® Spandex — a combination chosen for breathability, stretch recovery, and gentle contact with sensitive skin. Semi-fixed cups that provide soft support without foam. Convertible straps with a soft clasp. The 4.0 edition adds a sculpted pad shape that sits flat with no gapping.',
    details: {
      composition: '45% Modal, 45% Cotton, 10% LYCRA® Spandex',
      care: 'For best results, hand wash in cold water. Lay flat to dry. Do not iron.',
      fit: 'Available in XS–L. Semi-fixed cups tacked for easy laundering; stitching removable for unpadded preference.',
    },
    sensoryLine: 'Natural fibers. Second-skin fit.',
    lifestyleLine: 'Breathable, responsibly sourced, made for sensitive skin.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Natural Fiber Blend',
        description: 'TENCEL™ Modal + Supima® cotton — soft, breathable, and responsibly sourced materials against the skin.',
        image: '/images/Pure Comfort Triangle Bra /面料 P白（2.jpg',
        icon: 'breathe',
      },
      {
        number: '02',
        headline: 'Semi-Fixed Cup Design',
        description: 'Cups tacked for easy laundering with stitching removable for customization. Upgraded sculpted pad shape reduces flaring and gapping.',
        image: '/images/Pure Comfort Triangle Bra /12.jpg',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'Convertible Construction',
        description: 'Convertible straps with soft back clasp — adjust the fit to your outfit and preference.',
        image: '/images/Pure Comfort Triangle Bra /20231129-NEIWAI_00219变白色.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'comfort',
      },
    ],
  },
  // ── Bandeau Line ──────────────────────────────────────────
  {
    id: 'bra-013',
    slug: 'bandeau-bra',
    name: 'Bandeau Bra',
    price: 39,
    category: 'bras',
    line: 'bandeau',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Warm Bread', hex: '#C8B098' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/Bandeau Bra/move2.jpg',
      '/images/Bandeau Bra/move1.jpg',
      '/images/Bandeau Bra/move3.jpg',
      '/images/Bandeau Bra/P白 2.jpg',
      '/images/Bandeau Bra/P黑 1.jpg',
      '/images/Bandeau Bra/change_the_color_of_the_garment_set_to_black_the_sports_set_top_and_bottom_should_become_deep_black_v11ou01ranvdi8fu983m.jpeg',
      '/images/Bandeau Bra/FlatLay_CroppingTemplate_Blue_5.webp',
      '/images/Bandeau Bra/FlatLay_CroppingTemplate_Blue_6.webp',
    ],
    hoverImage: '/images/Bandeau Bra/move2.jpg', description: 'A fixed shaping panel prevents the roll and fold that undoes most strapless styles — the critical construction detail in the Bandeau Bra. Breathable stretch fabric, stay-put coverage, and three wear configurations: strapless, straight, or crossed.',
    details: {
      composition: 'Breathable stretch poly-Spandex blend',
      care: 'Hand wash cold. Lay flat to dry.',
      fit: 'Available in XS–L. Three ways to wear: strapless, standard straps, or crossed at the back. Wire-free.',
    },
    sensoryLine: 'Three ways to wear it. Holds through all of them.',
    lifestyleLine: 'Fixed shaping. No rolling. No folding.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Fixed Shaping Panel',
        description: 'Holds position through movement without rolling or folding — the structural integrity that most strapless bras lack.',
        image: '/images/Bandeau Bra/0129 02 4750.jpg',
        icon: 'anchor',
      },
      {
        number: '02',
        headline: 'Wide Seamless Band',
        description: 'Full coverage without compression — a smooth, broad band that holds the body gently rather than squeezing.',
        image: '/images/Bandeau Bra/quality_restoration_20260311180958347.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Three Ways to Wear',
        description: 'Strapless, standard straps, or crossed at the back. Wire-free, no underwire, no hardware — one bra, three configurations.',
        image: '/images/Bandeau Bra/change_the_color_of_the_garment_set_to_black_the_sports_set_top_and_bottom_should_become_deep_black_v11ou01ranvdi8fu983m.jpeg',
        imageObjectPosition: 'center 30%',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'bra-014',
    slug: 'essential-bandeau-bra',
    name: 'Essential Bandeau Bra',
    price: 55,
    category: 'bras',
    line: 'bandeau',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Eggwhite', hex: '#F5F0E8' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/Essential Bandeau Bra 4.0/251116neiwai22644.webp',
      '/images/Essential Bandeau Bra 4.0/251116neiwai22646.webp',
      '/images/Essential Bandeau Bra 4.0/251116neiwai22636.webp',
      '/images/Essential Bandeau Bra 4.0/251116neiwai22654.webp',
      '/images/Essential Bandeau Bra 4.0/FlatLay_CroppingTemplate_Blue_22.webp',
      '/images/Essential Bandeau Bra 4.0/FlatLay_CroppingTemplate_Blue_21.webp',
    ],
    hoverImage: '/images/Essential Bandeau Bra 4.0/251116neiwai22644.webp', description: 'Removable straps, a mesh panel for breathability, and a back clasp — the Essential Bandeau Bra is built for low-cut dressing without the compromises of typical strapless construction. Non-removable chest padding, wire-free, and designed to sit invisibly under open necklines.',
    details: {
      composition: 'Shell: 66% Polyamide, 34% Spandex | Mesh: 100% Polyamide | Lining: 100% Cotton',
      care: 'Hand wash in cold water. Line dry in the shade. Do not iron. Do not tumble dry.',
      fit: 'Available in XS–L. Removable straps convert between strapless, straight, and crossback.',
    },
    sensoryLine: 'The convertible strapless.',
    lifestyleLine: 'For low-cut dressing without compromise.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Convertible Straps',
        description: 'Removable straps convert between strapless, straight, and crossed configurations — adapt the bra to every neckline.',
        image: '/images/Essential Bandeau Bra 4.0/251116neiwai22656 straps.jpg',
        icon: 'comfort',
      },
      {
        number: '02',
        headline: 'Consistent Shaping',
        description: 'Non-removable chest padding for reliable shape that doesn\'t shift or require adjustment. Completely wire-free.',
        image: '/images/Essential Bandeau Bra 4.0/Gemini_Generated_Image_uiv0svuiv0svuiv0.jpg',
        icon: 'molding',
      },
      {
        number: '03',
        headline: 'Breathable Clasp Back',
        description: 'Back clasp closure with mesh panel for ventilation — adjustability and airflow in a single construction detail.',
        image: '/images/Essential Bandeau Bra 4.0/251116neiwai22651 2后背.jpg',
        icon: 'breathe',
      },
    ],
  },
  // ── Featherlight ──────────────────────────────────────────
  {
    id: 'bra-017',
    slug: 'featherlight-push-up-bra',
    name: 'Featherlight Push Up Bra',
    price: 49,
    category: 'bras',
    line: 'featherlight',
    subcategory: 'bra',
    colors: [
      { name: 'Treacly Almond', hex: '#D4B5A0' },
      { name: 'Black', hex: '#1A1714' },
      { name: 'Lotus Root', hex: '#D0C0B0' },
      { name: 'Warm Bread', hex: '#C8B098' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    images: [
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23705调色.jpg',
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23714调色.jpg',
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23651调色.jpg',
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23615调色.jpg',
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange24010 调色.jpg',
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23955调色.jpg',
      '/images/Featherlight Push Up Bra/7月2NEIWAIOrange24167调色.jpg',
      '/images/Featherlight Push Up Bra/FlatLay_CroppingTemplate_Blue_4_6bf038e0-bef2-4f63-8e5b-6192c763ed38.webp',
    ],
    hoverImage: '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23705调色.jpg', description: 'Molded cups, soft push-up padding, and a low V-neckline — a wire-free push-up construction that enhances shape without hardware or structural foam. Light enough to feel incidental. The Featherlight fabric maintains the barely-there feel the name promises.',
    details: {
      composition: 'Featherlight poly-Spandex blend',
      care: 'Hand wash cold. Lay flat to dry. Do not bleach.',
      fit: 'Available in XS–L. Low V-neckline. Wire-free despite structured cup construction.',
    },
    sensoryLine: 'Lift without the weight.',
    lifestyleLine: 'Natural lift. No hardware, no structural foam.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Soft Push-Up Padding',
        description: 'Molded cups with gentle push-up lift — subtle, natural enhancement without digging or pinching.',
        image: '/images/Featherlight Push Up Bra/20260309-171026.jpeg',
        imageObjectPosition: 'center 80%',
        icon: 'molding',
      },
      {
        number: '02',
        headline: 'Low V-Neckline',
        description: 'Sits cleanly under plunging cuts and low-cut tops — designed for necklines that demand a discreet bra.',
        image: '/images/Featherlight Push Up Bra/7月2NEIWAIOrange24097.jpg',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Wire-Free Structure',
        description: 'Structured cup construction without any underwire. Featherlight fabric throughout — no added weight from the support.',
        image: '/images/Featherlight Push Up Bra/7月2NEIWAIOrange23718 structure调色.jpg',
        imageObjectPosition: 'center 30%',
        icon: 'anchor',
      },
    ],
  },
];

export const briefsProducts: Product[] = [
  {
    id: 'brief-001',
    slug: 'barely-zero-superlight-brief',
    name: 'Barely Zero Superlight Brief',
    price: 18,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Treacly Almond', hex: '#E2DCD7' },
      { name: 'Peach Pure', hex: '#F2E0CB' },
    ],
    sizes: ['One Size'],
    isNew: true,
    images: [
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/0216NEIWAI33794.webp',
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/0216NEIWAI33800.webp',
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/20231124-NEIWAI_00263_63699f2c-48fc-4820-9e6a-185195902b4e.webp',
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/20231124-NEIWAI_00274.webp',
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/20231129-NEIWAI_00783%20no-pinch.webp',
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/FlatLay_CroppingTemplate_Yellow_1_283cef06-5f95-4b31-8d91-30c08c34da0a.webp',
      '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/FlatLay_CroppingTemplate_Yellow_d28ce2a0-ef47-4fe0-8bc8-2ff6d8fd0495.webp',
    ],
    hoverImage: '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/0216NEIWAI33794.webp', description: 'A silicone grip along the rim keeps the Superlight Brief in position through activity — no riding, no adjustment. The back panel is seamless and non-restrictive. Built for movement without the bulk: lightweight, breathable, and invisible under anything.',
    details: {
      composition: 'Barely Zero adaptive nylon blend',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'One size. Silicone grip along waist rim holds position through workouts and everyday movement.',
    },
    sensoryLine: 'Superlight. Stays put.',
    lifestyleLine: 'From workouts to wind-downs — no riding, no adjustment.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Silicone Waist Grip',
        description: 'A silicone grip along the waist rim holds position through workouts and everyday movement — no sliding, no bunching.',
        image: '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/20231124-NEIWAI_00274-silicone-grip.png',
        imageObjectPosition: 'center 65%',
        icon: 'anchor',
      },
      {
        number: '02',
        headline: 'No-Pinch Back Panel',
        description: 'Seamless, non-restrictive construction at the back — no digging, no compression lines, no irritation.',
        image: '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/20231129-NEIWAI_00783%20no-pinch.webp',
        imageObjectPosition: 'center 75%',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Lightweight & Invisible',
        description: 'Breathable fabric designed for active and all-day wear. Seamless exterior with no visible lines under fitted clothing.',
        image: '/images/Barelyzero%20superlight%20brief%28%E6%9C%89%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/20260305-160235%20invisible.jpeg',
        imageObjectPosition: 'center 75%',
        icon: 'breathe',
      },
    ],
  },
  {
    id: 'brief-002',
    slug: 'barely-zero-low-waist-brief',
    name: 'Barely Zero Low Waist Brief',
    price: 15,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Fluffy Peach', hex: '#EDE8E3' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
      { name: 'Champagne Wheat', hex: '#D8C8A8' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/Barelyzero%20mid%20waist%20brief/20211220NEIWAI2835_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/20260305-160629%20twosize.jpeg',
      '/images/Barelyzero%20mid%20waist%20brief/20260305-160823%20freecut.jpeg',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1180_NW221WU1320-1_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1180_NW221WU1320-2_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/20211220NEIWAI2757_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/20211220NEIWAI2770_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1320-01_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU11103_NW221WU1320_1.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1320_8a4ecdf9-0c7e-4140-81dc-d2368e5f30ef.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1320_1f2ce942-53e3-4492-a70d-5c0e144c6efd.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1320_5506c1f4-cd26-408c-9408-69bbf2ee1e04.jpg',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1320_100f79aa-d93b-499b-9b5d-8cf1273a134d.webp',
      '/images/Barelyzero%20mid%20waist%20brief/NW221WU1320_281f37f5-dbe1-4bea-81d1-62aed3ca7f16.webp',
    ],
    hoverImage: '/images/Barelyzero%20mid%20waist%20brief/20211220NEIWAI2835_1.webp', description: 'The Low Waist Brief adapts to the body from the first wear — no break-in period, no tight edges. CloudFit nylon for all-day breathability and moisture management. 100% cotton gusset lining. A clean low-rise profile that works under low-waist denim, wide-leg pants, or anything else.',
    details: {
      composition: '68% CloudFit nylon blend, 32% Spandex | Gusset: 100% Cotton',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'One size. Low-rise sits at the hip. Seamless exterior — no visible lines under fitted clothing.',
    },
    sensoryLine: 'Low rise. No show lines.',
    lifestyleLine: 'Sits low. Stays invisible. Works under everything.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Low-Rise Cut',
        description: 'Sits below the natural waist for a clean line under low-waisted pants, skirts, and activewear.',
        image: 'https://neiwai.life/cdn/shop/files/20210111NEIWAI333371.jpg?v=1736536548&width=800',
        icon: 'invisible',
      },
      {
        number: '02',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable, moisture-wicking, odor-reducing — the same adaptive fabric as the Barely Zero bra collection.',
        image: '/images/Barely%20Zore%20N202WU1116%20.jpg',
        icon: 'stretch',
      },
      {
        number: '03',
        headline: 'Cotton-Lined Comfort',
        description: '100% cotton gusset lining with moderate coverage — no digging at the legs or waist. Adapts from the first wear.',
        image: '/images/Barelyzero%20low%20waist%20brief%28%E6%97%A0%E8%B4%B4%E8%83%B6%E7%89%88%E6%9C%AC%EF%BC%89/N211WU2122%20%E8%A3%86%E9%83%A8%20cotton.jpg',
        icon: 'comfort',
      },
    ],
  },
  {
    id: 'brief-003',
    slug: 'barely-zero-mid-waist-brief',
    name: 'Barely Zero Mid Waist Brief',
    price: 19,
    category: 'briefs',
    line: 'barely-zero',
    subcategory: 'single',
    colors: [
      { name: 'Fluffy Peach', hex: '#EDE8E3' },
      { name: 'Cinnamon Taste', hex: '#C4A088' },
      { name: 'Caramel', hex: '#BC8F6E' },
      { name: 'Taro Blush', hex: '#D4C8CC' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
      { name: 'Brown', hex: '#9B5A3A' },
    ],
    sizes: ['XS-M', 'L-XL'],
    images: [
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU11103_NW221WU1320_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2757_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU1180_NW221WU1320-1_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/20211220NEIWAI2770_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU1320-01_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/files/NW221WU1180_NW221WU1320-2_1.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_100f79aa-d93b-499b-9b5d-8cf1273a134d.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_5506c1f4-cd26-408c-9408-69bbf2ee1e04.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_281f37f5-dbe1-4bea-81d1-62aed3ca7f16.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_cfdedc81-6994-48a8-98b3-69cbda41ed51.jpg?v=1736546521&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_d7d35faf-8474-4738-950a-39ad694972f8.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_b8884f41-ed34-4873-9368-a30e791dde68.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_9342df04-93b8-48ea-86cb-ccc1ae3149a8.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_1f2ce942-53e3-4492-a70d-5c0e144c6efd.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_8a4ecdf9-0c7e-4140-81dc-d2368e5f30ef.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_7210e1cf-b21e-4224-bcaa-320a34878e51.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_0e192c84-06c3-48ad-b780-308d071e6eda.jpg?v=1736546392&width=800',
      'https://neiwai.life/cdn/shop/products/NW221WU1320_9fab14e5-159f-45fd-83ef-8ba1e3055184.jpg?v=1736546392&width=800'
    ],
    hoverImage: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800', description: 'Mid-rise, bonded leg openings, cotton gusset. The Mid Waist Brief 2.0 is the first in the Barely Zero brief range to come in two sizes — a wider fit range built for more body types. CloudFit nylon for moisture management; seamless profile throughout.',
    details: {
      composition: '67% CloudFit nylon blend, 33% Spandex | Lining: 100% Cotton',
      care: 'Machine wash cold in lingerie bag. Lay flat to dry.',
      fit: 'Available in XS–M and L–XL. Mid-rise with full coverage. Seamless exterior.',
    },
    sensoryLine: 'Classic cut. Barely there.',
    lifestyleLine: 'More sizes, same disappearing act.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Classic Mid-Rise Cut',
        description: 'Full coverage and comfort all day and night — the first-choice brief for everyday wear.',
        image: 'https://neiwai.life/cdn/shop/files/20211220NEIWAI2835_1.jpg?v=1736546521&width=800',
        icon: 'invisible',
      },
      {
        number: '02',
        headline: 'Free Cut Leg Openings',
        description: 'No elastic imprint at the thigh — clean, smooth edges that leave no marks after extended wear.',
        image: '/images/Barelyzero%20mid%20waist%20brief/20260305-160823%20freecut.jpeg',
        icon: 'invisible',
      },
      {
        number: '03',
        headline: 'Two-Size Range',
        description: 'Available in two sizes for a wider range of body types. 100% cotton gusset lining for breathable comfort.',
        image: '/images/Barelyzero%20mid%20waist%20brief/20260305-160629%20twosize.jpeg',
        icon: 'stretch',
      },
    ],
  }
];

export const leggingsProducts: Product[] = [
  {
    id: 'leg-001',
    slug: 'barely-zero-lycra-leggings',
    name: 'Barely Zero Lycra Leggings',
    price: 49,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'leggings',
    isNew: true,
    colors: [
      { name: 'Black Truffle', hex: '#2C2824' },
      { name: 'Deep Mahogany', hex: '#5C3028' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/Barelyzero%20lycra%20leggings/%E9%AB%98%E8%85%B0%E6%89%93%E5%BA%95%E9%95%BF%E8%A3%A4%EF%BC%88%E8%8E%B1%E5%8D%A1%E7%89%88%EF%BC%89NW222WF4108%20%E9%A6%96%E5%9B%BE.jpg',
      '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56454.webp',
      '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56451%20thicker.webp',
      '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56458.webp',
      '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56461.webp',
      '/images/Barelyzero%20lycra%20leggings/NW222WF4108_95141f7b-1143-4adb-a5d7-41fa405cb900.webp',
    ],
    hoverImage: '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56454.webp',
    description: 'The Lycra Leggings are a heavier-weight interpretation of the Barely Zero construction — the same adaptive CloudFit nylon, denser for cooler weather and all-day outdoor wear. Double-layered waistband, high-waist silhouette, no side seams. Fits waist 24.5"–34.5", hips 31.5"–39.5".',
    details: {
      composition: '82% CloudFit nylon, 18% Spandex',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise, fitted through the thigh. Seamless waistband.',
    },
    sensoryLine: 'Thicker. Warmer. All day.',
    lifestyleLine: 'Performs without announcing itself.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'Thicker Lycra Construction',
        description: 'Warmer than standard Barely Zero leggings — a heavier-weight fabric for cooler months and transition seasons.',
        image: '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56451%20thicker.webp',
        icon: 'durability',
      },
      {
        number: '02',
        headline: 'Adaptive CloudFit Nylon',
        description: 'Conforms to the body without compression. Double-layered high-waist panel that lies flat, smooth, with no rolling.',
        image: '/images/Barelyzero%20lycra%20leggings/%E9%9D%A2%E6%96%99%E5%9B%BE.jpg',
        icon: 'stretch',
      },
      {
        number: '03',
        headline: 'Clean Silhouette',
        description: 'No side stitching, ankle-length. Fits waist 24.5"–34.5", hips 31.5"–39.5" — a seamless line from waist to ankle.',
        image: '/images/Barelyzero%20lycra%20leggings/20220628NEIWAI56461.webp',
        icon: 'invisible',
      },
    ],
  },
  {
    id: 'leg-002',
    slug: 'barely-zero-flow-leggings',
    name: 'Barely Zero Flow Leggings',
    price: 39,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'leggings',
    colors: [
      { name: 'Dried Date', hex: '#522120' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/Barelyzero%20flow%20leggings/20211217NEIWAI9705_1.webp',
      '/images/Barelyzero%20flow%20leggings/75AC5C03-572A-4138-8489-991DA5926137_1_201_a.webp',
      '/images/Barelyzero%20flow%20leggings/20211217NEIWAI8421.webp',
      '/images/Barelyzero%20flow%20leggings/A2BEF133-AFB3-4A13-8FCB-66D60968BD49_1_201_a.webp',
      '/images/Barelyzero%20flow%20leggings/NW221WF4102.webp',
    ],
    hoverImage: '/images/Barelyzero%20flow%20leggings/20211217NEIWAI9705_1.webp',
    description: 'The Flow Leggings extend the adaptive construction of the Barely Zero underwear range into a full-length outerwear legging — the same second-skin CloudFit nylon, now designed to wear beyond the home. Ankle-length, double-layered waistband, no side seams. Fits waist 24.5"–34.5", hips 31.5"–39.5".',
    details: {
      composition: '86% CloudFit nylon, 14% Spandex',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise with gentle compression. Seamless waistband.',
    },
    sensoryLine: 'The Barely Zero fit. Full length.',
    lifestyleLine: 'From couch to café without a second thought.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Ultra-elastic, breathable construction designed to conform without compression — the Barely Zero fabric at full length.',
        image: '/images/Barelyzero%20flow%20leggings/%E9%9D%A2%E6%96%99%E5%9B%BE.jpg',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Double-Layer Waistband',
        description: 'High-waist panel holds flat with no rolling at the waistband — stays in position through movement and wear.',
        image: '/images/Barelyzero%20flow%20leggings/1legging2leggingpantone_4575_cp_4102_c_0orvk25qm6pn6aaw57ah.png',
        icon: 'anchor',
        imageObjectPosition: 'center 10%',
      },
      {
        number: '03',
        headline: 'Seamless Construction',
        description: 'No side stitching for a clean silhouette. Ankle-length, fits waist 24.5"–34.5", hips 31.5"–39.5".',
        image: '/images/Barelyzero%20flow%20leggings/20211217NEIWAI9705_1.webp',
        icon: 'invisible',
        imageObjectPosition: 'center 25%',
      },
    ],
  },
  {
    id: 'leg-003',
    slug: 'barely-zero-flow-shorts',
    name: 'Barely Zero Flow Shorts',
    price: 35,
    category: 'leggings',
    line: 'barely-zero',
    subcategory: 'shorts',
    colors: [
      { name: 'Dried Date', hex: '#522120' },
      { name: 'Red Bean', hex: '#8B6969' },
      { name: 'Black Truffle', hex: '#2C2824' },
    ],
    sizes: ['One Size'],
    images: [
      '/images/Barelyzero%20flow%20shorts/NEIWAIBZShoot_8840.webp',
      '/images/Barelyzero%20flow%20shorts/20211217NEIWAI8281.webp',
      '/images/Barelyzero%20flow%20shorts/20211217NEIWAI8273.webp',
      '/images/Barelyzero%20flow%20shorts/BarelyZeroFixedCupClaspBraCaramelNW221WU11103-652_BarelyZeroBikerShortsDriedDateNW221WF4101-4713.webp',
      '/images/Barelyzero%20flow%20shorts/3DSmileCutoutBraCinderNW222WU1107-906_BarelyZeroBikerShortsRedBeanNW221WF4101-1311_2561d786-f442-4d01-8776-a6baa6381cd1.webp',
      '/images/Barelyzero%20flow%20shorts/20211217NEIWAI9278_P.webp',
      '/images/Barelyzero%20flow%20shorts/NEI016_NW221WF4101_Barely-Zero-Biker-Short_Red-Bean_OM_Detail_8.webp',
      '/images/Barelyzero%20flow%20shorts/20211217NEIWAI8116.webp',
      '/images/Barelyzero%20flow%20shorts/NW221WF4101.webp',
      '/images/Barelyzero%20flow%20shorts/NW221WF4101_f7e2f5fd-36c9-4182-a5c2-3c7524a087c7.webp',
      '/images/Barelyzero%20flow%20shorts/NW221WF4101_f379da3b-7714-4145-a50b-cb3986a35651.webp',
    ],
    hoverImage: '/images/Barelyzero%20flow%20shorts/20211217NEIWAI8281.webp',
    description: 'The same CloudFit nylon construction as the Flow Leggings in a bike-short length. High-waist double-layered panel, no side seams, anti-compression by design. Wears from morning through evening, active or at rest. Fits waist 24.5"–34.5", hips 31"–40".',
    details: {
      composition: '86% CloudFit nylon, 14% Spandex',
      care: 'Machine wash cold. Do not use fabric softener. Lay flat to dry.',
      fit: 'One size. High-rise biker short length. Seamless waistband.',
    },
    sensoryLine: 'The Barely Zero fit. Shorter.',
    lifestyleLine: 'Anti-chafe, adaptive, invisible under everything.',
    technologyFeatures: [
      {
        number: '01',
        headline: 'CloudFit Nylon',
        description: 'Same adaptive fabric as the Flow Leggings — consistent feel across the range with breathable, moisture-wicking performance.',
        image: '/images/Barelyzero%20flow%20shorts/%E9%9D%A2%E6%96%99%E5%9B%BE.jpg',
        icon: 'stretch',
      },
      {
        number: '02',
        headline: 'Double-Layer Waistband',
        description: 'High-waist panel that stays in position through movement. Anti-compression construction — no squeezing or binding.',
        image: '/images/Barelyzero%20flow%20shorts/20211217NEIWAI9273_P.webp',
        icon: 'anchor',
        imageObjectPosition: 'center 10%',
      },
      {
        number: '03',
        headline: 'Bike-Short Length',
        description: 'No side stitching. Fits waist 24.5"–34.5", hips 31"–40" — the shorter alternative with identical construction quality.',
        image: '/images/Barelyzero%20flow%20shorts/20211217NEIWAI8116.webp',
        icon: 'invisible',
      },
    ],
  },
];

export const allProducts: Product[] = [
  ...brasProducts,
  ...briefsProducts,
  ...leggingsProducts,
];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}

export function getProductsByLine(line: string): Product[] {
  return allProducts.filter((p) => p.line === line);
}

export function getRelatedProducts(product: Product, limit: number = 3): Product[] {
  const sameLine = allProducts.filter(
    (p) => p.id !== product.id && p.line === product.line
  );
  const sameCategory = allProducts.filter(
    (p) => p.id !== product.id && p.category === product.category && p.line !== product.line
  );
  return [...sameLine, ...sameCategory].slice(0, limit);
}

/** Matching brief from the same line for "Complete the Set" (bra PDP). */
export function getMatchingSetBrief(product: Product): Product | undefined {
  return allProducts.find(
    (p) => p.category === 'briefs' && p.line === product.line
  );
}

/** Up to N briefs from the same line for "Complete the set" (match Vercel: two briefs). */
export function getMatchingSetBriefs(product: Product, limit: number = 2): Product[] {
  return allProducts
    .filter((p) => p.category === 'briefs' && p.line === product.line)
    .slice(0, limit);
}

/** "You may also like" for bras PDP — fixed 5 products matching neiwai-us-site3.vercel.app. */
const YOU_MAY_ALSO_LIKE_BRAS_SLUGS = [
  'barely-zero-anchored-cup-strap-bra',
  'barely-zero-anchored-cup-signature-bra',
  'barely-zero-scallop-bra',
  'barely-zero-scallop-clasp-bra',
  'barely-zero-camisole',
  'barely-zero-strap-bra',
] as const;

export function getYouMayAlsoLikeBras(currentProduct: Product, limit: number = 5): Product[] {
  const pool = YOU_MAY_ALSO_LIKE_BRAS_SLUGS.map((s) => allProducts.find((p) => p.slug === s)).filter(
    (p): p is Product => !!p && p.id !== currentProduct.id
  );
  return pool.slice(0, limit);
}

/** "You may also like" for briefs PDP — other briefs, same line first then rest. */
export function getYouMayAlsoLikeBriefs(currentProduct: Product, limit: number = 5): Product[] {
  const sameLine = allProducts.filter(
    (p) => p.category === 'briefs' && p.id !== currentProduct.id && p.line === currentProduct.line
  );
  const otherBriefs = allProducts.filter(
    (p) => p.category === 'briefs' && p.id !== currentProduct.id && p.line !== currentProduct.line
  );
  return [...sameLine, ...otherBriefs].slice(0, limit);
}
