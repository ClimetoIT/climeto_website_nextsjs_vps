/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/EPR/:path*',
        has: [
          {
            type: 'query',
            key: 'html',
            value: undefined,
          },
        ],
        // Only redirect if it does NOT already end with .html
        destination: '/EPR/:path*.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;