import React, { useMemo } from "react";
import { config } from "@/core/config";
import { GaugeType } from "@/types/types";
import GaugeChart from "react-gauge-chart";
import normalizeValue from "@/helpers/valueNormalizer";
import { getDisplayValue } from "@/helpers/gaugeHelper";

const Gauge = React.memo(({ value, label }: GaugeType) => {
  const formattedValue = useMemo(
    () => (value ? value.toFixed(2) : "N/A"),
    [value]
  );

  const normalizedValue = useMemo(
    () => normalizeValue({ value, label }),
    [value, label]
  );

  const displayValue = useMemo(
    () => getDisplayValue({ label, formattedValue }),
    [label, formattedValue]
  );

  const gaugeChartProps = useMemo(
    () => ({
      id: `${label.toLowerCase()}-gauge`,
      percent: normalizedValue || 0,
      textColor: "#fff",
      needleColor: "#464A4F",
      needleBaseColor: "#fff",
      arcPadding: 0.01,
      arcsLength: [0.3, 0.3, 0.3],
      colors: ["#FF6347", "#FFFF00", "#32CD32"],
      arcWidth: 0.2,
      animDelay: config.defaultGaugeAnimateDelay,
      hideText: true,
    }),
    [label, normalizedValue]
  );

  return (
    <div className="grid grid-cols-1">
      <div className="col-start-1 row-span-full self-end pb-10 text-yellow-300 text-center uppercase font-bold z-10">
        {label}
      </div>
      <div className="circle col-start-1 row-span-full">
        <div style={{ height: "100%" }}>
          <GaugeChart {...gaugeChartProps} />
          <div className="unit">{displayValue}</div>
        </div>
      </div>
    </div>
  );
});

export default Gauge;
