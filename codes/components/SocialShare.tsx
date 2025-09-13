'use client';

import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link, Copy } from 'lucide-react';

interface SocialShareProps {
  title: string;
  url: string;
  description?: string;
}

export function SocialShare({ title, url, description }: SocialShareProps) {
  const handleShare = async (platform: string) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    const encodedDescription = encodeURIComponent(description || '');

    let shareUrl = '';

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          // You could add a toast notification here
          return;
        } catch (err) {
          console.error('Failed to copy: ', err);
          return;
        }
      default:
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-4 border border-slate-200 dark:border-slate-600 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
            <Share2 className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Share this overview</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Help others discover this content</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleShare('twitter')}
            className="group p-3 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
            title="Share on Twitter"
          >
            <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="group p-3 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25"
            title="Share on Facebook"
          >
            <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => handleShare('linkedin')}
            className="group p-3 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-700/25"
            title="Share on LinkedIn"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={() => handleShare('copy')}
            className="group p-3 text-slate-600 dark:text-slate-400 hover:text-white hover:bg-emerald-500 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/25"
            title="Copy link"
          >
            <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
