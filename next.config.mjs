/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Punjab URLs
      { source: '/EPR/punjab', destination: '/EPR/punjab.html', permanent: true },
      { source: '/EPR/punjab/:city', destination: '/EPR/punjab/:city.html', permanent: true },

      // Rajasthan URLs
      { source: '/EPR/rajasthan', destination: '/EPR/rajasthan.html', permanent: true },
      { source: '/EPR/rajasthan/:city', destination: '/EPR/rajasthan/:city.html', permanent: true },

      // Tamilnadu URLs
      { source: '/EPR/tamilnadu', destination: '/EPR/tamilnadu.html', permanent: true },
      { source: '/EPR/tamilnadu/:city', destination: '/EPR/tamilnadu/:city.html', permanent: true },

      // Telangana URLs
      { source: '/EPR/telangana', destination: '/EPR/telangana.html', permanent: true },
      { source: '/EPR/telangana/:city', destination: '/EPR/telangana/:city.html', permanent: true },

      // West Bengal URLs
      { source: '/EPR/westbengal', destination: '/EPR/westbengal.html', permanent: true },
      { source: '/EPR/westbengal/:city', destination: '/EPR/westbengal/:city.html', permanent: true },

      // Uttar Pradesh URLs
      { source: '/EPR/uttarpradesh', destination: '/EPR/uttarpradesh.html', permanent: true },
      { source: '/EPR/uttarpradesh/:city', destination: '/EPR/uttarpradesh/:city.html', permanent: true },

      // Generic fallback for any nested URL under EPR
      { source: '/EPR/:path*', destination: '/EPR/:path*.html', permanent: true },
    ];
  },
};

export default nextConfig;