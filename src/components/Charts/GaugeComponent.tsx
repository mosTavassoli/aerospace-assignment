import { useMemo } from "react";
import Gauge from "@/components/Charts/Gauge";
import { GaugeComponentProps, SpectrumStatusType } from "@/types/types";

const GaugeComponent = ({ sensorData }: GaugeComponentProps) => {
  const gaugeKeys: Array<keyof SpectrumStatusType> = [
    "altitude",
    "velocity",
    "temperature",
  ];

  const gaugeComponents = useMemo(
    () =>
      gaugeKeys.map((key) => (
        <div key={key} className="m-auto">
          <Gauge value={sensorData[key] as number} label={key} />
        </div>
      )),
    [sensorData]
  );

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 p-2">
      {gaugeComponents}
    </div>
  );
};

export default GaugeComponent;
