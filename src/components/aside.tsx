import { useState } from 'react'
import { Clock4, House, Link2, Settings, X } from "lucide-react";

const items = [
  { id: 1, name: "Dashboard", icon: House },
  { id: 2, name: "Email connections", icon: Link2 },
  { id: 3, name: "Activity Log", icon: Clock4 },
  { id: 4, name: "Settings", icon: Settings },
]

type Asideprops = {
  isOpen: boolean,
  onClose: () => void;
}

export default function Aside({ isOpen, onClose }: Asideprops) {
  const [active, setActive] = useState(0);
  return (
    <aside
      className={`fixed top-0 left-0 z-50 lg:relative h-screen bg-[#080809] ml-3  backdrop-blur overflow-hidden min-w-62.5 transform transition-transform duration-300 ease-in-out  flex flex-col  p-4 space-y-4  ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
    >
      <div className="absolute insert-0 z-0 w-full h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex items-center justify-between gap-4 lg:block">
        <a href="/">
          <h2 className="font-semibold md:text-3xl lg:text-4xl">SnapBill</h2>
        </a>

        <button
          type="button"
          className="mr-4"
          onClick={onClose}
        >
          <X size={20} className="lg:hidden cursor-pointer" />
        </button>
      </div>
      <div className="space-y-2">
        {items.map((e, index) => {
          const Icon = e.icon
          return (
            <button
              key={index}
              type="button"
              onClick={() => {
                setActive(index);
                onClose();
              }}
              className={`w-full py-3 rounded-xl font-semibold flex items-center px-4 gap-4 transition cursor-pointer outline-none
                ${active === index ? "bg-white/30 hover:bg-white/20" : "hover:bg-white/20"}
            `}
            >
              <Icon size={20} />
              {e.name}
            </button>
          )
        })}
      </div>
    </aside>
  )
}