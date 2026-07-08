import { motion } from 'motion/react';

const TECH_STACK = [
  { name: 'Tauri 2', role: '桌面框架', color: 'bg-[oklch(0.65_0.15_200)]' },
  { name: 'Rust', role: '后端引擎', color: 'bg-[oklch(0.55_0.12_25)]' },
  { name: 'React 19', role: '前端 UI', color: 'bg-[oklch(0.60_0.17_250)]' },
  { name: 'SQLite', role: '本地存储', color: 'bg-[oklch(0.55_0.10_60)]' },
  { name: 'AI Providers', role: '多模型支持', color: 'bg-primary' },
];

export default function TechStack() {
  return (
    <section className="py-[clamp(3rem,6vw,5rem)]">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium text-muted uppercase tracking-wider"
          >
            技术架构
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-heading text-[clamp(1.5rem,2.5vw,1.875rem)] font-bold text-ink-heading mt-2 tracking-tight"
          >
            现代技术栈，本地优先
          </motion.h2>
        </div>

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
              className="flex items-center gap-3 pl-1.5 pr-4 py-1.5 rounded-full border border-border bg-surface hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group"
            >
              <span className={`w-2 h-2 rounded-full ${tech.color}`} />
              <span className="text-sm font-semibold text-foreground">{tech.name}</span>
              <span className="text-xs text-muted">{tech.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
