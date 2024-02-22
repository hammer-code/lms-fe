'use client';
import React from 'react';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import DashboardNav from '../DashboardNav';
import DashboardSide from '../DashboardSide';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex w-full">
          <DashboardSide />
          <div className="w-full">
            <DashboardNav />
            <div className="flex h-screen border-collapse overflow-hidden w-full">
              <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 pb-1">
                <div className="p-7">{children}</div>
              </main>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
export default Wrapper;
