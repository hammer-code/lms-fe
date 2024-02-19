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
        className={`mr-2 ${type === 'dashboard' && 'hidden md:flex'}`}
      />
      {type === 'dashboard' && (
        <HamburgerMenuIcon
          width={20}
          height={20}
          className="md:hidden text-primary mr-2 cursor-pointer"
        />
      )}
      <h1
        className={`text-lg ${theme === 'dark' ? 'text-white' : 'text-hmc-dark'} font-bold`}
      >
        hmc<span className="text-hmc-base">learn</span>
      </h1>
    </div>
  );
};
export default HmcLogo;
