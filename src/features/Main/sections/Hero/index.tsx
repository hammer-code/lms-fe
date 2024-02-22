import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '../../../../../public/assets/img/Hero.svg';
import { FC } from 'react';
import { SocialMedia } from '@/constants/socialMedia';

const Hero: FC = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="w-2/5 flex flex-col gap-6">
        <h1 className="text-5xl font-semibold text-[#0F3665]">
          Improve Your Skill by Talking High-Quality Classes
        </h1>
        <p className="text-sm">
          <strong>HMCLearn</strong> is a streamlined and user-friendly Learning
          Management System (LMS) dedicated to efficient learning material
          management and accessibility.
        </p>
        <div className="flex gap-3">
          {SocialMedia.map((item, index) => {
            return (
              <div key={index}>
                <Link href={`${item.url}`} target="blank">
                  <item.icon width={32} height={32} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/2">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  );
};
export default Hero;
