"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

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

export function DistrictStatus({ districts = [], districtsDate }) {
  const sortedDistricts = districts
    .filter((item) => item.cameraCount > 0)
    .sort((a, b) => {
      const numA = parseInt(a.name);
      const numB = parseInt(b.name);

      if (isNaN(numA)) return 1;
      if (isNaN(numB)) return -1;

      return numA - numB;
    });

  return (
    <Card>
      <CardHeader>
        <CardTitle>District Status</CardTitle>
        <CardDescription>
          Showing district camera status for {districtsDate}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig} className="h-[520px] w-full">
          <BarChart
            data={sortedDistricts}
            layout="vertical"
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid horizontal={false} />

            <YAxis
              dataKey="name"
              type="category"
              tickLine={false}
              axisLine={false}
              width={95}
              interval={0}
              tickMargin={8}
            />

            <XAxis type="number" tickLine={false} axisLine={false} />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Bar
              dataKey="online"
              stackId="a"
              fill="var(--color-online)"
              radius={[4, 0, 0, 4]}
            />

            <Bar
              dataKey="offline"
              stackId="a"
              fill="var(--color-offline)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}