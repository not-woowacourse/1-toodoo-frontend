'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { MouseEventHandler } from 'react';
import { Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { QUERY_KEYS } from '@/constants/constants';
import { apiDeleteTodo } from '@/lib/apis';

type DeleteTodoButtonProps = {
  todoId: number;
};

const SUCCESS_DELETE_MESSAGE = '할 일을 삭제했어요.';
const FAIL_DELETE_MESSAGE = '할 일 삭제에 실패했어요. 잠시 후에 시도해주세요.';

const DeleteTodoButton = ({ todoId }: DeleteTodoButtonProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: apiDeleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.Todos });

      toast.success(SUCCESS_DELETE_MESSAGE);
    },
    onError: () => {
      toast.error(FAIL_DELETE_MESSAGE);
    },
  });

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    mutate(todoId);
  };

  return (
    <Button variant="secondary" size="sm" onClick={handleClick}>
      <Trash className="h-5 w-5 text-neutral-500" />
    </Button>
  );
};

export default DeleteTodoButton;
