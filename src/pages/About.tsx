import React from 'react';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Hinglish Dictionary</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          We're building the most comprehensive collection of Hinglish slang and expressions. 
          Our goal is to document the ever-evolving language that blends Hindi, English, and 
          other Indian languages as used in everyday conversations, social media, and pop culture.
        </p>
        <p>
          Whether you're a language enthusiast, a non-native speaker trying to understand Indian 
          conversation, or just curious about linguistic evolution, we hope this dictionary serves as a valuable resource.
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Be respectful when adding new terms or providing definitions</li>
          <li>Provide accurate meanings and usage examples</li>
          <li>Cite sources when possible</li>
          <li>When adding potentially offensive terms, mark them appropriately</li>
          <li>Help us maintain quality by reporting inaccurate definitions</li>
        </ul>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          Have questions, suggestions, or want to contribute in other ways? 
          Reach out to us at:
        </p>
        <a 
          href="mailto:info@hinglishdictionary.example.com" 
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          info@hinglishdictionary.example.com
        </a>
      </div>
    </div>
  );
}