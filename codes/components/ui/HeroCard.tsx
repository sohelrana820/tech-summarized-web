'use client';

import React from 'react';
import { Button } from './Button';
import { ArrowRight, Zap, Clock } from 'lucide-react';
import { clsx } from 'clsx';

interface HeroCardProps {
  title: string;
  description: string;
  updatedAt: string;
  onReadMore: () => void;
  className?: string;
}

export function HeroCard({ 
  title, 
  description, 
  updatedAt, 
  onReadMore, 
  className 
}: HeroCardProps) {
  return (
    <div className={clsx(
      'relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60',
      'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900',
      'shadow-xl shadow-blue-500/10 dark:shadow-blue-500/5',
      className
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-pink-400/5 dark:from-blue-400/10 dark:via-purple-400/10 dark:to-pink-400/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-48 translate-x-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl translate-y-40 -translate-x-40" />
      
      <div className="relative p-8 md:p-12">
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-semibold shadow-lg shadow-blue-500/25">
            <Zap className="w-4 h-4" />
            Latest Overview
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-4xl">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Updated {updatedAt}</span>
          </div>
          
          <Button 
            variant="primary" 
            size="lg"
            onClick={onReadMore}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
          >
            Read Full Overview
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
