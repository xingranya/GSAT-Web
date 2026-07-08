import { Github, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface StepProps {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
  delay: number;
}

function Step({ icon: Icon, step, title, description, delay }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col items-center text-center"
    >
      {/* 步骤编号 */}
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-2xl bg-primary-soft flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-fg text-xs font-bold flex items-center justify-center shadow-md">
          {step}
        </span>
      </div>
      <h3 className="font-heading text-lg font-bold text-ink-heading mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed max-w-[280px]">{description}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-[clamp(3.5rem,7vw,6rem)] bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[clamp(1.75rem,3vw,2.25rem)] font-extrabold text-ink-heading tracking-tight text-balance"
          >
            三步，重构您的星标库
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted mt-4 max-w-md mx-auto"
          >
            从连接到智能，只需几分钟
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* 连接线 — 仅桌面 */}
          <div className="hidden md:block absolute top-8 left-[20%] right-[20%] h-px border-t-2 border-dashed border-border-strong" />

          <Step
            icon={Github}
            step="1"
            title="连接 GitHub"
            description="使用 Personal Access Token 安全连接，仅需只读权限，数据存储在系统凭证管理器中。"
            delay={0}
          />
          <Step
            icon={RefreshCw}
            step="2"
            title="同步 Stars"
            description="一键同步所有收藏的仓库，自动抓取 README 和元数据，构建本地知识库。"
            delay={0.1}
          />
          <Step
            icon={Sparkles}
            step="3"
            title="AI 分析"
            description="AI 为每个项目生成中文摘要、标签和知识卡片。开始用自然语言搜索您的知识库。"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
