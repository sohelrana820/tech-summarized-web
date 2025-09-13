'use client';

import { Header } from '@/components/layout/Header';
import { HeroCard } from '@/components/ui/HeroCard';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { sampleOverviews } from '@/data/sampleData';
import { useRouter } from 'next/navigation';
import { getSlugFromOverview } from '@/lib/api';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { Clock, ArrowRight } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const latestOverview = sampleOverviews[0];
  const recentOverviews = sampleOverviews.slice(1, 11);
  
  // Use hooks for time formatting to prevent hydration issues
  const latestTimeAgo = useTimeAgo(latestOverview.updated_at);

  const handleReadMore = () => {
    const slugRoute = getSlugFromOverview(latestOverview);
    router.push(`/overview/${slugRoute}`);
  };

  const handleCardClick = (overview: typeof sampleOverviews[0]) => {
    const slugRoute = getSlugFromOverview(overview);
    router.push(`/overview/${slugRoute}`);
  };

  return (
    <div>
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Hero Section */}
        <section className="mb-16">
          <HeroCard
            title={latestOverview.title}
            description={latestOverview.short_description}
            updatedAt={latestTimeAgo}
            onReadMore={handleReadMore}
          />
        </section>

        {/* Recent Overviews Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent whitespace-nowrap">
              Recent Overviews
            </h2>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentOverviews.map((overview) => {
              const timeAgo = useTimeAgo(overview.updated_at);
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
        </section>
      </main>
    </div>
  );
}
