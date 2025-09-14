'use client';

import { Header } from '@/components/layout/Header';
import { HeroCard } from '@/components/ui/HeroCard';
import { Button } from '@/components/ui/Button';
import { OverviewCard } from '@/components/OverviewCard';
import { useRouter } from 'next/navigation';
import { getSlugFromOverview, fetchOverviews } from '@/lib/api';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { Loader2 } from 'lucide-react';
import { Overview } from '@/types';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [overviews, setOverviews] = useState<Overview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Always call hooks in the same order - use empty string as fallback
  const latestTimeAgo = useTimeAgo(overviews[0]?.updated_at || '');
  
  useEffect(() => {
    const loadOverviews = async () => {
      try {
        setLoading(true);
        const data = await fetchOverviews();
        setOverviews(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load overviews:', err);
        setError('Failed to load overviews. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadOverviews();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header />
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-500 dark:text-blue-400" />
              <p className="text-slate-600 dark:text-slate-300">Loading latest tech insights...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error || overviews.length === 0) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header />
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {error || 'No overviews available'}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              {error || 'Please check back later for the latest tech insights.'}
            </p>
            <Button
              variant="primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const latestOverview = overviews[0];
  const recentOverviews = overviews.slice(1, 11);

  const handleReadMore = () => {
    const slugRoute = getSlugFromOverview(latestOverview);
    router.push(`/overview/${slugRoute}`);
  };

  const handleCardClick = (overview: Overview) => {
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

        {/* Recent Overviews Section - Only show if there are recent overviews */}
        {recentOverviews.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent whitespace-nowrap">
                Recent Overviews
              </h2>
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent flex-1" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentOverviews.map((overview) => (
                <OverviewCard
                  key={overview.id}
                  overview={overview}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
