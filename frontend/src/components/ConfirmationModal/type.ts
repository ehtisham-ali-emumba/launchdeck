export interface ConfirmationModalProps {
  children?: (onOpen: () => void) => React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  message?: string;
  hideConfirmButton?: boolean;
  heading?: string;
  open?: boolean;
}
