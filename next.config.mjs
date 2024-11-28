import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = bundleAnalyzer({
  // باقي إعدادات Next.js
});

export default nextConfig;
