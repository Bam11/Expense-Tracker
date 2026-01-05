import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  amount: {
    label: "Spending",
    color: "rgba(255,255,255,0.1)",
  },
}

const chartData = [
  { day: "Mon", amount: 40 },
  { day: "Tue", amount: 35 },
  { day: "Wed", amount: 60 },
  { day: "Thu", amount: 45 },
  { day: "Fri", amount: 70 },
  { day: "Sat", amount: 55 },
  { day: "Sun", amount: 90 },
]


export default function SpendingBarChart() {
  return (
    <div className="bg-white/10 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">
        Spending Trend
      </h2>

      <ChartContainer config={chartConfig} className="h-45 w-full">
        <BarChart data={chartData}>
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
              <stop offset="50%" stopColor="#818cf8" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#a5b4fc" stopOpacity={0.4} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#aaa", fontSize: 12 }}
          />

          <ChartTooltip content={<ChartTooltipContent />} />

          <Bar
            dataKey="amount"
            radius={[8, 8, 0, 0]}
            fill="url(#barGradient)"
            isAnimationActive={true}
            animationDuration={900}
            animationEasing="ease-out"
          />
        </BarChart>
      </ChartContainer>
    </div>
  )
}