import { Monitor, Laptop, Download as DownloadIcon, Shield, AlertTriangle, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

interface Platform {
  icon: LucideIcon;
  name: string;
  arch: string;
  format: string;
  size: string;
  note?: string;
}

const PLATFORMS: Platform[] = [
  {
    icon: Monitor,
    name: 'macOS',
    arch: 'Apple Silicon (M1+)',
    format: '.dmg',
    size: '~7.8 MB',
  },
  {
    icon: Monitor,
    name: 'macOS',
    arch: 'Intel',
    format: '.dmg',
    size: '~8 MB',
  },
  {
    icon: Monitor,
    name: 'Windows',
    arch: 'x64',
    format: '.exe (NSIS)',
    size: '~12 MB',
  },
  {
    icon: Laptop,
    name: 'Linux',
    arch: 'x64',
    format: '.deb / .rpm / .AppImage',
    size: '~14 MB',
    note: '取决于发行版',
  },
];

export default function Download() {
  return (
    <>
      {/* 页面标题 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 pt-12 lg:pt-20 pb-4">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[clamp(2rem,4vw,3rem)] font-extrabold text-ink-heading tracking-tight text-balance"
          >
            下载 GSAT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-muted text-[clamp(0.95rem,1.3vw,1.06rem)] mt-4 leading-relaxed"
          >
            支持 macOS、Windows 和 Linux。免费使用，本地运行，数据不出您的设备。
          </motion.p>
        </div>
      </section>

      {/* 平台下载卡片 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLATFORMS.map((platform, i) => (
            <motion.div
              key={`${platform.name}-${platform.arch}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-[14px] p-6 flex flex-col items-center text-center group hover:border-primary/25 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <platform.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-ink-heading">{platform.name}</h3>
              <p className="text-xs text-muted mt-0.5 mb-1">{platform.arch}</p>
              <p className="text-xs font-mono text-muted mb-4">
                {platform.format} · {platform.size}
              </p>
              <a
                href="https://github.com/xingranya/GitHub-Stars-AI-Tools/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary text-primary-fg py-2.5 rounded-[10px] text-sm font-semibold hover:bg-primary-hover transition-colors flex items-center justify-center gap-2"
              >
                <DownloadIcon className="w-4 h-4" />
                下载
              </a>
            </motion.div>
          ))}
        </div>

        {/* 查看所有版本 */}
        <div className="text-center mt-6">
          <a
            href="https://github.com/xingranya/GitHub-Stars-AI-Tools/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            查看所有发布版本 <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* 安装说明 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* macOS 说明 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-[14px] p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-[oklch(0.700 0.155 80)]" />
              <h3 className="font-heading text-base font-bold text-ink-heading">macOS 首次启动</h3>
            </div>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                GSAT 目前未签名，macOS Gatekeeper 可能会阻止首次启动。请按以下步骤操作：
              </p>
              <ol className="list-decimal pl-5 space-y-1.5">
                <li>双击 .dmg 文件，将应用拖入「应用程序」文件夹</li>
                <li>首次打开时，右键点击应用图标，选择「打开」</li>
                <li>在弹出的对话框中点击「打开」确认</li>
                <li>后续启动将不再需要此步骤</li>
              </ol>
              <p className="text-xs text-muted">
                或者在终端运行：<code className="px-1.5 py-0.5 rounded bg-surface-hover font-mono text-[12px]">xattr -cr /Applications/GitHub\ Stars\ AI.app</code>
              </p>
            </div>
          </motion.div>

          {/* 系统要求 */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="glass-panel rounded-[14px] p-7"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-base font-bold text-ink-heading">系统要求</h3>
            </div>
            <div className="text-sm text-muted leading-relaxed space-y-4">
              <div>
                <div className="text-foreground font-medium mb-1">最低配置</div>
                <ul className="space-y-1">
                  <li>• macOS 11+ / Windows 10+ / Ubuntu 20.04+</li>
                  <li>• 4 GB 内存</li>
                  <li>• 200 MB 可用磁盘空间</li>
                </ul>
              </div>
              <div>
                <div className="text-foreground font-medium mb-1">推荐</div>
                <ul className="space-y-1">
                  <li>• macOS 13+ (Apple Silicon)</li>
                  <li>• 8 GB 内存</li>
                  <li>• GitHub Personal Access Token (只读权限)</li>
                  <li>• AI 服务提供商 API Key (可选)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI 服务配置说明 */}
      <section className="max-w-[1200px] mx-auto px-5 lg:px-8 py-[clamp(2rem,4vw,3rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface rounded-[14px] border border-border p-8 md:p-10"
        >
          <h3 className="font-heading text-xl font-bold text-ink-heading mb-4">AI 服务配置</h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            GSAT 支持多种 AI 服务提供商，您可以选择最适合自己的方案。应用内置了以下预设配置：
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { name: 'OpenAI', desc: 'GPT-4o / GPT-4 系列' },
              { name: 'Anthropic', desc: 'Claude 系列模型' },
              { name: 'DeepSeek', desc: 'DeepSeek Chat / Coder' },
              { name: 'Moonshot (Kimi)', desc: '月之暗面系列' },
              { name: '通义千问 (Qwen)', desc: '阿里云大模型' },
              { name: 'Ollama / LM Studio', desc: '本地模型，完全离线' },
            ].map(provider => (
              <div
                key={provider.name}
                className="bg-background rounded-[10px] border border-border p-4"
              >
                <div className="text-sm font-semibold text-foreground">{provider.name}</div>
                <div className="text-xs text-muted mt-0.5">{provider.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-5">
            也支持任何 OpenAI 兼容的 API 端点。所有 API Key 存储在系统凭证管理器中。
          </p>
        </motion.div>
      </section>
    </>
  );
}
