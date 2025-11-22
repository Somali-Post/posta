import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    deviceSizes: [320, 420, 640, 768, 1024, 1200],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
