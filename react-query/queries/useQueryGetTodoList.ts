import { useQuery } from '@tanstack/react-query';

import { useAPI } from '@/contexts/api.context/api.context';

export default function useQueryGetTodoList() {
  const api = useAPI();

  const queryKey = ['todoList'];
  const queryFn = () => api.todo.getTodoList();
  return useQuery({ queryKey, queryFn });
}
