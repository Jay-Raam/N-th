/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Prevents double mounting in animations
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
