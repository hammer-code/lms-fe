import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import logoHmc from '/public/logo-hmc.svg';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { MainMenu } from '@/constants/menu';

const Navbar: FC = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-10 flex-none transition-colors duration-500 shadow-sm border-none ${scroll ? 'backdrop-blur-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="py-4 flex items-center h-full">
          <Image
            src={logoHmc}
            width={38}
            height={31}
            alt="Logo HMC"
            className="mr-2"
          />
          <h1 className="text-lg text-[#1F4C8F] font-bold">
            hmc<span className="text-[#00CCFF]">learn</span>
          </h1>
          <div className="flex items-center text-xs ml-auto">
            <nav className="text-black leading-6 font-semibold">
              <ul className="hidden lg:flex gap-x-6">
                {MainMenu.map(item => (
                  <li key={item.id}>
                    <Link
                      href=""
                      className="relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#5DDFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:rounded-full"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline" className="rounded-lg">
                    <HamburgerMenuIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                  {MainMenu.map(item => (
                    <DropdownMenuItem key={item.id}>
                      <Link
                        href=""
                        className="relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#5DDFFF] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:rounded-full"
                      >
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="hidden lg:flex items-center ml-24 font-semibold">
              <Link href="/sign-in">Sign In</Link>
              <Button
                asChild
                size="sm"
                className="rounded-full ml-4 px-6 bg-[#5DDFFF] hover:bg-[#00CCFF]"
              >
                <Link href="">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
