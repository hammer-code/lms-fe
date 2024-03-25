import { cn } from '@/lib/utils';
import { Children, FC } from 'react';

interface HeaderTextProps {
  title: string;
  description?: string;
  className?: string;
  sideContent?: React.ReactNode;
}

const HeaderText: FC<HeaderTextProps> = ({
  title,
  description,
  className,
  sideContent
}) => {
  return (
    <div
      className={cn(
        'flex justify-between md:flex-row flex-col gap-4',
        className
      )}
    >
      <div>
        <h1 className="text-2xl font-semibold">{title}</h1>
        {description && <p>{description}</p>}
      </div>
      {sideContent}
    </div>
  );
};
export default HeaderText;
