import React, { useState, FormEvent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { format } from 'date-fns';

const categories = [
  'Casual',
  'Formal',
  'Slang',
  'Hinglish',
  'Meme',
  'Abusive',
  'Other'
];

interface SlangFormProps {
  onSubmit: () => void;
}

export default function SlangForm({ onSubmit }: SlangFormProps) {
  const [term, setTerm] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [author, setAuthor] = useState('Anonymous');

  const previewData = {
    "term": term || "slang****",
    "author": author || "author name",
    "time-stamp": format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!term.trim()) {
      return; // Don't submit empty entries
    }
    
    // TODO: Implement submission logic
    onSubmit();
    
    // Reset form
    setTerm('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-yellow-500 dark:border-yellow-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Caution
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="term"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Enter Gaali
          </label>
          <div className="mt-1 relative">
            <textarea
              id="term"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500 min-h-[100px] p-2"
              placeholder="Enter your slang term"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Drop
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white shadow-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Preview
          </h3>
          <div className="rounded-md bg-gray-900 p-4">
            <SyntaxHighlighter
              language="json"
              style={atomOneDark}
              className="!bg-transparent"
            >
              {JSON.stringify(previewData, null, 2)}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}