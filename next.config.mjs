/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
  },

  async redirects() {
    return [
      {
        source: '/EPR/:path*.html', // Old .html URLs from GSC
        destination: '/EPR/:path*', // New clean URLs
        permanent: true, // Tells Google this is a permanent 301/308 redirect, fixing the duplicate error!
      },
    ];
  },
};

export default nextConfig;