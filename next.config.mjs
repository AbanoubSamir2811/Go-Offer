const nextConfig = {
  // turbo: true, // Enable Turbopack
  // reactStrictMode: true,
  // swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard.gooffer.net',
        pathname: '/storage/**', // Allow all paths under /storage/
      },
    ],
    formats: ['image/avif', 'image/webp'], // Optional: Enable modern formats for better performance
  },

  // webpack(config, { isServer }) {
  //   if (!isServer) {
  //     // Reduce client-side bundle size by excluding unnecessary packages
  //     config.resolve.alias['@sentry/node'] = '@sentry/browser';
  //   }

  //   return config;
  // },
};

export default nextConfig;
