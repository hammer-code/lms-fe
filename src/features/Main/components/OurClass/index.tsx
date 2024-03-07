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
import Image from 'next/image';
import { FC } from 'react';

const OurClass: FC = () => {
  return (
    <div className="container mx-auto px-4  my-12">
      <Carousel className="">
        <CarouselContent>
          {imagecarousel.map(image => (
            <CarouselItem
              key={image.id}
              className="flex gap-2 flex-wrap justify-center pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Card className="md:w-[300px] w-[200px] shadow-xl">
                <Image
                  src={getAssetUrl(`/imgcarousel/${image.src}`)}
                  width={0}
                  alt={image.alt ?? ''}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover rounded-t-md md:h-[210px] sm:h-[100px]"
                />
                <div className="mx-4 mt-4">
                  <h1 className="text-left font-bold text-[#0F3665]">
                    Product Management Basic - Course
                  </h1>
                  <p className="text-left text-[10px] text-[#828282] mt-2">
                    Product Management Masterclass, you...
                  </p>
                </div>
                <div className="mx-4 flex">
                  <div>
                    {logocarousel.map(logo => (
                      <div key={logo.id} className="flex">
                        <Image
                          src={getAssetUrl(`/logocarousel/${logo.src}`)}
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
  );
};

export default OurClass;
