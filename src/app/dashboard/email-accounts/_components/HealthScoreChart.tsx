import React from 'react';
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const HealthScoreChart = () => {
  const healthScoreData = [
    { date: "2025-02-19", score: 10 },
    { date: "2025-02-20", score: 40 },
    { date: "2025-02-21", score: 50 },
    { date: "2025-02-22", score: 100 },
    { date: "2025-02-23", score: 100 },
    { date: "2025-02-24", score: 100 },
    { date: "2025-02-25", score: 100 },
  ];

  const getScoreCategory = (score: number) => {
    if (score === 100) return "Excellent";
    if (score >= 90) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Average";
    return "Poor";
  };

  const getColorForCategory = (category: string) => {
    switch (category) {
      case "Excellent":
        return "#10B981"; // Green
      case "Good":
        return "#38BDF8"; // Blue
      case "Average":
        return "#F97316"; // Orange
      case "Poor":
        return "#EF4444"; // Red
      default:
        return "#6B7280"; // Gray
    }
  };

  // Determine category/color based on the last score in the data array.
  const lastScore = healthScoreData[healthScoreData.length - 1].score;
  const lastScoreCategory = getScoreCategory(lastScore);
  const lastScoreColor = getColorForCategory(lastScoreCategory);

      

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 240,
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
    },
    stroke: {
      curve: "smooth",
      width: 2,
      colors: [lastScoreColor],
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: [lastScoreColor],
        inverseColors: false,
        // Increased opacities for better visibility
        opacityFrom: 0.6,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    dataLabels: { enabled: false },
    tooltip: {
      enabled: true,
      intersect: false,
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const score = series[seriesIndex][dataPointIndex];
        const date = new Date(healthScoreData[dataPointIndex].date);
        const dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const scoreCategory = getScoreCategory(score);
        const categoryColor = getColorForCategory(scoreCategory);

        return `
          <div class="p-3 bg-white rounded-lg shadow-md">
            <div class="text-sm text-gray-600">
              ${date.getDate()} ${
          [
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
          ][date.getMonth()]
        }, ${date.getFullYear()}
            </div>
            <div class="text-xs text-gray-500">${dayNames[date.getDay()]}</div>
            <div class="mt-2 flex items-center">
              <span class="font-medium">Score: </span>
              <span class="ml-1 font-bold" style="color: ${categoryColor}">
                ${score} (${scoreCategory})
              </span>
            </div>
          </div>
        `;
      },
    },
    markers: {
      size: 5,
      colors: [lastScoreColor],
      strokeColors: "white",
      strokeWidth: 2,
    },
    xaxis: {
      type: "category",
      categories: healthScoreData.map((item) => {
        const date = new Date(item.date);
        return `${date.getDate()} Feb`;
      }),
      labels: {
        style: { colors: "#6B7280" },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: { colors: "#6B7280" },
        formatter: (value) => value.toFixed(0),
      },
    },
    grid: {
      show: true,
      borderColor: "#E5E7EB",
      strokeDashArray: 3,
    },
  };

  const series = [
    {
      name: "Health Score",
      data: healthScoreData.map((item) => item.score),
    },
  ];

  return (
    <div
      className="p-4 rounded-xl bg-gray-100 mt-6"

    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800">Health Score History</h3>
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

      <div className="h-60">
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default HealthScoreChart;
