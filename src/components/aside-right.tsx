import React from 'react'
import { RefreshCcw, Link2, Sparkle } from 'lucide-react'

export default function AsideRight() {
  return (
    <aside className="hidden xl:flex w-80 border-l border-slate-200 dark:border-[#1F1F1F] flex-col bg-white dark:bg-[#0A0A0A] p-6 overflow-y-auto custom-scrollbar shrink-0 z-10">
      <h2 className="text-lg font-bold mb-6">Quick Actions</h2>
      <div className="space-y-4 mb-8">
        <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#6B46FF] text-white rounded-2xl font-bold shadow-lg shadow-[#6B46FF]/30 hover:brightness-110 active:scale-[0.98] transition-all">
          <span className="material-symbols-outlined">
            <RefreshCcw size={18} />
          </span>
          Sync Now
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-slate-200 dark:border-[#1F1F1F] hover:border-[#6B46FF]/50 text-slate-700 dark:text-slate-200 rounded-2xl font-bold transition-all">
          <span className="material-symbols-outlined">
            <Link2 size={18} />
          </span>
          Connect New Account
        </button>
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">AI Insight</h3>
        <div className="bg-[#6B46FF]/5 border border-[#6B46FF]/10 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-[#6B46FF] mb-2">
            <span className="material-symbols-outlined text-sm">
              <Sparkle size={18} />
            </span>
            <span className="text-xs font-bold uppercase">Spending Alert</span>
          </div>
          <p className="text-sm leading-relaxed">
            Your <span className="font-bold text-[#6B46FF]">Entertainment</span> spending is 15% higher than usual this week. Consider reviewing your active subscriptions.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4">Savings Goal</h3>
          <div className="p-4 bg-slate-50 dark:bg-[#141414] rounded-2xl border border-slate-200 dark:border-[#1F1F1F]">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-medium">New Laptop</span>
              <span className="text-xs font-bold">$1,200 / $2,000</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-[#0A0A0A] h-2 rounded-full overflow-hidden">
              <div className="bg-[#6B46FF] h-full w-[60%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8">
        <div className="bg-linear-to-br from-[#6B46FF] to-purple-800 rounded-2xl p-6 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="font-bold text-lg mb-1">Go Premium</h4>
            <p className="text-xs text-white/80 mb-4">Unlock advanced AI analytics and unlimited bank syncs.</p>
            <button className="px-4 py-2 bg-white text-[#6B46FF] rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors">
              Learn More
            </button>
          </div>
          <div className="absolute -bottom-4 -right-4 size-24 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </aside>
  )
}
