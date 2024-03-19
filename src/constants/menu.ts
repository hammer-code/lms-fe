import { DashboardMenuType, MainMenuType } from '@/types';
import {
  Home,
  GraduationCap,
  BookOpen,
  ClipboardList,
  ScrollText
} from 'lucide-react';

export const MainMenu: MainMenuType[] = [
  {
    id: 1,
    title: 'Home',
    path: '/#home'
  },
  {
    id: 2,
    title: 'About',
    path: '/#about'
  },
  {
    id: 3,
    title: 'Our Class',
    path: '/#our-class'
  },
  {
    id: 4,
    title: 'Testimonial',
    path: '/#testimonial'
  },
  {
    id: 5,
    title: 'FAQ',
    path: '/#faq'
  }
];

export const DashboardMenu: DashboardMenuType[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: Home,
    path: '/dashboard',
    isChildren: false
  },
  {
    id: 2,
    title: 'Course',
    icon: GraduationCap,
    path: '/dashboard/course',
    isChildren: false
  },
  {
    id: 3,
    title: 'My Course',
    icon: BookOpen,
    path: '/dashboard/mycourse',
    isChildren: false
  },
  {
    id: 4,
    title: 'Assignment',
    icon: ClipboardList,
    path: '/dashboard/assignment',
    isChildren: false
  },
  {
    id: 5,
    title: 'Certification',
    icon: ScrollText,
    path: '/dashboard/certification',
    isChildren: false
  }
];
