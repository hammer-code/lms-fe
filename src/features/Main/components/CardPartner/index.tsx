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
    <Card>
      <CardHeader>
        <CardTitle>Learning From Our Expert Tech</CardTitle>
        <CardDescription>
          Take the opportunity to learn from experts from tech companies
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default CardPartners;
