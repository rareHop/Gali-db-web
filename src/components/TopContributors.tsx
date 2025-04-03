import React from 'react';

interface Contributor {
  id: number;
  name: string;
  avatar: string;
  contributions: number;
  rank: number;
}

const dummyContributors: Contributor[] = [
  {
    id: 1,
    name: "SlangMaster",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    contributions: 156,
    rank: 1
  },
  {
    id: 2,
    name: "WordWizard",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    contributions: 143,
    rank: 2
  },
  {
    id: 3,
    name: "LexiconPro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    contributions: 128,
    rank: 3
  },
  {
    id: 4,
    name: "SlangGuru",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    contributions: 112,
    rank: 4
  },
  {
    id: 5,
    name: "Wordsmith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=5",
    contributions: 98,
    rank: 5
  }
];


export default function TopContributors() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="bg-green-600 dark:bg-green-700 p-4">
        <h2 className="text-xl font-bold text-white text-center">
          Top Contributors
        </h2>
      </div>

      <div className="flex flex-col">
        {dummyContributors.slice(0, 3).map((contributor) => (
          <div
            key={contributor.id}
            className="flex items-center justify-center p-4 border-b border-gray-200 dark:border-gray-700"
          >
            <p className="text-xl font-medium text-gray-900 dark:text-white text-center">
              {contributor.name}
            </p>
          </div>
        ))}
        
        <div className="flex justify-center py-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}