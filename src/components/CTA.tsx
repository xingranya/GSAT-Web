import { Rocket, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 mb-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-2xl p-12 text-center relative overflow-hidden bg-muted-bg border border-border"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-[100%] blur-[80px] pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <Rocket className="w-10 h-10 text-foreground mb-6 mx-auto" />
          <h2 className="font-heading text-3xl md:text-4xl font-[820] text-foreground mb-4 tracking-tight">准备好重构您的星标库了吗？</h2>
          <p className="font-sans text-[17px] text-muted mb-8 leading-[1.8]">
            安全连接您的 GitHub 账户，仅需几秒钟，体验前所未有的知识管理方式。
          </p>
          <button className="bg-foreground text-background px-10 py-4 min-h-[58px] rounded-full font-sans text-[15px] font-[780] hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-3 mx-auto cursor-pointer">
            <Github className="w-5 h-5" />
            立即授权 GitHub
          </button>
          <p className="font-mono text-[11px] text-muted mt-4">需要只读访问权限。随时可以撤销授权。</p>
        </div>
      </motion.div>
    </section>
  );
}
