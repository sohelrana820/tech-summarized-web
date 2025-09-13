'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { TechContent, Overview } from '@/types';
import { 
  markContentAsRead, 
  isContentRead, 
  resetAllReadStates,
  getReadContentIds,
  getUnreadContentIds
} from '@/lib/localStorage';
import { FilterType } from '@/types';
import { RotateCcw, Eye, EyeOff, ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle, Sparkles, Target, Loader2 } from 'lucide-react';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { ContentItem } from '@/components/ContentItem';
import { SocialShare } from '@/components/SocialShare';
import { fetchOverviews, fetchTechContentBySlug } from '@/lib/api';

export default function OverviewDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slugParam = params.slug as string;
  
  const [filter, setFilter] = useState<FilterType>('unread');
  const [overview, setOverview] = useState<Overview | undefined>(undefined);
  const [content, setContent] = useState<TechContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [previousOverview, setPreviousOverview] = useState<Overview | null>(null);
  
  // Use hooks for time formatting to prevent hydration issues - always call hooks in the same order
  const overviewTimeAgo = useTimeAgo(overview?.updated_at || '');

  // First useEffect - load data
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch overviews to find the one with matching slug
        const overviews = await fetchOverviews();
        const foundOverview = overviews.find(o => o.slug === slugParam);
        
        if (foundOverview) {
          setOverview(foundOverview);
          
          // Fetch content for this overview
          const contentData = await fetchTechContentBySlug(slugParam);
          setContent(contentData);
        } else {
          setOverview(undefined);
          setContent([]);
        }
      } catch (err) {
        console.error('Failed to load overview data:', err);
        setError('Failed to load overview data. Please try again later.');
        setOverview(undefined);
        setContent([]);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [slugParam]);

  // Second useEffect - load previous overview
  useEffect(() => {
    const getPreviousOverview = async () => {
      const currentOverview = overview;
      if (!currentOverview) return null;
      
      try {
        const overviews = await fetchOverviews();
        const sortedOverviews = [...overviews].sort((a, b) => 
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        
        const currentIndex = sortedOverviews.findIndex(o => o.id === currentOverview.id);
        return currentIndex < sortedOverviews.length - 1 ? sortedOverviews[currentIndex + 1] : null;
      } catch (error) {
        console.error('Error fetching previous overview:', error);
        return null;
      }
    };

    if (overview) {
      getPreviousOverview().then(setPreviousOverview);
    }
  }, [overview]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-visible">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-500" />
              <p className="text-slate-600 dark:text-slate-400">Loading overview content...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-visible">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Error Loading Overview
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              {error}
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                variant="primary"
                onClick={() => window.location.reload()}
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => router.push('/')}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!overview) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-visible">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Overview Not Found
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              No overview found for the slug "{slugParam}"
            </p>
            <Button
              variant="primary"
              onClick={() => router.push('/')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const handleMarkAsRead = (contentId: number) => {
    markContentAsRead(slugParam, contentId.toString());
    // Force re-render by updating state
    setContent([...content]);
  };

  const handleReset = () => {
    resetAllReadStates();
    setContent([...content]);
  };

  const allContentIds = content.map(c => c.id.toString());
  const readContentIds = getReadContentIds(slugParam);
  const unreadContentIds = getUnreadContentIds(slugParam, allContentIds);

  const getFilteredContent = () => {
    switch (filter) {
      case 'read':
        return content.filter(c => readContentIds.includes(c.id.toString()));
      case 'unread':
        return content.filter(c => unreadContentIds.includes(c.id.toString()));
      default:
        return content;
    }
  };

  const filteredContent = getFilteredContent();

  return (
    <div>
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="mb-12">
                <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  {/* Return to Overview Button */}
                  <button
                    onClick={() => router.push('/')}
                    className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-sm group-hover:shadow-md transition-all duration-300">
                      <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold">Return to Overview</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                        Explore more tech insights
                      </div>
                    </div>
                  </button>

                  {/* Previous Overview Button */}
                  {previousOverview && (
                    <button
                      onClick={() => router.push(`/overview/${previousOverview.slug}`)}
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 border border-emerald-200 dark:border-emerald-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-emerald-700 dark:text-emerald-300 hover:text-emerald-900 dark:hover:text-emerald-100"
                    >
                      <div className="text-right">
                        <div className="text-sm font-semibold">Waiting for you</div>
                        <div className="text-xs text-emerald-500 dark:text-emerald-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors duration-300">
                          {previousOverview.title.length > 35 
                            ? `${previousOverview.title.substring(0, 35)}...` 
                            : previousOverview.title}
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm group-hover:shadow-md transition-all duration-300">
                        <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                      </div>
                    </button>
                  )}
                </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-6 leading-tight">
            {overview.title}
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            {overview.short_description}
          </p>
          
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">Updated {overviewTimeAgo}</span>
          </div>
        </div>

        {/* Social Share */}
        <div className="mb-6">
          <SocialShare
            title={overview.title}
            url={`https://techsummarized.com/overview/${overview.slug}`}
            description={overview.short_description}
          />
        </div>

        {/* Controls */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            <Button
              variant={filter === 'unread' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('unread')}
              icon={<EyeOff className="w-4 h-4" />}
            >
              Show Unread ({unreadContentIds.length})
            </Button>

            <Button
              variant={filter === 'read' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('read')}
              icon={<Eye className="w-4 h-4" />}
            >
              Show Read ({readContentIds.length})
            </Button>

            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Show All ({allContentIds.length})
            </Button>

            <Button
              variant="action"
              size="sm"
              onClick={handleReset}
              icon={<RotateCcw className="w-4 h-4" />}
            >
              Start Over / Reset
            </Button>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-8 overflow-visible">
          {filteredContent.length === 0 ? (
            <Card className="animate-fade-in overflow-hidden">
              <CardContent className="p-12 pt-16 text-center relative">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/10 dark:to-pink-900/10" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-2xl translate-y-12 -translate-x-12" />
                
                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/25">
                    {filter === 'read' ? (
                      <BookOpen className="w-10 h-10 text-white" />
                    ) : filter === 'unread' ? (
                      <CheckCircle className="w-10 h-10 text-white" />
                    ) : (
                      <Target className="w-10 h-10 text-white" />
                    )}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {filter === 'read'
                      ? 'No Read Items Yet'
                      : filter === 'unread'
                      ? 'All Caught Up!'
                      : 'No Content Available'}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-6 max-w-md mx-auto leading-relaxed">
                    {filter === 'read'
                      ? 'You haven\'t marked any items as read yet. Start exploring the content below and mark items as read to see them here.'
                      : filter === 'unread'
                      ? 'Congratulations! You\'ve read all the available content. Check back later for new updates or reset to review everything again.'
                      : 'There\'s no content available at the moment. Please try again later.'}
                  </p>
                  
                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    {filter === 'read' ? (
                      <>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => setFilter('unread')}
                          icon={<EyeOff className="w-4 h-4" />}
                        >
                          View Unread Items
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setFilter('all')}
                          icon={<BookOpen className="w-4 h-4" />}
                        >
                          Show All Content
                        </Button>
                      </>
                    ) : filter === 'unread' ? (
                      <>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={handleReset}
                          icon={<RotateCcw className="w-4 h-4" />}
                        >
                          Start Over
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setFilter('read')}
                          icon={<BookOpen className="w-4 h-4" />}
                        >
                          View Read Items
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => router.push('/')}
                        icon={<ArrowLeft className="w-4 h-4" />}
                      >
                        Back to Home
                      </Button>
                    )}
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      {filter === 'read' ? 'Start your reading journey' : filter === 'unread' ? 'Great job staying updated!' : 'Content coming soon'}
                    </span>
                    <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {filteredContent.map((contentItem, index) => {
                const isRead = isContentRead(slugParam, contentItem.id.toString());

                return (
                  <div
                    key={contentItem.id}
                    className="animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ContentItem
                      contentItem={contentItem}
                      isRead={isRead}
                      onMarkAsRead={handleMarkAsRead}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
