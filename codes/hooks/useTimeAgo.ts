'use client';

import { useState, useEffect } from 'react';

export function useTimeAgo(dateString: string): string {
  const [timeAgo, setTimeAgo] = useState('recently');

  useEffect(() => {
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
  }, [dateString]);

  return timeAgo;
}
