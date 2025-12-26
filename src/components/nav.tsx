import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex items-center justify-between w-full gap-5 xl:px-3.5 lg:px-7.5 md:px-9.5">
      <div className="flex items-center gap-2.5">
        <div className="bg-[#4f46e5] px-2.5 py-1.5 rounded-xl font-bold text-3xl">S</div>
        <h2 className="font-semibold text-4xl">SnapBill</h2>
      </div>
      <div className="flex items-center gap-3 sm:gap-15">
        <Link to = "" 
          className="text-xl font-medium text-white transition-colors outline-none"
        >
          About
        </Link>
        <Link to = "" 
          className="text-xl font-medium text-white transition-colors outline-none"
        >
          Login
        </Link>
      </div>
    </div>
  )
}
