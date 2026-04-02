import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Nav() {
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
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-black/10 dark:border-white/10" data-purpose="site-navigation">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between relative">
        <div className="flex items-center space-x-2" data-purpose="logo">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/20">
            <span className="text-2xl font-bold text-white">S</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">SnapBill</span>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors" title="Toggle Theme">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a className="text-slate-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white transition-colors duration-200" href="#about">About</a>
          <a className="px-6 py-2 rounded-full border border-black/20 dark:border-white/20 text-slate-900 dark:text-white hover:border-brand-primary dark:hover:border-brand-primary transition-all duration-300" href="#login">Login</a>
        </nav>

        {/* Mobile Toggle Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors" title="Toggle Theme">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-[#0A0A0A] border-b border-black/10 dark:border-white/10 py-6 px-6 flex flex-col space-y-6 shadow-xl z-50">
          <a className="text-lg text-slate-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white transition-colors duration-200" href="#about">About</a>
          <a className="inline-block text-center px-6 py-3 rounded-full border border-black/20 dark:border-white/20 text-slate-900 dark:text-white hover:bg-brand-primary hover:text-white hover:border-transparent transition-all duration-300 text-lg" href="#login">Login</a>
        </div>
      )}
    </header>
  )
}
