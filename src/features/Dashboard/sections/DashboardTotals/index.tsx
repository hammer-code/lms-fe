import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { dataDashboardTotals } from '@/constants/dashboard';
import { BookOpen, Eye, Users } from 'lucide-react';

const DashboardTotals = () => {
  const renderIcons = (title: string | undefined) => {
    switch (title) {
      case 'Total Course':
        return <BookOpen className="text-hmc-blue-800 dark:text-white" />;
      case 'Total Instructor':
        return <Eye className="text-hmc-blue-800 dark:text-white" />;
      default:
        return <Users className="text-hmc-blue-800 dark:text-white" />;
    }
  };
  return (
    <div className="flex lg:flex-row flex-col items-center justify-between gap-5">
      {dataDashboardTotals.map(({ id, title, count }) => (
        <Card
          key={id}
          className="w-full border border-hmc-grey-100 shadow-[0px_0px_20px_0px_#F1F5F9] dark:shadow-none"
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="md:text-xl font-medium text-hmc-blue-800 dark:text-white">
                {title}
              </h2>
              <div className="p-3 bg-hmc-grey-100 dark:bg-hmc-blue-800 rounded-lg">
                {renderIcons(title)}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="opacity-50 dark:opacity-80 dark:text-white">
              {count}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardTotals;
