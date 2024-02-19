'use client';
import Wrapper from '@/components/layout/Wrapper';
import { NextPage } from 'next';
import { FC } from 'react';

const Course: FC<NextPage> = () => {
  return (
    <Wrapper>
      <div className="p-6">
        <h1 className="text-2xl font-semibold">Course Page</h1>
      </div>
    </Wrapper>
  );
};
export default Course;
