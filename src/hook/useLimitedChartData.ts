import { useEffect, useState } from "react";

export const useLimitedChartData = (
  data: number | undefined,
  maxLength: number = 10
) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    if (data !== undefined) {
      setChartData((prevData) => {
        const newData = [...prevData, data];
        return newData.slice(-maxLength);
      });
    }
  }, [data, maxLength]);

  return chartData;
};
