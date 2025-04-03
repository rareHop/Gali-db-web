import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        About Slang Dictionary
      </h1>
      
      <div className="prose dark:prose-invert">
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Welcome to the Hinglish Gaaliya DB - your go-to platform for exploring and sharing English and
          Hinglish slang expressions! This project was created by Mainak and Viccky to build a
          community-driven repository of contemporary slang language.
        </p>

        <div className="my-8 p-6 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
          <h2 className="text-2xl font-semibold text-indigo-900 dark:text-indigo-100 mb-4">
            About the Creators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-indigo-200 dark:bg-indigo-700 mb-3 flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-200">Mainak</h3>
              <p className="text-center text-indigo-600 dark:text-indigo-300 text-sm">Lead Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-indigo-200 dark:bg-indigo-700 mb-3 flex items-center justify-center">
                <span className="text-2xl">👨‍🎨</span>
              </div>
              <h3 className="text-lg font-medium text-indigo-800 dark:text-indigo-200">Viccky</h3>
              <p className="text-center text-indigo-600 dark:text-indigo-300 text-sm">Backend Developer</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
          Additional Ways to Contribute
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          You can also give gaaliya through our Discord bot! Join our community to interact with fellow
          language enthusiasts and contribute through our specialized Discord bot.
        </p>

        <div className="bg-indigo-100 dark:bg-indigo-900 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mb-3">
            Discord Community
          </h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-4">
            Join our vibrant Discord community and connect with other slang enthusiasts!
          </p>
          <a
            href="https://discord.gg/BKgwpnGJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Join Discord
          </a>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
          Features
        </h2>
        
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
          <li>Submit and share slang expressions in English/Hinglish</li>
          <li>Real-time JSON preview with syntax highlighting</li>
          <li>Rich text editor with emoji support</li>
          <li>Dark/Light theme support</li>
          <li>Top contributors leaderboard</li>
          <li>Discord bot integration</li>
        </ul>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/"
            className="text-primary-600 dark:text-primary-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}