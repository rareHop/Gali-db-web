import React, { useState } from 'react';

type Contributor = {
  id: number;
  name: string;
  avatarUrl: string;
  contributions: number;
};

export default function TopContributors() {
  const [showAll, setShowAll] = useState(false);

  const contributors: Contributor[] = [
    { id: 1, name: "Ravi", avatarUrl: "https://i.pravatar.cc/150?img=1", contributions: 43 },
    { id: 2, name: "Priya", avatarUrl: "https://i.pravatar.cc/150?img=5", contributions: 37 },
    { id: 3, name: "Vikram", avatarUrl: "https://i.pravatar.cc/150?img=3", contributions: 29 },
    { id: 4, name: "Neha", avatarUrl: "https://i.pravatar.cc/150?img=9", contributions: 24 },
    { id: 5, name: "Arjun", avatarUrl: "https://i.pravatar.cc/150?img=6", contributions: 18 },
    { id: 6, name: "Meera", avatarUrl: "https://i.pravatar.cc/150?img=10", contributions: 15 },
    { id: 7, name: "Raj", avatarUrl: "https://i.pravatar.cc/150?img=12", contributions: 13 },
    { id: 8, name: "Anjali", avatarUrl: "https://i.pravatar.cc/150?img=25", contributions: 11 },
  ];

  const displayedContributors = showAll ? contributors : contributors.slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">Top Contributors</h2>
      <div className="space-y-3">
        {displayedContributors.map(contributor => (
          <div key={contributor.id} className="flex items-center space-x-3">
            <img 
              src={contributor.avatarUrl} 
              alt={contributor.name} 
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <div className="font-medium">{contributor.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {contributor.contributions} contributions
              </div>
            </div>
          </div>
        ))}
      </div>
      {contributors.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 w-full text-center py-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      )}
    </div>
  );
}