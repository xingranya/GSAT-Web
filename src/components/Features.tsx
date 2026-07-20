import {
  Search, BookOpen, Tags, GitFork, FileText, ArrowRight,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  /** 额外的可视化内容 */
  preview?: ReactNode;
  delay?: number;
}

function FeatureCard({ icon: Icon, title, description, preview, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel rounded-[14px] p-7 flex flex-col group hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-[10px] bg-primary-soft flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-bold text-ink-heading mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
      {preview && <div className="mt-5 flex-grow">{preview}</div>}
    </motion.div>
  );
}

/** 精选功能数据：完整八大功能见 /features 页面 */
const FEATURES = [
  {
    icon: BookOpen,
    title: 'Stars 本地知识库',
    description: '一键同步 GitHub Stars 到本地 SQLite 数据库，自动抓取元数据、Topics、语言分布和 README，构建完整的本地索引。',
    preview: (
      <div className="bg-background rounded-[10px] border border-border p-4 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-primary">✓</span>
          <span className="text-foreground">同步仓库元数据</span>
          <span className="ml-auto text-[10px] text-primary bg-primary-soft px-1.5 py-0.5 rounded">847 个</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-primary">✓</span>
          <span className="text-foreground">缓存 README 文件</span>
          <span className="ml-auto text-[10px] text-primary bg-primary-soft px-1.5 py-0.5 rounded">612 个</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-primary">✓</span>
          <span className="text-foreground">生成 AI 摘要</span>
          <span className="ml-auto text-[10px] text-primary bg-primary-soft px-1.5 py-0.5 rounded">589 个</span>
        </div>
      </div>
    ),
  },
  {
    icon: FileText,
    title: 'README 智能解析',
    description: 'AI 自动提取 README 核心信息，生成中文摘要、关键词和推荐标签。流式输出，实时预览。',
    preview: (
      <div className="bg-background rounded-[10px] border border-border p-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center shrink-0 mt-0.5">
            <FileText className="w-3 h-3 text-primary-fg" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground mb-1">tokio-rs/tokio</div>
            <div className="text-xs text-muted leading-relaxed">
              Tokio 是 Rust 的异步运行时，提供事件循环、任务调度、TCP/UDP 网络、定时器等基础设施。
              是构建高性能异步 Rust 应用的核心依赖。
            </div>
            <div className="flex gap-1.5 mt-2.5">
              {['异步运行时', 'Rust', '网络编程', '高性能'].map(tag => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary-soft text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Tags,
    title: 'AI 标签网络',
    description: 'AI 根据收藏内容自动生成标签建议，建立项目间的关联关系。可视化标签网络，发现隐藏的技术连接。',
  },
  {
    icon: GitFork,
    title: '相似项目发现',
    description: '基于已收藏的项目，AI 在 GitHub 上搜索并推荐相似的替代方案。永远不错过更好的选择。',
  },
];

export default function Features() {
  return (
    <section className="py-[clamp(3.5rem,7vw,6rem)] relative overflow-hidden">
      {/* 背景模糊光斑 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[15%] right-[-5%] w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.570 0.147 263 / 0.05), transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-[10%] left-[-8%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.580 0.130 260 / 0.04), transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold text-ink-heading tracking-tight text-balance"
          >
            您的 Stars，从此不再沉睡
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted text-[clamp(0.95rem,1.3vw,1.06rem)] mt-4 max-w-xl mx-auto leading-relaxed"
          >
            精选核心能力，将散落的收藏转化为结构化的个人技术知识库
          </motion.p>
        </div>

        {/* Bento 网格：大卡带截图 + 四张精选小卡 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 大卡：对话式 AI 搜索 + 本地向量检索 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 bg-card rounded-[14px] border border-card-border shadow-md p-7 flex flex-col group hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-[10px] bg-primary-soft flex items-center justify-center group-hover:scale-105 transition-transform">
                <Search className="w-5 h-5 text-primary" />
              </div>
              <span className="text-[11px] font-medium text-primary px-2.5 py-1 rounded-full bg-primary-soft border border-primary/10">
                v1.5 全新升级
              </span>
            </div>
            <h3 className="font-heading text-lg font-bold text-ink-heading mb-2">
              对话式 AI 搜索 · 本地向量检索
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-lg">
              内置中英双语向量模型，首次启用自动完成模型下载与索引构建，之后语义检索可完全离线运行。
              本地召回候选、AI 二次筛选，自然语言描述即可精准找回真正需要的项目。
            </p>
            <div className="mt-5 rounded-[10px] border border-border overflow-hidden shadow-sm">
              <img
                src="/screenshots/ai-search.png"
                alt="对话式 AI 搜索界面，左侧为 AI 对话，右侧为匹配的仓库结果"
                className="w-full h-auto block"
                loading="lazy"
                width={2940}
                height={1844}
              />
            </div>
          </motion.div>

          {FEATURES.map((feat, i) => (
            <FeatureCard
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              preview={feat.preview}
              delay={(i + 1) * 0.08}
            />
          ))}
        </div>

        {/* 引导到功能页查看完整能力 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/features"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
          >
            查看全部八大核心功能
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
