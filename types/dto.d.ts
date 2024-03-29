type AxiosPostTodoDto = Pick<Todo, 'title'>;

type AxiosPatchTodoDto = Partial<
  Pick<Todo, 'title' | 'description' | 'priority' | 'isDone'>
>;

export type { AxiosPatchTodoDto, AxiosPostTodoDto };
