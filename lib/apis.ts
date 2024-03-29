import { BACKEND_ROUTES } from '@/constants/routes';
import { axiosInstance } from '@/lib/axios';
import { AxiosPatchTodoDto, AxiosPostTodoDto } from '@/types/dto';
import {
  AxiosDeleteTodoOfResponseDto,
  AxiosGetTodoOfResponseDto,
  AxiosGetTodosResponseDto,
  AxiosPatchTodoOfResponseDto,
  AxiosPostTodoResponseDto,
} from '@/types/response-dto';

const axiosPostTodo = (axiosPostTodoDto: AxiosPostTodoDto) => {
  return axiosInstance.post<AxiosPostTodoResponseDto>(
    BACKEND_ROUTES.TODOS,
    axiosPostTodoDto,
  );
};

const axiosGetTodos = () => {
  return axiosInstance.get<AxiosGetTodosResponseDto>(BACKEND_ROUTES.TODOS);
};

const axiosGetTodoOf = (id: number) => {
  return axiosInstance.get<AxiosGetTodoOfResponseDto>(
    BACKEND_ROUTES.TODO_OF(id),
  );
};

const axiosPatchTodoOf = (id: number, axiosPatchTodoDto: AxiosPatchTodoDto) => {
  return axiosInstance.patch<AxiosPatchTodoOfResponseDto>(
    BACKEND_ROUTES.TODO_OF(id),
    axiosPatchTodoDto,
  );
};

const axiosDeleteTodoOf = (id: number) => {
  return axiosInstance.delete<AxiosDeleteTodoOfResponseDto>(
    BACKEND_ROUTES.TODO_OF(id),
  );
};

export {
  axiosDeleteTodoOf,
  axiosGetTodoOf,
  axiosGetTodos,
  axiosPatchTodoOf,
  axiosPostTodo,
};
