'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { sampleOverviews, sampleTechContent } from '@/data/sampleData';
import { TechContent } from '@/types';
import { 
  markContentAsRead, 
  isContentRead, 
  resetAllReadStates,
  getReadContentIds,
  getUnreadContentIds
} from '@/lib/localStorage';
import { FilterType } from '@/types';
import { CheckCircle, RotateCcw, Eye, EyeOff, ArrowLeft, Clock } from 'lucide-react';
import { useTimeAgo } from '@/hooks/useTimeAgo';

export default function OverviewDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slugParam = params.slug as string;
  
  const [filter, setFilter] = useState<FilterType>('unread');
  const [overview, setOverview] = useState(
    sampleOverviews.find(o => o.slug === slugParam)
  );
  const [content, setContent] = useState<TechContent[]>([]);
  
  // Use hooks for time formatting to prevent hydration issues
  const overviewTimeAgo = overview ? useTimeAgo(overview.updated_at) : 'recently';

  useEffect(() => {
    const foundOverview = sampleOverviews.find(o => o.slug === slugParam);
    
    if (foundOverview) {
      const foundContent = sampleTechContent.filter(c => c.overview_id === foundOverview.id);
      setOverview(foundOverview);
      setContent(foundContent);
    } else {
      setOverview(undefined);
      setContent([]);
    }
  }, [slugParam]);

  if (!overview) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
    <div className="min-h-screen">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>
          
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

        {/* Controls */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              variant={filter === 'unread' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('unread')}
              className="group"
            >
              <EyeOff className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Show Unread ({unreadContentIds.length})
            </Button>
            
            <Button
              variant={filter === 'read' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('read')}
              className="group"
            >
              <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              Show Read ({readContentIds.length})
            </Button>
            
            <Button
              variant={filter === 'all' ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter('all')}
            >
              Show All ({allContentIds.length})
            </Button>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleReset}
            className="group"
          >
            <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform" />
            Start Over / Reset
          </Button>
        </div>

        {/* Content Cards */}
        <div className="space-y-8">
          {filteredContent.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="text-6xl mb-4">
                  {filter === 'read' ? '📚' : filter === 'unread' ? '🎉' : '📄'}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  {filter === 'read' 
                    ? 'No read items to display.' 
                    : filter === 'unread' 
                    ? 'All items have been read! 🎉' 
                    : 'No content available.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredContent.map((contentItem) => {
              const isRead = isContentRead(slugParam, contentItem.id.toString());
              const contentTimeAgo = useTimeAgo(contentItem.pub_date);
              
              return (
                <Card key={contentItem.id} className="relative group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                            {contentItem.source}
                          </span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {contentTimeAgo}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                          {contentItem.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4">
                          {contentItem.summary}
                        </p>
                        {contentItem.link && (
                          <a 
                            href={contentItem.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                          >
                            Read original article →
                          </a>
                        )}
                      </div>
                      
                      <button
                        onClick={() => handleMarkAsRead(contentItem.id)}
                        className={`flex-shrink-0 w-12 h-12 rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
                          isRead
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 text-white shadow-lg shadow-green-500/25'
                            : 'border-slate-300 dark:border-slate-600 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/20 hover:shadow-lg hover:shadow-green-500/25'
                        }`}
                        aria-label={isRead ? 'Mark as unread' : 'Mark as read'}
                      >
                        {isRead && <CheckCircle className="w-6 h-6 mx-auto" />}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
