---
name: html-slides-creator
description: 将文本内容转换为用于录制教学视频的 HTML 幻灯片。每张幻灯片是独立的 HTML 文件，支持三种视觉风格（Dopamine/Jelly/Macaron），固定 16:9 画布自适应缩放。适用场景：(1) 用户要求创建 HTML 幻灯片、网页演示文稿、教学视频幻灯片；(2) 用户提供文本内容需要转换为可视化幻灯片；(3) 用户要求生成多页面的演示内容。
---

# HTML Slides Creator

将文本内容转换为独立的 HTML 幻灯片文件，用于录制教学视频或网页演示。

## 核心架构

每张幻灯片是一个独立的完整 HTML 文件，通过 `<a href>` 跳转切换。

### 文件结构

```
主题-风格名/
├── style.css              ← 共用样式（从 assets/ 复制对应风格）
├── scale.js               ← 共用缩放脚本（从 assets/ 复制）
├── 01-cover.html          ← 每页一个文件
├── 02-xxx.html
├── 03-xxx.html
└── ...
```

文件夹命名规则：`主题-风格名`（例如 `agent-teams-dopamine`、`docker-intro-jelly`）

## 工作流程

### 1. 确定风格

根据用户需求或内容主题选择视觉风格：

- **Dopamine（多巴胺）**: 明亮清新，适合轻松愉悦的主题
- **Jelly（果冻弥散光）**: 深色科技感，适合炫酷的技术/未来感主题
- **Macaron（马卡龙）**: 柔和甜美，适合设计/创意主题
- **Dark Pro（深色专业版）**: 纯黑高对比，适合严肃的技术分享/专业内容

如果用户指定了风格，使用用户指定的；否则根据内容自动选择。

详细风格定义见 [references/styles.md](references/styles.md)

### 2. 分析内容并规划页面

将用户提供的文本内容分析并拆分成多个页面：

**内容分析步骤**：
1. 统计文字量和元素数量
2. 识别内容类型（参考 [references/content-analysis.md](references/content-analysis.md)）
3. **判断是否需要拆页**（见下方规则）

**拆页判断规则**（基于内容复杂度）：
- 卡片数量 ≥ 5 个 → 必须拆页
- 列表项 ≥ 8 个 → 必须拆页
- 文字 > 300 字 → 必须拆页
- 多个复杂组件混合（如：大卡片 + 多个小卡片 + 列表）→ 必须拆页

**拆页策略**：
- 每页一个主题或要点
- 一页放不下的内容必须拆成多页
- 根据内容类型选择合适的布局（见 [references/layouts.md](references/layouts.md)）
- 保持每页信息密度在"适中"以下

### 3. 生成 HTML 文件

为每一页生成独立的 HTML 文件：

#### 文件命名

- 第一页：`01-cover.html`（封面）
- 后续页：`02-xxx.html`、`03-xxx.html`...（xxx 为页面主题简写）
- 最后一页：`XX-ending.html`（结束页）

#### HTML 模板结构

使用 `assets/template.html` 作为基础模板，填充以下内容：

- `{{TITLE}}`: 页面标题
- `{{FONT_FAMILY}}`: 根据风格选择字体（Dopamine/Macaron 用 Nunito，Jelly 用 Inter）
- `{{PAGE_SPECIFIC_STYLES}}`: 本页特定的 CSS 样式
- `{{CONTENT}}`: 页面内容 HTML
- `{{PROGRESS}}`: 进度条百分比 = `(当前页-1) / (总页数-1) * 100`
- `{{CURRENT}}`: 当前页码
- `{{TOTAL}}`: 总页数
- `{{PREV_PAGE}}`: 上一页文件名（第一页为空）
- `{{NEXT_PAGE}}`: 下一页文件名（最后一页为空）
- `{{PREV_DISABLED}}`: 第一页添加 `disabled` 类
- `{{NEXT_DISABLED}}`: 最后一页添加 `disabled` 类

### 4. 创建共用文件

在输出文件夹中创建：

1. **style.css** - 从 `assets/style-{风格}.css` 复制对应风格的样式
2. **scale.js** - 从 `assets/scale.js` 复制缩放脚本

## 画布约束（严格遵守）

- 画布固定设计尺寸：`width: 1400px; height: 787.5px`（16:9）
- 通过 `scale.js` 等比缩放适配不同屏幕
- `overflow: hidden` — 兜底保护
- 控制栏和进度条在画布外部（body flex column 布局）

### 防溢出机制（CSS 约束，已内置于全局样式）

