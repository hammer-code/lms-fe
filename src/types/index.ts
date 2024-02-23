import { LucideIcon } from 'lucide-react';

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
