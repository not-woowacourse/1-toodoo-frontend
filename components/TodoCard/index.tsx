import { AlertCircle, Check, Loader2, PencilLine, Trash2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useId, useState } from 'react';

import type { Todo, TodoPatchResponse } from '@/lib/types';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';
import { ActionButton } from '@/components/TodoCard/ActionButton';
import { Error } from '@/components/TodoCard/Error';
import { Checkbox } from '@/components/TodoCard/Checkbox';
import { EditTodoSheet } from '@/components/TodoCard/EditTodoSheet';
import { DeleteTodoSheet } from '@/components/TodoCard/DeleteTodoSheet';

interface TodoCardProps {
  todo: Todo;
}

export function TodoCard({ todo }: TodoCardProps) {
  const htmlId = useId();

  const queryClient = useQueryClient();

  const {
    mutate: toggle,
    isPending,
    error,
  } = useMutation({
    mutationFn: () =>
      axios.patch<TodoPatchResponse>(
        `${API_URL}/todos/${todo.id}`,
        { isDone: !todo.isDone },
        { headers: DEFAULT_HEADERS },
      ),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });

  const [isEditTodoSheetOpen, setIsEditTodoSheetOpen] = useState(false);
  const [isDeleteTodoSheetOpen, setIsDeleteTodoSheetOpen] = useState(false);

  return (
    <li className="flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm">
      <EditTodoSheet
        todo={todo}
        isOpen={isEditTodoSheetOpen}
        setIsOpen={setIsEditTodoSheetOpen}
      />
      <DeleteTodoSheet
        todo={todo}
        isOpen={isDeleteTodoSheetOpen}
        setIsOpen={setIsDeleteTodoSheetOpen}
      />
      <div className="group flex gap-2.5">
        <Checkbox
          htmlId={htmlId}
          isDone={todo.isDone}
          isLoading={isPending}
          onChange={() => toggle()}
        />
        <div className="flex flex-grow flex-wrap">
          <label
            className="flex flex-grow flex-col p-3.5 pl-0"
            htmlFor={htmlId}
          >
            <h2 className="font-medium text-neutral-900 line-through decoration-transparent transition-colors group-has-[:checked]:text-neutral-500 group-has-[:checked]:decoration-neutral-900">
              {todo.title}
            </h2>
            <p className="text-sm text-neutral-500 transition-colors empty:hidden group-has-[:checked]:text-neutral-400">
              {todo.description}
            </p>
          </label>
          <div className="ml-auto flex flex-none gap-0.5 p-2.5 pl-0">
            <ActionButton
              icon={PencilLine}
              label="수정"
              disabled={isPending}
              onClick={() => setIsEditTodoSheetOpen(true)}
            />
            <ActionButton
              icon={Trash2}
              label="삭제"
              disabled={isPending}
              onClick={() => setIsDeleteTodoSheetOpen(true)}
            />
          </div>
        </div>
      </div>
      {error && (
        <Error intent="완료 상태 수정" error={error} className="m-3.5 mt-0" />
      )}
    </li>
  );
}
