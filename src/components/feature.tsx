import { ArrowLeftRight, RotateCcw, Equal, ShieldX } from "lucide-react";

const items = [
  {
    id: 1,
    icon: ArrowLeftRight,
    title: "Auto email sync",
    content: "Sync your mails automatically in the background",
  },
  {
    id: 2,
    icon: RotateCcw,
    title: "Expense categorization",
    content: "Expenses are automtically categorized",
  },
  {
    id: 3,
    icon: Equal,
    title: "Multi-account connection",
    content: "Connect multiplle Gmail and Outlook accounts",
  },
  {
    id: 4,
    icon: ShieldX,
    title: "Privacy guaranteed",
    content: "We never read your personal emails",
  },
]

export default function Feature() {
  return (
    <div className="max-w-300 mx-auto flex justify-between items-center text-white px-8 py-15 sm:px-4 md:px-12 lg:px-10 xl:px-6">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="text-4xl font-bold ">
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-5 w-full">
          {items.map((e, index) => {
            const Icon = e.icon;
            return (
              <div className="flex gap-5 bg-black/20 border border-white/10 p-5" key={index}>
                <div className="bg-white/20 p-3 rounded-full w-fit h-fit">
                  <Icon size={20} />
                </div>
                <div className="flex flex-col gap-5 overflow-hidden">
                  <h2 className="md:text-xl lg:text-3xl font-bold">
                    {e.title}
                  </h2>
                  <p className="font-medium md:text-sm lg:text-xl lg:w-75">
                    {e.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
