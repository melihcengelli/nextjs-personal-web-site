/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/tr/background.png',
        destination: '/background.png',
      },
      {
        source: '/en/background.png',
        destination: '/background.png',
      },
      {
        source: '/tr/images/:path*',
        destination: '/images/:path*',
      },
      {
        source: '/en/images/:path*',
        destination: '/images/:path*',
      },
      {
        source: '/:lang/cv.pdf',
        destination: '/cv.pdf',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tr',
        permanent: false,
      },
    ];
  },
  turbopack: {
    rules: {
      '*.png': ['asset'],
      '*.jpg': ['asset'],
      '*.gif': ['asset'],
      '*.svg': ['asset'],
    },
  },
};

module.exports = nextConfig; 