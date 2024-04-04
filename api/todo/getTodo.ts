import instance from '@/api/axiosModule';

import { TodoDto } from './todo.dto';

export const getTodoList = async () => {
  const { data } = await instance.get<TodoDto[]>(`/todos`);
  return data;
};
