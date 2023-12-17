import { useEffect } from "react";
import CallToAction from "../CallToAction";
import useFetchData from "@/hook/useFetchData";
import GaugeComponent from "../Charts/GaugeComponent";
import SpectrumStatusMessage from "@/components/SpectrumStatusMessage";
import SpectrumStatusDialogBox from "@/components/SpectrumStatusDialogBox";

const SpectrumStatus = () => {
  const {
    sensorData,
    isActionRequired,
    error,
    fetchSpectrumData,
    setIsActionRequired,
  } = useFetchData();

  const { isAscending, statusMessage } = sensorData;

  useEffect(() => {
    fetchSpectrumData();
  }, [fetchSpectrumData]);

  const handleAction = () => {
    setIsActionRequired(false);
  };

  const handleDismiss = () => {
    setIsActionRequired(false);
  };

  if (error) return null;

  return (
    <div className="grid lg:grid-rows-3 justify-center w-full lg:items-center ">
      {isActionRequired && (
        <SpectrumStatusDialogBox
          statusMessage={statusMessage}
          handleAction={handleAction}
          handleDismiss={handleDismiss}
        />
      )}
      <SpectrumStatusMessage
        isAscending={isAscending}
        isActionRequired={isActionRequired}
        statusMessage={statusMessage}
      />
      <GaugeComponent sensorData={sensorData} />
      <CallToAction fetchData={fetchSpectrumData} />
    </div>
  );
};

export default SpectrumStatus;
