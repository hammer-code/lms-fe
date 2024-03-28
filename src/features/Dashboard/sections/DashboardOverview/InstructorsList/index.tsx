import Image from 'next/image';
import { Card, CardHeader } from '@/components/ui/card';
import { dataInstructorsList } from '@/constants/dashboard';

const InstructorsList = () => {
  return (
    <div className="basis-[35%]">
      <Card className="overflow-y-auto max-h-[475px] md:min-w-96">
        <CardHeader>
          <div className="flex flex-col gap-2">
            <h2 className="md:text-lg font-medium text-hmc-blue-800 dark:text-white">
              Our Mentors
            </h2>
            <div className="flex flex-col gap-1">
              {dataInstructorsList.map(({ id, name, email, avatar_url }) => (
                <div
                  key={id}
                  className="p-3 flex items-center gap-2 border border-white hover:border hover:border-hmc-grey-100 hover:shadow-[0px_12px_10px_0px_#F1F5F9] rounded-lg cursor-pointer transition-all duration-150 ease-out dark:border-slate-950 dark:hover:shadow-[0px_12px_10px_0px_#161d25]"
                >
                  <Image
                    src={avatar_url}
                    alt="avatar_url"
                    width={40}
                    height={40}
                    className="shrink-0"
                  />

                  <div className="flex flex-col gap-0.5">
                    <h3 className="text-hmc-blue-800 text-sm font-medium dark:text-white">
                      {name}
                    </h3>
                    <p className="text-hmc-grey-300 text-sm dark:text-gray-300">
                      {email}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default InstructorsList;
