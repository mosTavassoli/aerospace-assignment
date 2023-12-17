import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const GenericLineChart = ({ chartData, chartLabel, chartColor }: any) => {
  return (
    <div>
      <h2>{chartLabel} Chart</h2>
      <Line
        data={{
          labels: Array.from({ length: chartData.length }, (_, i) => i + 1),
          datasets: [
            {
              label: chartLabel,
              data: chartData,
              borderColor: chartColor,
              fill: false,
            },
          ],
        }}
      />
    </div>
  );
};

export default GenericLineChart;
