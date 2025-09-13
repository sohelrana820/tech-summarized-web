'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { Clock, ArrowRight } from 'lucide-react';
import { Overview } from '@/types';

interface OverviewCardProps {
  overview: Overview;
  onCardClick: (overview: Overview) => void;
}

export function OverviewCard({ overview, onCardClick }: OverviewCardProps) {
  const timeAgo = useTimeAgo(overview.updated_at);

  return (
    <Card
      className="group cursor-pointer transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-500/15 dark:hover:shadow-blue-500/8 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:border-blue-300/40 dark:hover:border-blue-600/40 flex flex-col h-full relative overflow-hidden"
      onClick={() => onCardClick(overview)}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-purple-500/3 to-cyan-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      <CardContent className="p-8 pt-12 flex flex-col h-full relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full font-medium">
              Overview #{overview.id}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {timeAgo}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {overview.title}
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 line-clamp-4 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
            {overview.short_description}
          </p>
        </div>
        
        <div className="relative group/btn mt-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
          <Button
            variant="ghost"
            size="sm"
            icon={<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />}
            className="relative w-full text-slate-600 dark:text-slate-400 hover:text-white dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              onCardClick(overview);
            }}
          >
            <span className="font-medium">Read Overview</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
