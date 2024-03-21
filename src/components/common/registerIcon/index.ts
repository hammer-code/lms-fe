import flutterIcon from '@/assets/icons/flutter.svg';
import golangIcon from '@/assets/icons/golang.svg';
import javascriptIcon from '@/assets/icons/javascript.svg';
import nextjsIcon from '@/assets/icons/nextjs.svg';
import reactIcon from '@/assets/icons/react.svg';
import tailwindIcon from '@/assets/icons/tailwind.svg';

export type IconName = string;

export type IconData = {
  [name in IconName]: string;
};

const loadIconData = (): IconData => {
  return {
    // key nya diambil dari course_name
    Flutter: flutterIcon,
    Golang: golangIcon,
    JS: javascriptIcon,
    NextJS: nextjsIcon,
    React: reactIcon,
    Tailwind: tailwindIcon
  };
};

const registerIcon: IconData = loadIconData();

export default registerIcon;
