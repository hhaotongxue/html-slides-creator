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
- **Jelly（果冻弥散光）**: 深色科技感，适合技术/未来感主题
- **Macaron（马卡龙）**: 柔和甜美，适合设计/创意主题

如果用户指定了风格，使用用户指定的；否则根据内容自动选择。

详细风格定义见 [references/styles.md](references/styles.md)

### 2. 分析内容并规划页面

将用户提供的文本内容分析并拆分成多个页面：

- 每页一个主题或要点
- 一页放不下的内容必须拆成多页
- 根据内容类型选择合适的布局（见 [references/layouts.md](references/layouts.md)）

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

## 画布约束

- 画布固定设计尺寸：`width: 1400px; height: 787.5px`（16:9）
- 通过 `scale.js` 等比缩放适配不同屏幕
- `overflow: hidden` — 兜底保护
- 控制栏和进度条在画布外部（body flex column 布局）
- **一页放不下的内容必须拆成多页，宁可多一页也不能挤**

## 内容驱动排版

每页根据内容类型选择不同布局，禁止所有页面用同一种套路。

常见内容类型与推荐排版见 [references/layouts.md](references/layouts.md)：

- 金句/核心结论 → 居中大字号，大量留白
- 两个对比 → 非对称分栏
- 3-6 个并列要点 → 卡片网格
- 总分结构 → 大标题 + 下方分区块
- 流程/步骤 → 横向时间线或纵向步骤条
- 代码展示 → 代码块 + 说明
- 封面 → 全屏大标题 + 装饰

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

- 图标使用 FontAwesome，克制使用
- 信息密度要有节奏变化，通过字号对比制造视觉层级
- 根据内容选择布局，不要套用固定模板
- 确保进度条、页码、导航链接正确
