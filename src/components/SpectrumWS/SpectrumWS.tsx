import { SpectrumWSProps } from "@/types/types";
import { ToastContainer } from "react-toastify";
import { GaugeComponent } from "@/components/Charts/index";
import SpectrumStatusMessage from "@/components/SpectrumStatusMessage/index";
import SpectrumStatusDialogBox from "@/components/SpectrumStatusDialogBox/index";
import RealTimeDataVisualization from "@/components/RealTimeDataVisualization/index";

const SpectrumWS = ({
  error,
  sensorData,
  showDialog,
  handleAction,
  handleDismiss,
}: SpectrumWSProps) => {
  const { isAscending, statusMessage, isActionRequired } = sensorData;

  if (error) return null;
  return (
    <div className="grid lg:grid-rows-3 justify-center w-full lg:items-center">
      {showDialog && (
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
      <RealTimeDataVisualization
        altitude={sensorData.altitude}
        velocity={sensorData.velocity}
        temperature={sensorData.temperature}
      />
      <ToastContainer />
    </div>
  );
};

export default SpectrumWS;
