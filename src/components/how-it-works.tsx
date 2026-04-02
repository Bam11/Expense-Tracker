export default function HowItWorks() {
  return (
    <section className="py-24 border-t border-black/5 dark:border-white/5" data-purpose="how-it-works">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16">Three steps to clarity</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="group">
            <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-all">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Connect Inbox</h3>
            <p className="text-slate-600 dark:text-gray-400">Securely link your primary email account in one click.</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-all">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">AI Extraction</h3>
            <p className="text-slate-600 dark:text-gray-400">Our engine identifies and extracts data from receipts automatically.</p>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-all">
              <svg className="w-8 h-8 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Instant Insights</h3>
            <p className="text-slate-600 dark:text-gray-400">View real-time breakdowns of where your money is going.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
