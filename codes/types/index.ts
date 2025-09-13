export interface TechContent {
  id: number;
  overview_id: number;
  title: string;
  summary: string;
  category: string;
  link: string;
  source: string;
  pub_date: string;
  status: string;
  created_at: string;
}

export interface Overview {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  image: string | null;
  updated_at: string;
  status: string;
  created_at: string;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T[];
}

export type FilterType = 'all' | 'read' | 'unread';
