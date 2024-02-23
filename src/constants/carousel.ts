import { ImageCarouselType } from '@/types/types';
import { LogoCarouselType } from '@/types/types';

export const imagecarousel: ImageCarouselType[] = [
  { id: 1, alt: 'temporary', src: 'test.svg' },
  { id: 2, alt: 'temporary', src: 'test1.svg' },
  { id: 3, alt: 'temporary', src: 'hello.png' },
  { id: 4, alt: 'temporary', src: 'hello.png' },
  { id: 5, alt: 'temporary', src: 'test.svg' },
  { id: 6, alt: 'temporary', src: 'test1.svg' }
];

export const logocarousel: LogoCarouselType[] = [
  { id: 1, alt: 'lesson', src: 'lesson.svg', text: 'Lesson' },
  { id: 2, alt: 'level', src: 'level.svg', text: 'Beginner' }
];