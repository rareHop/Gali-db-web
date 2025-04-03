import React, { useState } from 'react';
import SlangForm from '../components/SlangForm';
import TopContributors from '../components/TopContributors';
import SlangList from '../components/SlangList';

export default function Home() {
  const [refreshList, setRefreshList] = useState(false);

  const handleNewSubmission = () => {
    setRefreshList(prev => !prev);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <SlangForm onSubmit={handleNewSubmission} />
        <SlangList key={String(refreshList)} />
      </div>
      <div className="lg:col-span-1">
        <TopContributors />
      </div>
    </div>
  );
}