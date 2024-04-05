import { API_ROUTES } from '@/constants/routes';
import { axiosInstance } from '@/lib/axios';
import type { AxiosPatchTodoDto, AxiosPostTodoDto } from '@/types/dto';
import type {
  AxiosDeleteTodoOfResponseDto,
  AxiosGetTodoOfResponseDto,
  AxiosGetTodosResponseDto,
  AxiosPatchTodoOfResponseDto,
  AxiosPostTodoResponseDto,
} from '@/types/response-dto';

const axiosPostTodo = (axiosPostTodoDto: AxiosPostTodoDto) => {
  return axiosInstance.post<AxiosPostTodoResponseDto>(
    API_ROUTES.TODOS,
    axiosPostTodoDto,
  );
};

const axiosGetTodos = () => {
  return axiosInstance.get<AxiosGetTodosResponseDto>(API_ROUTES.TODOS);
};

const axiosGetTodoOf = (id: number) => {
  return axiosInstance.get<AxiosGetTodoOfResponseDto>(API_ROUTES.TODO_OF(id));
};

const axiosPatchTodoOf = (id: number, axiosPatchTodoDto: AxiosPatchTodoDto) => {
  return axiosInstance.patch<AxiosPatchTodoOfResponseDto>(
    API_ROUTES.TODO_OF(id),
    axiosPatchTodoDto,
  );
};

const axiosDeleteTodoOf = (id: number) => {
  return axiosInstance.delete<AxiosDeleteTodoOfResponseDto>(
    API_ROUTES.TODO_OF(id),
  );
};

export {
  axiosDeleteTodoOf,
  axiosGetTodoOf,
  axiosGetTodos,
  axiosPatchTodoOf,
  axiosPostTodo,
};
