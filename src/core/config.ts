const spectrumStatusURL = import.meta.env.VITE_SPECTRUM_STATUS_URL || "";
const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL || "";

export const config = (function config() {
  return {
    spectrumStatusURL,
    websocketUrl,
    defaultDelaySpectrumWS: 4000 as const,
    defaultGaugeAnimateDelay: 1000 as const,
  };
})();
