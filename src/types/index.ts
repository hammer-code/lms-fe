import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';
import { IconProps } from '@radix-ui/react-icons/dist/types';

export interface MainMenuType {
  id?: number;
  title?: string;
}

export interface LogoPartnersType {
  src: string | undefined;
  alt?: string;
  width?: number;
}

export type DashboardMenuType = {
  id: number;
  title: string;
  icon: LucideIcon;
  path: string;
  isChildren: boolean;
};

export interface SidebarContextProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

export interface MenuSidebarProps {
  setOpen?: (open: boolean) => void;
}

export interface ImageCarouselType {
  src?: string;
  alt?: string | undefined;
  key?: null | undefined;
  id?: number;
}

export interface LogoCarouselType {
  id?: number;
  src?: string;
  alt?: string;
  text?: string;
}

export interface SocialMediaType {
  title?: string;
  icon: ComponentType<IconProps>;
  bgColor: string;
  url?: string;
}
