// import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard, ReceiptText, BarChart, Landmark, SquarePen, Settings
} from "lucide-react";
// import { Clock4, House, Link2, Settings, X } from "lucide-react";

// const items = [
//   { id: 1, name: "Dashboard", icon: House },
//   { id: 2, name: "Email connections", icon: Link2 },
//   { id: 3, name: "Activity Log", icon: Clock4 },
//   { id: 4, name: "Settings", icon: Settings },
// ]

// type Asideprops = {
//   isOpen: boolean,
//   onClose: () => void;
// }

export default function AsideLeft() {
  // const [active, setActive] = useState(0);
  return (
    // <aside
    //   className={`fixed top-0 left-0 z-50 lg:relative h-screen bg-[#080809] ml-3  backdrop-blur overflow-hidden min-w-62.5 transform transition-transform duration-300 ease-in-out  flex flex-col  p-4 space-y-4  ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    // >
    //   <div className="absolute insert-0 z-0 w-full h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

    //   <div className="flex items-center justify-between gap-4 lg:block">
    //     <a href="/">
    //       <h2 className="font-semibold md:text-3xl lg:text-4xl">SnapBill</h2>
    //     </a>

    //     <button
    //       type="button"
    //       className="mr-4"
    //       onClick={onClose}
    //     >
    //       <X size={20} className="lg:hidden cursor-pointer" />
    //     </button>
    //   </div>
    //   <div className="space-y-2">
    //     {items.map((e, index) => {
    //       const Icon = e.icon
    //       return (
    //         <button
    //           key={index}
    //           type="button"
    //           onClick={() => {
    //             setActive(index);
    //             onClose();
    //           }}
    //           className={`w-full py-3 rounded-xl font-semibold flex items-center px-4 gap-4 transition cursor-pointer outline-none
    //             ${active === index ? "bg-white/30 hover:bg-white/20" : "hover:bg-white/20"}
    //         `}
    //         >
    //           <Icon size={20} />
    //           {e.name}
    //         </button>
    //       )
    //     })}
    //   </div>
    // </aside>
    <aside className="hidden md:flex w-64 border-r border-slate-200 dark:border-[#1F1F1F] flex-col bg-white dark:bg-[#0A0A0A] z-10 shrink-0">
      <Link to="/" className="p-6 flex items-center gap-3">
        <div className="size-10 bg-[#6B46FF] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#6B46FF]/20">
          S
        </div>
        <span className="text-xl font-bold tracking-tight">SnapBill</span>
      </Link>
      <nav className="flex-1 px-4 py-4 space-y-1">
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#6B46FF]/15 text-[#6B46FF] border-r-2 border-[#6B46FF] transition-all" to="/dashboard">
          <span className="material-symbols-outlined">
            <LayoutDashboard size={18} />
          </span>
          <span className="text-sm font-medium">Dashboard</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#141414] transition-all" to="#">
          <span className="material-symbols-outlined">
            <ReceiptText size={18} />
          </span>
          <span className="text-sm font-medium">Expenses</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#141414] transition-all" to="#">
          <span className="material-symbols-outlined">
            <BarChart size={18} />
          </span>
          <span className="text-sm font-medium">Reports</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#141414] transition-all" to="#">
          <span className="material-symbols-outlined">
            <Landmark size={18} />
          </span>
          <span className="text-sm font-medium">Connected Accounts</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#141414] transition-all" to="#">
          <span className="material-symbols-outlined">
            <SquarePen size={18} />
          </span>
          <span className="text-sm font-medium">Manual Entry</span>
        </Link>
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#141414] transition-all" to="#">
          <span className="material-symbols-outlined">
            <Settings size={18} />
          </span>
          <span className="text-sm font-medium">Settings</span>
        </Link>
      </nav>
      <div className="p-4 border-t border-slate-200 dark:border-[#1F1F1F]">
        <button className="w-full py-3 bg-[#6B46FF]/10 text-[#6B46FF] rounded-xl text-sm font-semibold hover:bg-[#6B46FF]/20 transition-all">
          Upgrade Plan
        </button>
      </div>
    </aside>
  )
}