import { config } from "@/core/config";
import { toast } from "react-toastify";
import useWebSocket from "@/hook/useWebSocket";
import { useCallback, useState } from "react";
import { SpectrumStatusType } from "@/types/types";
import { actOnSpectrum } from "@/helpers/actOnSpectrum";
import { SpectrumWSCMP } from "@/components/SpectrumWS";

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

  return (
    <SpectrumWSCMP
      reopenWebSocket={reopenWebSocket}
      sensorData={sensorData}
      error={error}
      showDialog={showDialog}
      setShowDialog={() => setShowDialog(false)}
      handleAction={handleAction}
      handleDismiss={handleDismiss}
    />
  );
};

export default SpectrumWS;
