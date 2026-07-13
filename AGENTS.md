# Repository Guidelines

## 项目结构与模块组织

这是 GSAT 产品官网，基于 React 19、TypeScript、Vite 和 Tailwind CSS。应用入口在 `src/main.tsx`，路由与全局页面框架在 `src/App.tsx`。可复用首页区块放在 `src/components/`，路由页面放在 `src/pages/`；新增独立页面时，同时在 `App.tsx` 注册路由。静态资源位于 `public/`，产品截图统一使用 `public/screenshots/` 下的绝对路径，例如 `/screenshots/dashboard.png`。维护脚本放在 `scripts/`。

## 构建、检查与开发命令

- `npm install`：安装项目依赖。
- `npm run dev`：在 `http://localhost:3000` 启动 Vite 开发服务器。
- `npm run lint`：执行 `tsc --noEmit`，检查 TypeScript 类型错误。
- `npm run verify:screenshots`：确认首页和功能页已引用要求的八张产品截图。
- `npm run build`：生成生产构建到 `dist/`；提交前应运行此命令。
- `npm run preview`：本地预览已构建的 `dist/` 内容。

## 编码风格与命名

沿用现有 TypeScript/React 写法：使用单引号、分号和两空格缩进。组件与页面使用 PascalCase 文件名和默认导出，例如 `FeatureCard.tsx`、`Download.tsx`；工具函数和变量使用 camelCase。优先通过 Tailwind 工具类完成样式，保持类名按布局、间距、视觉效果的顺序组织。面向访客的界面文案、注释和新增文档均使用简体中文；避免引入未使用依赖或重复的组件逻辑。

## 测试与资源校验

目前未接入单元测试框架。每次修改组件、路由或样式后，至少执行 `npm run lint` 和 `npm run build`。涉及首页主视觉、功能页或截图替换时，额外执行 `npm run verify:screenshots`，并在浏览器中检查桌面与移动端布局、导航和下载链接。

## 提交与拉取请求

提交历史采用 Conventional Commit 风格，例如 `feat(download): 添加 Linux 下载入口`、`fix(nav): 修正暗色模式背景`、`chore(build): 更新校验脚本`。每次提交应聚焦单一改动。拉取请求需说明改动范围、验证命令及结果；涉及视觉、响应式布局或截图资产时附上前后截图。关联 issue、下载地址或外部文档变更时，在描述中提供链接并说明影响。

## 配置与安全

不要提交 `.env`、令牌或本机生成的 `dist/` 文件。若新增环境变量，在 README 中说明变量用途和安全的示例值，且仅通过 `import.meta.env` 读取前端可公开配置。
