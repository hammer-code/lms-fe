'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { logoPartners } from '@/constants/images';
import { FC } from 'react';
import Image from 'next/image';
import { getAssetUrl } from '@/lib/utils';

const CardPartners: FC = () => {
  return (
    <div className="flex justify-center p-4">
      <Card className=" md:w-4/5 max-w-screen-lg rounded-3xl shadow-xl p-2">
        <CardHeader>
          <CardTitle className="text-[#00CCFF] md:text-xl text-lg flex justify-center text-center">
            Learning From Our Expert Tech
          </CardTitle>
          <CardDescription className="text-[#0F3665] mx-auto md:mx-0 text-center flex justify-center">
            <p className="text-sm">
              Take the opportunity to learn from experts from tech companies
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 justify-center">
          {logoPartners.map((item, index) => (
            <Image
              key={index}
              src={`${getAssetUrl(`/img/${item.src}`)}`}
              alt={`${item.alt}`}
              width={0}
              height={0}
              sizes="100vw"
              className="md:w-40 w-24"
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardPartners;
