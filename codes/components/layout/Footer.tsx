'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Globe, BookOpen, Code, Database, Cloud, ArrowUpRight, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blue-400/20 rounded-full animate-ping delay-700"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Tech Summarized
                  </h3>
                  <p className="text-slate-400 text-sm font-medium mt-1">Stay updated with the latest tech insights</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-lg">
                Transforming complex technology trends into clear, actionable insights. Your trusted source for AI developments, tech innovations, and industry analysis.
              </p>
              
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-4">
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  href="/about" 
                  className="group p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-300">About Us</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="group p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-purple-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-300">Contact</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </Link>
                
                <Link 
                  href="/privacy" 
                  className="group p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-cyan-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-300">Privacy</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </Link>
                
                <Link 
                  href="/terms" 
                  className="group p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300 group-hover:text-white font-medium transition-colors duration-300">Terms</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Newsletter & Social */}
            <div className="lg:col-span-3">
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Stay Connected
              </h4>
              

              {/* Social Links */}
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer border border-blue-500/30">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer border border-blue-600/30">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-700/20 to-blue-800/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer border border-blue-700/30">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/30 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <p className="text-slate-400 text-sm">
                © 2025 Tech Summarized. All rights reserved.
              </p>
            </div>
            
            {/* Tech Icons Animation */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                  <Code className="w-4 h-4 text-blue-400 animate-pulse" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Database className="w-4 h-4 text-purple-400 animate-pulse delay-300" />
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <Cloud className="w-4 h-4 text-cyan-400 animate-pulse delay-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
