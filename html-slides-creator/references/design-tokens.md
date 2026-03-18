# 设计系统规范 (Design Tokens)

本文档定义了幻灯片设计系统的基础规范，确保视觉一致性和可维护性。

## 间距系统 (Spacing Scale)

使用 8px 基准的间距系统：

| Token | 值 | 用途 |
|-------|-----|------|
| `--space-xs` | 0.5rem (8px) | 紧密间距、图标边距 |
| `--space-sm` | 1rem (16px) | 小间距、段落间距 |
| `--space-md` | 1.5rem (24px) | 中等间距、卡片内边距 |
| `--space-lg` | 2rem (32px) | 大间距、区块间距 |
| `--space-xl` | 3rem (48px) | 超大间距、章节分隔 |
| `--space-2xl` | 4rem (64px) | 巨大间距、留白区域 |

## 字号系统 (Typography Scale)

| Token | 值 | 用途 |
|-------|-----|------|
| `--text-xs` | 0.875rem (14px) | 辅助文字、标注 |
| `--text-sm` | 1rem (16px) | 正文、列表 |
| `--text-base` | 1.125rem (18px) | 强调正文 |
| `--text-lg` | 1.5rem (24px) | 小标题 |
| `--text-xl` | 2rem (32px) | 中标题 |
| `--text-2xl` | 2.5rem (40px) | 大标题 |
| `--text-3xl` | 3rem (48px) | 超大标题 |
| `--text-4xl` | 4rem (64px) | 巨型标题 |
| `--text-5xl` | 5rem (80px) | 封面主标题 |

## 圆角系统 (Border Radius)

| Token | 值 | 用途 |
|-------|-----|------|
| `--radius-sm` | 8px | 小元素、按钮 |
| `--radius-md` | 12px | 卡片、输入框 |
| `--radius-lg` | 16px | 大卡片 |
| `--radius-xl` | 20px | 特大卡片 |
| `--radius-2xl` | 24px | 画布、容器 |
| `--radius-full` | 9999px | 圆形、药丸形 |

## 阴影系统 (Shadows)

| Token | 值 | 用途 |
|-------|-----|------|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` | 轻微浮起 |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | 中等浮起 |
| `--shadow-lg` | `0 10px 30px rgba(0,0,0,0.1)` | 明显浮起 |
| `--shadow-xl` | `0 20px 60px rgba(0,0,0,0.15)` | 强烈浮起 |
| `--shadow-inner` | `inset 0 2px 4px rgba(0,0,0,0.06)` | 内阴影 |

## 字重系统 (Font Weights)

| Token | 值 | 用途 |
|-------|-----|------|
| `--font-normal` | 400 | 正文 |
| `--font-medium` | 500 | 强调文字 |
| `--font-semibold` | 600 | 小标题 |
| `--font-bold` | 700 | 标题 |
| `--font-black` | 900 | 超粗标题 |

## 行高系统 (Line Heights)

| Token | 值 | 用途 |
|-------|-----|------|
| `--leading-tight` | 1.2 | 大标题 |
| `--leading-snug` | 1.4 | 小标题 |
| `--leading-normal` | 1.6 | 正文 |
| `--leading-relaxed` | 1.8 | 宽松正文 |

## 透明度系统 (Opacity)

| Token | 值 | 用途 |
|-------|-----|------|
| `--opacity-disabled` | 0.4 | 禁用状态 |
| `--opacity-muted` | 0.6 | 次要信息 |
| `--opacity-hover` | 0.8 | 悬停状态 |

## Z-index 层级

| Token | 值 | 用途 |
|-------|-----|------|
| `--z-base` | 0 | 基础层 |
| `--z-dropdown` | 10 | 下拉菜单 |
| `--z-sticky` | 20 | 固定元素 |
| `--z-overlay` | 30 | 遮罩层 |
| `--z-modal` | 40 | 模态框 |
| `--z-tooltip` | 50 | 提示框 |

## 动画时长 (Duration)

| Token | 值 | 用途 |
|-------|-----|------|
| `--duration-fast` | 150ms | 快速交互 |
| `--duration-base` | 300ms | 标准动画 |
| `--duration-slow` | 500ms | 慢速动画 |

## 缓动函数 (Easing)

| Token | 值 | 用途 |
|-------|-----|------|
| `--ease-in` | cubic-bezier(0.4, 0, 1, 1) | 加速 |
| `--ease-out` | cubic-bezier(0, 0, 0.2, 1) | 减速 |
| `--ease-in-out` | cubic-bezier(0.4, 0, 0.2, 1) | 平滑 |
| `--ease-bounce` | cubic-bezier(0.68, -0.55, 0.265, 1.55) | 弹跳 |

## 使用示例

```css
/* 在 style.css 中定义 */
:root {
    --space-md: 1.5rem;
    --text-xl: 2rem;
    --radius-lg: 16px;
    --shadow-md: 0 4px 16px rgba(0,0,0,0.08);
}

/* 在页面样式中使用 */
.feature-card {
    padding: var(--space-md);
    font-size: var(--text-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}
```
