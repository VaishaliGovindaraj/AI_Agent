'use client';

import { useState, useEffect } from 'react';

interface Session {
  id: string;
  title: string;
  content: string;
  topic: string;
  synthesis: string;
  createdAt: string;
}

export default function SavedSessions() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const fetchSessions = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/sessions');
      const data = await response.json();
      setSessions(data.sessions || []);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSession = async (id: string) => {
    if (!confirm('Are you sure you want to delete this session?')) return;

    try {
      const response = await fetch(`/api/sessions?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSessions(sessions.filter(s => s.id !== id));
        if (selectedSession?.id === id) {
          setSelectedSession(null);
        }
        alert('Session deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting session:', error);
      alert('Failed to delete session');
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            Saved Research
          </h2>
          <button
            onClick={fetchSessions}
            className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : sessions.length === 0 ? (
          <div className="text-center text-zinc-500 dark:text-zinc-400 mt-8">
            <p className="text-lg">No saved research sessions yet</p>
            <p className="text-sm mt-2">
              Save your research from the Deep Research tab
            </p>
          </div>
        ) : selectedSession ? (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setSelectedSession(null)}
                className="px-3 py-1 text-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => deleteSession(selectedSession.id)}
                className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {selectedSession.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {new Date(selectedSession.createdAt).toLocaleString()}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Topic: {selectedSession.topic}
              </h4>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Research Summary
              </h4>
              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg p-4 whitespace-pre-wrap text-zinc-800 dark:text-zinc-200">
                {selectedSession.synthesis}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="bg-white dark:bg-zinc-800 rounded-lg p-4 border border-zinc-200 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer transition-colors"
                onClick={() => setSelectedSession(session)}
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                  {session.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  Topic: {session.topic}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  {new Date(session.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
