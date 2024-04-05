/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const API_URL = 'https://not-woowacourse-api.yopark.dev';

    return [
      {
        source: '/backend-api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
