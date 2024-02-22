import { SidebarContext } from '@/providers/sidebarProvider';
import { SidebarContextProps } from '@/types';
import { useContext } from 'react';

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
