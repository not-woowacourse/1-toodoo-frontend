import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useAPI } from '@/contexts/api.context/api.context';

export default function useMutationCreateTodo() {
  const api = useAPI();
  const queryClient = useQueryClient();
  const queryKey = ['todoList'];
  const mutationFn = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => api.todo.createTodo({ title, description });
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
