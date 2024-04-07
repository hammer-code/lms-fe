'use client';
import { ChevronRight } from 'lucide-react';
import useSidebar from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import MenuSide from '../MenuSide';

const DashboardSide = () => {
  const { toggleSidebar, isOpen } = useSidebar();
  return (
    <div
      className={cn(
        'relative h-screen border-r pt-24 hidden md:block duration-500',
        isOpen ? 'w-72' : 'w-[85px]'
      )}
    >
      <ChevronRight
        width={26}
        height={26}
        className={cn(
          'absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isOpen && 'rotate-180'
        )}
        onClick={() => toggleSidebar('not-responsive')}
      />
      <MenuSide />
    </div>
  );
};
export default DashboardSide;
