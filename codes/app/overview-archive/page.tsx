'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { sampleOverviews } from '@/data/sampleData';
import { getSlugFromOverview } from '@/lib/api';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { Clock, ArrowRight, Archive, Calendar } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function OverviewArchivePage() {
  const router = useRouter();

  const handleCardClick = (overview: typeof sampleOverviews[0]) => {
    const slugRoute = getSlugFromOverview(overview);
    router.push(`/overview/${slugRoute}`);
  };

  return (
    <div>
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-orange-50/20 to-red-50/30 dark:from-amber-900/10 dark:via-orange-900/5 dark:to-red-900/10 rounded-3xl -m-8" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl -translate-y-20 translate-x-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/10 to-red-400/10 rounded-full blur-3xl translate-y-16 -translate-x-16" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-8 leading-tight">
              Overview Archive
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
              Explore our complete collection of technology overviews and insights from the past.
            </p>
          </div>
        </div>

        {/* Overviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sampleOverviews.map((overview, index) => {
            const overviewTimeAgo = useTimeAgo(overview.updated_at);
            
            return (
              <Card 
                key={overview.id} 
                className="group cursor-pointer transition-all duration-300 ease-out hover:shadow-xl hover:shadow-blue-500/15 dark:hover:shadow-blue-500/8 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:border-blue-300/40 dark:hover:border-blue-600/40 flex flex-col h-full relative overflow-hidden"
                onClick={() => handleCardClick(overview)}
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
                        {overviewTimeAgo}
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
                        handleCardClick(overview);
                      }}
                    >
                      <span className="font-medium">Read Overview</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Stay Updated with Latest Tech Insights
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Don't miss out on the latest technology developments and industry insights.
              </p>
              <div className="relative group/cta">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"></div>
                <Button
                  variant="primary"
                  onClick={() => router.push('/')}
                  className="relative group bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
                >
                  <span className="font-semibold">View Latest Overview</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
