'use client';

import { useState } from 'react';

interface SearchResult {
  title: string;
  url: string;
  snippet: string;
}

interface ResearchData {
  topic: string;
  searchResults: SearchResult[];
  synthesis: string;
  timestamp: string;
}

export default function ResearchPanel() {
  const [topic, setTopic] = useState('');
  const [isResearching, setIsResearching] = useState(false);
  const [researchData, setResearchData] = useState<ResearchData | null>(null);

  const handleResearch = async () => {
    if (!topic.trim() || isResearching) return;

    setIsResearching(true);

    try {
      const response = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setResearchData(data);
    } catch (error) {
      console.error('Error conducting research:', error);
      alert('Failed to conduct research. Please try again.');
    } finally {
      setIsResearching(false);
    }
  };

  const handleSaveResearch = async () => {
    if (!researchData) return;

    try {
      const response = await fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Research: ${researchData.topic}`,
          content: JSON.stringify(researchData.searchResults),
          topic: researchData.topic,
          synthesis: researchData.synthesis,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      alert('Research saved successfully!');
    } catch (error) {
      console.error('Error saving research:', error);
      alert('Failed to save research. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleResearch();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
          Deep Research
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter research topic..."
            className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-4 py-2 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isResearching}
          />
          <button
            onClick={handleResearch}
            disabled={isResearching || !topic.trim()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-zinc-400 disabled:cursor-not-allowed transition-colors"
          >
            {isResearching ? 'Researching...' : 'Research'}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {isResearching ? (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Conducting research on: {topic}
            </p>
          </div>
        ) : researchData ? (
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {researchData.topic}
                </h3>
                <button
                  onClick={handleSaveResearch}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save Research
                </button>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {new Date(researchData.timestamp).toLocaleString()}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Research Synthesis
              </h4>
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 whitespace-pre-wrap text-zinc-800 dark:text-zinc-200">
                {researchData.synthesis}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Sources
              </h4>
              <div className="space-y-3">
                {researchData.searchResults.map((result, idx) => (
                  <div
                    key={idx}
                    className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700"
                  >
                    <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                      {result.title}
                    </h5>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 dark:text-blue-400 hover:underline mb-2 block"
                    >
                      {result.url}
                    </a>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {result.snippet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center text-zinc-500 dark:text-zinc-400 mt-8">
            <p className="text-lg">Enter a topic to conduct deep research</p>
            <p className="text-sm mt-2">
              I'll analyze multiple sources and provide a comprehensive synthesis
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
