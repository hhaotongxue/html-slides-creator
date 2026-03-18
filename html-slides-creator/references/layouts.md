# 布局模式参考

根据内容类型选择不同布局，禁止所有页面用同一种套路。

## 内容类型与推荐排版

| 内容类型 | 推荐排版 | 示例场景 |
|---------|---------|---------|
| 金句 / 核心结论 | 居中大字号，大量留白 | 封面页、章节分隔、重要观点强调 |
| 两个对比 | 非对称分栏 | A vs B、优缺点对比、前后对比 |
| 3-6 个并列要点 | 卡片网格 | 功能列表、特性介绍、步骤概览 |
| 总分结构 | 大标题 + 下方分区块 | 主题展开、分类说明 |
| 流程 / 步骤 | 横向时间线或纵向步骤条 | 操作流程、时间线、教程步骤 |
| 代码展示 | 代码块 + 说明 | 技术教程、配置示例 |
| 封面 | 全屏大标题 + 装饰 | 开场页、章节封面 |

## 布局示例

### 1. 封面页布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .tag-pill {
        background: var(--accent-color);
        padding: 0.5rem 1.5rem;
        border-radius: 50px;
        font-weight: 700;
        margin-bottom: 2rem;
    }
    .canvas h1 {
        font-size: 5rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }
</style>

<div class="canvas">
    <div class="tag-pill">🎯 标签</div>
    <h1>主标题<br><span class="gradient-text">副标题</span></h1>
    <p>简短描述文字</p>
</div>
```

### 2. 卡片网格布局（3-6个要点）

```html
<style>
    .canvas h2 { font-size: 3rem; margin-bottom: 3rem; }
    .card-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    .feature-card {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 20px;
        box-shadow: var(--soft-shadow);
    }
    .feature-card h3 { font-size: 1.5rem; margin-bottom: 1rem; }
</style>

<div class="canvas">
    <h2>核心特性</h2>
    <div class="card-grid">
        <div class="feature-card">
            <h3>🚀 特性一</h3>
            <p>描述文字</p>
        </div>
        <!-- 更多卡片 -->
    </div>
</div>
```

### 3. 左右对比布局

```html
<style>
    .canvas { display: flex; align-items: center; gap: 3rem; }
    .split-section { flex: 1; }
    .split-section h2 { font-size: 2.5rem; margin-bottom: 1.5rem; }
    .divider {
        width: 3px;
        height: 400px;
        background: linear-gradient(to bottom, transparent, var(--accent-color), transparent);
    }
</style>

<div class="canvas">
    <div class="split-section">
        <h2>方案 A</h2>
        <ul>
            <li>优点1</li>
            <li>优点2</li>
        </ul>
    </div>
    <div class="divider"></div>
    <div class="split-section">
        <h2>方案 B</h2>
        <ul>
            <li>优点1</li>
            <li>优点2</li>
        </ul>
    </div>
</div>
```

### 4. 流程步骤布局

```html
<style>
    .canvas h2 { font-size: 3rem; margin-bottom: 3rem; }
    .timeline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }
    .timeline::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--accent-color);
        z-index: 0;
    }
    .step {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        z-index: 1;
        min-width: 200px;
    }
    .step-number {
        font-size: 2rem;
        font-weight: 900;
        color: var(--accent-color);
    }
</style>

<div class="canvas">
    <h2>实施步骤</h2>
    <div class="timeline">
        <div class="step">
            <div class="step-number">1</div>
            <h3>步骤一</h3>
            <p>说明</p>
        </div>
        <!-- 更多步骤 -->
    </div>
</div>
```

### 5. 代码展示布局

```html
<style>
    .canvas { display: flex; flex-direction: column; gap: 2rem; }
    .canvas h2 { font-size: 2.5rem; }
    .code-block {
        font-family: var(--font-mono);
        background: var(--code-bg);
        border: 2px solid var(--code-border);
        padding: 1.5rem;
        border-radius: 16px;
        font-size: 1.05rem;
        line-height: 1.6;
    }
</style>

<div class="canvas">
    <h2>配置示例</h2>
    <p>以下是基本配置方法：</p>
    <div class="code-block">
<span class="code-keyword">const</span> config = {
  <span class="code-string">"key"</span>: <span class="code-string">"value"</span>
};
    </div>
</div>
```

## 设计原则

1. **信息密度要有节奏变化** - 不要每页都塞满内容，适当留白
2. **通过字号对比制造视觉层级** - 主标题、副标题、正文要有明显区分
3. **一页放不下的内容必须拆成多页** - 宁可多一页也不能挤
4. **根据内容选择布局** - 不要套用固定模板
