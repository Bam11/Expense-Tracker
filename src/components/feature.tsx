export default function Feature() {
  return (
    <section className="py-24" data-purpose="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Engineered for perfection</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Card 1 */}
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Automatic Sync</h4>
            <p className="text-slate-600 dark:text-gray-400">Updates in real-time as soon as an email hits your inbox.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h4 className="text-xl font-bold mb-3">AI Insights</h4>
            <p className="text-slate-600 dark:text-gray-400">Deep learning detects unusual patterns and saving opportunities.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Bank-Grade Security</h4>
            <p className="text-slate-600 dark:text-gray-400">256-bit encryption for all your data. Your privacy is paramount.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-brand-primary/50 transition-all duration-300">
            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h4 className="text-xl font-bold mb-3">Multi-bank Support</h4>
            <p className="text-slate-600 dark:text-gray-400">Seamlessly integrates with over 5,000+ financial institutions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
