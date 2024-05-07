import { LucideIcon } from 'lucide-react';
import { ComponentType } from 'react';
import { IconProps } from '@radix-ui/react-icons/dist/types';

export interface MainMenuType {
  id?: number;
  title?: string;
  path: string;
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

export interface FAQType {
  id: string;
  question?: string;
  answer?: string;
}

export interface TestimoniType {
  id: number;
  desc: string;
}

export interface DataDashboardTotal {
  id?: number;
  title?: string;
  count?: number;
}

export interface DataRunningCourse {
  id?: number;
  course_name?: string;
  mentor?: string;
  learning_path?: string;
  progress?: number;
}

export interface DataInstructor {
  id?: number | string;
  name?: string;
  email?: string;
  avatar_url?: any;
}

export interface PathColor {
  [key: string]: {
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    label?: string;
  };
}

export interface CardCourse {
  id: number;
  image: string;
  title: string;
  learning_path: string;
  description: string;
  mentor: {
    profile: string;
    name: string;
    role: string;
  };
  available: boolean;
}
