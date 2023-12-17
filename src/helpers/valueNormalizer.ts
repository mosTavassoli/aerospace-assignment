import { GaugeType } from "@/types/types";

const normalizeValue = ({ value, label }: GaugeType) => {
  if (typeof value === "number") {
    switch (label) {
      case "velocity":
        return (value + 100) / 200;
      case "altitude":
        return (value + 90000) / 180000;
      case "temperature":
        return (value + 50) / 100;
      default:
        return value;
    }
  }
  return value;
};

export default normalizeValue;
