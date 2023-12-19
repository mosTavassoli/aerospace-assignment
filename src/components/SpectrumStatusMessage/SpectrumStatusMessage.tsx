import { SpectrumStatusMessageProps } from "@/types/types";

const SpectrumStatusMessage = ({
  isActionRequired,
  isAscending,
  statusMessage,
}: SpectrumStatusMessageProps) => {
  return (
    <div className="relative after:absolute after:content-[''] after:w-full after:h-[1px] after:bg-black/10 top-0 after:left-1/2 after:-translate-x-1/2 text-sm lg:text-lg">
      <div className="text-center font-bold capitalize flex flex-col gap-2 p-5">
        <div>
          <span className="text-black/60">Vehicle Direction: </span>
          <span className={`uppercase font-extrabold`}>
            {isAscending ? "ascending" : "descending"}
          </span>
        </div>
        <div>
          <span className="text-black/60">Action Required: </span>
          <span className={`uppercase font-extrabold`}>
            {isActionRequired ? "yes" : "no"}
          </span>
        </div>
        <div>
          <span className="text-black/60">status message:</span>
          <div className="uppercase font-extrabold">{statusMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default SpectrumStatusMessage;
