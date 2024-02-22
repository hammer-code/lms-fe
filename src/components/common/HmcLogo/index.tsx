'use client';
import Image from 'next/image';
import { FC } from 'react';
import { useTheme } from 'next-themes';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

const HmcLogo: FC<{ type: string }> = ({ type }) => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center">
      <Image
        src={theme === 'dark' ? '/logo-hmc-dark.svg' : '/logo-hmc.svg'}
        width={38}
        height={31}
        alt="Logo HMC"
        className={`mr-1 ${type === 'dashboard' && 'hidden md:opacity-1 md:flex'}`}
      />
      {type === 'dashboard' && (
        <HamburgerMenuIcon
          width={45}
          height={25}
          className="md:hidden md:opacity-0 duration-200 text-primary mr-1 -ml-4 cursor-pointer"
        />
      )}
      <h1
        className={`md:text-lg text-md duration-200 ${theme === 'dark' ? 'text-white' : 'text-hmc-dark'} font-bold`}
      >
        hmc<span className="text-hmc-base">learn</span>
      </h1>
    </div>
  );
};
export default HmcLogo;
