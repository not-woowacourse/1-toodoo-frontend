import type { Todo } from '@/types/todo';

type AxiosPostTodoResponseDto = Todo;

type AxiosGetTodosResponseDto = Todo[];

type AxiosGetTodoOfResponseDto = Todo;

type AxiosPatchTodoOfResponseDto = Todo;

type AxiosDeleteTodoOfResponseDto = void;

export type {
  AxiosDeleteTodoOfResponseDto,
  AxiosGetTodoOfResponseDto,
  AxiosGetTodosResponseDto,
  AxiosPatchTodoOfResponseDto,
  AxiosPostTodoResponseDto,
};
