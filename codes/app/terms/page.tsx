'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, FileText, Calendar, Shield, AlertTriangle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TermsPage() {
  const router = useRouter();

  return (
    <div>
      <Header />
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent leading-tight">
              Terms & Conditions
            </h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our service.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                By accessing and using Tech Summarized, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </CardContent>
          </Card>

          {/* Use License */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                2. Use License
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Tech Summarized 
                for personal, non-commercial transitory viewing only. This is the grant of a license, not a 
                transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                3. Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The materials on Tech Summarized are provided on an 'as is' basis. Tech Summarized makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including 
                without limitation, implied warranties or conditions of merchantability, fitness for a particular 
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </CardContent>
          </Card>

          {/* Limitations */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-500" />
                4. Limitations
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                In no event shall Tech Summarized or its suppliers be liable for any damages (including, without 
                limitation, damages for loss of data or profit, or due to business interruption) arising out of 
                the use or inability to use the materials on Tech Summarized, even if Tech Summarized or an 
                authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </CardContent>
          </Card>

          {/* Accuracy of Materials */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-purple-500" />
                5. Accuracy of Materials
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                The materials appearing on Tech Summarized could include technical, typographical, or photographic 
                errors. Tech Summarized does not warrant that any of the materials on its website are accurate, 
                complete, or current. Tech Summarized may make changes to the materials contained on its website 
                at any time without notice.
              </p>
            </CardContent>
          </Card>

          {/* Links */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-500" />
                6. Links
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Tech Summarized has not reviewed all of the sites linked to our website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply endorsement 
                by Tech Summarized of the site. Use of any such linked website is at the user's own risk.
              </p>
            </CardContent>
          </Card>

          {/* Modifications */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-indigo-500" />
                7. Modifications
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Tech Summarized may revise these terms of service for its website at any time without notice. 
                By using this website you are agreeing to be bound by the then current version of these terms 
                of service.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-500" />
                8. Governing Law
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the 
                United States and you irrevocably submit to the exclusive jurisdiction of the courts in that 
                state or location.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
