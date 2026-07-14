import { ArrowUpRight, CalendarDays, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const RELEASE_URL = 'https://github.com/xingranya/GitHub-Stars-AI-Tools/releases/tag/v1.3.0';

const CHANGE_GROUPS = [
  {
    title: '全新欢迎流程',
    items: [
      '统一顶栏、步骤栏和主内容面板，连接 GitHub、同步数据与完成设置的过程更清晰。',
      '新增知识网络插画，集中说明本地优先、智能检索和 AI 增强三项核心能力。',
      '针对窄窗口与较低高度优化排版，保证操作区域始终可用。',
    ],
  },
  {
    title: '知识库与标签网络',
    items: [
      '知识库调整为更紧凑的三栏工作区，筛选条件可自动换行。',
      '仓库列表与 AI 项目知识卡支持更稳定的拖动调宽体验。',
      '标签网络新增热门标签、分组、标签云和热度信息，图谱工具栏更直接。',
    ],
  },
  {
    title: '搜索、发现与排行榜',
    items: [
      'AI 搜索、发现和排行榜统一页面容器、状态样式与信息层级。',
      '排行榜改为“开源榜单 / 我的 Stars”切换，并保留筛选、分页、刷新和收藏操作。',
    ],
  },
  {
    title: '视觉与主题',
    items: [
      '标签网络、AI 搜索、知识库、发现和排行榜采用统一的浅色视觉体系。',
      '暗色模式同步调整主题变量，切换主题时保持一致的层级与可读性。',
    ],
  },
];

const PREVIOUS_RELEASES = [
  { version: 'v1.2.0', description: '新增 AI 同类项目推荐、开源排行榜、个人 Stars 榜单与完整分页同步。' },
  { version: 'v1.1.2', description: '完善 AI 配置、本地模型兼容、仓库清单导入导出与概览体验。' },
  { version: 'v1.0.1', description: '首个完整桌面版本，带来 AI 搜索、README 解析与应用内更新。' },
];

export default function Changelog() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary/15 text-primary text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            最新版本 v1.3.0
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold text-ink-heading tracking-tight text-balance"
          >
            更新日志
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-4 text-muted text-[clamp(0.95rem,1.3vw,1.06rem)] leading-relaxed"
          >
            v1.3 聚焦桌面端的视觉与信息层级重构，让管理、发现与检索 Stars 的体验更清晰一致。
          </motion.p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-5 lg:px-8 pb-[clamp(3.5rem,7vw,6rem)]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-[14px] overflow-hidden"
        >
          <header className="p-7 md:p-8 border-b border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-ink-heading">v1.3.0</h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <CalendarDays className="w-4 h-4" />
                2026 年 7 月 14 日发布
              </p>
            </div>
            <a
              href={RELEASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-[10px] bg-primary text-primary-fg px-4 py-2.5 text-sm font-semibold hover:bg-primary-hover transition-colors"
            >
              GitHub 发布说明
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </header>

          <div className="p-7 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            {CHANGE_GROUPS.map((group) => (
              <section key={group.title}>
                <h3 className="font-heading text-base font-bold text-ink-heading mb-3">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </motion.article>

        <section className="mt-8">
          <h2 className="font-heading text-lg font-bold text-ink-heading mb-4">历史版本</h2>
          <div className="divide-y divide-border border-y border-border">
            {PREVIOUS_RELEASES.map((release) => (
              <a
                key={release.version}
                href={`https://github.com/xingranya/GitHub-Stars-AI-Tools/releases/tag/${release.version}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start justify-between gap-5 py-5 text-left hover:bg-surface-hover transition-colors"
              >
                <div>
                  <h3 className="font-heading text-sm font-bold text-ink-heading">{release.version}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{release.description}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 text-muted group-hover:text-primary transition-colors mt-1" />
              </a>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
