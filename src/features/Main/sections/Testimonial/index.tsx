import { FC } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { testimoni } from '@/constants/testimoni';

const Testimonial: FC = () => {
  return (
    <div
      id="testimonial"
      className="container min-h-screen mx-auto px-4 flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between"
    >
      <div>
        <div className="flex items-center gap-4 md:gap-6 mb-4 md:mb-8">
          <div className="w-8 md:w-16 h-1 bg-[#0F3665]"></div>
          <h1 className="text-xl md:text-2xl font-bold">Testimonial</h1>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold">What They Say?</h2>
        <p className="text-md md:text-xl mt-4 md:mt-10 xl:w-5/12 lg:w-6/12 md:w-8/12">
          Skilline has got more than 100k positive ratings from our users around
          the world.
        </p>
      </div>
      <div>
        <Carousel
          opts={{
            align: 'start',
            loop: true
          }}
          className="w-[15.5rem] md:w-[22rem] lg:w-[28rem]"
        >
          <CarouselContent>
            {testimoni.map((items, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="absolute w-[12rem] h-[16rem] md:w-[15rem] md:h-[24rem] lg:w-[20rem] lg:h-[32rem] rounded-xl drop-shadow-lg">
                    <Image
                      src={`${items.img}`}
                      layout="fill"
                      objectFit="cover"
                      alt="image"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="h-[20rem] w-[15.5rem] md:h-[28rem] md:w-[22rem] lg:h-[36rem] lg:w-[28rem] flex items-end justify-end ">
                    <Card className="w-[13rem] md:w-[19rem] lg:w-[24rem] z-50 rounded-xl">
                      <div className="border-l-8 border-[#00CCFF] rounded-xl py-4 px-4 md:py-6 md:px-6 lg:py-10 lg:px-8">
                        <p className="border-l-2 pl-4 md:pl-6 text-xs md:text-base line-clamp-6 ">
                          {items.comment}
                        </p>
                        <p className="px-4 md:px-6 mt-4 md:mt-6 lg:mt-10 text-xs md:text-base">
                          {items.name}
                        </p>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselNext className="right-[2.5rem] top-[10rem] md:scale-[1.5] md:right-[6rem] md:top-[11rem] lg:scale-[2] lg:right-[7rem] lg:top-[15rem]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
