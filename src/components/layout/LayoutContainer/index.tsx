'use client';
import { ReactNode, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import Wrapper from '@/components/layout/Wrapper';
import { SidebarProvider } from '@/providers/sidebarProvider';
import { getCookie } from '@/lib/storage';
import useToast from '@/hooks/useToast';

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const routerPath = usePathname();
  const token = getCookie('token');
  const { showToast } = useToast();

  const pathName = ['/', '/sign-in', '/sign-up'];
  const isIndexPage = pathName.includes(routerPath);

  useEffect(() => {
    if (!token) {
      // Waiting for next task
      // showToast({ title: 'You must be login!' });
      // setTimeout(() => {
      //   router.push('/sign-in');
      // }, 3000);
    }
  }, [token]);

  return (
    <SidebarProvider>
      {isIndexPage ? <>{children}</> : <Wrapper>{children}</Wrapper>}
    </SidebarProvider>
  );
};
