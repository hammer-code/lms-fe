import { FC } from 'react';
import TestimonialCarousel from './TestimonialCarousel';

const Testimonial: FC = () => {
  return (
    <div
      id="testimonial"
      className="container min-h-screen flex flex-col gap-8 px-4"
    >
      <div className="space-y-2">
        <h1 className="text-2xl md:text-4xl text-hmc-base text-center md:text-start font-semibold">
          Testimonial
        </h1>
        <h2 className="text-3xl md:text-5xl text-hmc-dark text-center md:text-start font-medium">
          Skilline has got more than 100k ratings{' '}
        </h2>
      </div>
      <div className="px-12">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
