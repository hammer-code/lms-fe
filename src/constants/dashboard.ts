import {
  DataDashboardTotal,
  DataInstructor,
  DataRunningCourse,
  PathColor
} from '@/types';
import avatarUrl from '@/assets/img/avatar.png';

export const dataDashboardTotals: DataDashboardTotal[] = [
  {
    id: 1,
    title: 'Total Course',
    count: 10
  },
  {
    id: 2,
    title: 'Total Instructor',
    count: 5
  },
  {
    id: 3,
    title: 'Total Members',
    count: 5000
  }
];

export const dataRunningCourses: DataRunningCourse[] = [
  {
    id: 1,
    course_name: 'Tailwind',
    mentor: 'Anonymous',
    learning_path: 'FRONTEND',
    progress: 78
  },
  {
    id: 2,
    course_name: 'JS',
    mentor: 'Anonymous',
    learning_path: 'FRONTEND',
    progress: 70
  },
  {
    id: 3,
    course_name: 'Golang',
    mentor: 'Anonymous',
    learning_path: 'BACKEND',
    progress: 70
  },
  {
    id: 4,
    course_name: 'Flutter',
    mentor: 'Anonymous',
    learning_path: 'MOBILE',
    progress: 70
  }
];

export const dataInstructorsList: DataInstructor[] = [
  {
    id: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 2,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 3,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 4,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 5,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 6,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 7,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 8,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 9,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  },
  {
    id: 10,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    avatar_url: avatarUrl
  }
];

export const pathColors: PathColor = {
  FRONTEND: {
    backgroundColor: 'bg-hmc-purple-100',
    textColor: 'text-hmc-purple-600',
    label: 'FRONTEND'
  },
  BACKEND: {
    backgroundColor: 'bg-hmc-green-100',
    borderColor: 'border-hmc-green-600',
    textColor: 'text-hmc-green-600',
    label: 'BACKEND'
  },
  MOBILE: {
    backgroundColor: 'bg-hmc-blue-100',
    textColor: 'text-hmc-blue-600',
    label: 'MOBILE'
  },
  UNKNOWN: {
    backgroundColor: 'bg-hmc-red-100',
    textColor: 'text-hmc-red-600',
    label: 'UNKNOWN'
  }
};
