import InstructorsList from './InstructorsList';
import RunningCourses from './RunningCourses';

const DashboardOverview = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-between gap-8">
      <RunningCourses />
      <InstructorsList />
    </div>
  );
};

export default DashboardOverview;
