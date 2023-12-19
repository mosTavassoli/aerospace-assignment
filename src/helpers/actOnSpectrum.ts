import axios from "axios";
import { config } from "@/core/config";

export const actOnSpectrum = async (): Promise<number> => {
  try {
    const response = await axios.get<number>(config.actOnSpectrum);
    return response.status;
  } catch (error) {
    throw new Error("An error occurred while fetching data");
  }
};
