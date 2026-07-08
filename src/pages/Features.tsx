import {
  BookOpen, Search, Tags, Radar, GitFork, Shield,
  Check,
} from 'lucide-react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import CTA from '../components/CTA';

interface FeatureDetail {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  /** 预览截图路径 */
  screenshot: string;
  screenshotAlt: string;
}

const FEATURES: FeatureDetail[] = [
  {
    icon: BookOpen,
    title: 'Stars 本地知识库',
    subtitle: '您收藏的一切，尽在掌握',
    description:
      '一键同步 GitHub Stars 到本地 SQLite 数据库。自动抓取仓库元数据、Topics、语言分布和 README 内容。三层数据分离架构：GitHub 事实、用户标注和 AI 分析结果独立存储，互不干扰。',
    highlights: [
      '全量同步 + 增量更新，断点续传',
      '内容哈希去重，避免重复 AI 调用',
      '支持自定义标签、笔记和阅读状态',
      '通过私有 Gist 跨设备同步标注',
    ],
    screenshot: '/screenshots/main.png',
    screenshotAlt: 'Stars 本地知识库主界面',
  },
  {
    icon: Search,
    title: '对话式 AI 搜索',
    subtitle: '用自然语言，找回真正需要的',
    description:
      '告别关键词匹配的局限。像和同事聊天一样描述您的需求，AI 会理解您的真实意图，在知识库中找到最匹配的项目，并详细解释每个结果为何相关。',
    highlights: [
      '自然语言描述，无需记住项目名',
      'AI 展示推理过程，可追溯可信',
      '右侧实时展示匹配仓库，支持分页',
      '基于上下文的连续追问',
    ],
    screenshot: '/screenshots/ai-search.png',
    screenshotAlt: '对话式 AI 搜索界面',
  },
  {
    icon: BookOpen,
    title: 'README 智能解析',
    subtitle: '英文 README，中文秒懂',
    description:
      'AI 自动读取每个项目的 README，生成中文摘要、关键词和推荐标签。流式输出实时预览，快速判断项目是否值得深入。再也不用逐个打开仓库阅读大段英文文档。',
    highlights: [
      '流式 AI 输出，实时预览',
      '生成中文摘要 + 关键词 + 标签建议',
      '知识卡片一目了然',
      'Token 用量追踪，成本可控',
    ],
    screenshot: '/screenshots/readme.png',
    screenshotAlt: 'README 智能解析界面',
  },
  {
    icon: Tags,
    title: 'AI 标签网络',
    subtitle: '发现收藏之间的隐藏关联',
    description:
      'AI 分析所有收藏项目的技术栈、使用场景和依赖关系，自动生成标签建议并建立项目间的关联。可视化标签网络让您可以直观地看到技术领域的分布和项目的聚类关系。',
    highlights: [
      'AI 推荐标签 + 手动自定义标签',
      '项目间关联关系自动发现',
      '标签网络可视化展示',
      '按标签筛选和批量管理',
    ],
    screenshot: '/screenshots/tag-network.png',
    screenshotAlt: 'AI 标签网络可视化',
  },
  {
    icon: GitFork,
    title: '相似项目发现',
    subtitle: '永远不错过更好的选择',
    description:
      '选择一个您已收藏的项目，AI 会分析其技术特征和使用场景，自动生成 GitHub Search 策略，为您发现市面上相似的替代方案。比较不同实现的优劣，找到最适合您需求的工具。',
    highlights: [
      '基于已收藏项目智能推荐',
      'AI 生成搜索策略，精准发现',
      '候选项目一键入库',
      '比较分析帮助决策',
    ],
    screenshot: '/screenshots/settings.png',
    screenshotAlt: 'AI 服务与搜索配置',
  },
  {
    icon: Radar,
    title: '个人技术画像',
    subtitle: '看清自己的技术全景',
    description:
      '基于您的 Star 历史、收藏趋势和使用模式，AI 为您生成全面的个人技术画像。了解自己的技术栈偏好、关注领域的演变轨迹，以及收藏行为背后的成长脉络。',
    highlights: [
      '语言偏好和趋势分析',
      '收藏时间线和领域分布',
      'AI 生成的技术栈概述',
      '使用概览和数据统计',
    ],
    screenshot: '/screenshots/welcome.png',
    screenshotAlt: '个人技术画像概览',
  },
];

function FeatureSection({ feature, index }: { key?: string; feature: FeatureDetail; index: number }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 md:gap-14 items-center`}
    >
      {/* 文本区域 */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-[10px] bg-primary-soft flex items-center justify-center">
            <feature.icon className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-medium text-primary uppercase tracking-wider">{feature.subtitle}</span>
        </div>
        <h2 className="font-heading text-[clamp(1.5rem,2.5vw,2rem)] font-bold text-ink-heading mb-4 tracking-tight">
          {feature.title}
        </h2>
        <p className="text-[15px] text-muted leading-relaxed mb-6">{feature.description}</p>
        <ul className="space-y-2.5">
          {feature.highlights.map(item => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 截图预览 */}
      <div className="flex-1 min-w-0 w-full">
        <div className="rounded-[14px] border border-border shadow-md overflow-hidden">
          <img
            src={feature.screenshot}
            alt={feature.screenshotAlt}
            className="w-full h-auto block"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
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
            功能全景
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted text-[clamp(0.95rem,1.3vw,1.06rem)] mt-4 leading-relaxed"
          >
            从同步到搜索，从解析到发现——六大核心功能构建完整的 Stars 知识管理体验
          </motion.p>
        </div>
      </section>

      {/* 功能详情 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <div className="flex flex-col gap-[clamp(3rem,6vw,5rem)]">
          {FEATURES.map((feature, i) => (
            <FeatureSection key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </section>

      {/* 安全承诺 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(3rem,6vw,5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-[14px] border border-border p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center shrink-0">
            <Shield className="w-7 h-7 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold text-ink-heading mb-2">隐私安全承诺</h3>
            <p className="text-sm text-muted leading-relaxed">
              GSAT 是本地优先应用。所有数据存储在您设备的 SQLite 数据库中，Token 保存在系统凭证管理器（macOS Keychain / Windows 凭据管理器）。
              AI 仅在您主动搜索或分析时调用，用户笔记默认不发送给 AI。您的数据始终在您的掌控之中。
            </p>
          </div>
        </motion.div>
      </section>

      <CTA />
    </>
  );
}
