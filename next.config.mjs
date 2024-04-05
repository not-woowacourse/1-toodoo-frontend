/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const BACKEND_ORIGIN = 'https://not-woowacourse-api.yopark.dev';

    return [
      {
        source: '/backend-api/:path*',
        destination: `${BACKEND_ORIGIN}/:path*`,
      },
    ];
  },
};

export default nextConfig;
