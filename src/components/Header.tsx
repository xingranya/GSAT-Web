import { useState, useEffect } from 'react';
import {
  BookOpen, Code2, Download, Github, Home, LayoutGrid, Menu, Network, X,
} from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { to: '/', label: '首页', icon: Home },
  { to: '/features', label: '功能', icon: LayoutGrid },
  { to: '/architecture', label: '架构', icon: Network },
  { to: '/developer', label: '开发者', icon: Code2 },
  { to: '/download', label: '下载', icon: Download },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // 移动端菜单打开时锁定滚动
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'bg-primary-soft text-primary font-semibold'
      : 'bg-background/55 text-muted hover:bg-primary-soft/75 hover:text-foreground';

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center h-16 px-5 lg:px-8 max-w-[1200px] mx-auto">
        {/* 品牌 */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src="/icon.svg" alt="GSAT" className="w-8 h-8 rounded-lg group-hover:scale-105 transition-transform" />
          <span className="font-heading text-lg font-bold text-ink-heading tracking-tight">
            GitHub Stars AI
          </span>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map(({ icon: Icon, ...item }) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-sm transition-colors ${getNavClass({ isActive })}`}
              to={item.to}
              end={item.to === '/'}
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 右侧操作 */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/xingranya/GitHub-Stars-AI-Tools/wiki"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
            aria-label="Wiki 文档"
          >
            <BookOpen className="w-[18px] h-[18px]" />
            <span>Wiki</span>
          </a>
          <a
            href="https://github.com/xingranya/GitHub-Stars-AI-Tools"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-muted hover:text-foreground transition-colors text-sm"
            aria-label="GitHub 仓库"
          >
            <Github className="w-[18px] h-[18px]" />
            <span>GitHub</span>
          </a>
          <Link
            to="/download"
            className="hidden md:flex items-center gap-1.5 bg-primary text-primary-fg px-4 py-2 rounded-[10px] text-sm font-semibold hover:bg-primary-hover transition-colors"
          >
            <Download className="w-4 h-4" />
            下载
          </Link>

          {/* 移动端菜单按钮 */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-foreground cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 移动端全屏菜单 */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-16 bg-background z-40 border-t border-border"
          >
            <nav className="flex flex-col p-6 gap-1">
              {NAV_ITEMS.map(({ icon: Icon, ...item }) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-3 rounded-[10px] text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-primary-soft text-primary'
                        : 'text-foreground hover:bg-muted-bg'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="https://github.com/xingranya/GitHub-Stars-AI-Tools/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-muted hover:text-foreground transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  Wiki 文档
                </a>
                <a
                  href="https://github.com/xingranya/GitHub-Stars-AI-Tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-muted hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub 仓库
                </a>
                <Link
                  to="/download"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-primary text-primary-fg px-6 py-3 rounded-[10px] font-semibold"
                >
                  <Download className="w-4 h-4" />
                  下载应用
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
