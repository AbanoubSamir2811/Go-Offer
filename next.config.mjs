"use client";

const nextConfig = {
  experimental: {
    turbo: {
      enabled: true, // Enable Turbopack
    },
  },
  // swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard.gooffer.net',
        pathname: '/storage/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }
    return config;
  },
};


export default nextConfig;
