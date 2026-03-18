# 可复用组件库

本文档提供可直接使用的 CSS 组件类，用于快速构建丰富的幻灯片内容。

## 标签与徽章 (Tags & Badges)

### 药丸标签 (Pill Tag)

```html
<span class="tag-pill">🎯 新功能</span>
<span class="tag-pill tag-accent">重要</span>
```

```css
.tag-pill {
    display: inline-block;
    background: var(--accent-color);
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: var(--radius-full);
    font-weight: 700;
    font-size: 0.9rem;
}
.tag-accent { background: var(--secondary-color); }
```

### 数字徽章 (Number Badge)

```html
<div class="number-badge">01</div>
```

```css
.number-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    background: var(--accent-color);
    color: white;
    border-radius: 50%;
    font-weight: 900;
    font-size: 1.2rem;
}
```

## 卡片组件 (Cards)

### 基础卡片

```html
<div class="card">
    <h3>标题</h3>
    <p>内容</p>
</div>
```

```css
.card {
    background: var(--card-bg);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    transition: all var(--duration-base);
}
.card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}
```

### 图标卡片

```html
<div class="icon-card">
    <div class="icon-card-icon">🚀</div>
    <h3>快速启动</h3>
    <p>一键部署到生产环境</p>
</div>
```

```css
.icon-card {
    background: var(--card-bg);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    text-align: center;
}
.icon-card-icon {
    font-size: 3rem;
    margin-bottom: var(--space-md);
}
```

### 高亮卡片

```html
<div class="highlight-card">
    <div class="highlight-card-accent"></div>
    <h3>重点内容</h3>
    <p>需要特别注意的信息</p>
</div>
```

```css
.highlight-card {
    position: relative;
    background: var(--card-bg);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    border-left: 4px solid var(--accent-color);
}
```

## 引用与提示框 (Quotes & Callouts)

### 引用框

```html
<blockquote class="quote-box">
    <p class="quote-text">"设计不仅仅是外观，更是工作方式。"</p>
    <cite class="quote-author">— Steve Jobs</cite>
</blockquote>
```

```css
.quote-box {
    background: var(--card-bg);
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
    border-left: 6px solid var(--accent-color);
    font-style: italic;
}
.quote-text {
    font-size: var(--text-xl);
    line-height: var(--leading-relaxed);
    margin-bottom: var(--space-md);
}
.quote-author {
    font-size: var(--text-sm);
    color: var(--text-muted);
    font-style: normal;
}
```

### 提示框 (Callout)

```html
<div class="callout callout-info">
    <div class="callout-icon">💡</div>
    <div class="callout-content">
        <strong>提示：</strong>这是一个重要的提示信息
    </div>
</div>
```

```css
.callout {
    display: flex;
    gap: var(--space-md);
    padding: var(--space-lg);
    border-radius: var(--radius-md);
    background: var(--card-bg);
}
.callout-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}
.callout-info { border-left: 4px solid #3b82f6; }
.callout-warning { border-left: 4px solid #f59e0b; }
.callout-success { border-left: 4px solid #10b981; }
.callout-error { border-left: 4px solid #ef4444; }
```

## 列表增强 (Enhanced Lists)

### 图标列表

```html
<ul class="icon-list">
    <li><i class="fa-solid fa-check"></i> 第一项</li>
    <li><i class="fa-solid fa-check"></i> 第二项</li>
</ul>
```

```css
.icon-list {
    list-style: none;
    padding: 0;
}
.icon-list li {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) 0;
    font-size: var(--text-base);
}
.icon-list i {
    color: var(--accent-color);
    font-size: 1.2rem;
}
```

### 数字列表

```html
<ol class="numbered-list">
    <li>第一步</li>
    <li>第二步</li>
</ol>
```

```css
.numbered-list {
    list-style: none;
    counter-reset: item;
    padding: 0;
}
.numbered-list li {
    counter-increment: item;
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-sm) 0;
}
.numbered-list li::before {
    content: counter(item);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: var(--accent-color);
    color: white;
    border-radius: 50%;
    font-weight: 700;
    flex-shrink: 0;
}
```

## 分隔线 (Dividers)

### 渐变分隔线

```html
<div class="divider-gradient"></div>
```

```css
.divider-gradient {
    height: 3px;
    background: linear-gradient(to right, transparent, var(--accent-color), transparent);
    margin: var(--space-xl) 0;
}
```

### 文字分隔线

```html
<div class="divider-text">
    <span>或者</span>
</div>
```

```css
.divider-text {
    display: flex;
    align-items: center;
    text-align: center;
    margin: var(--space-lg) 0;
}
.divider-text::before,
.divider-text::after {
    content: '';
    flex: 1;
    height: 2px;
    background: var(--border-color);
}
.divider-text span {
    padding: 0 var(--space-md);
    color: var(--text-muted);
    font-size: var(--text-sm);
}
```

## 高亮与强调 (Highlights)

### 文字高亮

```html
<p>这是一段<mark class="text-highlight">重要内容</mark>的说明</p>
```

```css
.text-highlight {
    background: linear-gradient(to right, var(--accent-color-light), var(--accent-color));
    color: white;
    padding: 0.2rem 0.6rem;
    border-radius: var(--radius-sm);
    font-weight: 600;
}
```

### 下划线强调

```html
<span class="text-underline">重点强调</span>
```

```css
.text-underline {
    position: relative;
    display: inline-block;
}
.text-underline::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
}
```

## 按钮与交互 (Buttons)

### 主要按钮

```html
<button class="btn btn-primary">开始使用</button>
```

```css
.btn {
    padding: var(--space-sm) var(--space-lg);
    border: none;
    border-radius: var(--radius-md);
    font-weight: 600;
    cursor: pointer;
    transition: all var(--duration-base);
}
.btn-primary {
    background: var(--accent-color);
    color: white;
}
.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}
```

## 网格布局助手 (Grid Helpers)

### 2列网格

```html
<div class="grid-2">
    <div>左侧内容</div>
    <div>右侧内容</div>
</div>
```

```css
.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
}
```

### 3列网格

```css
.grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
}
```

### 自适应网格

```css
.grid-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
}
```

## 使用说明

1. 这些组件类应该添加到各风格的 CSS 文件中
2. 使用时直接在 HTML 中引用类名即可
3. 可以组合多个类来实现复杂效果
4. 所有组件都使用 design tokens，确保风格一致
