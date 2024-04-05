const HTTP_HEADERS = {
  CONTENT_TYPE_KEY: 'Content-Type',
  CLIENT_NAME_KEY: 'Client-Name',
} as const;

const QUERY_KEYS = {
  Todos: ['todos'],
  TodoById: (id: number) => ['todo', { id }],
} as const;

const BACKEND_ROUTES = {
  Todos: '/todos',
  TodoOf: (id: number) => `/todos/${id}`,
} as const;

const FRONTEND_ORIGIN =
  (process.env.NODE_ENV === 'development' && 'http://localhost:10242') ||
  (process.env.NODE_ENV === 'production' &&
    'https://not-woowacourse-1-toodoo-frontend-for-example.vercel.app') ||
  '';

const BACKEND_PROXY_ORIGIN = new URL(
  '/backend-api',
  FRONTEND_ORIGIN,
).toString();

export { HTTP_HEADERS, QUERY_KEYS, BACKEND_ROUTES, BACKEND_PROXY_ORIGIN };
