"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  online: {
    label: "Online",
    color: "var(--chart-1)",
  },
  offline: {
    label: "Offline",
    color: "var(--chart-2)",
  },
};

export function CameraStatusChart({
  range,
  setRange,
  chartData = [],
  loading,
  error,
}) {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle>Camera Status</CardTitle>
          <CardDescription>
            Showing online and offline cameras by date
          </CardDescription>
        </div>

        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="h-9 rounded-md border bg-background px-3 text-sm outline-none"
        >
          <option value="7">Last 7 days</option>
          <option value="30">Last 30 days</option>
          <option value="90">Last 3 months</option>
          <option value="180">Last 6 months</option>
          <option value="365">Last 1 year</option>
        </select>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
            Loading chart...
          </div>
        ) : error ? (
          <div className="flex h-[300px] items-center justify-center text-sm text-red-500">
            Failed to load chart data
          </div>
        ) : chartData.length === 0 ? (
          <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
            No chart data found
          </div>
        ) : (
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value?.slice(5)}
              />

              <YAxis tickLine={false} axisLine={false} tickMargin={8} />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              <Area
                dataKey="online"
                type="natural"
                fill="var(--color-online)"
                fillOpacity={0.4}
                stroke="var(--color-online)"
              />

              <Area
                dataKey="offline"
                type="natural"
                fill="var(--color-offline)"
                fillOpacity={0.25}
                stroke="var(--color-offline)"
              />
            </AreaChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}