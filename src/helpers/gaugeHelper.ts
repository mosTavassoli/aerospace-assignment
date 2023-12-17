import { DisplayValueType } from "@/types/types";

export const getDisplayValue = ({
  label,
  formattedValue,
}: DisplayValueType) => {
  const unitMap: Record<string, string> = {
    velocity: "km/h",
    altitude: "m",
    temperature: "°C",
  };

  const unit = unitMap[label.toLowerCase()] || "";
  return `${formattedValue} ${unit}`;
};
