import { Github, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface StepData {
  icon: LucideIcon;
  title: string;
  detail: string;
  caption: string;
}

const steps: StepData[] = [
  {
    icon: Github,
    title: '连接您的 GitHub',
    detail: '粘贴 Personal Access Token，仅需只读权限',
    caption: '凭证保存在系统密钥链中，不上传任何服务器',
  },
  {
    icon: RefreshCw,
    title: '一键同步所有 Stars',
    detail: '自动抓取 README、技术栈、活跃度等元数据',
    caption: '构建专属于您的本地仓库知识库',
  },
  {
    icon: Sparkles,
    title: 'AI 为每个项目生成卡片',
    detail: '中文摘要、标签分类、知识图谱一键生成',
    caption: '之后用自然语言搜索，找到真正需要的项目',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[clamp(3.5rem,7vw,6rem)] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold text-ink-heading tracking-tight text-balance"
          >
            三步，重构您的星标库
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted mt-4 max-w-md mx-auto"
          >
            从连接到智能，只需几分钟
          </motion.p>
        </div>

        {/* 横向步骤卡：序号 + 图标 + 文案 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-[14px] p-7 flex flex-col group hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center group-hover:scale-105 transition-transform">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="font-heading text-3xl font-extrabold text-primary/15 select-none" aria-hidden="true">
                  0{i + 1}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-ink-heading mb-1.5">
                {step.title}
              </h3>
              <p className="text-sm text-foreground leading-relaxed">{step.detail}</p>
              <p className="text-xs text-muted mt-2">{step.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
