import { Github, Code, Heart, ExternalLink, BookOpen, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import CTA from '../components/CTA';

export default function Developer() {
  return (
    <>
      {/* 页面标题 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold text-ink-heading tracking-tight text-balance"
          >
            开发者中心
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted text-[clamp(0.95rem,1.3vw,1.06rem)] mt-4 leading-relaxed"
          >
            GSAT 是开源项目，欢迎参与贡献。了解项目架构、查阅文档、提交 Issue 和 PR。
          </motion.p>
        </div>
      </section>

      {/* 快速入口 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: Github,
              title: 'GitHub 仓库',
              description: '查看完整源代码，提交 Issue 和 Pull Request。项目使用 pnpm monorepo 结构组织。',
              action: '访问仓库',
              href: 'https://github.com/xingranya/GitHub-Stars-AI-Tools',
              external: true,
            },
            {
              icon: BookOpen,
              title: '项目文档',
              description: '包含产品规格、技术架构、里程碑规划和模块清单等完整的项目文档。',
              action: '查看文档',
              href: 'https://github.com/xingranya/GitHub-Stars-AI-Tools/wiki',
              external: true,
            },
            {
              icon: Terminal,
              title: '本地开发',
              description: '克隆仓库后使用 pnpm install 安装依赖，pnpm dev 启动开发环境。需要 Node.js ≥ 24 和 Rust 工具链。',
              action: '开始开发',
              href: 'https://github.com/xingranya/GitHub-Stars-AI-Tools#quick-start',
              external: true,
            },
          ].map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-[14px] p-7 flex flex-col group hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-[10px] bg-primary-soft flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink-heading mb-2">{card.title}</h3>
              <p className="text-sm text-muted leading-relaxed flex-grow">{card.description}</p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-primary mt-5 group-hover:gap-2.5 transition-all">
                {card.action}
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 项目结构 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-[14px] overflow-hidden"
        >
          <div className="p-7 border-b border-border">
            <h3 className="font-heading text-lg font-bold text-ink-heading flex items-center gap-2">
              <Code className="w-5 h-5 text-primary" />
              Monorepo 结构
            </h3>
            <p className="text-sm text-muted mt-1">pnpm workspace 管理，清晰的职责分层</p>
          </div>
          <div className="p-7 font-mono text-sm text-foreground leading-loose overflow-x-auto">
            <pre className="whitespace-pre">{`GitHub-Stars-AI-Tools/
├── apps/desktop/               # Tauri 2 桌面应用
│   ├── src/                    # React 19 前端
│   └── src-tauri/              # Rust 后端
├── packages/
│   ├── domain/                 # 领域类型定义
│   ├── storage/                # SQLite Schema & 迁移
│   ├── github/                 # GitHub API 映射
│   ├── ai/                     # AI Provider 抽象层
│   ├── search/                 # 本地检索引擎
│   └── worker/                 # 后台任务编排
└── docs/                       # 规格 & 进度文档`}</pre>
          </div>
        </motion.div>
      </section>

      {/* 开源许可 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-[14px] border border-border p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary-soft flex items-center justify-center shrink-0">
            <Heart className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-ink-heading mb-2">PolyForm Noncommercial 许可</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">
              GSAT 采用 PolyForm Noncommercial License 1.0.0 开源。您可以自由地在个人、研究和非商业场景下使用、修改和分发本软件。
              商业使用需要获得书面授权。
            </p>
            <a
              href="https://github.com/xingranya/GitHub-Stars-AI-Tools/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              查看完整许可条款 <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </section>

      <CTA />
    </>
  );
}
