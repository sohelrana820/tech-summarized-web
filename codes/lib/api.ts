import { Overview, TechContent, ApiResponse } from '@/types';
import { API_BASE_URL } from './config';

// Fetch overviews from the API
export async function fetchOverviews(): Promise<Overview[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/daily/overviews`);
    if (!response.ok) {
      throw new Error('Failed to fetch overviews');
    }
    
    const data: ApiResponse<Overview> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching overviews:', error);
    // Return empty array as fallback
    return [];
  }
}

// Fetch tech content for a specific overview by slug
export async function fetchTechContentBySlug(slug: string): Promise<TechContent[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/daily/summarized/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch tech content');
    }
    
    const data: ApiResponse<TechContent> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tech content:', error);
    // Return empty array as fallback
    return [];
  }
}

// Fetch tech content for a specific overview by ID (legacy support)
export async function fetchTechContent(overviewId: number): Promise<TechContent[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/daily/summarized?overview_id=${overviewId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch tech content');
    }
    
    const data: ApiResponse<TechContent> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tech content:', error);
    // Return empty array as fallback
    return [];
  }
}

// Fetch all tech content
export async function fetchAllTechContent(): Promise<TechContent[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/daily/summarized`);
    if (!response.ok) {
      throw new Error('Failed to fetch tech content');
    }
    
    const data: ApiResponse<TechContent> = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching tech content:', error);
    // Return empty array as fallback
    return [];
  }
}

// Utility function to format time ago (client-side only to prevent hydration issues)
export function formatTimeAgo(dateString: string): string {
  // Return a default value during SSR to prevent hydration mismatch
  if (typeof window === 'undefined') {
    return 'recently';
  }
  
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'just now';
  if (diffInHours < 24) return `about ${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `about ${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  return `about ${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
}

// Slug utility functions for routing
export function getSlugFromOverview(overview: Overview): string {
  return overview.slug;
}

export function isValidSlug(slug: string): boolean {
  // Check if slug contains only lowercase letters, numbers, and hyphens
  const regex = /^[a-z0-9-]+$/;
  return regex.test(slug) && slug.length > 0;
}
