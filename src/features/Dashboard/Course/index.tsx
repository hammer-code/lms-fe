import { Lock, Search, SlidersHorizontal } from 'lucide-react';

import HeaderText from '@/components/common/HeaderText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import LabelPath from '@/components/common/LabelPath';
import { DATA_COURSE } from '@/constants/dashboard';

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
        {DATA_COURSE.map(
          ({
            id,
            image,
            learning_path,
            title,
            mentor,
            description,
            available
          }) => (
            <Card key={id} className="relative p-1 min-h-92 rounded-xl">
              {available || (
                <div className="absolute z-10 top-0 left-0 right-0 bottom-0 rounded-xl bg-hmc-grey-400 bg-opacity-60 w-full h-full flex flex-col items-center justify-center gap-2">
                  <Lock className="w-16 h-16 font-light" />
                  <p>Not Available</p>
                </div>
              )}
              <div
                className="rounded-t-lg bg-white bg-cover bg-center shadow-lg h-52"
                style={{
                  backgroundImage: `url('${image}')`
                }}
              />
              <div className="p-3 space-y-3">
                <LabelPath path={learning_path} />
                <div>
                  <h1 className="text-lg">{title}</h1>
                  <p className="text-sm line-clamp-2 text-gray-400">
                    {description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-11 h-11">
                    <AvatarFallback>{mentor?.name}</AvatarFallback>
                    <AvatarImage src={mentor?.profile} alt={mentor?.name} />
                  </Avatar>
                  <div>
                    <h1 className="text-md text-secondary-foreground">
                      {mentor?.name}
                    </h1>
                    <p className="text-xs text-hmc-grey-400">{mentor?.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          )
        )}
      </section>
    </div>
  );
};
export default CoursePage;
