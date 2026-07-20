import { ArrowUpRight, CalendarDays, CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const RELEASE_URL = 'https://github.com/xingranya/GitHub-Stars-AI-Tools/releases/tag/v1.5.3';

const CHANGE_GROUPS = [
  {
    title: '本地向量检索',
    items: [
      '新用户默认使用本地 Embedding，首次开启向量检索时会确认约 490 MB 模型下载。',
      '下载阶段展示真实文件进度，完成后自动校验、加载模型、生成向量并构建索引，就绪后可断网检索。',
      '修复首次启用时开关无响应、状态闪动恢复，以及未下载模型用户缺少引导的问题。',
    ],
  },
  {
    title: 'zvec 建库稳定性',
    items: [
      '修复仓库编号含特殊字符导致整批索引构建失败的问题，主键改用稳定哈希。',
      '建库失败会正确结束进度并保留可重试信息，不再让界面一直停留在 100%。',
      'SQLite 继续作为向量事实源，索引损坏或不一致时可重新生成，不影响 Stars、标签、笔记和 AI 摘要。',
    ],
  },
  {
    title: 'AI 搜索结果一致性',
    items: [
      '搜索改为两阶段筛选：本地向量索引先召回候选，再由 AI 选出真正相关的仓库。',
      'AI 回答与仓库列表使用同一份结构化结果，不再出现列表之外的项目或为凑数加入的无关结果。',
      'AI 筛选失败时自动回退到严格的本地证据结果，并给出可操作提示。',
    ],
  },
  {
    title: '更清晰的搜索过程',
    items: [
      '发起新搜索后立即清空上一轮结果，不再提前展示未经 AI 核对的候选仓库。',
      '依次展示“理解问题、向量召回、核对证据、AI 筛选”阶段，完成后才显示最终仓库。',
      '进度、空结果、降级和失败状态重新设计，“仍在搜索”与“已得到结果”清晰可辨。',
    ],
  },
  {
    title: '增量 AI 解析',
    items: [
      '“批量 AI”升级为“增量 AI”，只处理尚无 AI 摘要或 README 内容已变化的仓库。',
      '已是最新状态的仓库在查询阶段直接排除，失败仓库可单独重试且不会回滚已有数据。',
    ],
  },
  {
    title: '设置体验',
    items: [
      '向量检索移动到设置页顶栏独立 Tab，集中展示开关、运行状态、索引数量和模型占用。',
      '本地向量设置与远程 Embedding 高级配置分层显示，AI 服务卡片信息层级更清晰。',
    ],
  },
];

const PREVIOUS_RELEASES = [
  { version: 'v1.5.1', description: '本地向量检索完整发布：内置中英双语模型、离线语义搜索与自动增量建库。' },
  { version: 'v1.5.0', description: '首次带来完整本地向量检索能力，中英文自然语言检索可完全离线运行。' },
  { version: 'v1.3.0', description: '桌面端视觉与信息层级重构：全新欢迎流程、知识库三栏工作区与统一浅色体系。' },
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
            最新版本 v1.5.3
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
            v1.5 带来完全本地运行的向量检索：内置中英双语模型、离线语义搜索，并让 AI 搜索结果更可靠。
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
              <h2 className="font-heading text-2xl font-extrabold text-ink-heading">v1.5.3</h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                <CalendarDays className="w-4 h-4" />
                2026 年 7 月 15 日发布
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
