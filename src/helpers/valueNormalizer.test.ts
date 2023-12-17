import normalizeValue from "./valueNormalizer";

describe("normalizeValue function", () => {
  it("normalizes velocity correctly", () => {
    const velocity = 50;
    const normalizedVelocity = normalizeValue({
      value: velocity,
      label: "velocity",
    });
    expect(normalizedVelocity).toBe(0.75);
  });

  it("normalizes altitude correctly", () => {
    const altitude = 45000;
    const normalizedAltitude = normalizeValue({
      value: altitude,
      label: "altitude",
    });
    expect(normalizedAltitude).toBe(0.75);
  });

  it("normalizes temperature correctly", () => {
    const temperature = -6.9617111811050325;
    const normalizedTemperature = normalizeValue({
      value: temperature,
      label: "temperature",
    });
    expect(normalizedTemperature).toBe(0.4303828881889497);
  });

  it("returns value when label is unknown", () => {
    const unknownValue = 10;
    const normalizedValue = normalizeValue({
      value: unknownValue,
      label: "unknown",
    });
    expect(normalizedValue).toBe(unknownValue);
  });
});
