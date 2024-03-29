import { axiosInstance } from '@/lib/axios';
import { AxiosPatchTodoDto, AxiosPostTodoDto } from '@/types/dto';

const axiosPostTodo = (axiosPostTodoDto: AxiosPostTodoDto) => {
  return axiosInstance.post(BACKEND_ROUTES.TODOS, axiosPostTodoDto);
};

const axiosGetTodos = () => {
  return axiosInstance.get(BACKEND_ROUTES.TODOS);
};

const axiosGetTodoOf = (id: number) => {
  return axiosInstance.get(BACKEND_ROUTES.TODO_OF(id));
};

const axiosPatchTodoOf = (id: number, axiosPatchTodoDto: AxiosPatchTodoDto) => {
  return axiosInstance.patch(BACKEND_ROUTES.TODO_OF(id), axiosPatchTodoDto);
};

const axiosDeleteTodoOf = (id: number) => {
  return axiosInstance.delete(BACKEND_ROUTES.TODO_OF(id));
};

export {
  axiosDeleteTodoOf,
  axiosGetTodoOf,
  axiosGetTodos,
  axiosPatchTodoOf,
  axiosPostTodo,
};
