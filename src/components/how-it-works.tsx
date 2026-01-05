import { LinkIcon, ChartNoAxesColumn, Search } from "lucide-react";

const works = [
  {
    id: 1,
    icon: LinkIcon,
    title: "Connect your Gmail or Outlook",
    content: "Easiy connect your email account in seconds",
  },
  {
    id: 2,
    icon: Search,
    title: "We fetch and analyze your transaction emails",
    content: "We automatically fetch and analyze your transaction-emails",
  },
  {
    id: 3,
    icon: ChartNoAxesColumn,
    title: "View and track expense instantly",
    content: "Track and categorize your spending as it happens",
  },
]

export default function HowItWorks() {
  return (
    <div className="max-w-300 mx-auto flex justify-between items-center text-white px-8 py-15 sm:px-4 lg:px-6">
      <div className="flex flex-col items-center gap-10 w-full">
        <h2 className="text-4xl font-bold ">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-15 w-full">
          {works.map((e, index) => {
            const Icon = e.icon;

            return (
              <div className="flex flex-col gap-5" key={index}>
                <div className="bg-white/20 p-3 rounded-full w-fit">
                  <Icon size={20} />
                </div>
                <h2 className="font-bold text-3xl">
                  {e.title}
                </h2>
                <p className="font-semibold text-[22px]">
                  {e.content}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
