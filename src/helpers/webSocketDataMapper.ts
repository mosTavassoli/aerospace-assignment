export const normalizeData = (data: any) => {
  return {
    altitude: data.Altitude || 0,
    isActionRequired: data.IsActionRequired || false,
    isAscending: data.IsAscending || false,
    statusMessage: data.StatusMessage || "",
    temperature: data.Temperature || 0,
    velocity: data.Velocity || 0,
  };
};
