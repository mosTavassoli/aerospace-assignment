import { useEffect } from "react";
import useFetchData from "@/hook/useFetchData";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { actOnSpectrum } from "@/helpers/actOnSpectrum";
import { GaugeComponent } from "@/components/Charts/index";
import CallToAction from "@/components/CallToAction/index";
import SpectrumStatusMessage from "@/components/SpectrumStatusMessage/index";
import SpectrumStatusDialogBox from "@/components/SpectrumStatusDialogBox/index";

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
      setIsActionRequired(false);
    }
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
      <ToastContainer />
    </div>
  );
};

export default SpectrumStatus;
