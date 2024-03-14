export interface ToastItem {
  id?: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export interface ToastStore {
  toasts: ToastItem[];
  showToast: (toast: ToastItem) => void;
}
