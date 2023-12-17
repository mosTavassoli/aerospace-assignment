import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import React from "react";

Chart.register(...registerables);

interface GenericLineChartProps {
  chartData: number[];
  chartLabel: string;
  chartColor: string;
}

const GenericLineChart: React.FC<GenericLineChartProps> = ({
  chartData,
  chartLabel,
  chartColor,
}) => {
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "black", // Customize tooltip background color if needed
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time", // Customize x-axis title if needed
          color: "black", // Customize x-axis title color if needed
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: chartLabel, // Use the chartLabel for y-axis title
          color: "black", // Customize y-axis title color if needed
        },
      },
    },
  };

  const chartConfig = {
    labels: Array.from({ length: chartData.length }, (_, i) => i + 1),
    datasets: [
      {
        label: chartLabel,
        data: chartData,
        borderColor: chartColor,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={chartConfig} options={chartOptions} />
    </div>
  );
};

export default React.memo(GenericLineChart);
