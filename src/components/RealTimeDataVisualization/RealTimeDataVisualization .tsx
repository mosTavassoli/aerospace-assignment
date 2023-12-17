import GenericLineChart from "../Charts/GenericLineChart";
import { SpectrumStatusType } from "@/types/types";
import { useLimitedChartData } from "@/hook/useLimitedChartData";

const RealTimeDataVisualization = ({
  altitude,
  velocity,
  temperature,
}: Partial<SpectrumStatusType>) => {
  const altitudeChartData = useLimitedChartData(altitude);
  const velocityChartData = useLimitedChartData(velocity);
  const temperatureChartData = useLimitedChartData(temperature);

  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-1 lg:grid-cols-3 m-auto">
        <GenericLineChart
          chartData={altitudeChartData}
          chartLabel="Altitude"
          chartColor="red"
        />
        <GenericLineChart
          chartData={velocityChartData}
          chartLabel="Velocity"
          chartColor="blue"
        />
        <GenericLineChart
          chartData={temperatureChartData}
          chartLabel="Temperature"
          chartColor="green"
        />
      </div>
    </div>
  );
};

export default RealTimeDataVisualization;
