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

type DialogBoxHandlerType = {
  handleAction: () => void;
  handleDismiss: () => void;
};

export type SpectrumStatusDialogBoxProps = DialogBoxHandlerType & {
  statusMessage: string;
};

export type SpectrumStatusMessageProps = {
  isAscending: boolean;
  isActionRequired: boolean;
  statusMessage: string;
};

export type GaugeComponentProps = {
  sensorData: SpectrumStatusType;
};

type SpectrumBaseType = {
  sensorData: SpectrumStatusType;
  handleAction: () => Promise<void>;
  handleDismiss: () => void;
  error: string | null;
};

export type SpectrumStatusProps = SpectrumBaseType & {
  isActionRequired: boolean;
  fetchSpectrumData: () => Promise<void>;
  setIsActionRequired: () => void;
};

export type SpectrumWSProps = SpectrumBaseType & {
  reopenWebSocket: () => void;
  showDialog: boolean;
  setShowDialog: () => void;
};
