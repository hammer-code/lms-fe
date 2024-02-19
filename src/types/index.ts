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
