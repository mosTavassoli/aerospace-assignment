import "react-toastify/dist/ReactToastify.css";
import { SpectrumStatusProps } from "@/types/types";
import { ToastContainer } from "react-toastify";
import { GaugeComponent } from "@/components/Charts/index";
import CallToAction from "@/components/CallToAction/index";
import SpectrumStatusMessage from "@/components/SpectrumStatusMessage/index";
import SpectrumStatusDialogBox from "@/components/SpectrumStatusDialogBox/index";

const SpectrumStatus = ({
  error,
  fetchSpectrumData,
  isActionRequired,
  sensorData,
  handleAction,
  handleDismiss,
}: SpectrumStatusProps) => {
  const { isAscending, statusMessage } = sensorData;

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
      <ToastContainer />
    </div>
  );
};

export default SpectrumStatus;
