import { Github, ArrowRight, Shield, Database, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';

/** 缓动曲线：快速启动，平滑收束 */
const EASE = [0.16, 1, 0.3, 1] as const;

/** 产品截图展示 */
function ProductMockup() {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
      className="w-full max-w-[960px] mx-auto mt-16"
    >
      <div className="rounded-[14px] border border-border-strong shadow-lg overflow-hidden">
        <img
          src="/screenshots/dashboard.png"
          alt="GitHub Stars AI 数据概览页，展示收藏仓库、AI 用量、语言分布和同步状态"
          className="w-full h-auto block"
          loading="eager"
          width={2922}
          height={2332}
        />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const reducedMotion = useReducedMotion();

  /** 版本标签：简单淡入 */
  const tagVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  /** 主标题：从中心向外展开揭示 */
  const titleVariants = {
    hidden: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
    visible: { opacity: 1, clipPath: 'inset(0 0% 0 0%)' },
  };

  /** 副标题和按钮：淡入上移 */
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  /** 信任指标容器：控制子元素逐个淡入 */
  const trustContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.65 },
    },
  };

  /** 信任指标单项 */
  const trustItemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 主光斑 */}
        <div
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px]"
          style={{
            background: 'radial-gradient(ellipse, oklch(0.570 0.147 263 / 0.10), transparent 65%)',
            filter: 'blur(80px)',
          }}
        />
        {/* 左侧冷色光斑 */}
        <div
          className="absolute top-[10%] left-[-5%] w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.580 0.130 260 / 0.07), transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        {/* 右侧暖色光斑 */}
        <div
          className="absolute top-[30%] right-[-8%] w-[350px] h-[350px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.660 0.165 263 / 0.06), transparent 60%)',
            filter: 'blur(90px)',
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-8 pt-24 pb-8 lg:pt-28 lg:pb-12">
        <div className="flex flex-col items-center text-center">
          {/* 版本标签 */}
          <motion.div
            variants={tagVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary/15 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">v1.2 已发布 · 本地优先 · 隐私安全</span>
          </motion.div>

          {/* 主标题：clip-path 从中心展开 */}
          <motion.h1
            variants={reducedMotion ? fadeUpVariants : titleVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.45, delay: 0.1, ease: EASE }}
            className="font-heading text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] font-extrabold text-ink-heading max-w-3xl tracking-tight text-balance"
          >
            <motion.span className="inline-block">赋予您的 GitHub Stars</motion.span>
            <br />
            <motion.span className="inline-block text-primary">第二生命</motion.span>
          </motion.h1>

          {/* 副标题和按钮：加大延迟，等标题先落地 */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            className="text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-muted max-w-2xl mt-6"
          >
            <p>
              不再让优秀的开源项目沉睡在列表深处。通过 AI 驱动的本地知识库，
              让每一次 Star 都能在需要时被精准召回。
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.58, ease: EASE }}
            className="flex flex-col sm:flex-row gap-3 mt-10"
          >
            <Link
              to="/download"
              className="bg-primary text-primary-fg px-7 py-3.5 rounded-[10px] text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Github className="w-[18px] h-[18px]" />
              免费下载
            </Link>
            <Link
              to="/features"
              className="bg-surface text-foreground px-7 py-3.5 rounded-[10px] text-sm font-semibold border border-border hover:border-border-strong hover:bg-surface-hover transition-colors flex items-center justify-center gap-2"
            >
              了解更多
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* 信任指标：逐个淡入 */}
          <motion.div
            variants={trustContainerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-xs text-muted"
          >
            <motion.span
              variants={trustItemVariants}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-center gap-1.5"
            >
              <Database className="w-4 h-4 text-primary" />
              本地 SQLite 存储
            </motion.span>
            <motion.span
              variants={trustItemVariants}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-center gap-1.5"
            >
              <Shield className="w-4 h-4 text-primary" />
              数据不出设备
            </motion.span>
            <motion.span
              variants={trustItemVariants}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              多 AI 提供商支持
            </motion.span>
          </motion.div>

          {/* 产品模拟界面 */}
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
