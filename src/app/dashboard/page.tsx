'use client';
import { NextPage } from 'next';
import { FC } from 'react';
import Wrapper from '@/components/layout/Wrapper';

const Dashboard: FC<NextPage> = () => {
  return (
    <Wrapper>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Dashboard Page</h1>
      </div>
    </Wrapper>
  );
};
export default Dashboard;
