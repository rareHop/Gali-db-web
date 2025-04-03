import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

type SlangEntry = {
  id: number;
  term: string;
  meaning: string;
  category: string;
  author: string;
  timestamp: string;
  likes?: number;
  shares?: number;
};

export default function SlangList() {
  const { theme } = useTheme();
  const [entries, setEntries] = useState<SlangEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        const mockData: SlangEntry[] = [
          {
            id: 1,
            term: "Jugaad",
            meaning: "A creative hack/solution when you're too broke for the real thing",
            category: "Hinglish",
            author: "InnovatorX",
            timestamp: "2023-05-15",
            likes: 42,
            shares: 12
          },
          {
            id: 2,
            term: "Bindaas",
            meaning: "Carefree or cool attitude",
            category: "Hinglish",
            author: "FreeSpirit",
            timestamp: "2023-05-10",
            likes: 38,
            shares: 8
          }
          // More entries would be here
        ];

        setTimeout(() => {
          setEntries(mockData);
          setLoading(false);
        }, 800); // Simulate network delay
      } catch (err) {
        setError("Failed to load slang entries");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-4">Loading slang entries...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Recent Additions</h2>
      <div className="space-y-4">
        {entries.map(entry => (
          <div key={entry.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">{entry.term}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {entry.category}
            </div>
            <p className="mt-2">{entry.meaning}</p>
            <div className="mt-3 flex justify-between text-sm">
              <span>Posted by {entry.author}</span>
              <span>{entry.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}