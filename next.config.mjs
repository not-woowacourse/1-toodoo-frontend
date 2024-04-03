/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // const BACKEND_ORIGIN =
    //   (process.env.NODE_ENV === 'development' && 'http://localhost:10241') ||
    //   (process.env.NODE_ENV === 'production' &&
    //     'https://port-0-my-tiny-backend-am952lltl4h1s4.sel5.cloudtype.app') ||
    //   '';

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
