import { Star, LogIn, Rocket } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const getNavClass = ({ isActive }: { isActive: boolean }) => 
    isActive 
      ? "text-foreground font-bold font-sans text-sm hover:opacity-80 transition-opacity"
      : "text-muted hover:text-foreground transition-colors font-sans text-sm";

  return (
    <header className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center h-16 px-6 lg:px-8 max-w-[1180px] mx-auto">
        <div className="flex items-center gap-2">
          <Star className="text-primary w-6 h-6" fill="currentColor" />
          <span className="font-heading text-xl font-[820] text-foreground tracking-tight">GitHub Stars AI</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink className={getNavClass} to="/">首页</NavLink>
          <NavLink className={getNavClass} to="/architecture">技术架构</NavLink>
          <NavLink className={getNavClass} to="/developer">开发者中心</NavLink>
          <a className="text-muted hover:text-foreground transition-colors font-sans text-sm" href="#">开源社区</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center gap-2 text-muted hover:text-foreground transition-colors font-heading text-sm font-bold cursor-pointer">
            <LogIn className="w-4 h-4" /> 登录
          </button>
          <button className="bg-primary text-primary-fg px-4 py-2 rounded-full font-heading text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer">
            <Rocket className="w-4 h-4" /> 立即体验
          </button>
        </div>
      </div>
    </header>
  );
}
