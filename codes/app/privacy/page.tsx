'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Calendar, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <div>
      <Header />
      
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent leading-tight">
              Privacy Policy
            </h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        {/* Privacy Content */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-blue-500" />
                1. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Personal Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, such as your name, 
                    email address, and any other information you choose to provide when contacting us or using our services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Usage Information
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    We automatically collect certain information about your use of our website, including your IP address, 
                    browser type, device information, pages visited, and time spent on our site.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-emerald-500" />
                2. How We Use Your Information
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Providing and improving our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending you updates and newsletters (with your consent)</li>
                <li>Analyzing website usage and performance</li>
                <li>Ensuring the security and integrity of our services</li>
                <li>Complying with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-amber-500" />
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist us in operating our website</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-red-500" />
                4. Data Security
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-purple-500" />
                5. Cookies and Tracking Technologies
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are 
                small data files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences, but disabling cookies may affect 
                the functionality of our website.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-cyan-500" />
                6. Your Rights and Choices
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-2 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to certain processing activities</li>
                <li>Data portability (receive your data in a structured format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third-Party Links */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-500" />
                7. Third-Party Links
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-green-500" />
                8. Children's Privacy
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal 
                information from children under 13. If we become aware that we have collected personal information from 
                a child under 13, we will take steps to delete such information.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-indigo-500" />
                9. Changes to This Privacy Policy
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this 
                Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardContent className="p-8 pt-12">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                10. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="space-y-2 text-slate-600 dark:text-slate-300">
                <p><strong>Email:</strong> privacy@techsummarized.com</p>
                <p><strong>Website:</strong> techsummarized.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
