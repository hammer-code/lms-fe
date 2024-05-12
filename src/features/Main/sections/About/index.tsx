import { FC } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const About: FC = () => {
  return (
    <div
      id="about"
      className="container min-h-screen mx-auto px-4 flex flex-col-reverse md:flex-row justify-center lg:justify-between items-center"
    >
      <div>
        <Image
          src={getAssetUrl('/img-about/card.svg')}
          alt="card"
          width={700}
          height={700}
        />
      </div>
      <div className="md:text-right text-center w-full md:w-[524px] h-[410px] flex flex-col gap-6 md:items-end ">
        <h1 className="text-primary-blue font-semibold text-3xl">About</h1>
        <h1 className="text-[#0F3665] font-semibold text-4xl md:text-5xl">
          Improve Your Skill by Talking High-Quality
        </h1>
        <p className="text-[#828282] text-sm md:w-11/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, 
        </p>
        <div className="flex justify-center">
          <Button
            asChild
            className="w-[140px] h-[50px] bg-gradient-to-r from-[#5DDFFF] to-primary-blue rounded-full text-white"
          >
            <Link href="/sign-in">Sign In</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default About;
