import { useRef } from 'react';
import { Download, ArrowRight, Shield, Database, Sparkles } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

/** 缓动曲线：快速启动，平滑收束 */
const EASE = [0.16, 1, 0.3, 1] as const;

/** 英雄镜头展示阶段：截图主体随滚动驻留并依次切换 */
const SHOWCASE_STAGES = [
  {
    src: '/screenshots/dashboard.png',
    alt: 'GitHub Stars AI 数据概览页，展示收藏仓库、AI 用量、语言分布和同步状态',
    title: '数据概览',
    desc: '收藏规模、AI 进度与语言分布，打开即见。',
  },
  {
    src: '/screenshots/ai-search.png',
    alt: '对话式 AI 搜索界面，左侧为 AI 对话，右侧为匹配的仓库结果',
    title: '对话式 AI 搜索',
    desc: '自然语言提问，本地向量检索精准召回。',
  },
  {
    src: '/screenshots/tag-network.png',
    alt: 'AI 标签网络可视化，展示收藏项目之间的标签关联',
    title: 'AI 标签网络',
    desc: '自动发现收藏之间的隐藏关联。',
  },
] as const;

/**
 * 滚动驱动的英雄镜头：300vh 滚动区间内截图主体 sticky 驻留，
 * 随滚动进度交叉切换三个阶段，截图轻微推近，文案与指示点同步过渡。
 */
function ScrollShowcase() {
  const reducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 驻留期间缓慢推近，让主体保持“活”的状态
  const frameScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 0.975, 1]);

  // 三个阶段的不透明度：概览 → AI 搜索 → 标签网络
  // 注意：区间必须显式覆盖 [0,1] 全程，两点式区间会在结尾出现异常回绕
  const stageOneOpacity = useTransform(scrollYProgress, [0, 0.30, 0.42, 1], [1, 1, 0, 0]);
  const stageTwoOpacity = useTransform(scrollYProgress, [0, 0.32, 0.44, 0.58, 0.70, 1], [0, 0, 1, 1, 0, 0]);
  const stageThreeOpacity = useTransform(scrollYProgress, [0, 0.60, 0.72, 1], [0, 0, 1, 1]);
  const stageOpacities = [stageOneOpacity, stageTwoOpacity, stageThreeOpacity];

  // 阶段文案：随切换上浮/离场
  const captionOneY = useTransform(scrollYProgress, [0, 0.30, 0.42, 1], [0, 0, -14, -14]);
  const captionTwoY = useTransform(scrollYProgress, [0, 0.32, 0.44, 0.58, 0.70, 1], [14, 14, 0, 0, -14, -14]);
  const captionThreeY = useTransform(scrollYProgress, [0, 0.60, 0.72, 1], [14, 14, 0, 0]);
  const captionYs = [captionOneY, captionTwoY, captionThreeY];

  // 阶段指示点
  const dotOneOpacity = useTransform(scrollYProgress, [0, 0.30, 0.42, 1], [1, 1, 0.3, 0.3]);
  const dotTwoOpacity = useTransform(scrollYProgress, [0, 0.32, 0.44, 0.58, 0.70, 1], [0.3, 0.3, 1, 1, 0.3, 0.3]);
  const dotThreeOpacity = useTransform(scrollYProgress, [0, 0.60, 0.72, 1], [0.3, 0.3, 1, 1]);
  const dotOpacities = [dotOneOpacity, dotTwoOpacity, dotThreeOpacity];

  // 减少动态偏好：退化为单张静态截图
  if (reducedMotion) {
    return (
      <div className="w-full max-w-[960px] mx-auto mt-16">
        <div className="rounded-[14px] border border-border-strong shadow-lg overflow-hidden">
          <img
            src="/screenshots/dashboard.png"
            alt={SHOWCASE_STAGES[0].alt}
            className="w-full h-auto block"
            loading="eager"
            width={2922}
            height={2332}
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] mt-10">
      <div className="sticky top-16 h-[calc(100svh-4rem)] flex flex-col items-center justify-center gap-5 px-5">
        {/* 截图主体：移动端竖版画框放大裁切中心区，桌面端完整展示 */}
        <motion.div
          style={{ scale: frameScale }}
          className="relative w-full max-w-[980px] aspect-[3/4] sm:aspect-[16/10] max-h-[58vh] rounded-[14px] border border-border-strong shadow-lg overflow-hidden bg-surface"
        >
          {SHOWCASE_STAGES.map((stage, i) => (
            <motion.img
              key={stage.src}
              src={stage.src}
              alt={stage.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover object-center sm:object-contain"
              style={{ opacity: stageOpacities[i] }}
            />
          ))}
        </motion.div>

        {/* 阶段文案：同位堆叠，随阶段切换 */}
        <div className="relative h-16 w-full max-w-[980px] text-center">
          {SHOWCASE_STAGES.map((stage, i) => (
            <motion.div
              key={stage.title}
              className="absolute inset-0"
              style={{ opacity: stageOpacities[i], y: captionYs[i] }}
            >
              <h3 className="font-heading text-lg font-bold text-ink-heading">{stage.title}</h3>
              <p className="text-sm text-muted mt-1">{stage.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 阶段指示点 */}
        <div className="flex items-center gap-2" aria-hidden="true">
          {SHOWCASE_STAGES.map((stage, i) => (
            <motion.span
              key={stage.src}
              className="w-1.5 h-1.5 rounded-full bg-primary"
              style={{ opacity: dotOpacities[i] }}
            />
          ))}
        </div>
      </div>
    </div>
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
    <section className="relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 细网格纹理：避开顶部导航毛玻璃区域，向下渐隐 */}
        <div
          className="absolute inset-0 bg-grid"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 70%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 70%, transparent 100%)',
          }}
        />
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
            <span className="text-xs font-medium text-primary">v1.5.3 已发布 · 本地向量检索 · 离线可用</span>
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
            <motion.span className="inline-block text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">第二生命</motion.span>
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
              <Download className="w-[18px] h-[18px]" />
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

          {/* 滚动驱动的英雄镜头 */}
          <ScrollShowcase />
        </div>
      </div>
    </section>
  );
}
