/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const BACKEND_ORIGIN = process.env.NEXT_PUBLIC_SERVER_URL;

    return [
      {
        source: '/backend-api/:path*',
        destination: `${BACKEND_ORIGIN}/:path*`,
      },
    ];
  },
};

export default nextConfig;
