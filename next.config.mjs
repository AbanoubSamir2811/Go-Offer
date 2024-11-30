const nextConfig = {
  turbo: true, // Enable Turbopack
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',       // Protocol of the external image URL
        hostname: 'dashboard.gooffer.net', // Hostname of the external image
        port: '',               // Specify a port if needed (leave empty for default ports)
        pathname: '/storage/brands/**', // Pattern for matching image paths
      },
    ],
    formats: ['image/avif', 'image/webp'], // Optimize images using modern formats
  },

  webpack(config, { isServer }) {
    if (!isServer) {
      // Reduce client-side bundle size by excluding unnecessary packages
      config.resolve.alias['@sentry/node'] = '@sentry/browser';
    }

    return config;
  },
};

export default nextConfig;
