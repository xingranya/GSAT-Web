import { useState } from 'react';
import { Shield, Zap, Unplug } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

const TECH_STACK = [
  {
    name: 'Tauri 2',
    role: '桌面框架',
    color: 'bg-[oklch(0.65_0.15_200)]',
    desc: '轻量级跨平台桌面运行时，用 WebView 渲染 UI，体积仅为 Electron 的十分之一',
  },
  {
    name: 'Rust',
    role: '后端引擎',
    color: 'bg-[oklch(0.55_0.12_25)]',
    desc: '核心业务逻辑与数据处理层，内存安全且零运行时开销',
  },
  {
    name: 'React 19',
    role: '前端 UI',
    color: 'bg-[oklch(0.60_0.17_250)]',
    desc: '声明式用户界面框架，配合 Server Components 实现高效渲染',
  },
  {
    name: 'SQLite',
    role: '本地存储',
    color: 'bg-[oklch(0.55_0.10_60)]',
    desc: '嵌入式数据库，所有数据保留在本地，无需云端同步',
  },
  {
    name: 'AI Providers',
    role: '多模型支持',
    color: 'bg-primary',
    desc: '兼容 OpenAI / Anthropic / 本地模型等多种后端，按需切换',
  },
];

/** 架构核心理念 */
const PRINCIPLES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Shield, title: '数据不出本机', desc: '所有记录与设置均存储在本地 SQLite，无需注册账号' },
  { icon: Zap, title: '原生性能体验', desc: 'Rust 驱动后端逻辑，启动快、占用低、无运行时负担' },
  { icon: Unplug, title: 'AI 模型自由切换', desc: '云端与本地模型均可接入，灵活适配不同使用场景' },
];

export default function TechStack() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-[clamp(3rem,6vw,5rem)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* 标题区：去掉大写追踪小标签，直接用标题 */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[clamp(1.5rem,2.5vw,1.875rem)] font-bold text-ink-heading tracking-tight"
          >
            现代技术栈，本地优先
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-sm text-muted mt-2 max-w-xl mx-auto"
          >
            Rust 处理核心逻辑，SQLite 存储一切数据，AI 模型按需接入 —— 无需云端，无需注册
          </motion.p>
        </div>

        {/* 技术标签 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
              onMouseEnter={() => setActiveIdx(i)}
              onMouseLeave={() => setActiveIdx(null)}
              className="relative flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border border-border bg-surface hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-default"
            >
              <span className={`w-2 h-2 rounded-full ${tech.color}`} />
              <span className="text-sm font-semibold text-foreground">{tech.name}</span>
              <span className="text-xs text-muted">{tech.role}</span>

              {/* Hover 气泡：展示该技术在架构中的角色 */}
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 w-64 p-3 rounded-lg bg-surface border border-border shadow-lg text-left pointer-events-none"
                  >
                    <p className="text-xs font-semibold text-foreground mb-1">{tech.name}</p>
                    <p className="text-xs text-muted leading-relaxed">{tech.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* 架构数据流 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-6"
        >
          {/* 流程线 */}
          <div className="flex items-center gap-0 text-xs text-muted">
            <span className="px-3 py-1.5 rounded-full border border-border bg-surface font-medium text-foreground">
              Tauri 2 桌面壳
            </span>
            <span className="mx-1.5 text-border select-none">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full border border-border bg-surface font-medium text-foreground">
              Rust 业务引擎
            </span>
            <span className="mx-1.5 text-border select-none">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full border border-border bg-surface font-medium text-foreground">
              SQLite 本地库
            </span>
            <span className="mx-1.5 text-border select-none">&rarr;</span>
            <span className="px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 font-medium text-primary">
              AI Provider
            </span>
          </div>

          {/* 架构理念三列 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-2">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="text-center p-4 rounded-xl border border-border bg-surface/50"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-soft flex items-center justify-center mx-auto mb-2">
                  <p.icon className="w-4.5 h-4.5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground mb-1">{p.title}</p>
                <p className="text-xs text-muted leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
