const QUERY_KEYS = {
  TODOS: ['todos'],
  TODO_BY_ID: (id: number) => ['todo', { id }],
} as const;

export { QUERY_KEYS };
