import React from "react";

import { ResponsiveLine } from "@nivo/line";
import { format, parseISO } from "date-fns";

import { HealthScoreData } from "@/utils/constants/chartData";

import CustomSegmentedArea, { getScoreInfo } from "./CustomSegmentedArea";

const STROKE_COLOR = "#e0e0e0";
const LINE_COLOR = "#F97316";

const HealthScoreChart: React.FC = () => {
  const chartData = [
    {
      id: "Health Score",
      data: HealthScoreData.map((item) => ({
        x: item.date,
        y: item.score,
      })),
    },
  ];

  return (
    <div className="w-full bg-gray-100 p-4 rounded-xl mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          Health Score History
        </h3>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-red-700 mr-1"></span>
            <span className="text-xs text-slate-800">N/A</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>
            <span className="text-xs text-slate-800">Poor</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-orange-500 mr-1"></span>
            <span className="text-xs text-slate-800">Average</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-emerald-600 mr-1"></span>
            <span className="text-xs text-slate-800">Good</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-emerald-400 mr-1"></span>
            <span className="text-xs text-slate-800">Excellent</span>
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
          layers={[
            // @ts-expect-error CustomSegmentedArea is not a standard layer but is intentionally used here
            CustomSegmentedArea,
            "grid",
            "markers",
            "axes",
            "areas",
            "lines",
            "points",
            "slices",
            "mesh",
            "legends",
          ]}
          colors={[LINE_COLOR]}
          lineWidth={2}
          pointSize={8}
          enableGridX={false}
          enableGridY={true}
          enableArea={false}
          enableSlices="x"
          sliceTooltip={({ slice }) => {
            const point = slice.points[0];
            const dateStr = point.data.x as string;
            const score = point.data.y as number | undefined;
            const dateObj = parseISO(dateStr);
            const dayNum = Number(format(dateObj, "d"));
            const formattedDate = `${dayNum} ${format(dateObj, "MMMM, yyyy")}`;
            const dayOfWeek = format(dateObj, "EEEE");
            const { label: scoreLabel, color: scoreColor } =
              getScoreInfo(score);
            return (
              <div className="p-3 bg-white rounded shadow text-sm font-semibold">
                <div className="font-semibold">{formattedDate}</div>
                <div className="text-slate-800">{dayOfWeek}</div>
                <hr className="my-2" />
                <div className={scoreColor}>
                  Score: {score !== undefined ? score : "N/A"} ({scoreLabel})
                </div>
              </div>
            );
          }}
          theme={{
            grid: {
              line: {
                stroke: STROKE_COLOR,
                strokeWidth: 1,
                strokeDasharray: "3 3",
                
              },
            },
          }}
          animate={true}
          motionConfig="gentle"
        />
      </div>
    </div>
  );
};

export default HealthScoreChart;
