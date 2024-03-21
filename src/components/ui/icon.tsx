import Image, { ImageProps } from 'next/image';
import registerIcon from '@/components/common/registerIcon';

export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
  type: any | string;
}

const Icon = ({ type, ...props }: IconProps) => {
  const iconType = registerIcon?.[type];

  return (
    <Image src={iconType} alt={type} width={32} height={32} {...props} /> // set default props for sizing image
  );
};

export default Icon;
