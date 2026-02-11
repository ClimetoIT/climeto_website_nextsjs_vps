/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },

  async rewrites() {
    return [
      {
        source: '/EPR/:path*.html', // Jo bhi .html URL aayega
        destination: '/EPR/:path*', // Actual page folder
      },
    ];
  },
};

export default nextConfig;