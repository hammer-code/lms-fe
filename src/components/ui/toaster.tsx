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
import { AlertCircle, Ban, CheckCircle, Info, icons } from 'lucide-react';

const IconToast = {
  info: {
    icon: <Info className="text-primary-blue" />,
    color: 'text-primary-blue',
    borderColor: 'border-primary-blue'
  },
  warning: {
    icon: <AlertCircle className="text-yellow-400" />,
    color: 'text-yellow-400',
    borderColor: 'border-yellow-400'
  },
  error: {
    icon: <Ban className="text-red-500" />,
    color: 'text-red-500',
    borderColor: 'border-red-500'
  },
  success: {
    icon: <CheckCircle className="text-green-500" />,
    color: 'text-green-500',
    borderColor: 'border-green-500'
  }
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
        const { icon } = IconToast[type];
        return (
          <Toast key={id} {...props} className={IconToast[type].color}>
            <div
              className={`flex border-l-2 gap-2 ${IconToast[type].borderColor}`}
            >
              <div className="flex ml-2">
                <div>{icon}</div>
              </div>
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
