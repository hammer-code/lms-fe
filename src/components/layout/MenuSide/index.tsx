import { FC } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { DashboardMenu } from '@/constants/menu';
import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuSide: FC = () => {
  const { isOpen } = useSidebar();
  const path = usePathname();
  return (
    <div className="px-2 space-y-2">
      {DashboardMenu?.map(item => (
        <Link
          key={item?.id}
          href={item?.path}
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
