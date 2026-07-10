import {
  Search, BookOpen, Tags, Radar, GitFork, Trophy, Settings2,
} from 'lucide-react';
import { motion } from 'motion/react';
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

/** 全部功能数据 */
const FEATURES = [
  {
    icon: BookOpen,
    title: 'Stars 本地知识库',
    description: '一键同步 GitHub Stars 到本地 SQLite 数据库。每个仓库自动抓取元数据、Topics、语言分布和 README，构建完整的本地索引。',
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
    icon: Search,
    title: '对话式 AI 搜索',
    description: '用自然语言描述需求，AI 理解您的真实意图，在知识库中精准匹配。支持追问和上下文关联。',
  },
  {
    icon: BookOpen,
    title: 'README 智能解析',
    description: 'AI 自动提取 README 核心信息，生成中文摘要、关键词和推荐标签。流式输出，实时预览。',
    preview: (
      <div className="bg-background rounded-[10px] border border-border p-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center shrink-0 mt-0.5">
            <BookOpen className="w-3 h-3 text-primary-fg" />
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
  {
    icon: Trophy,
    title: '开源排行榜',
    description: '浏览趋势、新锐和热门开源项目，按语言筛选并查看仓库指标，一键加入 GitHub Stars。',
  },
  {
    icon: Radar,
    title: '个人技术画像',
    description: '基于 Star 历史和使用模式，生成您的技术栈画像、成长趋势和领域偏好分析。了解自己的技术全景。',
    preview: (
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { label: 'Rust', value: 34, color: 'bg-[oklch(0.55_0.12_25)]' },
          { label: 'TypeScript', value: 28, color: 'bg-[oklch(0.55_0.15_250)]' },
          { label: 'Python', value: 18, color: 'bg-[oklch(0.65_0.15_80)]' },
          { label: 'Go', value: 12, color: 'bg-[oklch(0.60_0.12_170)]' },
          { label: '其他', value: 8, color: 'bg-muted' },
        ].map(item => (
          <div key={item.label} className="flex items-center gap-3 min-w-[160px]">
            <span className="text-xs text-muted w-20 text-right">{item.label}</span>
            <div className="flex-1 h-2 rounded-full bg-border overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full rounded-full ${item.color}`}
              />
            </div>
            <span className="text-xs font-mono text-muted w-8">{item.value}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Settings2,
    title: '连接与数据管理',
    description: '统一检查 GitHub 连接与本地数据状态，集中完成同步、README 补抓和标签网络生成。',
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
            八大核心能力，将散落的收藏转化为结构化的个人技术知识库
          </motion.p>
        </div>

        {/* 功能网格 — 1列 / 2列 / 3列 响应式 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <FeatureCard
              key={feat.title}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
              preview={feat.preview}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
