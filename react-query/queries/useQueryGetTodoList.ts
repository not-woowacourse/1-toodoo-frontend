import { useQuery } from '@tanstack/react-query';

import { getTodoList } from '@/api/todo/getTodo';

export default function useQueryGetTodoList() {
  const queryKey = ['todoList'];
  const queryFn = () => getTodoList();
  return useQuery({ queryKey, queryFn });
}
