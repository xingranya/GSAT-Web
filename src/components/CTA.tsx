import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-[clamp(3.5rem,7vw,6rem)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[18px] overflow-hidden bg-ink-heading p-[clamp(2.5rem,5vw,4rem)] text-center"
        >
          {/* 背景光晕 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '600px',
              height: '300px',
              background: 'radial-gradient(ellipse, oklch(0.480 0.140 240 / 0.20), transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-extrabold text-background tracking-tight mb-4 text-balance">
              准备好重构您的星标库了吗？
            </h2>
            <p className="text-[oklch(0.800 0.008 260)] text-sm leading-relaxed mb-8">
              安全连接您的 GitHub 账户，仅需几秒钟，体验前所未有的知识管理方式。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/download"
                className="bg-primary text-primary-fg px-7 py-3.5 rounded-[10px] text-sm font-semibold hover:bg-primary-hover transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Github className="w-[18px] h-[18px]" />
                免费下载
              </Link>
              <Link
                to="/features"
                className="bg-transparent text-background px-7 py-3.5 rounded-[10px] text-sm font-semibold border border-[oklch(0.350 0.012 260)] hover:border-[oklch(0.500 0.012 260)] transition-colors flex items-center justify-center gap-2"
              >
                了解更多
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-[oklch(0.550 0.010 260)] text-[11px] mt-5 font-mono">
              需要只读访问权限 · 随时可撤销 · PolyForm Noncommercial 许可
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
