'use client';
import { FC, useEffect, useState } from 'react';
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
import HmcLogo from '@/components/common/HmcLogo';

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
        <div className="py-4 flex items-center justify-between h-full">
          <HmcLogo type="main" />
          <nav className="text-black leading-6 font-semibold text-xs">
            <ul className="hidden md:flex gap-x-6">
              {MainMenu.map(item => (
                <li key={item.id}>
                  <Link
                    href=""
                    className="relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-hmc-base after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center after:rounded-full"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex md:hidden text-xs">
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
                      className="relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-hmc-base after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:rounded-full"
                    >
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:flex items-center font-semibold text-xs">
            <Link href="/sign-in">Sign In</Link>
            <Button
              asChild
              size="sm"
              className="rounded-full ml-4 px-6 bg-hmc-base hover:bg-hmc-hover-base text-xs"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
