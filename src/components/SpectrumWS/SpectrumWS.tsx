import { config } from "@/core/config";
import { useCallback, useState } from "react";
import useWebSocket from "@/hook/useWebSocket";
import { SpectrumStatusType } from "@/types/types";
import { GaugeComponent } from "@/components/Charts/index";
import SpectrumStatusMessage from "@/components/SpectrumStatusMessage/index";
import SpectrumStatusDialogBox from "@/components/SpectrumStatusDialogBox/index";
import RealTimeDataVisualization from "@/components/RealTimeDataVisualization/index";
import { actOnSpectrum } from "@/helpers/actOnSpectrum";
import { ToastContainer, toast } from "react-toastify";

const SpectrumWS = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [sensorData, setSensorData] = useState<SpectrumStatusType>({
    altitude: 0,
    velocity: 0,
    temperature: 0,
    statusMessage: "",
    isAscending: false,
    isActionRequired: false,
  });

  const { isAscending, statusMessage, isActionRequired } = sensorData;

  const checkIsActionRequired = (isActionRequired: boolean) => {
    if (isActionRequired) {
      setShowDialog(true);
      stopWebSocket();
    }
  };

  const onDataReceived = useCallback(
    (data: SpectrumStatusType) => {
      setSensorData(data);
      checkIsActionRequired(data.isActionRequired);
    },
    [checkIsActionRequired]
  );

  const { stopWebSocket, reopenWebSocket, error } = useWebSocket(
    onDataReceived,
    config.defaultDelaySpectrumWS
  );

  const handleAction = async () => {
    const status = await actOnSpectrum();
    if (status === 200) {
      toast.info("Action is Taken", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      setShowDialog(false);
      reopenWebSocket();
    }
  };

  const handleDismiss = () => {
    setShowDialog(false);
    reopenWebSocket();
  };

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
