import { SocialMediaType } from '@/types';
import { DiscordLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons';

export const SocialMedia: SocialMediaType[] = [
  {
    title: 'Discord',
    icon: DiscordLogoIcon,
    bgColor: 'bg-[#5865F2]',
    url: '#'
  },
  {
    title: 'Instagram',
    icon: InstagramLogoIcon,
    bgColor: 'bg-gradient-to-br from-[#9A34C1] to-[#FF5746]',
    url: 'https://www.instagram.com/hmrcode/'
  }
];
