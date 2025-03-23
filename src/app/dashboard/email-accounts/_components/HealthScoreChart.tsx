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

  const selectedPoint = healthScoreData.find(
    (point) => point.date === "2025-02-22"
  );
  const selectedIndex = selectedPoint
    ? healthScoreData.indexOf(selectedPoint)
    : -1;

  // Get score rating based on value
  const getScoreRating = (score: number): string => {
    if (score >= 90) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 50) return "Average";
    if (score > 0) return "Poor";
    return "N/A";
  };

  const options: ApexOptions = {
    chart: {
      type: "area",
      height: 240,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      animations: {
        enabled: true,
        speed: 800,
      },
      background: "#F9FAFB",
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#40E0D0"], // Updated to match teal color in the image
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.2,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#FF5F5F", // Updated to match the red in the image
            opacity: 0.6,
          },
          {
            offset: 50,
            color: "#FF9F40", // Updated to match the orange in the image
            opacity: 0.4,
          },
          {
            offset: 70,
            color: "#40E0D0", // Updated to match the teal in the image
            opacity: 0.3,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#E5E7EB",
      strokeDashArray: 5,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: true,
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        const score = series[seriesIndex][dataPointIndex];
        const date = new Date(healthScoreData[dataPointIndex].date);
        const formattedDate = `${date.getDate()}${getOrdinalSuffix(date.getDate())} ${getMonthName(date.getMonth())}, ${date.getFullYear()}`;
        const dayOfWeek = getDayOfWeek(date.getDay());
        const rating = getScoreRating(score);

        return `
          <div class="bg-white p-3 rounded-lg shadow-md">
            <div class="text-gray-600 text-sm">${formattedDate}</div>
            <div class="text-xs text-gray-500">${dayOfWeek}</div>
            <div class="mt-2 flex items-center">
              <span class="font-medium">Score: </span>
              <span class="ml-1 font-bold ${getScoreColorClass(score)}">${score} (${rating})</span>
            </div>
          </div>
        `;
      },
    },
    markers: {
      size:
        selectedIndex > -1
          ? [0, 0, 0, 0, 0, 0, 0].map((_, i) => (i === selectedIndex ? 6 : 0))
          : 0,
      colors: ["#40E0D0"], // Updated to match the teal color
      strokeColors: ["#FFFFFF"],
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    xaxis: {
      type: "category",
      categories: healthScoreData.map((item) => {
        const date = new Date(item.date);
        return `${date.getDate()} Feb`;
      }),
      labels: {
        style: {
          colors: "#6B7280",
          fontFamily: "Inter, sans-serif",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#94A3B8",
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          colors: "#6B7280",
          fontFamily: "Inter, sans-serif",
        },
        formatter: function (value) {
          return value.toFixed(0);
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      offsetY: -10,
      fontFamily: "Inter, sans-serif",
      markers: {
        size: 10,
      },
      itemMargin: {
        horizontal: 10,
      },
      labels: {
        colors: "#4B5563",
      },
    },
    annotations: {
      points:
        selectedIndex > -1
          ? [
              {
                x: healthScoreData[selectedIndex].date.slice(8), // Day part
                y: healthScoreData[selectedIndex].score,
                marker: {
                  size: 6,
                  fillColor: "#40E0D0", // Updated to match the teal color
                  strokeColor: "#FFFFFF",
                  strokeWidth: 2,
                },
                label: {
                  borderColor: "#E5E7EB",
                  borderWidth: 1,
                  borderRadius: 5,
                  text: " ",
                  textAnchor: "middle",
                  position: "top",
                },
              },
            ]
          : [],
      xaxis: [
        {
          x:
            selectedIndex > -1
              ? healthScoreData[selectedIndex].date.slice(8)
              : undefined,
          strokeDashArray: 0,
          borderColor: "#94A3B8",
          label: {
            borderColor: "#FFFFFF",
            style: {
              color: "#FFFFFF",
              background: "#FFFFFF",
            },
          },
        },
      ],
    },
  };

  const series = [
    {
      name: "Health Score",
      data: healthScoreData.map((item) => item.score),
    },
  ];

  // Helper functions for date formatting
  function getOrdinalSuffix(day: number): string {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function getMonthName(month: number): string {
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
    return months[month];
  }

  function getDayOfWeek(day: number): string {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  function getScoreColorClass(score: number): string {
    if (score >= 90) return "text-teal-500"; // Changed to teal
    if (score >= 70) return "text-green-500";
    if (score >= 50) return "text-amber-500"; // Changed to orange/amber
    return "text-red-500";
  }

  return (
    <div className="p-4 !bg-gray-100 rounded-xl mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-800">
          Health Score History
        </h3>
        <div className="flex items-center space-x-4 mt-2">
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-gray-400 mr-1"></span>
            <span className="text-xs text-gray-600">N/A</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-red-500 mr-1"></span>{" "}
            {/* #FF5F5F */}
            <span className="text-xs text-gray-600">Poor</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-amber-500 mr-1"></span>{" "}
            {/* #FF9F40 */}
            <span className="text-xs text-gray-600">Average</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-green-500 mr-1"></span>
            <span className="text-xs text-gray-600">Good</span>
          </div>
          <div className="flex items-center">
            <span className="h-3 w-3 rounded-full bg-teal-400 mr-1"></span>{" "}
            {/* #40E0D0 */}
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
