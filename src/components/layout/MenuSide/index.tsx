import { FC } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { DashboardMenu } from '@/constants/menu';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuSidebarProps } from '@/types';

const MenuSide: FC<MenuSidebarProps> = ({ setOpen }) => {
  const { isOpen } = useSidebar();
  const path = usePathname();
  return (
    <div className="px-2 space-y-2 w-full">
      {DashboardMenu?.map(item => (
        <Link
          key={item?.id}
          href={item?.path}
          onClick={() => {
            if (setOpen) setOpen(false);
          }}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'flex w-full hover:bg-muted gap-2 pl-6 duration-200 justify-start',
            path === item.path && 'bg-muted hover:bg-muted'
          )}
        >
          <div>
            <item.icon className="h-5 w-5 text-primary" />
          </div>
          <p
            className={cn(
              `transition-all duration-200`,
              isOpen ? 'opacity-1' : 'opacity-0'
            )}
          >
            {item?.title}
          </p>
        </Link>
      ))}
    </div>
  );
};
export default MenuSide;
