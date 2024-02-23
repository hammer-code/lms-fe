'use client';
import { ReactNode } from 'react';
import Wrapper from '@/components/layout/Wrapper';
import { SidebarProvider } from '@/providers/sidebarProvider';
import { usePathname } from 'next/navigation';

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const router = usePathname();
  const isIndexPage = router === '/';

  return (
    <SidebarProvider>
      {isIndexPage ? <>{children}</> : <Wrapper>{children}</Wrapper>}
    </SidebarProvider>
  );
};
