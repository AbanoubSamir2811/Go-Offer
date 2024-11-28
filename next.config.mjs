import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = bundleAnalyzer({
  // باقي إعدادات Next.js
  reactStrictMode: true,
  images: {
    domains: ['dashboard.gooffer.net'], // Add your image hostname here
  },
});

export default nextConfig;
