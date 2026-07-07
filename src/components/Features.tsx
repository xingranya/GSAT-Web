import { Search, Radar, Network, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  return (
    <section className="py-16">
      <h2 className="font-heading text-[clamp(28px,3vw,36px)] font-[820] text-foreground mb-10 text-center tracking-tight">释放您收藏的潜能</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[400px]">
        {/* Feature 1: Semantic Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-2xl p-8 flex flex-col md:col-span-2 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
        >
          <div className="flex-grow z-10">
            <div className="w-12 h-12 rounded-xl bg-muted-bg text-foreground flex items-center justify-center mb-6 border border-border">
              <Search className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading text-xl font-[780] text-foreground mb-3">多维语义搜索</h3>
            <p className="font-sans text-[15px] text-muted max-w-md leading-[1.6]">
              告别仅凭项目名称的模糊记忆。支持自然语言问答、代码片段匹配及意图识别，毫秒级定位您需要的仓库。
            </p>
          </div>
          
          <div className="mt-8 bg-background/80 rounded-xl p-4 border border-border shadow-sm z-10">
            <div className="flex items-center gap-3 bg-muted-bg px-4 py-3 rounded-lg border border-border">
              <Search className="w-4 h-4 text-muted" />
              <span className="font-mono text-[13px] text-foreground">"处理大规模实时数据的 Rust 队列库"</span>
              <span className="ml-auto font-mono text-[11px] text-muted border border-border px-1.5 py-0.5 rounded bg-background">⌘ K</span>
            </div>
          </div>
        </motion.div>

        {/* Feature 2: Skill Profile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-2xl p-8 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-500"
        >
          <div className="flex-grow z-10">
            <div className="w-12 h-12 rounded-xl bg-muted-bg text-foreground flex items-center justify-center mb-6 border border-border">
              <Radar className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="font-heading text-xl font-[780] text-foreground mb-3">技能画像分析</h3>
            <p className="font-sans text-[15px] text-muted leading-[1.6]">
              基于您的 Star 历史，智能分析技术栈偏好，生成动态的个人开发者技能雷达图。
            </p>
          </div>
          
          <div className="mt-8 flex justify-center items-center h-40 opacity-80 z-10">
            <div className="relative w-32 h-32 border border-border rounded-full flex items-center justify-center">
              <div className="absolute w-24 h-24 border border-border rounded-full"></div>
              <div className="absolute w-16 h-16 border border-border rounded-full"></div>
              <svg className="absolute w-full h-full text-foreground opacity-20" viewBox="0 0 100 100">
                <polygon fill="currentColor" points="50,15 85,35 75,80 25,80 15,35" stroke="currentColor" strokeWidth="2"></polygon>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Feature 3: Tech Graph */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-2xl p-8 flex flex-col md:col-span-3 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
        >
          <div className="flex-grow z-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-xl bg-muted-bg text-foreground flex items-center justify-center mb-6 border border-border">
                <Network className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-[780] text-foreground mb-3">个人技术图谱</h3>
              <p className="font-sans text-[15px] text-muted mb-6 leading-[1.6]">
                自动将孤立的仓库关联起来。发现前端框架与特定构建工具之间的隐藏联系，构建属于您的可视化知识网络。
              </p>
              <button className="text-foreground font-sans text-sm font-[650] flex items-center gap-1 hover:underline group-hover:gap-2 transition-all cursor-pointer">
                探索图谱示例 <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="md:w-2/3 h-64 w-full bg-muted-bg rounded-xl border border-border p-4 relative overflow-hidden flex items-center justify-center z-10">
              <div className="absolute w-12 h-12 bg-background rounded-full shadow-sm flex items-center justify-center border border-border z-20" style={{ top: '20%', left: '30%' }}>
                <span className="font-mono text-[10px] text-foreground">React</span>
              </div>
              <div className="absolute w-16 h-16 bg-background text-foreground rounded-full shadow-md flex items-center justify-center border border-border z-20 animate-pulse" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <span className="font-mono text-xs font-[780] text-foreground">Vite</span>
              </div>
              <div className="absolute w-10 h-10 bg-background rounded-full shadow-sm flex items-center justify-center border border-border z-20" style={{ top: '70%', left: '25%' }}>
                <span className="font-mono text-[9px] text-foreground">Tailwind</span>
              </div>
              <div className="absolute w-14 h-14 bg-background rounded-full shadow-sm flex items-center justify-center border border-border z-20" style={{ top: '30%', right: '25%' }}>
                <span className="font-mono text-[9px] text-foreground">TypeScript</span>
              </div>
              
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                <line opacity="0.5" stroke="var(--color-border)" strokeDasharray="4" strokeWidth="1.5" x1="35%" x2="48%" y1="28%" y2="45%"></line>
                <line opacity="0.5" stroke="var(--color-border)" strokeWidth="1.5" x1="28%" x2="45%" y1="68%" y2="55%"></line>
                <line opacity="0.5" stroke="var(--color-border)" strokeWidth="1.5" x1="72%" x2="55%" y1="35%" y2="48%"></line>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
