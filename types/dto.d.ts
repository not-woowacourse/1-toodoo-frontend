import type { Todo } from '@/types/todo';

type AxiosPostTodoDto = Pick<Todo, 'title'>;

type AxiosPatchTodoDto = Partial<
  Pick<Todo, 'title' | 'description' | 'isDone'>
>;

export type { AxiosPatchTodoDto, AxiosPostTodoDto };
