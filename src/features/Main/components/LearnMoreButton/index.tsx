import React, { FC } from 'react';
import { getAssetUrl } from '@/lib/utils';
import Image from 'next/image';

const LearnMore: FC = () => {
  return (
    <div className="flex justify-center items-center my-6">
      <button className="text-primary-blue w-[150px] h-[56px] lg:w-[159px] md:w-[140px]  border-solid border-[#00CCFF] border-2 rounded-3xl flex justify-center items-center gap-2 ">
        <p>Learn More</p>
        <Image
          src={getAssetUrl('/buttonlearn/Vector.svg')}
          alt="vector"
          width={15}
          height={15}
        />
      </button>
    </div>
  );
};

export default LearnMore;
