import { useEffect } from "react";
import { toast } from "react-toastify";
import useFetchData from "@/hook/useFetchData";
import { actOnSpectrum } from "@/helpers/actOnSpectrum";
import { SpectrumStatusCMP } from "@/components/SpectrumStatus";

const SpectrumStatus = () => {
  const {
    sensorData,
    isActionRequired,
    error,
    fetchSpectrumData,
    setIsActionRequired,
  } = useFetchData();

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

  return (
    <SpectrumStatusCMP
      sensorData={sensorData}
      isActionRequired={isActionRequired}
      error={error}
      fetchSpectrumData={fetchSpectrumData}
      setIsActionRequired={() => setIsActionRequired(false)}
      handleAction={handleAction}
      handleDismiss={handleDismiss}
    />
  );
};

export default SpectrumStatus;
