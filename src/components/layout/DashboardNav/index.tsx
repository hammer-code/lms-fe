import HmcLogo from '@/components/common/HmcLogo';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import MobileSide from '../MobileSide';
import ThemeToggle from '../ThemeToggle';

const DashboardNav = () => {
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
          <div className="flex items-center gap-2">
            <p className="text-sm">Anonymous</p>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg" />
              <AvatarFallback>Anonymous</AvatarFallback>
            </Avatar>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
};
export default DashboardNav;
