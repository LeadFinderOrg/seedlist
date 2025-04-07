import React from "react";

export interface ScoreInfo {
  label: string;
  color: string;
}

export function getScoreInfo(score: number | undefined): ScoreInfo {
  if (typeof score !== "number" || isNaN(score)) {
    return { label: "N/A", color: "text-red-700" };
  }
  if (score >= 90) {
    return { label: "Excellent", color: "text-emerald-400" };
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

interface SeriesDataPoint {
  x: string | number;
  y: number;
  data: {
    x: string | number;
    y: number;
  };
}

interface CustomSegmentedAreaProps {
  xScale: (value: string | number) => number;
  yScale: (value: number) => number;
  innerHeight: number;
  series: Array<{
    id: string | number;
    data: SeriesDataPoint[];
  }>;
}

const CustomSegmentedArea: React.FC<CustomSegmentedAreaProps> = ({
  xScale,
  yScale,
  innerHeight,
  series,
}) => {
  const points = series[0].data;

  return (
    <>
      {points.map((currentPoint, i) => {
        if (i >= points.length - 1) return null;
        const nextPoint = points[i + 1];

        const x0 = xScale(currentPoint.data.x);
        const y0 = yScale(currentPoint.data.y);
        const x1 = xScale(nextPoint.data.x);
        const y1 = yScale(nextPoint.data.y);

        const scoreInfo = getScoreInfo(currentPoint.data.y);
        let fillColor = "#9ca3af";
        switch (scoreInfo.label) {
          case "Excellent":
            fillColor = "#34D399";
            break;
          case "Good":
            fillColor = "#10b981";
            break;
          case "Average":
            fillColor = "#f59e0b";
            break;
          case "Poor":
            fillColor = "#ef4444";
            break;
          default:
            fillColor = "#9ca3af";
        }

        const pathD = `
          M ${x0},${y0}
          L ${x1},${y1}
          L ${x1},${innerHeight}
          L ${x0},${innerHeight}
          Z
        `;

        return (
          <path
            key={currentPoint.data.x.toString()}
            d={pathD}
            fill={fillColor}
            opacity={0.15}
          />
        );
      })}
    </>
  );
};

export default CustomSegmentedArea;
