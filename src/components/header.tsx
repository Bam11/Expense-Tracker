import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden" data-purpose="hero">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter">
            Track your spending <br />
            <span className="text-transparent bg-clip-text bg-gradient-primary">automatically</span> <br />
            from your emails.
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-lg">
            Connect your inbox and let AI categorize your receipts, invoices, and bank alerts in seconds. No manual entry, ever.
          </p>
          <div>
            <Link to="/getstarted">
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-xl shadow-brand-primary/25 cursor-pointer">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        {/* Dashboard Preview Graphic */}
        <div className="relative flex justify-center lg:justify-end" data-purpose="hero-graphic">
          <div className="w-full max-w-md float-animation">
            {/* Main Preview Card */}
            <div className="bg-slate-50/80 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Total Expenses Summary */}
              <div className="mb-8">
                <span className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-widest">Total Expenses</span>
                <div className="text-4xl font-bold mt-1">$6,240.00</div>
                {/* Mini Bar Chart Simulation */}
                <div className="flex items-end space-x-2 mt-6 h-16">
                  <div className="flex-1 bg-black/10 dark:bg-white/10 h-1/2 rounded-t-md"></div>
                  <div className="flex-1 bg-brand-primary h-full rounded-t-md"></div>
                  <div className="flex-1 bg-black/10 dark:bg-white/10 h-2/3 rounded-t-md"></div>
                  <div className="flex-1 bg-brand-secondary h-4/5 rounded-t-md"></div>
                  <div className="flex-1 bg-black/10 dark:bg-white/10 h-1/3 rounded-t-md"></div>
                </div>
              </div>
              {/* Recent Transactions List */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Recent Transactions</h4>
                <div className="space-y-4">
                  {/* Transaction Item */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">N</div>
                      <span className="font-medium">Netflix</span>
                    </div>
                    <span className="font-bold">-$15.99</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">O</div>
                      <span className="font-medium">Opay</span>
                    </div>
                    <span className="font-bold">-$120.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 font-bold">K</div>
                      <span className="font-medium">Kuda</span>
                    </div>
                    <span className="font-bold">-$45.00</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 font-bold">A</div>
                      <span className="font-medium">Access Bank</span>
                    </div>
                    <span className="font-bold">-$2,100.00</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Accent Blur */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-primary rounded-full blur-[100px] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
