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
        source: '/EPR/:path*',          // Jo URL without .html hai
        destination: '/EPR/:path*.html' // Redirect to the .html version
      }
    ];
  },
};

export default nextConfig;