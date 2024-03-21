'use client';

import { Button } from '@/components/ui/button';
import { getAssetUrl } from '@/lib/utils';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type HeaderContainerProps = {
  studentName?: string;
};

const HeaderContainer: React.FC<HeaderContainerProps> = ({ studentName }) => {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="md:text-2xl text-xl font-medium">Dashboard Page</h1>
      <div className="relative w-full md:h-[181px] h-40 border border-hmc-grey-100 shadow-[0px_0px_20px_0px_#F1F5F9] rounded-[20px] dark:shadow-none">
        <Image
          src={getAssetUrl(
            theme === 'dark'
              ? '/img/background-container-dark.svg'
              : '/img/background-container.svg'
          )}
          alt="background-container"
          width={100}
          height={100}
          className="w-full overflow-hidden h-full object-cover absolute rounded-[20px]"
        />
        <div className="relative p-5 z-10 h-full">
          <div className="flex justify-between sm:items-center items-end h-full">
            <div className="flex flex-col justify-between items-start h-full">
              <div className="flex flex-col gap-1.5">
                <h2 className="md:text-2xl text-xl font-semibold">
                  Hello {studentName} 👋
                </h2>
                <p className="text-hmc-grey-400 text-xs font-medium">
                  Let’s learn something new today!
                </p>
              </div>
              <Button className="text-xs bg-hmc-blue-800 hover:bg-hmc-blue-700 dark:text-white active:bg-hmc-blue-800 drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-full ">
                JOIN GRUP
              </Button>
            </div>
            <div className="md:p-5 p-3 md:w-32 w-20 md:h-32 h-20 bg-hmc-blue-800 md:rounded-[42px] rounded-2xl object-cover">
              <Image
                src={getAssetUrl('/img/profile.png')}
                alt="profile"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContainer;
