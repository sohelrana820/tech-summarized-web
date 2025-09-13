'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useClientOnly } from '@/hooks/useClientOnly';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useClientOnly();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800">
        <div className="w-6 h-6" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-amber-500 transition-all duration-300 ${
            resolvedTheme === 'light' 
              ? 'rotate-0 scale-100 opacity-100' 
              : 'rotate-90 scale-0 opacity-0'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            resolvedTheme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
    </button>
  );
}
