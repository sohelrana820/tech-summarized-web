'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { TechContent } from '@/types';
import { useTimeAgo } from '@/hooks/useTimeAgo';
import { Check, Languages, Info, MessageCircle, ExternalLink } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { ChatBox } from './ChatBox';
import { useChat } from '@/contexts/ChatContext';
import { Button } from './ui/Button';

interface ContentItemProps {
  contentItem: TechContent;
  isRead: boolean;
  onMarkAsRead: (contentId: number) => void;
}

export function ContentItem({ contentItem, isRead, onMarkAsRead }: ContentItemProps) {
  const contentTimeAgo = useTimeAgo(contentItem.pub_date);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translatedSummary, setTranslatedSummary] = useState<string | null>(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMarkingAsRead, setIsMarkingAsRead] = useState(false);
  const { activeChatId, setActiveChatId } = useChat();
  
  const chatId = `chat-${contentItem.id}`;
  const isChatOpen = activeChatId === chatId;

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleMarkAsRead = () => {
    setIsMarkingAsRead(true);
    // Immediate visual feedback, then smooth transition
    setTimeout(() => {
      onMarkAsRead(contentItem.id);
      setIsMarkingAsRead(false);
    }, 150); // Reduced delay for smoother experience
  };

  const handleLanguageChange = async (language: string) => {
    if (language === 'en') {
      setTranslatedSummary(null);
      setSelectedLanguage(language);
      return;
    }

    setSelectedLanguage(language);
    setIsTranslating(true);
    
    // Simulate translation API call
    setTimeout(() => {
      setTranslatedSummary(`[Translated to ${language.toUpperCase()}] ${contentItem.summary}`);
      setIsTranslating(false);
    }, 1000);
  };

  return (
    <Card className="relative group transition-all duration-300 ease-out hover:shadow-lg hover:shadow-slate-300/50 dark:hover:shadow-slate-800/50 overflow-visible" style={{ zIndex: 1 } as React.CSSProperties}>
      <CardContent className="p-8 pt-12 relative overflow-visible">
        <div className="flex items-start">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full font-medium">
                {contentItem.source}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {contentTimeAgo}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
              {contentItem.title}
            </h3>
            
            <div className="relative">
              {isTranslating ? (
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-sm">Translating...</span>
                </div>
              ) : (
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg mb-4">
                  {contentItem.summary}
                </p>
              )}
            </div>
            
            {/* Bottom section with Translation */}
            <div className="flex items-center justify-start mt-4 relative" style={{ zIndex: 1 }}>
              {/* Translation Section */}
              <div className="flex items-center gap-2">
                <Languages className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                <span className="text-sm text-slate-500 dark:text-slate-400">Translate into</span>
                <LanguageSelector 
                  onLanguageChange={handleLanguageChange} 
                  currentLanguage={selectedLanguage}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Action buttons section at bottom */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700 relative" style={{ zIndex: 1 }}>
          <div className="flex items-center justify-between">
            {/* Left side - Read Original Article */}
            <div className="flex items-center">
              {contentItem.link && (
                <a
                  href={contentItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline text-sm font-medium transition-colors duration-200 group"
                >
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Read Original Article
                </a>
              )}
            </div>
            
            {/* Center - Chat & Details buttons aligned with circle */}
            <div className="flex items-center gap-4">
              {/* Details Icon */}
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="group relative p-3 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 hover:from-amber-100 hover:to-orange-100 dark:hover:from-amber-900/30 dark:hover:to-orange-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-amber-500/25"
                title={showDetails ? 'Hide details' : 'Show details'}
              >
                <Info className={`w-5 h-5 transition-all duration-300 ${
                  showDetails 
                    ? 'text-amber-600 dark:text-amber-400' 
                    : 'text-amber-500 dark:text-amber-500 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                }`} />
                {showDetails && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                )}
              </button>
              
              {/* Chat Icon */}
              <button
                onClick={() => setActiveChatId(isChatOpen ? null : chatId)}
                className="group relative p-3 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 hover:from-violet-100 hover:to-purple-100 dark:hover:from-violet-900/30 dark:hover:to-purple-900/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25"
                title={isChatOpen ? 'Close chat' : 'Start chat'}
              >
                <MessageCircle className={`w-5 h-5 transition-all duration-300 ${
                  isChatOpen 
                    ? 'text-violet-600 dark:text-violet-400' 
                    : 'text-violet-500 dark:text-violet-500 group-hover:text-violet-600 dark:group-hover:text-violet-400'
                }`} />
                {isChatOpen && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
                )}
              </button>
              
              {/* Read indicator circle */}
              <button
                onClick={handleMarkAsRead}
                className={`group relative p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  isMarkingAsRead 
                    ? 'scale-110 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 shadow-lg shadow-green-500/25'
                    : isRead
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-900/30 dark:hover:to-emerald-900/30 shadow-md shadow-green-500/25'
                    : 'bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-800/20 dark:to-gray-800/20 hover:from-green-50 hover:to-emerald-50 dark:hover:from-green-900/20 dark:hover:to-emerald-900/20 hover:shadow-md hover:shadow-green-500/25'
                }`}
                aria-label={isRead ? 'Mark as unread' : 'Mark as read'}
                title={isRead ? 'Mark as unread' : 'Mark as read'}
              >
                <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ease-out relative overflow-hidden ${
                  isMarkingAsRead 
                    ? 'bg-gradient-to-r from-green-400 to-emerald-400 border-green-400 text-white shadow-lg shadow-green-400/50'
                    : isRead
                    ? 'bg-gradient-to-r from-green-400 to-emerald-400 border-green-400 text-white shadow-md shadow-green-400/30'
                    : 'border-slate-300 dark:border-slate-600 hover:border-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:shadow-md hover:shadow-green-400/30'
                }`}>
                  {/* Shimmer effect - only render on client to prevent hydration issues */}
                  {mounted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                  {(isRead || isMarkingAsRead) && <Check className="w-3 h-3 mx-auto relative z-10" />}
                </div>
                {(isRead || isMarkingAsRead) && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                )}
              </button>
            </div>
          </div>
        </div>
      </CardContent>
      
      {/* Chat Box - Floating */}
      <ChatBox
        isOpen={isChatOpen}
        onClose={() => setActiveChatId(null)}
        contentTitle={contentItem.title}
        contentSummary={contentItem.summary}
      />
    </Card>
  );
}
