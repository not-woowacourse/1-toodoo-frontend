import { BACKEND_ROUTES } from '@/constants/constants';
import {
  PatchTodoDto,
  PostTodoDto,
  ResGetTodoDto,
  ResGetTodosDto,
  ResPostTodoDto,
  ResPatchTodoDto,
  ResDeleteTodoDto,
} from '@/types/types';

import { axiosInstance } from './axios';

export const apiPostTodo = (postTodoDto: PostTodoDto) => {
  return axiosInstance.post<ResPostTodoDto>(BACKEND_ROUTES.Todos, postTodoDto);
};

export const apiGetTodos = () => {
  return axiosInstance.get<ResGetTodosDto>(BACKEND_ROUTES.Todos);
};

export const apiGetTodoOf = (id: number) => {
  return axiosInstance.get<ResGetTodoDto>(BACKEND_ROUTES.TodoOf(id));
};

export const apiPatchTodo = (id: number, patchTodoDto: PatchTodoDto) => {
  return axiosInstance.patch<ResPatchTodoDto>(
    BACKEND_ROUTES.TodoOf(id),
    patchTodoDto,
  );
};

export const apiDeleteTodoOf = (id: number) => {
  return axiosInstance.delete<ResDeleteTodoDto>(BACKEND_ROUTES.TodoOf(id));
};
