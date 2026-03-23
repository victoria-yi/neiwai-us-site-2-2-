# 全站无障碍颜色对比度排查报告

**执行日期**: 2026-03  
**标准**: WCAG 2.1 Level AA（正文 4.5:1，大号文字 18px+ 或 14px 粗体 3:1）

## 运行方式

```bash
node scripts/contrast-audit.mjs
```

## 已修复项

- **accent** → #7A6348（5.2:1 on cream）
- **BrandMoment 标签** → text-stone
- **Footer / Newsletter placeholder** → text-prose
- **副标题/描述** (Newsletter, EditorialBras, BestSellers, FeaturedBras, InTheWorld) → text-prose

---

## ❌ 剩余未通过项（可选修复）

| 组合 | 对比度 | 标准 | 影响位置 |
|------|--------|------|----------|
| taupe on cream | 3.25:1 | 4.5:1 | 多处副标题、tagline、描述文字 |
| stone on cream | 1.66:1 | 4.5:1 | 装饰性分隔符、小标签 |
| accent on cream | 4.11:1 | 4.5:1 | 链接、按钮、成功消息 |
| ink/50 placeholder | 3.32:1 | 4.5:1 | Footer 邮箱 placeholder |
| taupe/70 on cream | 2.16:1 | 4.5:1 | 部分 PDP 描述 |
| stone/40, stone/60 on cream | <2:1 | 4.5:1 | 装饰元素 |
| taupe on sand | 2.97:1 | 4.5:1 | Editorial 板块副标题 |
| ink/50 on footer-bg | 3.17:1 | 4.5:1 | Footer 输入框 placeholder |
| stone/60 on charcoal | 3.88:1 | 4.5:1 | BrandMoment "Brand Philosophy" 标签 |
| cream/10 on charcoal | 1.35:1 | - | 装饰性淡化（非正文） |
| stone placeholder on white | 1.81:1 | 4.5:1 | 输入框 placeholder |
| taupe/70 on warm-white | 2.21:1 | 4.5:1 | PDP 技术特性描述 |
| taupe on white | 3.54:1 | 4.5:1 | MobileNav 部分文字 |
| sale-red on white | 4.43:1 | 4.5:1 | Sale 标签（接近达标） |

---

## ✓ 通过项（31 项）

主要正文组合均达标：ink on cream/sand/footer、cream on charcoal、ink on white 等。

---

## 修复建议

1. **taupe → prose**：将 `text-taupe` 替换为 `text-prose`（#6B6560，对比度 5.27:1）用于正文、副标题
2. **accent 加深**：将 #8B7355 调整为约 #7D6348 以达到 4.5:1
3. **placeholder**：`placeholder:text-stone` → `placeholder:text-prose`
4. **BrandMoment 标签**：`text-stone/60` → `text-stone`（8.06:1）
5. **stone**：仅用于装饰（分隔符、圆点），不作为正文
6. **sale-red**：微调至 #B35030 左右
