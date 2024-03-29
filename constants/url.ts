const FRONTEND_ORIGIN =
  (process.env.NODE_ENV === 'development' && 'http://localhost:10242') ||
  (process.env.NODE_ENV === 'production' &&
    'https://not-woowacourse-1-toodoo-frontend-for-example.vercel.app') ||
  '';

const BACKEND_PROXY_ORIGIN = new URL(
  '/backend-api',
  FRONTEND_ORIGIN,
).toString();

export { BACKEND_PROXY_ORIGIN };
