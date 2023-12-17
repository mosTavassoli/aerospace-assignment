export type SpectrumStatusType = {
  altitude: number;
  velocity: number;
  temperature: number;
  isAscending: boolean;
  statusMessage: string;
  isActionRequired: boolean;
};

export type GaugeType = {
  value: number;
  label: string;
};

export type CallToActionProps = {
  fetchData: () => void;
};

export type DisplayValueType = {
  label: string;
  formattedValue: string;
};

export type SpectrumStatusDialogBoxProps = {
  statusMessage: string;
  handleAction: () => void;
  handleDismiss: () => void;
};

export type SpectrumStatusMessageProps = {
  isAscending: boolean;
  isActionRequired: boolean;
  statusMessage: string;
};

export type GaugeComponentProps = {
  sensorData: SpectrumStatusType;
};
