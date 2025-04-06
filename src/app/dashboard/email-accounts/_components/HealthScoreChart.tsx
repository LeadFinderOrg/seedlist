import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { parseISO, format } from "date-fns";

interface DataPoint {
  date: string;
  score: number;
}

interface HealthScoreChartProps {
  data?: DataPoint[];
}

function getScoreInfo(score: number) {
  if (score >= 90) {
    return { label: "Excellent", color: "text-green-500" };
  } else if (score >= 70) {
    return { label: "Good", color: "text-green-600" };
  } else if (score >= 50) {
    return { label: "Average", color: "text-orange-500" };
  } else if (score >= 30) {
    return { label: "Poor", color: "text-red-400" };
  } else {
    return { label: "N/A", color: "text-red-700" };
  }
}

const HealthScoreChart: React.FC<HealthScoreChartProps> = () => {
  const data = [
    { date: "2025-02-19", score: 10 },
    { date: "2025-02-20", score: 40 },
    { date: "2025-02-21", score: 50 },
    { date: "2025-02-22", score: 100 },
    { date: "2025-02-23", score: 100 },
    { date: "2025-02-24", score: 100 },
    { date: "2025-02-25", score: 100 },
  ];

  const chartData = [
    {
      id: "Health Score",
      data: data.map((item) => ({
        x: item.date,
        y: item.score,
      })),
    },
  ];

  return (
    <div className="w-full bg-gray-100 p-4 rounded-xl mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">Health Score History</h3>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-gray-400 mr-1"></span>
            <span className="text-xs text-gray-600">N/A</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
            <span className="text-xs text-gray-600">Poor</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-amber-500 mr-1"></span>
            <span className="text-xs text-gray-600">Average</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
            <span className="text-xs text-gray-600">Good</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-teal-400 mr-1"></span>
            <span className="text-xs text-gray-600">Excellent</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveLine
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 35, left: 35 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: 100,
            stacked: false,
            reverse: false,
          }}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            format: (value) => {
              const dateObj = parseISO(value.toString());
              return format(dateObj, "d MMM");
            },
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
          }}
          colors={{ scheme: "green_blue" }}
          lineWidth={3}
          pointSize={8}
          enableGridX={false}
          enableGridY={true}
          theme={{
            grid: {
              line: {
                stroke: "#e5e7eb",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              },
            },
          }}
          pointColor="#10b981"
          pointBorderWidth={2}
          pointBorderColor="#10b981"
          enableArea={true}
          areaOpacity={0.3}
          defs={[
            {
              id: "red-green-gradient",
              type: "linearGradient",
              colors: [
                { offset: 0, color: "#ef4444" },
                { offset: 100, color: "#10b981" },
              ],
            },
          ]}
          fill={[{ match: "*", id: "red-green-gradient" }]}
          enableSlices="x"
          sliceTooltip={({ slice }) => {
            const point = slice.points[0];
            const dateStr = point.data.x as string;
            const score = point.data.y as number;

            const dateObj = parseISO(dateStr);
            const dayNum = Number(format(dateObj, "d"));
            const formattedDate = `${dayNum} ${format(dateObj, "MMMM, yyyy")}`;
            const dayOfWeek = format(dateObj, "EEEE");

            const { label: scoreLabel, color: scoreColor } = getScoreInfo(score);

            return (
              <div className="p-3 bg-white rounded shadow text-sm">
                <div className="font-semibold">{formattedDate}</div>
                <div className="text-gray-500">{dayOfWeek}</div>
                <hr className="my-2 font-semibold" />
                <div className={scoreColor}>
                  Score: {score} ({scoreLabel})
                </div>
              </div>
            );
          }}
          animate={true}
          motionConfig="gentle"
        />
      </div>
    </div>
  );
};

export default HealthScoreChart;
