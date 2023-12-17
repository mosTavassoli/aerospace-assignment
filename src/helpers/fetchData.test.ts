import axios from "axios";
import { fetchData } from "../helpers/fetchData";
jest.mock("axios");

describe("fetchData function", () => {
  const mockResponse = {
    altitude: 100,
    velocity: 50,
    temperature: 25,
    statusMessage: "Success",
    isAscending: true,
    isActionRequired: true,
    status: 200,
  };
  const spectrumStatusURL = process.env.VITE_SPECTRUM_STATUS_URL;

  beforeEach(() => {
    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({
      data: mockResponse,
    });
  });

  it("fetches data successfully", async () => {
    const response = await fetchData(spectrumStatusURL as string);
    expect(response).toEqual(mockResponse);
  });
});
