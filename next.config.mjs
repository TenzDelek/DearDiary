// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/quote',
          destination: 'https://zenquotes.io/api/random',
        },
      ]
    },
  }
  
  export default nextConfig;
  