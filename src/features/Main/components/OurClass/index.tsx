import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { imagecarousel, logocarousel } from '@/constants/imgcarousel';
import Image from 'next/image';

const OurClass = () => {
  return (
    <div className="mx-24">
      <Carousel>
        <CarouselContent>
          {imagecarousel.map((image, index) => (
            <CarouselItem
              key={index}
              className="flex gap-2 flex-wrap justify-center pl-1 md:basis-1 lg:basis-1/4"
            >
              <Card key={index} className="w-[296px] h-[428px] shadow-xl">
                <Image
                  src={`/../assets/imgcarousel/${image.src}`}
                  width={300}
                  height={100}
                  alt={`${image.alt}`}
                  className="rounded-t-md"
                />
                <div>
                  
                </div>
                <h1 className="text-left font-bold text-[#0F3665]">
                  Product Management Basic - Course
                </h1>
                <p className="text-left text-[10px] text-[#828282]">
                  Product Management Masterclass, you will learn with Sarah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <div>
                  {logocarousel.map((logo, index) => (
                    <div key={index}>
                      <Image
                        src={`/../assets/logocarousel/${logo.src}`}
                        alt={`${logo.alt}`}
                        width={14}
                        height={16}
                      />
                    </div>
                  ))}
                </div>
                <button className="w-[102px] h-[38px] text-white bg-[#0F3665] text-[12px] rounded-md">
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
