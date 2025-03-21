import React from "react";

import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WarmupEmailsChart: React.FC = () => {
  // Data for the chart
  const series = [
    {
      name: "Warmup Emails Sent",
      data: [12, 6, 10, 9, 2, 20, 3],
    },
    {
      name: "Landed in spam",
      data: [0, 0, 0, 3, 4, 10, 10],
    },
  ];

  // Calculate the maximum value for y-axis dynamically
  const calculateYAxisMax = () => {
    const stackedMaxValues = series[0].data.map(
      (val, index) => val + (series[1].data[index] || 0)
    );
    const maxValue = Math.max(...stackedMaxValues);

    return Math.ceil(maxValue / 3) * 3;
  };

  const yAxisMax = calculateYAxisMax();

  // Chart options
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
      fontFamily: "Inter, sans-serif",
      width: "100%",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#22c55e", "#ef4444"],
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: "#64748b",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    yaxis: {
      min: 0,
      max: yAxisMax,
      tickAmount: yAxisMax,
      forceNiceScale: true,
      labels: {
        formatter: (value) => `${Math.round(value)}`,
        style: {
          colors: "#64748b",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
        },
      },
    },
    grid: {
      borderColor: "#D1D5DB",
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      custom: function ({ series, dataPointIndex, w }) {
        const day = w.globals.labels[dataPointIndex];
        const warmupEmails = series[0][dataPointIndex];
        const spamEmails = series[1][dataPointIndex];

        return `
                <div class="bg-white p-2 rounded">
                    <div class="text-sm font-medium mb-1">${day}</div>
                        <div class="flex items-center text-xs">
                            <span class="w-3 h-3 rounded-full bg-emerald-500 mr-1"></span>
                            <span>Warmup Emails Sent: ${warmupEmails}</span>
                        </div>
                    ${
                      spamEmails > 0
                        ? `
                        <div class="flex items-center text-xs mt-1">
                            <span class="w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                            <span>Landed in spam: ${spamEmails}</span>
                        </div>`
                        : ""
                    }
                </div>
                    `;
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h3 className="text-gray-700 font-medium text-base mb-4">
        Warmup Emails Sent
      </h3>
      <div className="h-60">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default WarmupEmailsChart;
