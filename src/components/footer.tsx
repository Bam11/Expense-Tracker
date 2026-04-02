
export default function Footer() {
  return (
    <footer className="py-12 border-t border-black/10 dark:border-white/5" data-purpose="site-footer">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-sm font-bold">S</span>
          </div>
          <span className="text-lg font-bold">SnapBill</span>
        </div>
        <div className="text-slate-500 text-sm">
          © 2026 SnapBill. All rights reserved.
        </div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a className="text-slate-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="text-slate-600 dark:text-gray-400 hover:text-brand-primary dark:hover:text-white transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
