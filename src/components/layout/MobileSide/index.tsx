import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import MenuSide from '../MenuSide';

const MobileSide = () => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen} modal={true}>
        <SheetTrigger asChild>
          <div className="flex items-center justify-center">
            <HamburgerMenuIcon
              width={45}
              height={25}
              className="md:hidden md:opacity-0 duration-200 text-primary mr-1 -ml-4 cursor-pointer"
            />
            <h1
              className={`md:text-lg text-md duration-200 ${theme === 'dark' ? 'text-white' : 'text-hmc-dark'} font-bold`}
            >
              hmc<span className="text-hmc-base">learn</span>
            </h1>
          </div>
        </SheetTrigger>
        <SheetContent side="left" className="w-72">
          <div className="px-2">
            <h1
              className={`md:text-lg text-md duration-200 ${theme === 'dark' ? 'text-white' : 'text-hmc-dark'} font-bold`}
            >
              hmc<span className="text-hmc-base">learn</span>
            </h1>
          </div>
          <div className="mt-4">
            <MenuSide setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileSide;
