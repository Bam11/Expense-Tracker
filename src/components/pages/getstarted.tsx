import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon, Languages, ShieldCheck, LockKeyhole } from "lucide-react";

export default function GetStarted() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="bg-[#f8f6f6] dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-['Public_Sans',sans-serif]">
        <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between px-6 md:px-12 py-6 relative z-50">
              <Link to="/" className="flex items-center gap-3">
                <div className="size-10 flex items-center justify-center rounded-xl bg-[linear-gradient(135deg,#6B46FF_0%,#8B5CF6_100%)] shadow-lg shadow-[#6B46FF]/20">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">SnapBill</h2>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a className="text-sm font-medium text-slate-500 hover:text-[#6B46FF] dark:text-slate-400 dark:hover:text-white transition-colors" href="#">Help Center</a>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-full p-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-xl">
                    <Languages size={18} />
                  </span>
                </button>
              </div>

              <div className="md:hidden flex items-center space-x-4">
                <button
                  type="button"
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-slate-900 dark:text-white p-2"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#0A0A0A] border-b border-black/10 dark:border-white/10 py-6 px-6 flex flex-col items-center space-y-6 shadow-xl z-50">
                  <a className="text-lg font-medium text-slate-600 hover:text-[#6B46FF] dark:text-slate-300 dark:hover:text-white transition-colors" href="#">Help Center</a>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 rounded-full px-4 py-2 bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 w-fit">
                    <span className="material-symbols-outlined text-xl">
                      <Languages size={18} />
                    </span>
                  </button>
                </div>
              )}
            </header>
            <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 z-10">
              <div className="max-w-[800px] w-full flex flex-col items-center text-center space-y-12">
                <div className="space-y-4 max-w-xl">
                  <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                    Choose how to sign up
                  </h1>
                  <p className="text-slate-500 dark:text-slate-400 text-lg">
                    Connect your work account to start tracking expenses with AI-powered automation.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                  <Link to="/dashboard"
                    className="group flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#6B46FF] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#6B46FF]/5 text-left w-full"
                  >
                    <div className="size-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-[#6B46FF]/10 transition-colors">
                      <svg className="w-8 h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                      </svg>
                    </div>
                    <div className="space-y-1 text-center">
                      <span className="block text-slate-900 dark:text-white text-lg font-bold">Google</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Personal or Workspace</span>
                    </div>
                  </Link>
                  <Link to="/dashboard"
                    className="group flex flex-col items-center justify-center gap-6 p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#6B46FF] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#6B46FF]/5 text-left w-full"
                  >
                    <div className="size-14 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 group-hover:bg-[#6B46FF]/10 transition-colors">
                      <svg className="w-8 h-8" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h23v23H0z" fill="#f3f3f3"></path><path d="M1 1h10v10H1z" fill="#f35325"></path><path d="M12 1h10v10H12z" fill="#81bc06"></path><path d="M1 12h10v10H1z" fill="#05a6f0"></path><path d="M12 12h10v10H12z" fill="#ffba08"></path>
                      </svg>
                    </div>
                    <div className="space-y-1 text-center">
                      <span className="block text-slate-900 dark:text-white text-lg font-bold">Microsoft</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">Office 365 or Outlook</span>
                    </div>
                  </Link>
                </div>
                <div className="pt-8 space-y-6">
                  <div className="flex items-center justify-center gap-4 text-slate-400 dark:text-slate-600">
                    <div className="h-px w-16 bg-slate-200 dark:bg-slate-800"></div>
                    <span className="text-xs font-bold uppercase tracking-widest">Trust & Security</span>
                    <div className="h-px w-16 bg-slate-200 dark:bg-slate-800"></div>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#6B46FF] text-xl">
                        <ShieldCheck size={18} />
                      </span>
                      <span className="text-xs font-semibold">SOC2 Type II</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#6B46FF] text-xl">
                        <LockKeyhole size={18} />
                      </span>
                      <span className="text-xs font-semibold">AES-256 Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#6B46FF] text-xl">
                        <ShieldCheck size={18} />
                      </span>
                      <span className="text-xs font-semibold">GDPR Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="p-8 flex flex-col items-center gap-4">
              <p className="text-slate-500 dark:text-slate-500 text-sm font-normal leading-normal text-center max-w-md">
                By continuing, you agree to SnapBill AI's
                {" "}
                <a className="text-[#6B46FF] hover:underline underline-offset-4" href="#">Terms of Service</a>
                {" "}
                and
                {" "}
                <a className="text-[#6B46FF] hover:underline underline-offset-4" href="#">Privacy Policy</a>.
              </p>
              <div className="flex items-center gap-2 text-slate-400 dark:text-slate-600 text-xs">
                <span>© 2026 SnapBill. All rights reserved.</span>
              </div>
            </footer>
          </div>
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6B46FF]/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
