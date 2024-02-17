import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FC } from 'react';

const CardPartners: FC = () => {
  const Images = [
    { src: 'efishery.png' },
    { src: 'icehouse.png' },
    { src: 'learning.png' },
    { src: 'shipper.png' }
  ];
  return (
    <div className="flex justify-center">
      <Card className="w-full md:w-4/5 max-w-screen-lg rounded-3xl shadow-xl p-2">
        <CardHeader>
          <CardTitle className="text-[#00CCFF] flex justify-center">
            Learning From Our Expert Tech
          </CardTitle>
          <CardDescription className="text-[#0F3665] max-w-[80%] md:max-w-full mx-auto md:mx-0 text-center flex justify-center">
            Take the opportunity to learn from experts from tech companies
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 justify-center">
          {Images.map((item, index) => (
            <img
              key={index}
              src={`../assets/img/${item.src}`}
              alt=""
              className="max-w-full h-auto rounded"
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardPartners;
