/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  ...(process.env.NODE_ENV === 'development' && {
    async rewrites() {
      return [
        {
          source: '/blogs/wp-json/:path*',
          destination: 'https://oswaljainskinclinic.com/blogs/wp-json/:path*',
        },
      ];
    },
  }),
};

export default nextConfig;
