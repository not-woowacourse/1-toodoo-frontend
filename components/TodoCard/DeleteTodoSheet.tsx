'use client';

import { type Dispatch, type SetStateAction } from 'react';
import { Trash2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';
import type { Todo } from '@/lib/types';
import { Error } from '@/components/TodoCard/Error';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';
import { TodoCard } from '@/components/TodoCard';

interface DeleteTodoSheetProps {
  todo: Todo;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function DeleteTodoSheet({
  todo,
  isOpen,
  setIsOpen,
}: DeleteTodoSheetProps) {
  const queryClient = useQueryClient();

  const {
    mutate: erase,
    isPending,
    error,
  } = useMutation({
    mutationFn: () =>
      axios.delete(`${API_URL}/todos/${todo.id}`, {
        headers: DEFAULT_HEADERS,
      }),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  return (
    <BottomSheet title="할 일 삭제" isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 rounded-xl bg-neutral-200 px-4 py-3.5">
            <div className="font-medium text-neutral-900">{todo.title}</div>
            <p className="text-sm text-neutral-500">{todo.description}</p>
          </div>
          <div className="text-center text-sm font-semibold text-neutral-500">
            이 할 일을 정말 삭제하시겠습니까?
          </div>
        </div>
        {error && <Error intent="삭제" error={error} />}
        <Button
          autoFocus
          icon={Trash2}
          isLoading={isPending}
          text="삭제"
          className="w-full"
          onClick={() => erase()}
        />
      </div>
    </BottomSheet>
  );
}
