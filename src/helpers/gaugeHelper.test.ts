import { getDisplayValue } from "../helpers/gaugeHelper";

describe("getDisplayValue function", () => {
  it("returns formatted value with correct unit for velocity", () => {
    const input = {
      label: "Velocity",
      formattedValue: "100",
    };
    const expected = "100 km/h";
    expect(getDisplayValue(input)).toBe(expected);
  });

  it("returns formatted value with correct unit for altitude", () => {
    const input = {
      label: "Altitude",
      formattedValue: "500",
    };
    const expected = "500 m";
    expect(getDisplayValue(input)).toBe(expected);
  });

  it("returns formatted value with correct unit for temperature", () => {
    const input = {
      label: "Temperature",
      formattedValue: "25",
    };
    const expected = "25 °C";
    expect(getDisplayValue(input)).toBe(expected);
  });

  it("returns formatted value with empty unit for unknown label", () => {
    const input = {
      label: "UnknownLabel",
      formattedValue: "123",
    };
    const expected = "123 ";
    expect(getDisplayValue(input)).toBe(expected);
  });

  it("returns formatted value with empty unit if label is empty", () => {
    const input = {
      label: "",
      formattedValue: "456",
    };
    const expected = "456 ";
    expect(getDisplayValue(input)).toBe(expected);
  });
});
