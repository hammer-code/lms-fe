'use client';
import HeaderText from '@/components/common/HeaderText';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import InformationForm from './sections/InformationForm';
import ProfileForm from './sections/ProfileForm';

const ProfilePage = () => {
  const [tabs, setTabs] = useState('account');
  return (
    <div>
      <HeaderText
        title="Profile"
        description="Add information about yourself"
        className="mb-6"
        sideContent={
          <Tabs defaultValue="account">
            <TabsList>
              <TabsTrigger value="account" onClick={() => setTabs('account')}>
                Account
              </TabsTrigger>
              <TabsTrigger value="sosmed" onClick={() => setTabs('sosmed')}>
                Sosmed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        }
      />
      <section className="grid xl:grid-cols-4 grid-cols-1 xl:gap-4 gap-y-4">
        <ProfileForm />
        <InformationForm tabs={tabs} />
      </section>
    </div>
  );
};
export default ProfilePage;
