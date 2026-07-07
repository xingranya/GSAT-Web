import { Cpu, Network, Languages, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Architecture() {
  return (
    <div className="py-12">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl text-foreground font-[820] mb-6 tracking-tight"
        >
          探索核心技术架构
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-[17px] text-muted leading-[1.8]"
        >
          深入了解驱动 GitHub Stars AI 的底层技术。我们结合了先进的 Transformer 架构、高效的向量检索与深度自然语言处理，为您提供卓越的代码分析与搜索体验。
        </motion.p>
      </header>

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl flex flex-col gap-6 relative overflow-hidden group hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4 z-10">
              <div className="p-3 bg-muted-bg text-foreground rounded-xl border border-border">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-[780] text-foreground">下一代 AI 分析引擎</h2>
            </div>
            <p className="font-sans text-[15px] text-muted leading-[1.6] z-10">
              基于最新的 Transformer 架构深度优化的代码分析引擎。不仅能理解代码语法，更能洞察代码背后的设计意图和架构逻辑，实现真正意义上的语义级代码理解。
            </p>
            
            <div className="mt-4 flex-grow bg-background rounded-xl border border-border p-6 flex flex-col gap-4 z-10 relative overflow-hidden">
              <div className="w-full h-32 flex justify-between items-end gap-3 px-2 pb-2 border-b border-border relative">
                <div className="w-1/5 bg-foreground/20 rounded-t-md h-12 relative overflow-hidden group-hover:h-16 transition-all duration-300"></div>
                <div className="w-1/5 bg-foreground/40 rounded-t-md h-20 relative overflow-hidden group-hover:h-24 transition-all duration-300"></div>
                <div className="w-1/5 bg-foreground/60 rounded-t-md h-24 relative overflow-hidden group-hover:h-32 transition-all duration-300"></div>
                <div className="w-1/5 bg-foreground/80 rounded-t-md h-16 relative overflow-hidden group-hover:h-20 transition-all duration-300"></div>
                <div className="w-1/5 bg-foreground rounded-t-md h-32 relative overflow-hidden"></div>
              </div>
              <div className="flex justify-between text-center font-mono text-[10px] text-muted z-10 uppercase tracking-wider">
                <span>解析</span>
                <span>分词</span>
                <span>编码</span>
                <span>注意力</span>
                <span className="text-foreground font-[780] flex items-center gap-1 justify-center">
                  <Sparkles className="w-3 h-3" />语义提取
                </span>
              </div>
            </div>
          </motion.section>

          {/* Card 2 */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl flex flex-col gap-6 group hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted-bg text-foreground rounded-xl border border-border">
                <Network className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-[780] text-foreground">大规模向量索引</h2>
            </div>
            <p className="font-sans text-[15px] text-muted leading-[1.6]">
              采用优化的 HNSW (Hierarchical Navigable Small World) 算法，构建高效的多层图结构索引。在亿级代码向量库中实现毫秒级响应，确保搜索过程既精准又迅速。
            </p>
            
            <div className="mt-auto h-48 bg-background rounded-xl border border-border relative overflow-hidden p-4 flex items-center justify-center">
              <Network className="w-32 h-32 text-foreground opacity-20" strokeWidth={1} />
            </div>
          </motion.section>
        </div>

        {/* Card 3 */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-shadow"
        >
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-muted-bg text-foreground rounded-xl border border-border">
                <Languages className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl font-[780] text-foreground">上下文感知语义分析</h2>
            </div>
            <p className="font-sans text-[15px] text-muted leading-[1.6]">
              打破传统的关键字匹配限制。我们的自然语言处理模块能够理解开发者的真实查询意图，结合代码上下文、文档注释以及社区讨论，提供智能化、贴合实际开发场景的深度搜索结果。
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-4 py-1.5 bg-background text-foreground font-sans text-[13px] font-[520] rounded-full border border-border">
                意图识别
              </span>
              <span className="px-4 py-1.5 bg-background text-foreground font-sans text-[13px] font-[520] rounded-full border border-border">
                跨语言映射
              </span>
              <span className="px-4 py-1.5 bg-background text-foreground font-sans text-[13px] font-[520] rounded-full border border-border">
                领域词库
              </span>
            </div>
          </div>
          <div className="flex-1 w-full bg-background rounded-xl border border-border p-6 relative">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-4 bg-muted-bg rounded-lg border border-border">
                <Sparkles className="w-4 h-4 text-foreground" />
                <span className="font-mono text-[13px] text-foreground">"如何在 React 中处理复杂的全局状态并持久化？"</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 text-center mt-2">
                <div className="bg-muted-bg p-3 rounded-xl border border-border">
                  <span className="block font-sans text-[11px] font-[780] text-foreground mb-1">技术栈</span>
                  <span className="font-sans text-[12px] text-muted">React, Redux</span>
                </div>
                <div className="bg-muted-bg p-3 rounded-xl border border-border">
                  <span className="block font-sans text-[11px] font-[780] text-foreground mb-1">核心意图</span>
                  <span className="font-sans text-[12px] text-muted">状态管理</span>
                </div>
                <div className="bg-muted-bg p-3 rounded-xl border border-border">
                  <span className="block font-sans text-[11px] font-[780] text-foreground mb-1">场景</span>
                  <span className="font-sans text-[12px] text-muted">复杂全局状态</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
