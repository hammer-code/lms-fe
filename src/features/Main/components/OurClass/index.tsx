import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { imagecarousel, logocarousel } from '@/constants/carousel';
import { getAssetUrl } from '@/lib/utils';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

const OurClass: FC = () => {
  return (
    <div
      id="our-class"
      className="container h-screen mx-auto flex flex-col justify-center items-center px-4 pt-6"
    >
      <div className="flex justify-center items-center mb-10">
        <div className="text-wrap">
          <h1 className="font-semibold text-hmc-base text-center text-2xl md:text-[30px]">
            Our Class
          </h1>
          <p className="text-center mt-2 text-[#828282] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry of standard dummy text
            ever since the 1500s,
          </p>
        </div>
      </div>
      <div className="w-full px-12">
        <Carousel>
          <CarouselContent>
            {imagecarousel.map(image => (
              <CarouselItem
                key={image.id}
                className="flex gap-2 flex-wrap justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="size-full shadow-xl">
                  <Image
                    src={getAssetUrl(`/img-carousel/${image.src}`)}
                    width={0}
                    alt={image.alt ?? ''}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto object-cover rounded-t-md"
                  />
                  <div className="mx-4 mt-4">
                    <h1 className="text-left font-bold text-[#0F3665]">
                      Product Management Basic - Course
                    </h1>
                    <p className="text-left text-xs text-[#828282] mt-2">
                      Product Management Masterclass, you...
                    </p>
                  </div>
                  <div className="mx-4 flex">
                    <div>
                      {logocarousel.map(logo => (
                        <div key={logo.id} className="flex">
                          <Image
                            src={getAssetUrl(`/logo-carousel/${logo.src}`)}
                            alt={`${logo.alt}`}
                            width={14}
                            height={16}
                            className="mt-2"
                          />
                          <h1 className="text-[13px] mt-2 ml-2">{logo.text}</h1>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="md:w-[102px] w-[80px] h-[38px] text-white bg-[#0F3665] text-[12px] rounded-md mx-4 my-4 hover:bg-slate-500 duration-200 cursor-pointer">
                    Enroll Now
                  </button>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="text-primary-blue w-[150px] h-[56px] lg:w-[159px] md:w-[140px]  border-solid border-[#00CCFF] border-2 rounded-3xl flex justify-center items-center gap-2 ">
          <p>Learn More</p>
          <div>
            <ArrowRightIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurClass;
