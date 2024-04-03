import { AlertCircle, Check, Loader2, PencilLine, Trash2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useId } from 'react';

import type { Todo, TodoPatchResponse } from '@/lib/types';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';
import { ActionButton } from '@/components/TodoCard/ActionButton';
import { Error } from '@/components/TodoCard/Error';
import { Checkbox } from '@/components/TodoCard/Checkbox';

interface TodoCardProps {
  todo: Todo;
}

export function TodoCard({
  todo: { id, isDone, title, description },
}: TodoCardProps) {
  const htmlId = useId();

  const queryClient = useQueryClient();
  const invalidateQueries = async () => {
    return await queryClient.invalidateQueries({ queryKey: ['todos'] });
  };

  const itemUrl = `${API_URL}/todos/${id}`;

  const {
    mutate: toggle,
    isPending: isToggling,
    error: toggleError,
  } = useMutation({
    mutationFn: () =>
      axios.patch<TodoPatchResponse>(
        itemUrl,
        { isDone: !isDone },
        { headers: DEFAULT_HEADERS },
      ),
    onSettled: invalidateQueries,
  });

  const {
    mutate: erase,
    isPending: isErasing,
    error: eraseError,
  } = useMutation({
    mutationFn: () => axios.delete(itemUrl, { headers: DEFAULT_HEADERS }),
    onSettled: invalidateQueries,
  });

  const isLoading = isToggling || isErasing;

  return (
    <li className="flex flex-col rounded-xl border border-neutral-200 bg-white shadow-sm">
      <div className="group flex gap-2.5">
        <Checkbox
          htmlId={htmlId}
          isDone={isDone}
          disabled={isLoading}
          isToggling={isToggling}
          toggle={toggle}
        />
        <div className="flex flex-grow flex-wrap">
          <label className="flex flex-col p-3.5 pl-0" htmlFor={htmlId}>
            <h2 className="font-medium text-neutral-900 line-through decoration-transparent transition-colors group-has-[:checked]:text-neutral-500 group-has-[:checked]:decoration-neutral-900">
              {title}
            </h2>
            <p className="text-sm text-neutral-500 transition-colors empty:hidden group-has-[:checked]:text-neutral-400">
              {description}
            </p>
          </label>
          <div className="ml-auto flex flex-none gap-0.5 p-2.5 pl-0">
            <ActionButton
              icon={PencilLine}
              label="수정"
              disabled={isLoading}
              isPending={false}
              onClick={() => {}}
            />
            <ActionButton
              icon={Trash2}
              label="삭제"
              disabled={isLoading}
              isPending={isErasing}
              onClick={() => erase()}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3.5 pt-0 empty:hidden">
        {toggleError && <Error intent="완료 상태 수정" error={toggleError} />}
        {eraseError && <Error intent="삭제" error={eraseError} />}
      </div>
    </li>
  );
}
