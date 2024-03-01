import { FC } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';

const Testimonial: FC = () => {
  return (
    <div className="container mx-auto px-4 my-6 flex justify-between items-start">
      <div>
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-1 bg-[#0F3665]"></div>
          <h1 className="text-2xl font-bold">Testimonial</h1>
        </div>
        <h2 className="text-5xl font-bold">What They Say?</h2>
        <p className="text-xl mt-10 w-5/12">
          Skilline has got more than 100k positive ratings from our users around
          the world.
        </p>
      </div>
      <div className="">
        <Carousel className="w-[31vw]">
          <CarouselContent>
            <CarouselItem>
              <div className="absolute w-[300px] h-[500px] rounded-xl drop-shadow-lg">
                <Image
                  src={getAssetUrl('/img/person.jpg')}
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  className="rounded-xl"
                />
              </div>
              <div className=" h-[75vh] w-[30vw] flex items-end justify-end">
                <Card className="max-w-[400px] z-50 rounded-xl">
                  <div className="border-l-8 border-[#00CCFF] rounded-xl py-10 px-6">
                    <p className="border-l-2 pl-6">
                      Thank you so much for your help. It&apos;s exactly what
                      I&apos;ve been looking for. You won&apos;t regret it. It
                      really saves me time and effort.
                    </p>
                    <p className="pl-6 mt-10">Nama Pengguna</p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselNext className="scale-[2] right-[9rem]" />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
