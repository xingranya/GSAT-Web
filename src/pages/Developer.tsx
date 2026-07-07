import { BookOpen, Github, Code, ArrowRight, RefreshCw, Box } from 'lucide-react';
import { motion } from 'motion/react';

export default function Developer() {
  return (
    <div className="py-12">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl text-foreground font-[820] mb-6 tracking-tight"
        >
          构建你的 AI 工作流
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-sans text-[17px] text-muted leading-[1.8]"
        >
          使用 GitHub Stars AI 提供的个人版 API 和 SDK，快速将智能化能力集成到你的开发流程中，提升生产力。
        </motion.p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* API Docs Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-8 rounded-2xl flex flex-col group hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-muted-bg text-foreground rounded-xl border border-border">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl font-[780] text-foreground">个人 API 文档</h2>
          </div>
          <p className="font-sans text-[15px] text-muted leading-[1.6] mb-8 flex-grow">
            探索全面的 RESTful API，用于管理星标、自动打标签和语义搜索。包含详细的请求/响应示例。
          </p>
          <button className="text-foreground font-sans text-[14px] font-[650] flex items-center gap-2 hover:underline w-fit cursor-pointer">
            查看完整文档 <ArrowRight className="w-4 h-4" />
          </button>
        </motion.section>

        {/* GitHub Integration Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-panel p-8 rounded-2xl flex flex-col group hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-muted-bg text-foreground rounded-xl border border-border">
              <Github className="w-6 h-6" />
            </div>
            <h2 className="font-heading text-2xl font-[780] text-foreground">GitHub 集成指南</h2>
          </div>
          <p className="font-sans text-[15px] text-muted leading-[1.6] mb-8 flex-grow">
            连接你的 GitHub 账户，授权应用读取星标列表，实现实时双向同步。
          </p>
          <button className="w-full bg-foreground text-background px-6 min-h-[48px] rounded-full font-sans text-[14px] font-[780] hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer shadow-sm">
            <RefreshCw className="w-4 h-4" />
            连接 GitHub 账户
          </button>
        </motion.section>
      </div>

      {/* SDK Matrix */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-panel p-8 rounded-2xl flex flex-col gap-8"
      >
        <div>
          <h2 className="font-heading text-2xl font-[780] text-foreground mb-3 flex items-center gap-3">
            <Code className="w-6 h-6 text-foreground" />
            个人版 SDK 矩阵
          </h2>
          <p className="font-sans text-[15px] text-muted">
            提供主流语言的官方客户端，内置重试机制和类型定义，开箱即用。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Box className="w-5 h-5 text-foreground" />
                <span className="font-sans font-[650] text-foreground">Python SDK</span>
                <span className="px-2 py-0.5 bg-muted-bg text-foreground text-[10px] font-mono rounded-full border border-border">v1.2.0</span>
              </div>
            </div>
            <div className="bg-muted-bg p-4 rounded-lg font-mono text-xs text-foreground border border-border mb-4 overflow-x-auto">
              pip install github-stars-ai
            </div>
            <p className="font-sans text-[14px] text-muted leading-[1.6]">
              完美支持异步调用，内置对 Pandas 的数据导出支持，适合数据分析场景。
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Box className="w-5 h-5 text-foreground" />
                <span className="font-sans font-[650] text-foreground">Node.js / TypeScript</span>
                <span className="px-2 py-0.5 bg-muted-bg text-foreground text-[10px] font-mono rounded-full border border-border">v2.0.1</span>
              </div>
            </div>
            <div className="bg-muted-bg p-4 rounded-lg font-mono text-xs text-foreground border border-border mb-4 overflow-x-auto">
              npm install @github-stars-ai/sdk
            </div>
            <p className="font-sans text-[14px] text-muted leading-[1.6]">
              完整的 TypeScript 类型定义，支持 Edge 运行时，适合 Next.js 等现代前端框架。
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
