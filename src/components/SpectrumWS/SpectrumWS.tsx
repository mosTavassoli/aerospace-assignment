import { config } from "@/core/config";
import { useCallback, useState } from "react";
import useWebSocket from "@/hook/useWebSocket";
import { SpectrumStatusType } from "@/types/types";
import GaugeComponent from "../Charts/GaugeComponent";
import SpectrumStatusMessage from "@/components/SpectrumStatusMessage";
import SpectrumStatusDialogBox from "@/components/SpectrumStatusDialogBox";
import RealTimeDataVisualization from "../RealTimeDataVisualization/RealTimeDataVisualization ";

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

  const handleAction = () => {
    setShowDialog(false);
    reopenWebSocket();
  };

  const handleDismiss = () => {
    setShowDialog(false);
    reopenWebSocket();
  };

  if (error) return null;
  return (
    <div className="grid lg:grid-rows-2 justify-center w-full lg:items-center">
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
        altitudeData={sensorData.altitude}
        velocityData={sensorData.velocity}
        temperatureData={sensorData.temperature}
      />
    </div>
  );
};

export default SpectrumWS;
