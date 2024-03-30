import { FC } from 'react';
import { pathColors } from '@/constants/dashboard';
import { cn } from '@/lib/utils';

const LabelPath: FC<{ path: string | undefined }> = ({ path }) => {
  const { backgroundColor, borderColor, textColor, label } =
    pathColors[path ?? ''] || pathColors.UNKNOWN;

  return (
    <div
      className={cn(
        `px-3 py-0.5 text-[10px] max-w-20 ${backgroundColor} ${textColor} rounded-sm text-center ${borderColor ? `border ${borderColor}` : ''}`
      )}
    >
      {label}
    </div>
  );
};
export default LabelPath;
