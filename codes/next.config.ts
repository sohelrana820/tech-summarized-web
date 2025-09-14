import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow cross-origin requests from production domain
  allowedDevOrigins: [
    'https://techsummarized.com',
    'http://techsummarized.com',
  ],
  
  // Production optimizations
  output: 'standalone',
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
