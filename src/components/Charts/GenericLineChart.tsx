import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

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
        backgroundColor: "black",
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Time",
          color: "black",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: chartLabel,
          color: "black",
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
