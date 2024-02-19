import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { imagecarousel } from '@/constants/imgcarousel';
import Image from 'next/image';

const OurClass = () => {
  return (
    <Carousel>
      <CarouselContent>
        {[1, 2, 3, 4].map(carouselIndex => (
          <CarouselItem
            key={carouselIndex}
            className="flex gap-8 flex-wrap justify-center"
          >
            {imagecarousel.map((image, index) => (
              <Card key={index} className="w-[296px] h-[428px] p-3 shadow-xl">
                <Image
                  src={`/../assets/imgcarousel/${image.src}`}
                  width={300}
                  height={100}
                  alt={''}
                />
                <h1 className="text-left font-bold text-[#0F3665]">
                  Product Management Basic - Course
                </h1>
                <p className="text-left text-[10px]">
                  Product Management Masterclass, you will learn with Sar ah
                  Johnson - Head of Product Customer Platform Gojek Indonesia.
                </p>
                <button className="w-[102px] h-[38px] text-white bg-[#0F3665] text-[12px] rounded-md">
                  Enroll Now
                </button>
              </Card>
            ))}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default OurClass;
