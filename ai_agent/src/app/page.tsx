'use client';

import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import ResearchPanel from './components/ResearchPanel';
import SavedSessions from './components/SavedSessions';

type Tab = 'chat' | 'research' | 'saved';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('chat');

  return (
    <div className="flex flex-col h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            AI Research Assistant
          </h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Intelligent research, synthesis, and knowledge management
          </p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('chat')}
              className={`py-3 px-4 border-b-2 transition-colors ${
                activeTab === 'chat'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Chat Assistant
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`py-3 px-4 border-b-2 transition-colors ${
                activeTab === 'research'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Deep Research
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`py-3 px-4 border-b-2 transition-colors ${
                activeTab === 'saved'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              Saved Research
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full">
          <div className="bg-white dark:bg-zinc-900 h-full">
            {activeTab === 'chat' && <ChatInterface />}
            {activeTab === 'research' && <ResearchPanel />}
            {activeTab === 'saved' && <SavedSessions />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 px-6 py-3">
        <div className="max-w-7xl mx-auto text-center text-sm text-zinc-500 dark:text-zinc-400">
          Powered by Google Gemini AI (FREE!) | Built with Next.js
        </div>
      </footer>
    </div>
  );
}
