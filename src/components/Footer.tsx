export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-border mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 px-6 lg:px-8 max-w-[1180px] mx-auto items-center">
        <div className="lg:col-span-2">
          <span className="font-heading text-xl font-[820] text-foreground tracking-tight">GitHub Stars AI</span>
          <p className="font-sans text-[13px] mt-2 text-muted">© 2024 GitHub Stars AI Tools. Built for developers.</p>
        </div>
        <div className="flex gap-6 lg:col-span-3 lg:justify-end flex-wrap">
          <a className="font-sans text-[13px] font-[520] text-muted hover:text-foreground transition-colors" href="#">文档</a>
          <a className="font-sans text-[13px] font-[520] text-muted hover:text-foreground transition-colors" href="#">API参考</a>
          <a className="font-sans text-[13px] font-[520] text-muted hover:text-foreground transition-colors" href="#">系统状态</a>
          <a className="font-sans text-[13px] font-[520] text-muted hover:text-foreground transition-colors" href="#">隐私政策</a>
          <a className="font-sans text-[13px] font-[520] text-muted hover:text-foreground transition-colors" href="#">服务条款</a>
        </div>
      </div>
    </footer>
  );
}
