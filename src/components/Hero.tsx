import { Github, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 lg:py-32 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted-bg border border-border mb-6 shadow-sm"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="font-sans text-xs font-medium text-muted">AI-Powered Star Management V2.0</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-[clamp(36px,4.2vw,56px)] leading-[1.06] font-[820] text-foreground mb-6 max-w-4xl tracking-tight"
      >
        赋予您的 GitHub Stars<br/>第二生命
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-sans text-[17px] font-[460] leading-[1.8] text-muted max-w-2xl mb-10"
      >
        不再让优秀的开源项目沉睡在列表深处。通过智能化引擎重塑您的代码知识库，让每一次 Star 都能在需要时被精准召回。
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
      >
        <button className="bg-primary text-primary-fg px-8 min-h-[58px] rounded-full font-sans text-[15px] font-[780] hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-2 cursor-pointer">
          <Github className="w-5 h-5" />
          立即授权 GitHub
        </button>
        <button className="bg-transparent text-foreground px-8 min-h-[58px] rounded-full font-sans text-[15px] font-[780] hover:bg-muted-bg transition-colors flex items-center justify-center gap-2 border border-border cursor-pointer">
          <Info className="w-5 h-5" />
          了解工作原理
        </button>
      </motion.div>
    </section>
  );
}
