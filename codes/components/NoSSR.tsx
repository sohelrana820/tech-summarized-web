'use client';

import { useClientOnly } from '@/hooks/useClientOnly';

interface NoSSRProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function NoSSR({ children, fallback = null }: NoSSRProps) {
  const mounted = useClientOnly();

  if (!mounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
