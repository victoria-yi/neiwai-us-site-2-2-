#!/usr/bin/env node
/**
 * 全站无障碍颜色对比度排查
 * WCAG 2.1 AA: 正文 4.5:1, 大号文字 3:1
 */

const colors = {
  cream: '#F5F5F5',
  'warm-white': '#FAFAFA',
  ink: '#1A1714',
  sand: '#EBEBE8',
  stone: '#C4C0B8',
  taupe: '#8E8780',
  prose: '#6B6560',
  charcoal: '#2C2824',
  accent: '#7A6348',
  blush: '#E5DDD5',
  white: '#FFFFFF',
  'footer-bg': '#E2E2DE',
  'sale-red': '#C25835',
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function blendWithBg(fgHex, bgHex, opacity = 1) {
  const fg = hexToRgb(typeof fgHex === 'string' ? fgHex : '#000000');
  const bg = hexToRgb(typeof bgHex === 'string' ? bgHex : '#FFFFFF');
  if (!fg || !bg) return bgHex || '#FFFFFF';
  const r = Math.max(0, Math.min(255, Math.round(bg.r + (fg.r - bg.r) * opacity)));
  const g = Math.max(0, Math.min(255, Math.round(bg.g + (fg.g - bg.g) * opacity)));
  const b = Math.max(0, Math.min(255, Math.round(bg.b + (fg.b - bg.b) * opacity)));
  return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('');
}

function relativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function contrastRatio(hex1, hex2) {
  const L1 = relativeLuminance(hex1);
  const L2 = relativeLuminance(hex2);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function check(description, fg, bg, largeText = false) {
  const ratio = contrastRatio(fg, bg);
  const required = largeText ? 3 : 4.5;
  const pass = ratio >= required;
  return { description, fg, bg, ratio, required, pass };
}

// Resolve opacity variants
function resolveColor(name, opacity, bg) {
  if (opacity === 1 || !opacity) return colors[name] || name;
  return blendWithBg(colors[name] || name, bg, opacity);
}

const checks = [
  // 主背景 cream
  check('ink on cream (正文)', colors.ink, colors.cream),
  check('ink on cream (大标题)', colors.ink, colors.cream, true),
  check('taupe on cream (正文)', colors.taupe, colors.cream),
  check('taupe on cream (大标题)', colors.taupe, colors.cream, true),
  check('prose on cream (正文)', colors.prose, colors.cream),
  check('stone on cream (正文)', colors.stone, colors.cream),
  check('accent on cream (链接)', colors.accent, colors.cream),
  check('ink/90 on cream', blendWithBg(colors.ink, colors.cream, 0.9), colors.cream),
  check('ink/80 on cream', blendWithBg(colors.ink, colors.cream, 0.8), colors.cream),
  check('ink/70 on cream', blendWithBg(colors.ink, colors.cream, 0.7), colors.cream),
  check('ink/60 on cream', blendWithBg(colors.ink, colors.cream, 0.6), colors.cream),
  check('ink/50 on cream', blendWithBg(colors.ink, colors.cream, 0.5), colors.cream),
  check('taupe/70 on cream', blendWithBg(colors.taupe, colors.cream, 0.7), colors.cream),
  check('stone/40 on cream', blendWithBg(colors.stone, colors.cream, 0.4), colors.cream),
  check('stone/60 on cream', blendWithBg(colors.stone, colors.cream, 0.6), colors.cream),

  // 主背景 sand
  check('ink on sand (正文)', colors.ink, colors.sand),
  check('taupe on sand (正文)', colors.taupe, colors.sand),
  check('ink on sand (大标题)', colors.ink, colors.sand, true),

  // Footer
  check('ink on footer-bg (#E2E2DE)', colors.ink, colors['footer-bg']),
  check('ink/90 on footer-bg', blendWithBg(colors.ink, colors['footer-bg'], 0.9), colors['footer-bg']),
  check('ink/80 on footer-bg', blendWithBg(colors.ink, colors['footer-bg'], 0.8), colors['footer-bg']),
  check('ink/70 on footer-bg', blendWithBg(colors.ink, colors['footer-bg'], 0.7), colors['footer-bg']),
  check('ink/50 placeholder on footer-bg', blendWithBg(colors.ink, colors['footer-bg'], 0.5), colors['footer-bg']),

  // 深色背景 (charcoal / ink)
  check('cream on charcoal (正文)', colors.cream, colors.charcoal),
  check('cream on charcoal (大标题)', colors.cream, colors.charcoal, true),
  check('cream/90 on charcoal', blendWithBg(colors.cream, colors.charcoal, 0.9), colors.charcoal),
  check('cream/80 on charcoal', blendWithBg(colors.cream, colors.charcoal, 0.8), colors.charcoal),
  check('stone on charcoal', colors.stone, colors.charcoal),
  check('stone/60 on charcoal', blendWithBg(colors.stone, colors.charcoal, 0.6), colors.charcoal),
  check('cream/10 on charcoal (几乎不可见)', blendWithBg(colors.cream, colors.charcoal, 0.1), colors.charcoal),

  // BrandMoment 深色区
  check('cream/90 on charcoal (BrandMoment 引文)', blendWithBg(colors.cream, colors.charcoal, 0.9), colors.charcoal),
  check('stone on charcoal (BrandMoment 署名)', colors.stone, colors.charcoal),
  check('stone/60 on charcoal (BrandMoment label)', blendWithBg(colors.stone, colors.charcoal, 0.6), colors.charcoal),

  // Buttons / white bg
  check('ink on white', colors.ink, colors.white),
  check('charcoal on white', colors.charcoal, colors.white),
  check('cream on charcoal (按钮)', colors.cream, colors.charcoal),
  check('cream on ink (按钮)', colors.cream, colors.ink),

  // Input
  check('stone placeholder on white', colors.stone, colors.white),
  check('ink on warm-white', colors.ink, colors['warm-white']),
  check('taupe/70 on warm-white', blendWithBg(colors.taupe, colors['warm-white'], 0.7), colors['warm-white']),

  // CollectionHero / Hero overlay (文字在深色叠加层上)
  check('cream/90 on charcoal (Hero)', blendWithBg(colors.cream, colors.charcoal, 0.9), colors.charcoal),
  check('cream/80 on charcoal (Hero 副标题)', blendWithBg(colors.cream, colors.charcoal, 0.8), colors.charcoal),
  check('cream/70 on charcoal', blendWithBg(colors.cream, colors.charcoal, 0.7), colors.charcoal),
  check('cream/60 on charcoal', blendWithBg(colors.cream, colors.charcoal, 0.6), colors.charcoal),

  // Mobile nav
  check('ink on white (MobileNav)', colors.ink, colors.white),
  check('taupe on white (MobileNav)', colors.taupe, colors.white),
  check('sale-red #C25835 on white', colors['sale-red'], colors.white),

  // Newsletter accent
  check('accent on cream (成功消息)', colors.accent, colors.cream),
];

console.log('\n=== NEIWAI 全站颜色对比度排查 (WCAG 2.1 AA) ===\n');
console.log('标准: 正文 4.5:1 | 大号文字 3:1\n');

const failed = [];
const passed = [];

checks.forEach(({ description, ratio, required, pass }) => {
  const status = pass ? '✓' : '✗';
  const size = required === 3 ? '(大)' : '(正)';
  const line = `${status} ${description} ${size}: ${ratio.toFixed(2)}:1 (需 ${required}:1)`;
  if (pass) passed.push(line);
  else failed.push(line);
});

if (failed.length) {
  console.log('❌ 未通过 (需修复):\n');
  failed.forEach((l) => console.log(l));
  console.log('\n---\n');
}

console.log('✓ 通过:\n');
passed.forEach((l) => console.log(l));

console.log(`\n汇总: ${passed.length} 通过, ${failed.length} 未通过`);
