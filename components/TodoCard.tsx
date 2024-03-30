import { AlertCircle, Check, Loader2, PencilLine, Trash2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import type { Todo, TodoPatchResponse } from '@/lib/types';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';

interface TodoCardProps {
  todo: Todo;
}

export function TodoCard({
  todo: { id, isDone, title, description },
}: TodoCardProps) {
  const queryClient = useQueryClient();

  const {
    mutate: toggle,
    isPending: isToggling,
    error: toggleError,
  } = useMutation({
    mutationFn: () =>
      axios.patch<TodoPatchResponse>(
        `${API_URL}/todos/${id}`,
        { isDone: !isDone },
        { headers: DEFAULT_HEADERS },
      ),
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const {
    mutate: erase,
    isPending: isErasing,
    error: eraseError,
  } = useMutation({
    mutationFn: () =>
      axios.delete(`${API_URL}/todos/${id}`, { headers: DEFAULT_HEADERS }),
    onSettled: async () => {
      return await queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const isLoading = isToggling || isErasing;

  return (
    <li className="group flex flex-wrap rounded-xl border border-neutral-200 bg-white shadow-sm transition-all [&:has(label:active):not(:has(:disabled))]:active:scale-[0.975] [&:has(label:hover):not(:has(:disabled))]:border-neutral-300 [&:has(label:hover):not(:has(:disabled))]:bg-neutral-100">
      <label className="flex flex-grow cursor-pointer gap-2.5 p-3.5 has-[:disabled]:cursor-not-allowed">
        <div className="sticky top-4 flex size-6 flex-none">
          <input
            type="checkbox"
            className="peer size-full cursor-pointer appearance-none rounded border border-neutral-200 bg-white transition-all checked:border-neutral-900 checked:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50"
            checked={isDone}
            disabled={isLoading}
            onChange={() => toggle()}
          />
          {isToggling ? (
            <Loader2
              className="text-netural-900 absolute left-1 top-1 animate-spin opacity-0 transition-all peer-checked:text-white peer-checked:opacity-100 peer-disabled:opacity-50"
              size={16}
              strokeWidth={4}
            />
          ) : (
            <Check
              className="text-netural-900 absolute left-1 top-1 opacity-0 transition-all peer-checked:text-white peer-checked:opacity-100 peer-disabled:opacity-50"
              size={16}
              strokeWidth={4}
            />
          )}
        </div>
        <div className="flex flex-grow flex-col gap-1 break-keep">
          <h2 className="font-medium text-neutral-900 decoration-transparent transition-colors group-has-[:checked]:text-neutral-400 group-has-[:checked]:line-through group-has-[:checked]:decoration-neutral-900">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-neutral-500 transition-colors group-has-[:checked]:text-neutral-400">
              {description}
            </p>
          )}
        </div>
      </label>
      <div className="group ml-auto flex flex-none gap-0.5 p-2.5 pl-0">
        <button
          disabled={isLoading}
          className="flex size-8 items-center justify-center rounded text-neutral-600 transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 [&:not(:disabled)]:hover:bg-neutral-200"
        >
          <PencilLine size={20} />
        </button>
        <button
          disabled={isLoading}
          onClick={() => erase()}
          className="flex size-8 items-center justify-center rounded text-neutral-600 transition-all active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 [&:not(:disabled)]:hover:bg-neutral-200"
        >
          {isErasing ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Trash2 size={20} />
          )}
        </button>
      </div>
      <div className="w-full p-3.5 pt-0 empty:hidden">
        {toggleError && (
          <div
            role="alert"
            className="flex w-full items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600"
          >
            <AlertCircle />
            <span>{toggleError.message}</span>
          </div>
        )}
        {eraseError && (
          <div
            role="alert"
            className="flex w-full items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600"
          >
            <AlertCircle />
            <span>{eraseError.message}</span>
          </div>
        )}
      </div>
    </li>
  );
}
