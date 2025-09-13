'use client';

import { Header } from '@/components/layout/Header';
import { HeroCard } from '@/components/ui/HeroCard';
import { Card, CardContent } from '@/components/ui/Card';
import { sampleOverviews } from '@/data/sampleData';
import { useRouter } from 'next/navigation';
import { getSlugFromOverview } from '@/lib/api';
import { useTimeAgo } from '@/hooks/useTimeAgo';

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
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                  hover={false}
                  onClick={() => handleCardClick(overview)}
                  className="h-full group relative"
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full font-medium border border-slate-200/50 dark:border-slate-700/50">
                          {timeAgo}
                        </span>
                      </div>
                    </div>
                  
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2 leading-tight">
                      {overview.title}
                    </h3>
                  
                    <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 flex-grow leading-relaxed">
                      {overview.short_description}
                    </p>
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
