import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { MessageSquareQuote } from 'lucide-react';
import { Testimoni } from '@/constants/testimoni';

const TestimonialCarousel = () => {
  return (
    <Carousel>
      <CarouselContent>
        {Testimoni.map(({ id, desc }) => (
          <CarouselItem key={id} className="rounded-md md:basis-1/3">
            <Card className="border border-hmc-blue-700 rounded-xl">
              <CardHeader>
                <MessageSquareQuote className="size-8" />
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-6">
                  Thank you so much for your help. It&apos;s exactly what
                  I&apos;ve been looking for. You won&apos;t regret it. It
                  really saves me time and effort.
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
                <div className="flex justify-center items-center gap-2">
                  <Avatar className="size-12 border-2 border-hmc-blue-700">
                    <AvatarFallback>Anonymous</AvatarFallback>
                    <AvatarImage src="https://i.pinimg.com/736x/f4/e1/fe/f4e1fe45793230225fc253a1c0ce251f.jpg" />
                  </Avatar>
                  <div>
                    <h1 className="text-hmc-blue-700 font-semibold">
                      Anonymous
                    </h1>
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-hmc-grey-500">
                  <LinkedInLogoIcon className="size-6" />
                  <GitHubLogoIcon className="size-6" />
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialCarousel;
