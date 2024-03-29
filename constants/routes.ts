const BACKEND_ROUTES = {
  TODOS: '/todos',
  TODO_OF: (id: number) => `/todos/${id}`,
} as const;

export { BACKEND_ROUTES };
