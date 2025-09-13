'use client';

export type Theme = 'light' | 'dark' | 'system';

export interface ReadState {
  [overviewId: string]: {
    [contentId: string]: boolean;
  };
}

// Theme management
export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  try {
    return (localStorage.getItem('theme') as Theme) || 'system';
  } catch {
    return 'system';
  }
};

export const setStoredTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('theme', theme);
  } catch {
    // Silently fail if localStorage is not available
  }
};

export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

// Read state management
export const getStoredReadState = (): ReadState => {
  if (typeof window === 'undefined') return {};
  try {
    const stored = localStorage.getItem('readState');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

export const setStoredReadState = (readState: ReadState): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('readState', JSON.stringify(readState));
};

export const markContentAsRead = (overviewId: string, contentId: string): void => {
  const readState = getStoredReadState();
  if (!readState[overviewId]) {
    readState[overviewId] = {};
  }
  readState[overviewId][contentId] = true;
  setStoredReadState(readState);
};

export const markContentAsUnread = (overviewId: string, contentId: string): void => {
  const readState = getStoredReadState();
  if (readState[overviewId]) {
    delete readState[overviewId][contentId];
    if (Object.keys(readState[overviewId]).length === 0) {
      delete readState[overviewId];
    }
    setStoredReadState(readState);
  }
};

export const isContentRead = (overviewId: string, contentId: string): boolean => {
  const readState = getStoredReadState();
  return readState[overviewId]?.[contentId] || false;
};

export const resetAllReadStates = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('readState');
};

export const getReadContentIds = (overviewId: string): string[] => {
  const readState = getStoredReadState();
  return Object.keys(readState[overviewId] || {});
};

export const getUnreadContentIds = (overviewId: string, allContentIds: string[]): string[] => {
  const readContentIds = getReadContentIds(overviewId);
  return allContentIds.filter(id => !readContentIds.includes(id));
};
