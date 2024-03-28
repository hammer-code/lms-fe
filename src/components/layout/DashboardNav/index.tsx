import { LogOut, User2 } from 'lucide-react';
import Link from 'next/link';

import HmcLogo from '@/components/common/HmcLogo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import MobileSide from '../MobileSide';
import ThemeToggle from '../ThemeToggle';
import { useRouter } from 'next/navigation';
import useToast from '@/hooks/useToast';
import { removeCookie } from '@/lib/storage';

const DashboardNav = () => {
  const router = useRouter();
  const { showToast } = useToast();

  const handleLogout = () => {
    removeCookie('token');
    showToast({
      title: 'Logout Successfully!',
      description: 'Thank you for learning here😊'
    });
    router.push('/sign-in');
  };

  return (
    <div className="absolute top-0 right-0 left-0 border-b bg-background/95 backdrop-blur z-40">
      <nav className="flex h-16 items-center justify-between px-8">
        <div className="hidden md:block">
          <HmcLogo type="dashboard" />
        </div>
        <div className="block md:!hidden">
          <MobileSide />
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">Anonymous</p>
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>Anonymous</AvatarFallback>
                  <AvatarImage src="https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg" />
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-5 space-y-2">
                <Link href="/dashboard/profile">
                  <DropdownMenuItem>
                    <User2 className="w-4 h-4 mr-3" />
                    <p className="text-sm cursor-pointer">Profile</p>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <DialogTrigger>
                    <div className="flex items-center">
                      <LogOut className="w-4 h-4 mr-3" />
                      <p className="text-sm cursor-pointer">Logout</p>
                    </div>
                  </DialogTrigger>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
              <DialogTitle className="flex items-center gap-2">
                <LogOut /> Logout?
              </DialogTitle>
              <DialogDescription>
                are You sure you want to logout?
              </DialogDescription>
              <DialogFooter className="flex flex-row justify-end md:gap-0 gap-2">
                <DialogClose>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={handleLogout}
                >
                  Yes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};
export default DashboardNav;
