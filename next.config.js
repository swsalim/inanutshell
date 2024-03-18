const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'stats.yuurrific.com', port: '' },
      { protocol: 'https', hostname: 'ik.imagekit.io', port: '' },
      { protocol: 'https', hostname: 'img.buymeacoffee.com', port: '' },
      { protocol: 'https', hostname: 'res.cloudinary.com', port: '' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [];
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    config.infrastructureLogging = {
      level: 'error',
    };
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config;
  },
};

module.exports = nextConfig;
