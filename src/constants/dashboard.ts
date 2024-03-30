import {
  CardCourse,
  DataDashboardTotal,
  DataInstructor,
  DataRunningCourse,
  PathColor
} from '@/types';
import avatarUrl from '@/assets/img/avatar.png';

export const dataDashboardTotals: DataDashboardTotal[] = [
  {
    id: 1,
    title: 'Total Courses',
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
    borderColor: 'border-hmc-purple-600',
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
    borderColor: 'border-hmc-blue-600',
    textColor: 'text-hmc-blue-600',
    label: 'MOBILE'
  },
  UNKNOWN: {
    backgroundColor: 'bg-hmc-red-100',
    textColor: 'text-hmc-red-600',
    label: 'UNKNOWN'
  }
};

// Data Temporary, waiting for backend
export const DATA_COURSE: CardCourse[] = [
  {
    id: 1,
    image: 'https://www.techfor.id/wp-content/uploads/2019/12/html.png',
    title: 'HTML Course',
    learning_path: 'FRONTEND',
    description:
      'Kalian akan belajar mengenai apa itu HTML, struktur HTML, dan lain-lain.',
    mentor: {
      profile:
        'https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg',
      name: 'Farhan',
      role: 'Software Engineer'
    },
    available: true
  },
  {
    id: 2,
    image:
      'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg',
    title: 'JavaScript Course',
    learning_path: 'FRONTEND',
    description:
      'Kalian akan belajar mengenai apa itu JS, Variabel, Loop , dan lain-lain. lorem ipsume adla kwdkwnd kwdnw',
    mentor: {
      profile:
        'https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg',
      name: 'Putra',
      role: 'Software Engineer'
    },
    available: true
  },
  {
    id: 3,
    image:
      'https://bestarion.com/wp-content/uploads/2022/04/what-is-golang-1.png',
    title: 'Golang Course',
    learning_path: 'BACKEND',
    description:
      'Kalian akan belajar mengenai apa itu Golang, Variabel, Loop , dan lain-lain.',
    mentor: {
      profile:
        'https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg',
      name: 'Fandi',
      role: 'Software Engineer'
    },
    available: true
  },
  {
    id: 4,
    image:
      'https://miro.medium.com/v2/resize:fit:1358/1*Od-UrquQOrcwEkpDwwkCiQ.png',
    title: 'CSS Course',
    learning_path: 'FRONTEND',
    description:
      'Kalian akan belajar mengenai apa itu CSS, Variabel, Loop , dan lain-lain.',
    mentor: {
      profile:
        'https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg',
      name: 'Cipta',
      role: 'Software Engineer'
    },
    available: false
  }
];
