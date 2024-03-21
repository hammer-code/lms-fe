import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';
import { dataRunningCourses, pathColors } from '@/constants/dashboard';

const RunningCourses = () => {
  const renderTagColorPath = (path: string | undefined) => {
    const { backgroundColor, borderColor, textColor, label } =
      pathColors[path ?? ''] || pathColors.UNKNOWN;

    return (
      <div
        className={`px-3 py-0.5 text-[10px] ${backgroundColor} ${textColor} rounded-2xl flex justify-center ${borderColor ? `border ${borderColor}` : ''}`}
      >
        {label}
      </div>
    );
  };

  const renderProgressColorPath = (path: string | undefined) => {
    switch (path) {
      case 'FRONTEND':
        return 'bg-hmc-purple-600';
      case 'BACKEND':
        return 'bg-hmc-green-600';
      case 'MOBILE':
        return 'bg-hmc-blue-600';
    }
  };

  return (
    <div className="basis-[65%]">
      <Card>
        <CardHeader>
          <h2 className="xl:text-lg font-medium text-hmc-blue-800 dark:text-white">
            Running Courses
          </h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            {dataRunningCourses.map(
              ({ id, course_name, mentor, learning_path, progress = 0 }) => (
                <div
                  key={id}
                  className="px-5 py-3 border border-hmc-grey-100 hover:shadow-[0px_12px_10px_0px_#F1F5F9] rounded-xl cursor-pointer transition-all duration-150 ease-out dark:hover:shadow-[0px_12px_10px_0px_#161d25]"
                >
                  <div className="flex xl:flex-row flex-col xl:items-center justify-between xl:gap-4 gap-6">
                    <div className="flex xl:flex-row flex-col xl:items-center gap-4 basis-[20%]">
                      <div className="p-3 xl:w-14 w-10 xl:h-14 h-10 bg-slate-50 dark:bg-hmc-blue-800 rounded-xl flex justify-center">
                        <Icon type={course_name} />
                      </div>
                      <div className="flex flex-col justify-between gap-3">
                        <h3 className="text-hmc-blue-800 dark:text-white text-xs font-semibold">
                          {course_name}
                        </h3>
                        <div className="flex items-center gap-3 text-[10px] text-hmc-grey-600 dark:text-white">
                          Mentor
                          <span className="text-hmc-blue-800 dark:text-white text-xs font-medium">
                            {mentor}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col xl:items-center items-start gap-2 basis-[50%]">
                      <h3 className="text-hmc-grey-500 dark:text-white text-xs font-medium">
                        Learning Path
                      </h3>
                      {renderTagColorPath(learning_path)}
                    </div>

                    <div className="flex flex-col gap-2 basis-[30%]">
                      <h3 className="text-hmc-grey-500 dark:text-white text-xs font-medium">
                        Progression
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-hmc-blue-800 dark:text-white text-xs font-medium">
                          {progress}%
                        </span>
                        <Progress
                          value={progress}
                          max={100}
                          indicatorColor={renderProgressColorPath(
                            learning_path
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RunningCourses;
