import { Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  {
    title: '产品',
    links: [
      { label: '功能介绍', to: '/features' },
      { label: '技术架构', to: '/architecture' },
      { label: '下载安装', to: '/download' },
    ],
  },
  {
    title: '开发者',
    links: [
      { label: '开发者中心', to: '/developer' },
      {
        label: 'Wiki 文档',
        href: 'https://github.com/xingranya/GitHub-Stars-AI-Tools/wiki',
        external: true,
      },
      {
        label: 'GitHub 仓库',
        href: 'https://github.com/xingranya/GitHub-Stars-AI-Tools',
        external: true,
      },
    ],
  },
  {
    title: '法律',
    links: [
      { label: '开源许可', to: '/license' },
      { label: '隐私政策', to: '/privacy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* 品牌信息 */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <img src="/icon.svg" alt="GSAT" className="w-7 h-7 rounded-md" />
              <span className="font-heading text-base font-bold text-ink-heading tracking-tight">
                GitHub Stars AI
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-4 max-w-[260px]">
              将 GitHub Stars 转化为可搜索、可总结、可本地查询的 AI 知识库。
            </p>
            <a
              href="https://github.com/xingranya/GitHub-Stars-AI-Tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
          </div>

          {/* 链接列 */}
          {FOOTER_LINKS.map(group => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map(link => (
                  <li key={link.label}>
                    {'to' in link && link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={'href' in link ? link.href : '#'}
                        target={'external' in link && link.external ? '_blank' : undefined}
                        rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 底部版权 */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted">
            © 2026 GitHub Stars AI Tools. 保留所有权利。
          </p>
          <p className="text-xs text-muted flex items-center gap-1">
            以 <Heart className="w-3 h-3 text-primary" fill="currentColor" /> 构建，服务于开发者社区
          </p>
        </div>
      </div>
    </footer>
  );
}
