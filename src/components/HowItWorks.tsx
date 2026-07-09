import { Github, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface StepData {
  icon: LucideIcon;
  title: string;
  detail: string;
  caption: string;
  /** 动画入场方向：左或右 */
  direction: 'left' | 'right';
  delay: number;
}

const steps: StepData[] = [
  {
    icon: Github,
    title: '连接您的 GitHub',
    detail: '粘贴 Personal Access Token，仅需只读权限',
    caption: '凭证保存在系统密钥链中，不上传任何服务器',
    direction: 'left',
    delay: 0,
  },
  {
    icon: RefreshCw,
    title: '一键同步所有 Stars',
    detail: '自动抓取 README、技术栈、活跃度等元数据',
    caption: '构建专属于您的本地仓库知识库',
    direction: 'right',
    delay: 0.08,
  },
  {
    icon: Sparkles,
    title: 'AI 为每个项目生成卡片',
    detail: '中文摘要、标签分类、知识图谱一键生成',
    caption: '之后用自然语言搜索，找到真正需要的项目',
    direction: 'left',
    delay: 0.16,
  },
];

/** 交替布局的步骤项 */
function StepRow({ icon: Icon, title, detail, caption, direction, delay }: StepData) {
  const isLeft = direction === 'left';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, x: isLeft ? -32 : 32 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-start gap-5 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col`}
    >
      {/* 图标容器 */}
      <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary-soft flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      {/* 文案 */}
      <div
        className={`flex-1 max-w-[420px] ${
          isLeft ? 'md:text-left' : 'md:text-right'
        } text-center md:text-inherit`}
      >
        <h3 className="font-heading text-xl font-bold text-ink-heading mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-ink-body leading-relaxed">{detail}</p>
        <p className="text-xs text-muted mt-2">{caption}</p>
      </div>

      {/* 填充空间，推挤文案到对侧（仅桌面） */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section className="py-[clamp(3.5rem,7vw,6rem)] bg-surface">
      <div className="max-w-[900px] mx-auto px-5 lg:px-8">
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

        {/* 交替步骤 */}
        <div className="flex flex-col gap-14">
          {steps.map((step) => (
            <StepRow key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
