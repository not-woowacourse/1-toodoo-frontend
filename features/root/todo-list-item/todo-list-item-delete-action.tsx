'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { MouseEventHandler } from 'react';
import { toast } from 'sonner';

import { QUERY_KEYS } from '@/constants/query-keys';
import { TodoListItemProps } from '@/features/root/todo-list-item';
import TodoListItemDeleteButton from '@/features/root/todo-list-item/todo-list-item-delete-button';
import { axiosDeleteTodoOf } from '@/lib/apis';
import type { PickAndRename } from '@/types/utility-types';

type TodoListItemDeleteActionProps = PickAndRename<
  TodoListItemProps['todo'],
  {
    id: 'todoId';
  }
>;

const TodoListItemDeleteAction = ({
  todoId,
}: TodoListItemDeleteActionProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: axiosDeleteTodoOf,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });

      toast.success('할 일을 삭제했어요.');
    },
    onError: () => {
      toast.error('할 일 삭제에 실패했어요. 잠시 후에 시도해주세요.');
    },
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    mutate(todoId);
  };

  return <TodoListItemDeleteButton onClick={handleClick} />;
};

export default TodoListItemDeleteAction;
