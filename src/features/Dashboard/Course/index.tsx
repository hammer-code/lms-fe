import { Search, SlidersHorizontal } from 'lucide-react';

import HeaderText from '@/components/common/HeaderText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { DATA_COURSE } from './configs';
import LabelPath from '@/components/common/LabelPath';

const CoursePage = () => {
  return (
    <div>
      <HeaderText
        title="Course"
        className="mb-6"
        sideContent={
          <div className="flex gap-2 items-center">
            <Input suffix={<Search />} placeholder="Search Course" />
            <Button variant="outline" className="p-3">
              <SlidersHorizontal className="w-6" />
            </Button>
          </div>
        }
      />
      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
        {DATA_COURSE.map(item => (
          <Card key={item?.id} className="p-1 min-h-92 rounded-xl">
            <div
              className="rounded-t-lg bg-white bg-cover bg-center shadow-lg h-52"
              style={{
                backgroundImage: `url('${item?.image}')`
              }}
            />
            <div className="p-3 space-y-3">
              <LabelPath path={item?.learning_path} />
              <div>
                <h1 className="text-lg">{item?.title}</h1>
                <p className="text-sm line-clamp-2 text-gray-400">
                  {item?.description}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Avatar className="w-11 h-11">
                  <AvatarFallback>{item?.mentor?.name}</AvatarFallback>
                  <AvatarImage
                    src={item?.mentor?.profile}
                    alt={item?.mentor?.name}
                  />
                </Avatar>
                <div>
                  <h1 className="text-md text-secondary-foreground">
                    {item?.mentor?.name}
                  </h1>
                  <p className="text-xs text-hmc-grey-400">
                    {item?.mentor?.role}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
};
export default CoursePage;
