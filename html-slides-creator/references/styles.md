# 视觉风格定义

## 可用风格

### 1. Dopamine（多巴胺配色）

**特点**: 明亮、清新、色彩缤纷但不刺眼
**适用场景**: 轻松、愉悦、年轻活力的主题
**文件**: `style-dopamine.css`

**配色**:
- 粉色 (pink): #ff8fab
- 薄荷绿 (mint): #57cc99
- 香芋紫 (purple): #a5a6f6
- 柠檬黄 (yellow): #fcec52
- 天蓝 (blue): #90e0ef

**渐变文字类**:
- `.gradient-text-pink-purple` - 粉紫渐变
- `.gradient-text-mint-blue` - 薄荷蓝渐变
- `.gradient-text-yellow-pink` - 黄粉渐变

**字体**:
- 标题: Nunito (圆润现代)
- 正文: Noto Sans SC (中文优化)
- 代码: Fira Code (等宽)

### 2. Jelly（果冻弥散光）

**特点**: 深色背景 + 多色彩交织的弥散阴影 + 毛玻璃效果
**适用场景**: 科技感、未来感、高端产品（偏炫酷）
**文件**: `style-jelly.css`

**配色**:
- 蓝色 (blue): #3b82f6
- 紫色 (purple): #a855f7
- 粉色 (pink): #ec4899
- 青色 (cyan): #06b6d4

**特殊类**:
- `.halo-text` - 全息渐变文字
- `.glass-panel` - 毛玻璃卡片（带悬停效果）

**字体**:
- 标题: Inter (现代简洁)
- 正文: Noto Sans SC
- 代码: Fira Code

**动画**: 背景有缓慢的弥散光流动动画

### 3. Macaron（马卡龙/糖果渐变）

**特点**: 低饱和度、高明度、柔和甜美
**适用场景**: 温馨、友好、设计类主题
**文件**: `style-macaron.css`

**配色**:
- 粉色 (pink): #ffc2d1
- 蓝色 (blue): #bde0fe
- 薄荷 (mint): #c1fba4
- 紫色 (purple): #e2d1f9
- 黄色 (yellow): #fdf5c9

**渐变文字类**:
- `.text-gradient-candy` - 粉紫糖果渐变
- `.text-gradient-fresh` - 蓝绿清新渐变

**字体**:
- 标题: Nunito (圆润温暖)
- 正文: Noto Sans SC
- 代码: Fira Code

### 4. Dark Pro（深色专业版）

**特点**: 纯黑背景 + 高对比度 + 克制的强调色 + 专业现代
**适用场景**: 技术分享、专业内容、B站/知乎风格、严肃主题
**文件**: `style-dark-pro.css`

**配色**:
- 紫色 (purple): #8b5cf6 - 主强调色
- 蓝色 (blue): #3b82f6 - 次强调色
- 青色 (cyan): #06b6d4
- 粉色 (pink): #ec4899
- 黄色 (yellow): #fbbf24
- 绿色 (green): #10b981
- 橙色 (orange): #f97316

**特殊类**:
- `.gradient-text` - 紫蓝渐变文字
- `.gradient-text-warm` - 橙粉渐变文字

**字体**:
- 标题: Inter (专业简洁)
- 正文: Noto Sans SC
- 代码: Fira Code

**设计特点**:
- 纯黑背景 (#0a0e1a)，不是深蓝
- 极简的背景纹理，不花哨
- 高对比度，白色文字清晰可读
- 强调色克制使用，不刺眼
- 适合长时间观看，不疲劳

## 风格选择规则

1. **用户指定了风格** → 使用用户指定的
2. **用户未指定** → 根据主题内容选择最合适的：
   - 技术/科技类（偏炫酷）→ Jelly
   - 技术/专业内容（偏严肃）→ Dark Pro
   - 轻松/教学类 → Dopamine
   - 设计/创意类 → Macaron

## 风格对比

| 风格 | 背景 | 色彩风格 | 适用场景 | 情感基调 |
|------|------|---------|---------|---------|
| **Dopamine** | 浅色 | 明亮缤纷 | 教学、轻松内容 | 活力、愉悦 |
| **Jelly** | 深蓝 | 弥散光效 | 科技产品、炫酷展示 | 未来、高端 |
| **Macaron** | 浅色 | 柔和甜美 | 设计、创意、温馨 | 友好、温暖 |
| **Dark Pro** | 纯黑 | 克制专业 | 技术分享、专业内容 | 严肃、专业 |

## 字体 CDN 引用

所有风格都需要在 HTML `<head>` 中引入字体和图标：

```html
<!-- Dopamine / Macaron 字体 -->
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800;900&family=Noto+Sans+SC:wght@400;500;700;900&family=Fira+Code:wght@500&display=swap" rel="stylesheet">

<!-- Jelly 字体 -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=Noto+Sans+SC:wght@400;500;700;900&family=Fira+Code:wght@500&display=swap" rel="stylesheet">

<!-- FontAwesome 图标 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

## 图标使用

使用 FontAwesome 图标，克制使用，仅在需要视觉提示时添加：

```html
<i class="fa-solid fa-rocket"></i>
<i class="fa-solid fa-check-circle"></i>
<i class="fa-solid fa-lightbulb"></i>
```
