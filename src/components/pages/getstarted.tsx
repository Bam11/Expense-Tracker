import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const mail = [
  {
    id: 1,
    images: "/images/gmail.webp",
    name: "Gmail",
  },
  {
    id: 1,
    images: "/images/outlook.webp",
    name: "Outlook",
  },
]

export default function GetStarted() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080809]">
      <div className="absolute insert-0 w-full h-full bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-50 flex items-center justify-center text-white px-8 py-10 sm:px-6">
        <div className="flex items-center justify-between w-full px:8 sm:px-15">
          <div className="flex items-center gap-2.5">
            <div className="bg-[#4f46e5] px-2.5 py-1.5 rounded-xl font-bold text-3xl">S</div>
            <h2 className="font-semibold text-4xl">SnapBill</h2>
          </div>
          <div className="flex items-center ">

          </div>
        </div>
      </div>
      <div className="relative z-50 flex items-center justify-center text-white px-8 py-10 sm:px-6 ">
        <div className="max-w-xl w-full px-8 sm:px-10 bg-black/20 backdrop-blur-sm rounded-3xl py-8">
          <div className="space-y-20">
            <div className="flex flex-col space-y-6">
              <div className="flex gap-5">
                <Link to="/"
                  className="text-xl font-medium text-white/40 transition-colors outline-none"
                >
                  <ChevronLeft size={35} />
                </Link>
                <div className="space-y-6">
                  <h2 className="font-semibold text-3xl sm:text-5xl leading-[120%]">
                    Connect your <br /> email account
                  </h2>
                  <p className="text-white/30 sm:text-2xl">
                    Choose an email provider to connect to <br />   your account
                  </p>
                </div>
              </div>
              {mail.map((e, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex items-center gap-3 py-4 px-6 rounded-lg bg-black/20 cursor-pointer">
                  <img
                    src={e.images}
                    alt={e.name}
                    className="size-8 w-fit"
                  />
                  <p className="font-semibold text-2xl">{e.name}</p>
                </button>
              ))}
              <Link
                to="/dashboard"
                className="bg-[#4f46e5] py-3 px-8 text-xl text-white rounded-xl cursor-pointer transition-all duration-300 ease-in-out outline-none text-center"
              >
                Continue
              </Link>
            </div>
            <h2 className="font-semibold text-3xl text-center">
              Get started for free
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
