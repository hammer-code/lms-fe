import { DashboardMenuType, MainMenuType } from '@/types';
import { Mail, NotebookPen } from 'lucide-react';

export const MainMenu: MainMenuType[] = [
  {
    id: 1,
    title: 'Home'
  },
  {
    id: 2,
    title: 'About'
  },
  {
    id: 3,
    title: 'Learning Path'
  },
  {
    id: 4,
    title: 'Testimonial'
  },
  {
    id: 5,
    title: 'FAQ'
  }
];

export const DashboardMenu: DashboardMenuType[] = [
  {
    id: 1,
    title: 'Dashboard',
    icon: Mail,
    path: '/dashboard',
    isChildren: false
  },
  {
    id: 2,
    title: 'Course',
    icon: NotebookPen,
    path: '/dashboard/course',
    isChildren: false
  }
];
