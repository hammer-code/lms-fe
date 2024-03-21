import DashboardOverview from './sections/DashboardOverview';
import DashboardTotals from './sections/DashboardTotals';
import HeaderContainer from './sections/HeaderContainer';

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderContainer studentName="Febriyadi" />
      <DashboardTotals />
      <DashboardOverview />
    </div>
  );
};

export default DashboardPage;
