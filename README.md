# HTML Slides Creator

一个 Claude Code Skill，将文本内容转换为精美的 HTML 幻灯片，用于录制教学视频或网页演示。

## 效果预览

每张幻灯片是独立的 HTML 文件，双击即可在浏览器中打开，支持左右箭头导航、进度条显示。

### 三种视觉风格

| 风格 | 特点 | 适用场景 |
|------|------|---------|
| **Dopamine（多巴胺）** | 明亮清新、色彩缤纷 | 轻松愉悦、教学类 |
| **Jelly（果冻弥散光）** | 深色背景、毛玻璃效果 | 科技感、未来感 |
| **Macaron（马卡龙）** | 低饱和度、柔和甜美 | 设计、创意类 |

## 安装方式

### 方式一：通过 .skill 文件安装（推荐）

1. 下载 [html-slides-creator.skill](https://github.com/你的用户名/html-slides-creator/releases) 文件
2. 在 Claude Code 中运行：

```
/install-skill html-slides-creator.skill
```

### 方式二：手动安装

1. 克隆本仓库：

```bash
git clone https://github.com/hhaotongxue/html-slides-creator.git
```

2. 将 `html-slides-creator` 文件夹复制到 Claude Code 的 skills 目录中。

## 使用方式

安装后，在 Claude Code 中直接对话即可触发：

```
帮我把以下内容转成 HTML 幻灯片，用多巴胺风格：

# Docker 入门教程
## 什么是 Docker
Docker 是一个开源的容器化平台...
## 安装步骤
1. 下载 Docker Desktop
2. 安装并启动
...
```

也可以这样用：

```
把这份 Markdown 文档转成教学视频用的幻灯片
```

```
用科技感风格创建一个 10 页的 Claude Code 教程幻灯片
```

## 生成的文件结构

```
主题-风格名/
├── style.css          ← 共用样式
├── scale.js           ← 画布自适应缩放脚本
├── 01-cover.html      ← 封面
├── 02-xxx.html        ← 内容页
├── 03-xxx.html
├── ...
└── XX-ending.html     ← 结束页
```

- 画布固定 1400×787.5px（16:9），通过 JS 等比缩放适配屏幕
- 每页独立 HTML 文件，双击即可打开
- 内置导航按钮和进度条

## 项目结构

```
html-slides-creator/
├── SKILL.md                ← Skill 核心说明（Claude 读取此文件）
├── assets/
│   ├── scale.js            ← 画布缩放脚本
│   ├── style-dopamine.css  ← 多巴胺风格样式
│   ├── style-jelly.css     ← 果冻弥散光风格样式
│   ├── style-macaron.css   ← 马卡龙风格样式
│   └── template.html       ← HTML 页面模板
└── references/
    ├── layouts.md          ← 布局模式参考
    └── styles.md           ← 风格定义文档
```

## License

MIT
