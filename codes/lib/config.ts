// Environment configuration
export const API_BASE_URL = process.env.TECH_SUMMARIZED_BASE_URL || process.env.NEXT_PUBLIC_TECH_SUMMARIZED_BASE_URL || 'http://localhost:1052';

// Debug logging to verify environment variable loading
console.log('🔧 API Configuration Debug:');
console.log('TECH_SUMMARIZED_BASE_URL:', process.env.TECH_SUMMARIZED_BASE_URL);
console.log('NEXT_PUBLIC_TECH_SUMMARIZED_BASE_URL:', process.env.NEXT_PUBLIC_TECH_SUMMARIZED_BASE_URL);
console.log('Final API_BASE_URL:', API_BASE_URL);
