const spectrumStatusURL = import.meta.env.VITE_SPECTRUM_STATUS_URL || "";
const websocketUrl = import.meta.env.VITE_WEBSOCKET_URL || "";
const actOnSpectrum = import.meta.env.VITE_ACT_ON_SPECTRUM || "";

export const config = (function config() {
  return {
    spectrumStatusURL,
    websocketUrl,
    actOnSpectrum,
    defaultDelaySpectrumWS: 2000 as const,
    defaultGaugeAnimateDelay: 1000 as const,
  };
})();
