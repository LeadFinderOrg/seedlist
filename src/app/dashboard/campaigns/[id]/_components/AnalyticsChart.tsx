import React from "react";

import { ResponsiveLine } from "@nivo/line";

import {
  CAMPAIGN_CHART_COLORS,
  ChartSeries,
} from "@/utils/constants/campaignChartData";

interface AnalyticsChartProps {
  chartData: ChartSeries[];
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({ chartData }) => {
  return (
    <div className="w-2/3 bg-white p-6 rounded-lg border border-gray-300">
      <div className="w-full h-96">
        <ResponsiveLine
          data={chartData}
          colors={({ id }) => {
            switch (id) {
              case "Sent":
                return CAMPAIGN_CHART_COLORS.BLUE;
              case "Total Opens":
                return CAMPAIGN_CHART_COLORS.YELLOW;
              case "Unique Opens":
                return CAMPAIGN_CHART_COLORS.LIGHT_GREEN;
              case "Links Clicked":
                return CAMPAIGN_CHART_COLORS.TEAL;
              case "Total Replies":
                return CAMPAIGN_CHART_COLORS.INDIGO;
              default:
                return CAMPAIGN_CHART_COLORS.BLUE;
            }
          }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: 0,
            max: "auto",
            stacked: false,
            reverse: false,
          }}
          curve="monotoneX"
          enableArea={true}
          areaOpacity={0.15}
          lineWidth={2}
          pointSize={6}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          margin={{ top: 30, right: 20, bottom: 50, left: 40 }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendOffset: -50,
            legendPosition: "middle",
          }}
          enableSlices="x"
          useMesh={true}
          legends={[
            {
              anchor: "top-right",
              direction: "row",
              justify: false,
              translateY: -25,
              translateX: 50,
              itemWidth: 100,
              itemHeight: 20,
              symbolSize: 12,
              symbolShape: "circle",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default AnalyticsChart;
