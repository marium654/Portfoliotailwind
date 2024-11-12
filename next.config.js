/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Optional: Disable ESLint checks during build
  },
};

module.exports = nextConfig;