内容溢出防护通过全局 CSS 样式保证，无需手动计算高度：

1. **Canvas 使用 Flex 布局**：`display: flex; flex-direction: column`，内容自动在固定高度内排列
2. **紧凑的 padding**：`padding: 3rem 5rem`，最大化可用内容区域
3. **统一的字号约束**：h1 `2.5rem`、h2 `1.8rem`、h3 `1.4rem`、p `1rem`
4. **所有卡片/组件添加 `flex-shrink: 1`**：允许内容在空间不足时自动压缩
5. **组件 padding 统一缩小**：卡片 `1.5rem`、引用框 `2rem`、callout `1.2rem`

### 拆页原则（基于内容复杂度判断）

- 卡片数量 ≥ 5 个 → 必须拆页
- 列表项 ≥ 8 个 → 必须拆页
- 文字 > 300 字 → 必须拆页
- 多个复杂组件混合 → 必须拆页
- 宁可多一页，不要挤在一起

## 内容驱动排版

每页根据内容类型选择不同布局，禁止所有页面用同一种套路。

**决策流程**：
1. 分析内容特征（文字量、信息类型、重要性）
2. 参考 [references/content-analysis.md](references/content-analysis.md) 确定内容类型
3. 从 [references/layouts.md](references/layouts.md) 选择合适布局（现有 20 种布局模式）
4. 使用 [references/components.md](references/components.md) 中的组件类快速构建
5. 遵循 [references/design-tokens.md](references/design-tokens.md) 的设计规范

常见内容类型与推荐排版：

- 金句/核心结论 → 居中大字号，大量留白
- 两个对比 → VS 对比布局或左右分栏
- 3-6 个并列要点 → 卡片网格或图标网格
- 总分结构 → 大标题 + 分区块
- 流程/步骤 → 横向时间线或纵向步骤条
- 代码展示 → 代码块 + 说明
- 数据展示 → 大数字展示或进度条
- 引用 → 引用框布局
- Q&A → 对话气泡布局
- 封面/结束页 → 专用布局

详细布局示例和 HTML/CSS 代码见 [references/layouts.md](references/layouts.md)

## 输出格式

生成完整的文件夹，包含：

1. 所有 HTML 文件（01-xxx.html, 02-xxx.html, ...）
2. style.css（对应风格的样式文件）
3. scale.js（缩放脚本）

用户可以直接双击任意 HTML 文件在浏览器中查看，通过左右箭头导航。

## 示例对话

**用户**: "帮我把这段关于 Docker 的教程转成 HTML 幻灯片，用科技感的风格"

**响应流程**:
1. 选择 Jelly 风格（科技感）
2. 分析内容，拆分成 8 页：封面、Docker 简介、安装步骤、基本命令、实战示例、最佳实践、常见问题、结束页
3. 为每页选择合适布局（封面用居中大字号、步骤用时间线、命令用代码块等）
4. 生成 `docker-intro-jelly/` 文件夹，包含所有 HTML 文件和共用文件
5. 告知用户可以双击 `01-cover.html` 查看

## 注意事项

**内容拆页原则（基于内容复杂度）**：
- 卡片数量 ≥ 5 个时必须拆页
- 列表项 ≥ 8 个时必须拆页
- 文字 > 300 字时必须拆页
- 多个复杂组件混合时必须拆页
- 宁可多生成几页，也不要挤在一起
- 防溢出机制已内置于全局 CSS，无需手动计算高度

**其他注意事项**：
- 代码块（.code-block）必须保持 `white-space: pre`，确保 JSON、代码等内容以缩进展开格式显示，不能挤成一行
- 图标使用 FontAwesome，克制使用
- 信息密度要有节奏变化，通过字号对比制造视觉层级
- 根据内容选择布局，不要套用固定模板
- 确保进度条、页码、导航链接正确
- 使用 [references/components.md](references/components.md) 中的组件类提升视觉丰富度
- 遵循 [references/design-tokens.md](references/design-tokens.md) 的间距、字号、圆角等规范
- 参考 [references/content-analysis.md](references/content-analysis.md) 进行内容分析和布局决策

## 可用资源

- **design-tokens.md**: 设计系统规范（间距、字号、圆角、阴影等）
- **components.md**: 可复用组件库（标签、卡片、引用框、列表等）
- **content-analysis.md**: 内容分析决策树（如何根据内容选择布局）
- **layouts.md**: 20 种布局模式及完整代码示例
- **styles.md**: 三种视觉风格的详细定义
