import { SpectrumStatusDialogBoxProps } from "@/types/types";

const SpectrumStatusDialogBox = ({
  handleAction,
  handleDismiss,
  statusMessage,
}: SpectrumStatusDialogBoxProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center after:absolute after:bg-gray-800/70 after:w-full after:h-full">
      <div className="z-10 p-8 rounded-lg bg-white relative">
        <h2 className="text-center mb-4 font-bold text-red-600 uppercase">
          action required
        </h2>
        <span className="block text-center uppercase font-bold">Status</span>
        <p className="capitalize">{statusMessage}</p>
        <div className="mt-4 flex justify-center">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-md mr-4"
            onClick={handleAction}
          >
            Take Action
          </button>
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded-md"
            onClick={handleDismiss}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpectrumStatusDialogBox;
