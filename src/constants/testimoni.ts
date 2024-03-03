import { getAssetUrl } from '@/lib/utils';
import { TestimoniType } from '@/types';

export const testimoni: TestimoniType[] = [
  {
    name: 'Abdul Rojak',
    img: getAssetUrl('/img/person.jpg'),
    comment: `Thank you so much for your help. It\'s exactly what I\'ve been looking for. You won\'t regret it. It really saves me time and effort.`
  },
  {
    name: 'Reina Rey',
    img: getAssetUrl('/img/person2.jpg'),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `
  }
];
