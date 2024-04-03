import { AlertCircle, Check, Loader2, PencilLine, Trash2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useId } from 'react';

import type { Todo, TodoPatchResponse } from '@/lib/types';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';

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
        <div className="text-netural-900 sticky top-3.5 m-3.5 mr-0 flex size-6 flex-none">
          <input
            id={htmlId}
            type="checkbox"
            className="peer size-full cursor-pointer appearance-none rounded border border-neutral-200 bg-white shadow-sm outline-none ring-rose-500 ring-offset-2 transition-all checked:border-neutral-900 checked:bg-neutral-800 focus-visible:ring-2 enabled:hover:border-neutral-300 enabled:hover:bg-neutral-100 checked:enabled:hover:border-neutral-800 checked:enabled:hover:bg-neutral-700 enabled:focus-visible:border-neutral-300 enabled:focus-visible:bg-neutral-100 checked:enabled:focus-visible:border-neutral-800 checked:enabled:focus-visible:bg-neutral-700 enabled:active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
            checked={isDone}
            disabled={isLoading}
            onChange={() => toggle()}
          />
          {isToggling ? (
            <Loader2
              className="absolute left-1 top-1 animate-spin opacity-50 peer-checked:text-white"
              size={16}
              strokeWidth={3}
            />
          ) : (
            <Check
              className="pointer-events-none absolute left-1 top-1 opacity-0 transition-transform peer-checked:text-white peer-checked:opacity-100 peer-active:scale-90"
              size={16}
              strokeWidth={4}
            />
          )}
        </div>
        <div className="flex flex-grow flex-wrap">
          <label className="flex flex-col p-3.5 pl-0" htmlFor={htmlId}>
            <h2 className="font-medium text-neutral-900 line-through decoration-transparent transition-colors group-has-[:checked]:text-neutral-500 group-has-[:checked]:decoration-neutral-900">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-neutral-500 transition-colors group-has-[:checked]:text-neutral-400">
                {description}
              </p>
            )}
          </label>
          <div className="ml-auto flex flex-none gap-0.5 p-2.5 pl-0">
            <button
              disabled={isLoading}
              className="sticky top-2.5 flex size-8 items-center justify-center rounded text-neutral-600 outline-none ring-rose-500 ring-offset-2 transition-all focus-visible:ring-2 enabled:hover:bg-neutral-200 enabled:focus-visible:bg-neutral-200 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <PencilLine size={20} />
            </button>
            <button
              disabled={isLoading}
              onClick={() => erase()}
              className="sticky top-2.5 flex size-8 items-center justify-center rounded text-neutral-600 outline-none ring-rose-500 ring-offset-2 transition-all focus-visible:ring-2 enabled:hover:bg-neutral-200 enabled:focus-visible:bg-neutral-200 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isErasing ? (
                <Loader2 size={20} className="animate-spin" />
              ) : (
                <Trash2 size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
      {(toggleError || eraseError) && (
        <div className="flex flex-col gap-2 p-3.5 pt-0">
          {toggleError && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600"
            >
              <AlertCircle />
              <span>완료 상태 수정 실패 ({toggleError.message})</span>
            </div>
          )}
          {eraseError && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600"
            >
              <AlertCircle />
              <span>삭제 실패 ({eraseError.message})</span>
            </div>
          )}
        </div>
      )}
    </li>
  );
}
