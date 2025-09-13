'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Users, Target, Lightbulb, Globe, Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  return (
    <div>
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/5 dark:to-pink-900/10 rounded-3xl -m-8" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-y-20 translate-x-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/10 to-pink-400/10 rounded-full blur-3xl translate-y-16 -translate-x-16" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-8 leading-tight">
              About Tech Summarized
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
              We're passionate about making technology accessible and understandable for everyone. 
              Our mission is to bridge the gap between complex tech developments and everyday understanding.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <Card>
            <CardContent className="p-8 pt-12">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                  About Tech Summarized
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Tech Summarized is your premier destination for comprehensive technology insights and industry analysis. 
                  We specialize in breaking down complex technological developments into clear, actionable summaries that 
                  help professionals, entrepreneurs, and tech enthusiasts stay ahead of the curve.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Our platform covers the latest trends in artificial intelligence, software development, cybersecurity, 
                  cloud computing, and emerging technologies. We provide daily curated content that combines technical 
                  depth with practical insights, making cutting-edge technology accessible to everyone.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Whether you're a developer looking to stay updated with the latest frameworks, a business leader 
                  evaluating new technologies, or simply someone passionate about the future of tech, Tech Summarized 
                  delivers the insights you need to make informed decisions and stay competitive in today's rapidly 
                  evolving digital landscape.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 mt-8">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    Why Choose Tech Summarized?
                  </h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>• Expert-curated content from industry professionals</li>
                    <li>• Daily updates on the latest technology trends</li>
                    <li>• Clear, jargon-free explanations of complex topics</li>
                    <li>• Practical insights for real-world applications</li>
                    <li>• Comprehensive coverage of emerging technologies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
