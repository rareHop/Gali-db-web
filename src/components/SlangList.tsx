import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface SlangEntry {
  id: number;
  term: string;
  category: string;
  author: string;
  timestamp: string;
  engagement: {
    likes: number;
    shares: number;
  };
}

const dummyEntries: SlangEntry[] = [
  {
    id: 1,
    term: "Jugaad",
    category: "Hinglish",
    author: "SlangMaster",
    timestamp: "2023-12-01 10:30:00",
    engagement: {
      likes: 42,
      shares: 12
    }
  },
  {
    id: 2,
    term: "Timepass",
    category: "Hinglish",
    author: "WordWizard",
    timestamp: "2023-12-01 09:15:00",
    engagement: {
      likes: 38,
      shares: 8
    }
  }
];

export default function SlangList() {
  const [expandedEntry, setExpandedEntry] = useState<number | null>(null);
  
  const toggleExpand = (id: number) => {
    setExpandedEntry(expandedEntry === id ? null : id);
  };
  
  return (
    <div className="space-y-6">
      {dummyEntries.map((entry) => (
        <div
          key={entry.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          onClick={() => toggleExpand(entry.id)}
        >
          <div className="p-4 cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {entry.term}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {entry.category} • Posted by {entry.author}
                </p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {entry.timestamp}
              </span>
            </div>
            
            {expandedEntry === entry.id && (
              <>
                <div className="rounded-md bg-gray-900 p-4 mb-4">
                  <SyntaxHighlighter
                    language="json"
                    style={atomOneDark}
                    className="!bg-transparent"
                  >
                    {JSON.stringify(entry, null, 2)}
                  </SyntaxHighlighter>
                </div>

                <div className="flex items-center space-x-4">
                  <button type="button" className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    <span>👍 {entry.engagement.likes}</span>
                  </button>
                  <button type="button" className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
                    <span>🔄 {entry.engagement.shares}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}