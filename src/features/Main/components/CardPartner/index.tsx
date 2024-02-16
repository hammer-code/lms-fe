import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { FC } from 'react';

const CardPartners: FC = () => {
  return (
    <Card className="w-4/5 h-[200px] rounded-3xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-[#00CCFF]">
          Learning From Our Expert Tech
        </CardTitle>
        <CardDescription className="text-[#0F3665]">
          Take the opportunity to learn from experts from tech companies
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default CardPartners;
