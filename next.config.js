/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  staticPageGenerationTimeout: 1000,
  experimental: {
    cpus: 1,
  },
};

module.exports = nextConfig;
