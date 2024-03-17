'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ suffix, className, type, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-10 w-full gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-within:ring-2 focus-within:ring-offset-1',
          className,
          'border-gray-300'
        )}
      >
        {suffix}
        <input
          type={type}
          className={cn(
            'w-full outline-none bg-background file:bg-transparent file:border-0 file:text-sm file:font-medium'
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
