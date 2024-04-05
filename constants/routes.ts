const API_ROUTES = {
  TODOS: '/todos',
  TODO_OF: (id: number) => `/todos/${id}`,
} as const;

export { API_ROUTES };
