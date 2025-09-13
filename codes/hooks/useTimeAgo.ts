'use client';

import { useState, useEffect } from 'react';
import { useClientOnly } from './useClientOnly';

export function useTimeAgo(dateString: string): string {
  const [timeAgo, setTimeAgo] = useState('recently');
  const mounted = useClientOnly();

  useEffect(() => {
    if (!mounted || !dateString) return;

    const formatTimeAgo = (dateString: string): string => {
      const date = new Date(dateString);
      const now = new Date();
      const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
      
      if (diffInHours < 1) return 'just now';
      if (diffInHours < 24) return `about ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
      
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return `about ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
      
      const diffInWeeks = Math.floor(diffInDays / 7);
      return `about ${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    };

    setTimeAgo(formatTimeAgo(dateString));
  }, [dateString, mounted]);

  // Always return 'recently' during SSR to prevent hydration mismatch
  if (!mounted) {
    return 'recently';
  }

  return timeAgo;
}
