'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from '@/components/ui/toast';
import useToast from '@/hooks/useToast';
import { AlertCircle, Ban, CheckCircle, Info } from 'lucide-react';

const IconToast = {
  info: <Info />,
  warning: <AlertCircle />,
  error: <Ban />,
  success: <CheckCircle />
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        type = 'info',
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-3 border-l-2 border-blue-400">
              {IconToast[type]}
              <div>
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
