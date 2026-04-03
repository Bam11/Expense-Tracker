import { useState, useEffect } from "react";
import {
  Sun, Moon, LayoutDashboard, ReceiptText, BarChart, Landmark, Settings, Bell, TrendingUp, TrendingDown, Link2, Wallet, Calendar, ShoppingBasket, ShoppingCart, CarFront, Coffee, Store,
  Plus
} from "lucide-react";
import AsideLeft from "../aside-left";
import AsideRight from "../aside-right";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
      <div className="bg-[#f8f6f6] dark:bg-[#0A0A0A] text-slate-900 dark:text-slate-100 antialiased font-['Public_Sans',sans-serif]">
        <div className="flex h-screen overflow-hidden">

          {/* Left Sidebar (Desktop Only) */}
          <AsideLeft />

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col overflow-hidden bg-slate-50 dark:bg-[#0A0A0A] relative w-full pb-20 md:pb-0">
            {/* Top Header */}
            <header className="h-20 md:border-b border-slate-200 dark:border-[#1F1F1F] flex items-center justify-between px-6 md:px-8 bg-transparent md:bg-white dark:bg-[#0A0A0A] shrink-0">

              {/* Mobile Branding / Desktop Greeting */}
              <div>
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold">Good morning, Alex</h1>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Here's what's happening with your expenses today.</p>
                </div>
                <Link to="/"
                  className="flex md:hidden items-center gap-3">
                  <div className="size-10 bg-[#6B46FF] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#6B46FF]/20">
                    S
                  </div>
                  <span className="text-xl font-bold tracking-tight">SnapBill</span>
                </Link>
              </div>

              {/* Header Right Actions */}
              <div className="flex items-center gap-2 md:gap-4">
                {/* Dark Mode Toggle */}
                <button
                  type="button"
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-[#141414] text-slate-500 dark:text-slate-300 transition-colors bg-white dark:bg-[#141414] md:bg-transparent"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <div className="relative">
                  <span
                    className="material-symbols-outlined p-2 text-slate-500 dark:text-slate-300 cursor-pointer hover:bg-slate-200 dark:hover:bg-[#141414] rounded-full bg-white dark:bg-[#141414] md:bg-transparent"
                  >
                    <Bell size={20} />
                  </span>
                  <span className="absolute top-2 right-2 size-2 bg-[#6B46FF] rounded-full border-2 border-white dark:border-[#0A0A0A]"></span>
                </div>
                <div className="hidden md:block h-10 w-px bg-slate-200 dark:border-[#1F1F1F]"></div>
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold">OG Victoria</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Pro Plan</p>
                  </div>
                  <div
                    className="size-10 rounded-full bg-slate-200 dark:bg-[#141414] overflow-hidden border-2 border-primary/30 group-hover:border-[#6B46FF] transition-all">
                    <img
                      alt="User Profile"
                      className="w-full h-full object-cover" data-alt="Portrait illustration of a professional male user"
                      src="/images/user-2.webp"
                    />
                  </div>
                </div>
              </div>
            </header>

            {/* Dashboard Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-24 md:p-8">
              {/* Mobile Greeting (Hidden on Desktop) */}
              <div className="md:hidden mt-4 mb-8">
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Welcome back,</p>
                <h2 className="text-3xl font-bold mt-1">Good morning, Alex</h2>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="bg-white dark:bg-[#141414] p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-[#1F1F1F] shadow-sm flex flex-col justify-between min-h-[140px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#6B46FF]/10 rounded-full -mr-8 -mt-8 md:hidden" />
                  <div className="">
                    <span className="material-symbols-outlined text-[#6B46FF] mb-2 md:hidden">
                      <Wallet size={18} />
                    </span>
                    <p className="text-xs md:text-sm font-semibold md:font-medium text-slate-500 dark:text-slate-400 uppercase md:normal-case tracking-wider md:tracking-normal">Total Spent</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold mt-1">$12,450</p>
                    <div className="mt-1 md:mt-4 flex items-center gap-1 text-emerald-500 text-xs font-bold">
                      <span className="material-symbols-outlined text-sm">
                        <TrendingUp size={18} />
                      </span>
                      <span>+12.5%</span>
                      <span className="text-slate-400 font-normal ml-1 hidden md:inline">vs last month</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#141414] p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-[#1F1F1F] shadow-sm flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="material-symbols-outlined text-blue-500 mb-2 md:hidden">
                      <Calendar size={18} />
                    </span>
                    <p className="text-xs md:text-sm font-semibold md:font-medium text-slate-500 dark:text-slate-400 uppercase md:normal-case tracking-wider md:tracking-normal">This Month</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold mt-1">$1,280.50</p>
                    <div className="mt-1 md:mt-4 flex items-center gap-1 text-rose-500 text-xs font-bold">
                      <span className="material-symbols-outlined text-sm">
                        <TrendingDown size={18} />
                      </span>
                      <span>-5.0%</span>
                      <span className="text-slate-400 font-normal ml-1 hidden md:inline">vs budget</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#141414] p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-[#1F1F1F] shadow-sm flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="material-symbols-outlined text-amber-500 mb-2 md:hidden">
                      <ShoppingBasket size={18} />
                    </span>
                    <p className="text-xs md:text-sm font-semibold md:font-medium text-slate-500 dark:text-slate-400 uppercase md:normal-case tracking-wider md:tracking-normal">Top Category</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold mt-1">Groceries</p>
                    <p className="text-slate-500 text-xs mt-1 md:hidden">32% of total</p>
                    <div className="mt-4 w-full bg-slate-100 dark:bg-[#0A0A0A] h-1.5 rounded-full overflow-hidden hidden md:block">
                      <div className="bg-[#6B46FF] h-full w-[65%]"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#141414] p-5 md:p-6 rounded-2xl border border-slate-200 dark:border-[#1F1F1F] shadow-sm flex flex-col justify-between min-h-[140px]">
                  <div>
                    <span className="material-symbols-outlined text-slate-400 mb-2 md:hidden">
                      <Link2 size={18} />
                    </span>
                    <p className="text-xs md:text-sm font-semibold md:font-medium text-slate-500 dark:text-slate-400 uppercase md:normal-case tracking-wider md:tracking-normal">Accounts</p>
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl font-bold mt-1">3 <span className="text-base font-normal md:hidden">Active</span></p>
                    <p className="text-[#6B46FF] text-xs font-medium mt-1 md:hidden">Manage</p>
                    <div className="mt-4 flex -space-x-2 hidden md:flex">
                      <div className="size-6 rounded-full border-2 border-white dark:border-[#141414] bg-blue-600 flex items-center justify-center text-[10px] text-white">CH</div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-[#141414] bg-slate-800 flex items-center justify-center text-[10px] text-white">AM</div>
                      <div className="size-6 rounded-full border-2 border-white dark:border-[#141414] bg-[#6B46FF] flex items-center justify-center text-[10px] text-white">PL</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Expenses Heading */}
              <div className="flex items-center justify-between mb-6 md:bg-white md:dark:bg-[#141414] md:p-6 md:border-b border-slate-200 dark:border-[#1F1F1F] md:rounded-t-2xl md:mb-0">
                <h3 className="text-lg font-bold">Recent Expenses</h3>
                <button className="text-sm font-semibold text-[#6B46FF] hover:underline">View All</button>
              </div>

              {/* Desktop Table View */}
              <div className="hidden md:block bg-white dark:bg-[#141414] border-x border-b border-slate-200 dark:border-[#1F1F1F] rounded-b-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-[#0A0A0A]/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Date</th>
                      <th className="px-6 py-4 font-semibold">Description</th>
                      <th className="px-6 py-4 font-semibold">Category</th>
                      <th className="px-6 py-4 font-semibold text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-[#1F1F1F]">
                    <tr className="hover:bg-slate-50 dark:hover:bg-[#0A0A0A] transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 2023</td>
                      <td className="px-6 py-4 text-sm font-medium">Apple Store</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium">Entertainment</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-right">-$99.00</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-[#0A0A0A] transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 23, 2023</td>
                      <td className="px-6 py-4 text-sm font-medium">Whole Foods</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">Food &amp; Drink</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-right">-$156.40</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-[#0A0A0A] transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 22, 2023</td>
                      <td className="px-6 py-4 text-sm font-medium">Uber Trip</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">Transport</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-right">-$24.50</td>
                    </tr>
                    <tr className="hover:bg-slate-50 dark:hover:bg-[#0A0A0A] transition-colors">
                      <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 21, 2023</td>
                      <td className="px-6 py-4 text-sm font-medium">Starbucks</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">Food &amp; Drink</span>
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-right">-$6.80</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile ListView */}
              <div className="md:hidden space-y-4">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] shadow-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-lg bg-slate-100 dark:bg-[#0A0A0A] flex items-center justify-center p-2">
                      <Store size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Apple Store</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Today, 10:45 AM</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">-$99.00</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] shadow-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/20 flex items-center justify-center p-2 text-emerald-600 dark:text-emerald-400">
                      <span className="material-symbols-outlined">
                        <ShoppingCart size={18} />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Whole Foods</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Yesterday, 4:20 PM</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">-$156.40</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] shadow-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-lg bg-slate-100 dark:bg-[#0A0A0A] flex items-center justify-center p-2">
                      <CarFront size={18} />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Uber Trip</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Oct 24, 11:30 PM</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">-$24.50</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-[#141414] border border-slate-200 dark:border-[#1F1F1F] shadow-sm rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 rounded-lg bg-blue-100/50 dark:bg-blue-900/20 flex items-center justify-center p-2 text-blue-600 dark:text-blue-400">
                      <span className="material-symbols-outlined">
                        <Coffee size={18} />
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Starbucks</p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">Oct 23, 8:15 AM</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm">-$6.80</p>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-xl border-t border-slate-200 dark:border-[#1F1F1F] px-4 pb-8 pt-4 z-50">
              <div className="flex items-center justify-between relative">
                <div className="grid grid-cols-5 gap-0 items-center w-full">
                  <a className="flex flex-col items-center gap-1 group" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6B46FF]/15 text-[#6B46FF]">
                      <span className="material-symbols-outlined">
                        <LayoutDashboard size={18} />
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-[#6B46FF]">Dashboard</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 group" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-[#141414] dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">
                        <ReceiptText size={18} />
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Expenses</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 group" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-[#141414] dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">
                        <BarChart size={18} />
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Reports</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 group" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-[#141414] dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">
                        <Landmark size={18} />
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Connected</span>
                  </a>
                  <a className="flex flex-col items-center gap-1 group" href="#">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-[#141414] dark:hover:text-slate-200">
                      <span className="material-symbols-outlined">
                        <Settings size={18} />
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-500">Settings</span>
                  </a>
                </div>

                {/* Floating Add Button */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-10">
                  <button className="h-14 w-14 rounded-full bg-linear-to-br from-[#6B46FF] to-[#3b82f6] shadow-lg shadow-[#6B46FF]/30 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-transform">
                    <span className="material-symbols-outlined text-3xl">
                      <Plus size={28} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar (Desktop Only) */}
          <AsideRight />
        </div>
      </div>
    </div>
  );
}
