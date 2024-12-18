/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

// const data = [
//   {
//     name: "1",
//     moneyIncome: 0,
//   },
//   {
//     name: "2",
//     moneyIncome: 270000,
//   },
//   {
//     name: "3",
//     moneyIncome: 120500,
//   },
//   {
//     name: "4",
//     moneyIncome: 700000,
//   },
//   {
//     name: "5",
//     moneyIncome: 330000,
//   },
//   {
//     name: "6",
//     moneyIncome: 400000,
//   },
//   {
//     name: "7",
//     moneyIncome: 600000,
//   },
//   {
//     name: "8",
//     moneyIncome: 9000,
//   },
//   {
//     name: "9",
//     moneyIncome: 200000,
//   },
//   {
//     name: "10",
//     moneyIncome: 290000,
//   },
//   {
//     name: "11",
//     moneyIncome: 400000,
//   },
//   {
//     name: "12",
//     moneyIncome: 255000,
//   },
//   {
//     name: "13",
//     moneyIncome: 300000,
//   },
// ];

type StatsLineChartProps = {
  data: Array<{
    name: string; 
    moneyIncome: number; 
  }>;
};

export default function StatsLineChart({ data }: StatsLineChartProps) {
  const getMonthName = (month: number): string => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  };

  type CustomTooltipProps = {
    active?: boolean;
    payload?: any;
    label?: string;
  };

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="w-fit h-fit rounded-[4px] bg-[#4880FF] p-2 text-xs text-white font-semibold">
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-xs">
              <span className="">
                ${new Intl.NumberFormat().format(entry?.value)}
              </span>
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart width={500} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          tick={{ fill: "#A0A0A0", fontSize: "12" }}
          stroke="none"
          dataKey="name"
          tickFormatter={(value) => getMonthName(value)}
          padding={{ left: 30, right: 30 }}
          interval={0}
          angle={-5} 
          textAnchor="end"
        />
        <YAxis stroke="none" tick={{ fill: "#A0A0A0", fontSize: "12" }} />
        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="moneyIncome"
          stroke="#4379EE"
          fill="#4379EE29"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
