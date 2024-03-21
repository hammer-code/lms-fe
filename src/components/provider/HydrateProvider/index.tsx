import type { ReactNode } from 'react';

export const HydrateProvider = ({ children }: { children: ReactNode }) => {
  return <div suppressHydrationWarning={true}>{children}</div>;
};
