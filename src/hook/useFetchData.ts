import { config } from "@/core/config";
import { useState, useCallback } from "react";
import { fetchData } from "@/helpers/fetchData";
import { SpectrumStatusType } from "@/types/types";

const useFetchData = () => {
  const [sensorData, setSensorData] = useState<SpectrumStatusType>({
    altitude: 0,
    velocity: 0,
    temperature: 0,
    statusMessage: "",
    isAscending: false,
    isActionRequired: false,
  });
  const [isActionRequired, setIsActionRequired] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSpectrumData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetchData(config.spectrumStatusURL);
      setSensorData(response);
      setIsActionRequired(response.isActionRequired);
      setError(null);
    } catch (error) {
      const err = error as any;
      setError(err.message || "An error occurred while fetching data");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    sensorData,
    isActionRequired,
    isLoading,
    error,
    fetchSpectrumData,
    setIsActionRequired,
  };
};

export default useFetchData;
