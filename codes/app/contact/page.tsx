'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Mail, Send, MessageCircle, Clock, Users, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <Header />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* Header */}
        <div className="text-center mb-20 relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-cyan-50/30 dark:from-emerald-900/10 dark:via-teal-900/5 dark:to-cyan-900/10 rounded-3xl -m-8" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl -translate-y-20 translate-x-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl translate-y-16 -translate-x-16" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent mb-8 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-8">
              We'd love to hear from you! Get in touch with us for questions, suggestions, or collaborations.
            </p>
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="text-lg font-medium">hello@techsummarized.com</span>
              <Mail className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-lg font-medium">Let's build the future of tech together</span>
              <MessageCircle className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
