import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAPI } from '@/contexts/api.context/api.context';

export default function useMutationEditTodo(id: string) {
  const api = useAPI();
  const queryClient = useQueryClient();
  const queryKey = ['todoList'];
  const mutationFn = ({
    title,
    description,
    isDone,
  }: {
    title?: string;
    description?: string;
    isDone?: boolean;
  }) => api.todo.editTodo({ id, title, description, isDone });
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
