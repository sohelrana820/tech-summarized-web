import 'dotenv/config';
import { Overview, TechContent, ApiResponse } from '@/types';

// API base URL from environment variable with fallback
const API_BASE_URL = process.env.TECH_SUMMARIZED_BASE_URL || 'http://154.53.45.82:1052';

// HTTP client configuration
const HTTP_CONFIG = {
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// HTTP client function that mimics axios behavior
async function httpClient(url: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), HTTP_CONFIG.timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: { ...HTTP_CONFIG.headers, ...options.headers },
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    return {
      data: await response.json(),
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

// Fetch overviews from the API
export async function fetchOverviews(): Promise<Overview[]> {
  try {
    console.log('Fetching overviews from:', `${API_BASE_URL}/posts/daily/overviews`);
    const response = await httpClient(`${API_BASE_URL}/posts/daily/overviews`);
    const data: ApiResponse<Overview> = response.data;
    console.log('Successfully fetched overviews:', data.data.length, 'items');
    return data.data;
  } catch (error) {
    console.error('Error fetching overviews:', error);
    console.error('API URL:', `${API_BASE_URL}/posts/daily/overviews`);
    console.error('Error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      name: error instanceof Error ? error.name : 'Unknown',
    });
    throw error;
  }
}

// Fetch tech content for a specific overview by slug
export async function fetchTechContentBySlug(slug: string): Promise<TechContent[]> {
  try {
    const response = await httpClient(`${API_BASE_URL}/posts/daily/summarized/${slug}`);
    const data: ApiResponse<TechContent> = response.data;
    return data.data;
  } catch (error) {
    console.error('Error fetching tech content:', error);
    throw error;
  }
}

// Fetch tech content for a specific overview by ID (legacy support)
export async function fetchTechContent(overviewId: number): Promise<TechContent[]> {
  try {
    const response = await httpClient(`${API_BASE_URL}/posts/daily/summarized?overview_id=${overviewId}`);
    const data: ApiResponse<TechContent> = response.data;
    return data.data;
  } catch (error) {
    console.error('Error fetching tech content:', error);
    throw error;
  }
}

// Fetch all tech content
export async function fetchAllTechContent(): Promise<TechContent[]> {
  try {
    const response = await httpClient(`${API_BASE_URL}/posts/daily/summarized`);
    const data: ApiResponse<TechContent> = response.data;
    return data.data;
  } catch (error) {
    console.error('Error fetching tech content:', error);
    throw error;
  }
}

// Utility function to format time ago
export function formatTimeAgo(dateString: string): string {
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
