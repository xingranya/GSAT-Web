import { Github, ArrowRight, Shield, Database, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

/** 产品截图展示 */
function ProductMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[960px] mx-auto mt-16"
    >
      <div className="rounded-[14px] border border-border-strong shadow-lg overflow-hidden">
        <img
          src="/screenshots/main.png"
          alt="GitHub Stars AI 主界面 — 仓库知识库和 AI 分析"
          className="w-full h-auto block"
          loading="eager"
        />
      </div>
    </motion.div>
  );
}
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 背景装饰 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.480 0.140 240 / 0.06), transparent)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5 lg:px-8 pt-20 pb-8 lg:pt-28 lg:pb-12">
        <div className="flex flex-col items-center text-center">
          {/* 版本标签 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft border border-primary/15 mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">v1.0 已发布 · 本地优先 · 隐私安全</span>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] font-extrabold text-ink-heading max-w-3xl tracking-tight text-balance"
          >
            赋予您的 GitHub Stars
            <br />
            <span className="text-primary">第二生命</span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed text-muted max-w-2xl mt-6"
          >
            不再让优秀的开源项目沉睡在列表深处。通过 AI 驱动的本地知识库，
            让每一次 Star 都能在需要时被精准召回。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
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

          {/* 信任指标 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-xs text-muted"
          >
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-primary" />
              本地 SQLite 存储
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary" />
              数据不出设备
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              多 AI 提供商支持
            </span>
          </motion.div>

          {/* 产品模拟界面 */}
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
