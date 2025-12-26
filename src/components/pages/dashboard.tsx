import { ChevronDown, Menu, UserRound } from "lucide-react";
import Aside from "../aside";
import { useState } from "react";

const items = [
  {
    id: 1,
    images: "/images/gmail.webp",
    user: "user@gmail.com",
    name: "Gmail",
  },
  {
    id: 2,
    images: "/images/outlook.webp",
    user: "user@outlook.com",
    name: "Outlook",
  },
]

export default function Dashboard() {
  const [showMore, setShowMore] = useState(false);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <div className="relative h-full sm:min-h-screen overflow-x-auto sm:overflow-hidden bg-[#080809]">
      <div className="absolute insert-0 z-0 w-full h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      {isAsideOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsAsideOpen(false)}
        />
      )}

      <div className="relative z-50 text-white flex w-screen h-screen">
        <Aside isOpen={isAsideOpen} onClose={() => setIsAsideOpen(false)} />
        <div className="flex flex-col gap-5 py-4 px-8 w-full">
          <div className="flex items-center justify-between gap-10">
            <div className="flex items-center gap-5">
              <Menu 
                size={20} 
                className="lg:hidden cursor-pointer"
                onClick={() => setIsAsideOpen(true)}
              />
              <h2 className="text-3xl font-semibold">Dashboard</h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="">{/* I guess this would be replaced with user image*/}
                <UserRound size={20} />
              </div>
              John Doe
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-5">
              <div className="bg-white/10 p-4 rounded-lg flex items-center justify-between">
                <div className="flex flex-col gap-3">
                  <p>Total expense</p>
                  <h2 className="text-4xl font-bold">N45,200</h2>
                </div>
                <div className="flex flex-col gap-3">
                  <p>Income</p>
                  <h2 className="text-4xl font-bold">N100,000</h2>
                </div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h2 className="text-lg font-semibold">
                  Spending Trend
                </h2>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold">
                    Recent Transactions
                  </h2>
                  <div className="flex flex-col gap-3">{/*I know i should use a table here. Just for now, i'll replace it with table.*/}
                    <div className="grid grid-cols-5 gap-3 xl:gap-3 lg:gap-7 md:text-sm text-[16px]">
                      {["Date", "Merchant", "Amount", "Category", "Source"].map((e, index) => (
                        <p
                          key={index}
                        >
                          {e}
                        </p>
                      ))}
                    </div>
                    <div className="grid grid-cols-5 gap-3 xl:gap-3 lg:gap-7 md:text-sm text-[16px]">
                      {["Oct 13", "Opay", "N5,200", "Food", "Gmail"].map((e, index) => (
                        <p
                          key={index}
                        >
                          {e}
                        </p>
                      ))}
                    </div>
                    <div className="grid grid-cols-5 gap-3 xl:gap-3 lg:gap-7 md:text-sm text-[16px]">
                      {["Oct 14", "Kuda", "2,500", "Transport", "Outlook"].map((e, index) => (
                        <p
                          key={index}
                        >
                          {e}
                        </p>
                      ))}
                    </div>
                    {showMore === false ? (
                      <div
                        className="flex items-center gap-1 cursor-pointer text-center text-sm mx-auto"
                        onClick={() => setShowMore(true)}
                      >
                        More
                        <ChevronDown size={15} />
                      </div>
                    ) : (
                      <div
                        className="flex items-center gap-1 cursor-pointer text-center text-sm mx-auto"
                        onClick={() => setShowMore(false)}
                      >
                        Less
                        <ChevronDown size={15} className="rotate-180" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2 gap-3">
              <div className="bg-white/10 p-4 rounded-lg flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                  Email Connections
                </h2>
                {items.map((e, index) => (
                  <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg" key={index}>
                    <img
                      src={e.images}
                      alt={e.name}
                      className="size-8 w-fit"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium">{e.user}</p>
                      <span className="text-green-400">Connected</span>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-[#4f46e5] py-3 px-8 text-xl text-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out outline-none text-center"
                >
                  Connect Another Account
                </button>
              </div>
              <div className="bg-white/10 p-4 rounded-lg flex flex-col gap-4">
                <h2 className="text-lg font-semibold">
                  Email Connections
                </h2>
                {items.map((e, index) => (
                  <div className="flex items-center gap-3 px-4 py-2 rounded-lg" key={index}>
                    <img
                      src={e.images}
                      alt={e.name}
                      className="size-8 w-fit"
                    />
                    <p className="font-medium">{e.user}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
