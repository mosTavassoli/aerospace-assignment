import { CallToActionProps } from "@/types/types";

const CallToAction = ({ fetchData }: CallToActionProps) => {
  return (
    <div className="text-center">
      <button
        className="inline-block text-primary font-bold bg-white uppercase px-10 py-3 rounded-full outline-none text-center w-fit border border-gray-300"
        onClick={fetchData}
      >
        fetch data
      </button>
    </div>
  );
};

export default CallToAction;
