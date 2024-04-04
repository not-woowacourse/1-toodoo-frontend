import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createTodo } from '@/api/todo/createTodo';

export default function useMutationCreateTodo() {
  const queryClient = useQueryClient();
  const queryKey = ['todoList'];
  const mutationFn = ({ title }: { title: string }) => createTodo({ title });
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
