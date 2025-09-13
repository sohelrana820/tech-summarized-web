import type { NextConfig } from "next";
import dotenv from 'dotenv';

// Load environment variables with safe configuration
dotenv.config({ silent: true });

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    TECH_SUMMARIZED_BASE_URL: process.env.TECH_SUMMARIZED_BASE_URL,
    NEXT_PUBLIC_TECH_SUMMARIZED_BASE_URL: process.env.NEXT_PUBLIC_TECH_SUMMARIZED_BASE_URL,
  },
};

export default nextConfig;
