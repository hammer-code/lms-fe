import Image from 'next/image';
import HeroImage from '../../../../../public/assets/img/Hero.svg';
import { FC } from 'react';


const Hero: FC = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between my-6">
      <div className=" md:w-2/5 flex flex-col gap-6">
        <h1 className="text-5xl font-semibold text-[#0F3665]">
          Improve Your Skill by Talking High-Quality Classes
        </h1>
        <p className="text-sm">
          <strong>HMCLearn</strong> is a streamlined and user-friendly Learning
          Management System (LMS) dedicated to efficient learning material
          management and accessibility.
        </p>
        <div className="flex gap-3">
          
        </div>
      </div>
      <div className="md:w-1/2">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  );
};
export default Hero;