import { SpectrumStatusType } from "@/types/types";
import axios from "axios";

type ApiResponse = SpectrumStatusType & {
  status: number;
};

export const fetchData = async (
  spectrumStatusURL: string
): Promise<ApiResponse> => {
  try {
    const response = await axios.get<ApiResponse>(spectrumStatusURL);
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data");
  }
};
