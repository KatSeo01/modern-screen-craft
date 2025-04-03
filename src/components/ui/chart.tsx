
import * as React from "react";
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, LineChart as RechartsLineChart, Line } from "recharts";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

// Define the data shape
interface ChartData {
  name: string;
  value: number;
}

interface ChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: ChartData[];
  height?: number;
}

export const AreaChart = React.forwardRef<
  HTMLDivElement,
  ChartProps
>(({ data, className, height = 300, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div ref={ref} className={cn("w-full h-[300px]", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1e5aaa" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1e5aaa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
          <XAxis dataKey="name" stroke={isDark ? "#9ca3af" : "#6b7280"} />
          <YAxis stroke={isDark ? "#9ca3af" : "#6b7280"} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? "#1f2937" : "#ffffff",
              borderColor: isDark ? "#374151" : "#e5e7eb",
              color: isDark ? "#f9fafb" : "#111827" 
            }} 
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1e5aaa"
            fillOpacity={1}
            fill="url(#colorValue)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
});
AreaChart.displayName = "AreaChart";

export const BarChart = React.forwardRef<
  HTMLDivElement,
  ChartProps
>(({ data, className, height = 300, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div ref={ref} className={cn("w-full h-[300px]", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsBarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
          <XAxis dataKey="name" stroke={isDark ? "#9ca3af" : "#6b7280"} />
          <YAxis stroke={isDark ? "#9ca3af" : "#6b7280"} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? "#1f2937" : "#ffffff",
              borderColor: isDark ? "#374151" : "#e5e7eb",
              color: isDark ? "#f9fafb" : "#111827" 
            }} 
          />
          <Bar dataKey="value" fill="#1e5aaa" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
});
BarChart.displayName = "BarChart";

export const LineChart = React.forwardRef<
  HTMLDivElement,
  ChartProps
>(({ data, className, height = 300, ...props }, ref) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div ref={ref} className={cn("w-full h-[300px]", className)} {...props}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
          <XAxis dataKey="name" stroke={isDark ? "#9ca3af" : "#6b7280"} />
          <YAxis stroke={isDark ? "#9ca3af" : "#6b7280"} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? "#1f2937" : "#ffffff",
              borderColor: isDark ? "#374151" : "#e5e7eb",
              color: isDark ? "#f9fafb" : "#111827" 
            }} 
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1e5aaa"
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
});
LineChart.displayName = "LineChart";
