import { Link } from 'react-router-dom'
import Feature from '../feature'
import HowItWorks from '../how-it-works'
import Nav from '../nav'

const transactions = [
  {
    id: 1,
    name: "Netflix",
    price: "$0.21",
    image: "/images/netflix.png",
    tag1: "lorem",
    tag2: "lorem",
  },
  {
    id: 2,
    name: "Opay",
    price: "$2.09",
    image: "/images/opay.jpg",
    tag1: "lorem",
    tag2: "lorem",
  },
  {
    id: 3,
    name: "Kuda",
    price: "$4.09",
    image: "/images/kuda.png",
    tag1: "lorem",
    tag2: "lorem",
  },
  {
    id: 4,
    name: "Access Bank",
    price: "$2.36",
    image: "/images/access.png",
    tag1: "lorem",
    tag2: "lorem",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080809]">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute insert-0 w-full h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-50 max-w-300 mx-auto flex justify-between items-center text-white px-8 py-10 sm:px-4 lg:px-6">
          <Nav />
        </div>

        <div className="max-w-300 z-50 mx-auto flex justify-between items-center text-white px-10 py-8 sm:px-4 lg:px-10 xl:px-6 md:px-12">
          <div className="w-full grid md:grid-cols-2 gap-8 lg:gap-6 xl:gap-12 ">
            <div className="space-y-6 grid place-items-center">
              <h1
                className="text-white font-bold text-3xl lg:text-[48px] md:text-[44px] leading-[110%]"
              >
                Track your <br />
                spendings <br />
                automaticaly <br />
                from your emails.
              </h1>
              <Link
                to ="/getstarted"
                className="bg-[#4f46e5] py-3 px-8 text-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out outline-none"
              >
                Get Started
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl" />
              <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-white font-semibold text-xl leading-7">Expenses</h2>
                    <div className="bg-white/5 p-4 rounded-xl flex flex-col gap-1">
                      <h2 className="text-3xl font-bold">
                        $6.2k
                      </h2>
                      <div className="flex items-end gap-3">
                        <div className="bg-white/20 py-4 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-3.5 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-4 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-4 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-4 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-9 px-2 rounded-2xl" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl hidden lg:flex" />
                        <div className="bg-white/20 py-9 px-2 rounded-2xl hidden lg:flex" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl hidden lg:flex" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl hidden lg:flex" />
                        <div className="bg-white/20 py-4 px-2 rounded-2xl hidden lg:flex" />
                        <div className="bg-white/20 py-9 px-2 rounded-2xl hidden xl:flex" />
                        <div className="bg-white/20 py-6 px-2 rounded-2xl hidden xl:flex" />
                        <div className="bg-white/20 py-12 px-2 rounded-2xl hidden xl:flex" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <h2 className="text-white font-semibold text-xl leading-7">Transactions</h2>
                    <div className="bg-white/5 p-4 rounded-xl flex flex-col gap-2">
                      {transactions.map((e, index) => (
                        <div className="flex gap-2" key={index}>
                          <div className="bg-white/30 h-fit p-1.5 rounded-full">
                            <img
                              src={e.image}
                              alt={e.name}
                              className="size-6 rounded-full object-center"
                            />
                          </div>
                          <div className="flex items-center justify-between gap-5 w-full">
                            <div className="flex flex-col">
                              <h2 className="font-semibold">{e.name}</h2>
                              <p className="text--sm text-white/60">{e.tag1}</p>
                            </div>
                            <div className="flex flex-col items-end">
                              <h2 className="font-semibold">{e.price}</h2>
                              <p className="text--sm text-white/60">{e.tag2}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HowItWorks />
        <Feature />
      </div>
    </main>
  )
}
