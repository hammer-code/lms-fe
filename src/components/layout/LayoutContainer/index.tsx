'use client';
import { ReactNode } from 'react';
import Wrapper from '@/components/layout/Wrapper';
import { SidebarProvider } from '@/providers/sidebarProvider';
import { usePathname } from 'next/navigation';

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const router = usePathname();
  const pathName = ['/', '/sign-in', '/sign-up'];
  const isIndexPage = pathName.includes(router);

  return (
    <SidebarProvider>
      {isIndexPage ? <>{children}</> : <Wrapper>{children}</Wrapper>}
    </SidebarProvider>
  );
};
