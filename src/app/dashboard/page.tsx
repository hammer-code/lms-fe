import DashboardPage from '@/features/Dashboard';
import { Metadata, NextPage } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard Page | HMC Learn'
};

const Dashboard: FC = () => {
  return <DashboardPage />;
};
export default Dashboard;
