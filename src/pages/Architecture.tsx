import { Cpu, Database, Layers, Shield, Zap, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import CTA from '../components/CTA';

interface ArchCard {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  span?: 'full';
}

const ARCH_CARDS: ArchCard[] = [
  {
    icon: Cpu,
    title: '多 AI 提供商抽象层',
    description:
      '统一的 Provider 接口，支持 OpenAI、Anthropic 及任何 OpenAI 兼容端点（DeepSeek、Moonshot/Kimi、Qwen、GLM、Silicon Flow）。业务逻辑从不依赖特定供应商 SDK，一键切换模型。',
    tags: ['Provider 抽象', '流式输出', 'Token 计量', 'Ollama / LM Studio'],
  },
  {
    icon: Database,
    title: 'SQLite 本地存储引擎',
    description:
      '基于 rusqlite 的嵌入式数据库，8 张核心表覆盖仓库元数据、README 缓存、AI 文档、向量嵌入、标签关系和任务队列。FTS5 全文索引加速搜索，内容哈希实现幂等处理。',
    tags: ['SQLite FTS5', 'Schema 迁移', '内容哈希去重', '幂等任务'],
  },
  {
    icon: Layers,
    title: '三层数据分离架构',
    description:
      'GitHub 事实层（仓库元数据）、用户标注层（标签、笔记、阅读状态）和 AI 分析层（摘要、关键词、嵌入向量）完全解耦。同步不覆盖用户数据，AI 更新不影响手动标注。',
    tags: ['事实 / 标注 / 分析', '独立存储', '互不干扰'],
    span: 'full',
  },
  {
    icon: Shield,
    title: '安全与隐私设计',
    description:
      'GitHub Token 存储在操作系统凭证管理器（macOS Keychain / Windows 凭据管理器 / Linux Secret Service），绝不写入文件或 localStorage。用户笔记默认不发送给 AI。',
    tags: ['系统凭证管理', '只读权限', '本地优先', '数据不出设备'],
  },
  {
    icon: Zap,
    title: '后台任务引擎',
    description:
      '独立的 Worker 模块编排后台任务：Stars 同步、README 缓存、AI 摘要生成、Gist 同步、相似项目推荐。支持重试、幂等键和批量暂停恢复。',
    tags: ['任务队列', '断点续传', '幂等处理', '批量控制'],
  },
  {
    icon: Globe,
    title: '跨平台桌面应用',
    description:
      '基于 Tauri 2 构建，原生支持 macOS（Apple Silicon + Intel）、Windows 和 Linux。Rust 后端性能强劲，前端 React 19 保证流畅交互。应用内自动更新，签名校验安全分发。',
    tags: ['Tauri 2', 'macOS / Windows / Linux', '自动更新', '签名校验'],
    span: 'full',
  },
];

export default function Architecture() {
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
            核心技术架构
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted text-[clamp(0.95rem,1.3vw,1.06rem)] mt-4 leading-relaxed"
          >
            Tauri 2 + Rust + React 19 + SQLite——本地优先的现代桌面应用架构，
            每一层都为性能、安全和可扩展性而设计。
          </motion.p>
        </div>
      </section>

      {/* 架构卡片网格 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {ARCH_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`glass-panel rounded-[14px] p-7 flex flex-col group hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300 ${
                card.span === 'full' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-primary-soft flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <card.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-lg font-bold text-ink-heading">{card.title}</h2>
                </div>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-5 flex-grow">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-primary-soft text-primary border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 技术栈总览 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(3rem,6vw,5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-[14px] border border-border overflow-hidden"
        >
          <div className="p-7 border-b border-border">
            <h3 className="font-heading text-lg font-bold text-ink-heading">技术栈总览</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { layer: '桌面框架', tech: 'Tauri 2', detail: 'Rust 后端 + WebView 前端' },
              { layer: '前端', tech: 'React 19 + Vite + Tailwind CSS 4', detail: 'TypeScript, shadcn/ui' },
              { layer: '后端', tech: 'Rust (2021 Edition)', detail: 'reqwest, rusqlite, keyring' },
              { layer: '存储', tech: 'SQLite (bundled)', detail: 'FTS5 全文索引, 8 张核心表' },
              { layer: 'AI 集成', tech: '多 Provider 抽象', detail: 'OpenAI / Anthropic / 兼容端点' },
              { layer: '分发', tech: 'GitHub Actions CI/CD', detail: 'macOS · Windows · Linux' },
            ].map(item => (
              <div key={item.layer} className="p-5">
                <div className="text-[11px] font-medium text-muted uppercase tracking-wider mb-1">{item.layer}</div>
                <div className="text-sm font-semibold text-foreground">{item.tech}</div>
                <div className="text-xs text-muted mt-0.5">{item.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <CTA />
    </>
  );
}
