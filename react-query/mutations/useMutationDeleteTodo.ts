import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAPI } from '@/contexts/api.context/api.context';

export default function useMutationDeleteTodo(id: string) {
  const api = useAPI();
  const queryClient = useQueryClient();
  const queryKey = ['todoList'];
  const mutationFn = () => api.todo.deleteTodo(id);
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
