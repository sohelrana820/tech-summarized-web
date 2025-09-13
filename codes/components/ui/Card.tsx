'use client';

import React from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <div
      className={clsx(
        'relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-800/60',
        'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm',
        'shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50',
        'transition-all duration-300 ease-out',
        hover && 'hover:shadow-xl hover:shadow-slate-300/60 dark:hover:shadow-slate-800/60 hover:scale-[1.02] hover:-translate-y-1 cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-slate-50/30 dark:from-slate-800/30 dark:via-transparent dark:to-slate-900/50 pointer-events-none" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx('p-6 pb-4', className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={clsx('p-6 pt-0', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={clsx('p-6 pt-4', className)}>
      {children}
    </div>
  );
}
