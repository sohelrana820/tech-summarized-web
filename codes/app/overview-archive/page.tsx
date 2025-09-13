'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { OverviewCard } from '@/components/OverviewCard';
import { getSlugFromOverview, fetchOverviews } from '@/lib/api';
import { Archive, Calendar, Loader2, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Overview } from '@/types';

export default function OverviewArchivePage() {
  const router = useRouter();
  const [overviews, setOverviews] = useState<Overview[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleCardClick = (overview: Overview) => {
    const slugRoute = getSlugFromOverview(overview);
    router.push(`/overview/${slugRoute}`);
  };

  if (loading) {
    return (
      <div>
        <Header />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-500" />
              <p className="text-slate-600 dark:text-slate-400">Loading overview archive...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {error}
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Please try again later.
            </p>
            <Button
              variant="primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

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
          {overviews.map((overview) => (
            <OverviewCard
              key={overview.id}
              overview={overview}
              onCardClick={handleCardClick}
            />
          ))}
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
