# BiliVideo · 多元视频社区体验站

本项目是一个参考哔哩哔哩（Bilibili）风格打造的前端演示站点，基于 **React + TypeScript + Vite** 构建。通过精心编排的页面、动态组件和虚拟数据，呈现首页推荐、分区浏览、视频详情、搜索等核心体验，适合用作展示、学习或产品原型设计。

> 演示数据、图片与视频来源于开放素材与示例链接，仅用于界面效果展示，不可用于商业用途。

## ✨ 功能亮点

- **首页多栏布局**：包含轮播Banner、每日精选、热度飙升、直播专区、专题播放列表、热门专栏等内容模块。
- **数据上下文管理**：使用 `DataProvider` 统一管理 Banner、视频、直播、专栏等数据以及搜索、分区筛选等衍生能力。
- **视频详情体验**：内嵌原生 HTML5 播放器，展示弹幕、点赞、收藏、Tag、UP 主信息与相关推荐。
- **分区与搜索**：支持按分区查看内容并通过标签过滤；提供站内搜索与热搜推荐。
- **细致的交互与视觉**：大量定制化组件与响应式样式，重现 B 站的轻盈、活力与二次元氛围。

## 🛠️ 技术栈

- **前端框架**：React 18 + React Router DOM 6
- **构建工具**：Vite 7 + TypeScript
- **UI 组件与样式**：原生 CSS + CSS 变量 + 响应式布局
- **辅助库**：`react-icons`（图标集）、`clsx`（className 组合）

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发环境（含 HMR）
npm run dev

# 构建生产版本
npm run build

# 预览构建产物
npm run preview
```

默认开发服务器会在 `http://localhost:5173` 启动。

## 📂 项目结构

```
bilivideo/
├── public/               # 静态资源
├── src/
│   ├── components/       # 可复用 UI 组件（轮播、卡片、侧栏等）
│   ├── data/             # mock 数据与上下文 DataProvider
│   ├── layouts/          # 全局布局容器（头部、底部、主内容区）
│   ├── pages/            # 路由页面（首页、分区、详情、搜索、404）
│   ├── types/            # TypeScript 类型定义
│   ├── utils/            # 通用工具函数（格式化数字、时间等）
│   ├── App.tsx           # 路由配置
│   ├── index.css         # 全局样式与主题变量
│   └── main.tsx          # 入口文件（绑定 Router 与 DataProvider）
├── package.json
└── vite.config.ts
```

## 🧪 数据与模拟

- 所有视频、Banner、直播、专栏等均来自 `src/data/mockData.ts`。
- 通过 `DataContext` 将数据注入组件，提供 `searchVideos`、`getVideoById`、`getVideosByCategory` 等方法。
- 示例视频链接来自 Coverr 开放素材库，缩略图引用 Unsplash 公开图片。

## 🔧 定制与扩展

- 若需接入真实后端，可在 `DataProvider` 中替换为 API 调用或 GraphQL 查询。
- 可引入状态管理（如 Redux、Zustand）或设计系统（如 Tailwind、Chakra）以便进一步扩展。
- 组件样式采用原生 CSS，方便结合设计需求继续调整或迁移到 CSS Modules / CSS-in-JS。

## 📄 许可说明

本项目仅供学习、演示与个人作品集使用。界面及数据参考哔哩哔哩官方设计，请勿直接用于商用或造成品牌误导。如需二次发布，请保留出处说明。祝玩得开心！💫
