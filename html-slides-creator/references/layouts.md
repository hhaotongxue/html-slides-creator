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

### 6. 金句/口号布局（极简留白）

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .quote-large {
        font-size: 4rem;
        font-weight: 900;
        line-height: 1.2;
        max-width: 900px;
    }
</style>

<div class="canvas">
    <p class="quote-large gradient-text">"设计不仅仅是外观，<br>更是工作方式"</p>
</div>
```

### 7. 大数字展示布局

```html
<style>
    .canvas {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .stat-item {
        text-align: center;
    }
    .stat-number {
        font-size: 5rem;
        font-weight: 900;
        color: var(--accent-color);
        line-height: 1;
    }
    .stat-label {
        font-size: 1.2rem;
        color: var(--text-muted);
        margin-top: 1rem;
    }
</style>

<div class="canvas">
    <div class="stat-item">
        <div class="stat-number">10M+</div>
        <div class="stat-label">用户数量</div>
    </div>
    <div class="stat-item">
        <div class="stat-number">99.9%</div>
        <div class="stat-label">可用性</div>
    </div>
    <div class="stat-item">
        <div class="stat-number">50ms</div>
        <div class="stat-label">响应时间</div>
    </div>
</div>
```

### 8. VS 对比布局（带中央标识）

```html
<style>
    .canvas {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    .compare-side {
        flex: 1;
        padding: 2rem;
        border-radius: 20px;
    }
    .compare-side h2 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .vs-badge {
        width: 80px;
        height: 80px;
        background: var(--accent-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 900;
        flex-shrink: 0;
    }
</style>

<div class="canvas">
    <div class="compare-side">
        <h2>传统方式</h2>
        <ul>
            <li>配置复杂</li>
            <li>部署慢</li>
        </ul>
    </div>
    <div class="vs-badge">VS</div>
    <div class="compare-side">
        <h2>新方式</h2>
        <ul>
            <li>一键部署</li>
            <li>秒级启动</li>
        </ul>
    </div>
</div>
```

### 9. 纵向步骤条布局（适合多步骤）

```html
<style>
    .canvas h2 { font-size: 3rem; margin-bottom: 3rem; }
    .vertical-steps {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: relative;
        padding-left: 4rem;
    }
    .vertical-steps::before {
        content: '';
        position: absolute;
        left: 1.5rem;
        top: 0;
        bottom: 0;
        width: 4px;
        background: var(--accent-color);
    }
    .v-step {
        position: relative;
        background: var(--card-bg);
        padding: 1.5rem 2rem;
        border-radius: 16px;
    }
    .v-step::before {
        content: attr(data-step);
        position: absolute;
        left: -3.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 3rem;
        height: 3rem;
        background: var(--accent-color);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 900;
        font-size: 1.2rem;
    }
</style>

<div class="canvas">
    <h2>安装步骤</h2>
    <div class="vertical-steps">
        <div class="v-step" data-step="1">
            <h3>下载安装包</h3>
            <p>从官网下载最新版本</p>
        </div>
        <div class="v-step" data-step="2">
            <h3>运行安装程序</h3>
            <p>双击运行并按提示操作</p>
        </div>
        <!-- 更多步骤 -->
    </div>
</div>
```

### 10. 引用框布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }
    .quote-box {
        background: var(--card-bg);
        padding: 3rem;
        border-radius: 20px;
        border-left: 6px solid var(--accent-color);
        font-style: italic;
    }
    .quote-text {
        font-size: 2rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
    }
    .quote-author {
        font-size: 1.2rem;
        color: var(--text-muted);
        font-style: normal;
    }
</style>

<div class="canvas">
    <blockquote class="quote-box">
        <p class="quote-text">"代码是写给人看的，只是顺便让机器执行而已。"</p>
        <cite class="quote-author">— Harold Abelson</cite>
    </blockquote>
</div>
```

### 11. 图标网格布局（2x2 或 2x3）

```html
<style>
    .canvas h2 { font-size: 3rem; margin-bottom: 3rem; text-align: center; }
    .icon-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }
    .icon-item {
        text-align: center;
    }
    .icon-circle {
        width: 120px;
        height: 120px;
        background: var(--accent-color);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        margin: 0 auto 1.5rem;
    }
    .icon-item h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
</style>

<div class="canvas">
    <h2>核心功能</h2>
    <div class="icon-grid">
        <div class="icon-item">
            <div class="icon-circle">🚀</div>
            <h3>快速部署</h3>
            <p>一键发布到生产环境</p>
        </div>
        <!-- 更多图标项 -->
    </div>
</div>
```

### 12. 总分结构布局（大标题 + 分区块）

```html
<style>
    .canvas h1 {
        font-size: 3.5rem;
        margin-bottom: 3rem;
        text-align: center;
    }
    .sections-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .section-block {
        background: var(--card-bg);
        padding: 2rem;
        border-radius: 16px;
    }
    .section-block h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
    }
</style>

<div class="canvas">
    <h1>Docker 核心概念</h1>
    <div class="sections-grid">
        <div class="section-block">
            <h3>镜像 (Image)</h3>
            <p>只读的模板，包含运行应用所需的一切</p>
        </div>
        <div class="section-block">
            <h3>容器 (Container)</h3>
            <p>镜像的运行实例，可以启动、停止、删除</p>
        </div>
        <div class="section-block">
            <h3>仓库 (Repository)</h3>
            <p>存储和分发镜像的地方</p>
        </div>
        <div class="section-block">
            <h3>Docker Hub</h3>
            <p>官方的公共镜像仓库</p>
        </div>
    </div>
</div>
```

### 13. 代码对比布局（左右对比）

```html
<style>
    .canvas h2 { font-size: 2.5rem; margin-bottom: 2rem; text-align: center; }
    .code-compare {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    .code-panel h3 {
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
    }
    .code-block {
        font-family: var(--font-mono);
        background: var(--code-bg);
        border: 2px solid var(--code-border);
        padding: 1.5rem;
        border-radius: 12px;
        font-size: 0.95rem;
        line-height: 1.6;
    }
</style>

<div class="canvas">
    <h2>语法对比</h2>
    <div class="code-compare">
        <div class="code-panel">
            <h3>JavaScript</h3>
            <div class="code-block">
const sum = (a, b) => a + b;
            </div>
        </div>
        <div class="code-panel">
            <h3>Python</h3>
            <div class="code-block">
def sum(a, b):
    return a + b
            </div>
        </div>
    </div>
</div>
```

### 14. 提示/警告框布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .canvas h2 { font-size: 3rem; margin-bottom: 2rem; }
    .callout {
        display: flex;
        gap: 1.5rem;
        padding: 2rem;
        border-radius: 16px;
        background: var(--card-bg);
    }
    .callout-icon {
        font-size: 2.5rem;
        flex-shrink: 0;
    }
    .callout-content h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .callout-info { border-left: 5px solid #3b82f6; }
    .callout-warning { border-left: 5px solid #f59e0b; }
    .callout-success { border-left: 5px solid #10b981; }
</style>

<div class="canvas">
    <h2>注意事项</h2>
    <div class="callout callout-warning">
        <div class="callout-icon">⚠️</div>
        <div class="callout-content">
            <h3>重要提示</h3>
            <p>在生产环境中使用前，请务必进行充分测试</p>
        </div>
    </div>
</div>
```

### 15. 时间线布局（历史/路线图）

```html
<style>
    .canvas h2 { font-size: 3rem; margin-bottom: 3rem; }
    .timeline-horizontal {
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 2rem 0;
    }
    .timeline-horizontal::before {
        content: '';
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--accent-color);
    }
    .timeline-item {
        text-align: center;
        position: relative;
        z-index: 1;
    }
    .timeline-dot {
        width: 2rem;
        height: 2rem;
        background: var(--accent-color);
        border-radius: 50%;
        margin: 0 auto 1rem;
    }
    .timeline-year {
        font-size: 1.5rem;
        font-weight: 900;
        color: var(--accent-color);
        margin-bottom: 0.5rem;
    }
</style>

<div class="canvas">
    <h2>发展历程</h2>
    <div class="timeline-horizontal">
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2020</div>
            <p>项目启动</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2022</div>
            <p>v1.0 发布</p>
        </div>
        <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-year">2024</div>
            <p>用户破百万</p>
        </div>
    </div>
</div>
```

### 16. 图文混排布局（图片 + 文字）

```html
<style>
    .canvas {
        display: flex;
        align-items: center;
        gap: 4rem;
    }
    .image-side {
        flex: 1;
        background: var(--card-bg);
        border-radius: 20px;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
    }
    .text-side {
        flex: 1;
    }
    .text-side h2 {
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
    .text-side p {
        font-size: 1.2rem;
        line-height: 1.8;
    }
</style>

<div class="canvas">
    <div class="image-side">
        📊
    </div>
    <div class="text-side">
        <h2>数据可视化</h2>
        <p>通过直观的图表展示复杂数据，让决策更加高效准确。</p>
    </div>
</div>
```

### 17. Q&A 对话布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .qa-item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .question {
        background: var(--accent-color);
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 20px 20px 20px 4px;
        font-size: 1.3rem;
        font-weight: 600;
        align-self: flex-start;
        max-width: 80%;
    }
    .answer {
        background: var(--card-bg);
        padding: 1.5rem 2rem;
        border-radius: 20px 20px 4px 20px;
        font-size: 1.2rem;
        align-self: flex-end;
        max-width: 80%;
    }
</style>

<div class="canvas">
    <div class="qa-item">
        <div class="question">Q: 什么是 Docker？</div>
        <div class="answer">A: Docker 是一个开源的容器化平台，可以将应用及其依赖打包成标准化的容器。</div>
    </div>
</div>
```

### 18. 进度/百分比展示布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .canvas h2 { font-size: 3rem; margin-bottom: 2rem; }
    .progress-item {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .progress-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .progress-label {
        font-size: 1.3rem;
        font-weight: 600;
    }
    .progress-value {
        font-size: 1.5rem;
        font-weight: 900;
        color: var(--accent-color);
    }
    .progress-bar-bg {
        height: 20px;
        background: var(--card-bg);
        border-radius: 10px;
        overflow: hidden;
    }
    .progress-bar-fill {
        height: 100%;
        background: var(--accent-color);
        border-radius: 10px;
        transition: width 0.3s;
    }
</style>

<div class="canvas">
    <h2>项目进度</h2>
    <div class="progress-item">
        <div class="progress-header">
            <span class="progress-label">前端开发</span>
            <span class="progress-value">85%</span>
        </div>
        <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: 85%;"></div>
        </div>
    </div>
    <!-- 更多进度条 -->
</div>
```

### 19. 章节分隔页布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .chapter-number {
        font-size: 8rem;
        font-weight: 900;
        color: var(--accent-color);
        opacity: 0.3;
        line-height: 1;
    }
    .chapter-title {
        font-size: 4rem;
        font-weight: 900;
        margin-top: -2rem;
    }
</style>

<div class="canvas">
    <div class="chapter-number">02</div>
    <h1 class="chapter-title">核心概念</h1>
</div>
```

### 20. 结束页布局

```html
<style>
    .canvas {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 2rem;
    }
    .ending-icon {
        font-size: 5rem;
    }
    .ending-title {
        font-size: 4rem;
        font-weight: 900;
    }
    .ending-subtitle {
        font-size: 1.5rem;
        color: var(--text-muted);
    }
</style>

<div class="canvas">
    <div class="ending-icon">🎉</div>
    <h1 class="ending-title gradient-text">感谢观看</h1>
    <p class="ending-subtitle">有问题欢迎随时交流</p>
</div>
```

## 设计原则

1. **信息密度要有节奏变化** - 不要每页都塞满内容，适当留白
2. **通过字号对比制造视觉层级** - 主标题、副标题、正文要有明显区分
3. **一页放不下的内容必须拆成多页** - 宁可多一页也不能挤
4. **根据内容选择布局** - 不要套用固定模板
5. **同类内容保持一致** - 同一类型的内容在整个幻灯片中使用相同布局
6. **适当穿插不同密度** - 避免连续多页使用相同布局，保持节奏感
