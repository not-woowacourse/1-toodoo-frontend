import { AlertCircle, Check } from 'lucide-react';
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
    isPending,
    error,
    variables,
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

  console.log(variables);

  return (
    <label className="group group flex cursor-pointer gap-2.5 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all hover:border-neutral-300 hover:bg-neutral-100 has-[:disabled]:cursor-not-allowed [&:not(:has(:disabled))]:active:scale-[0.975]">
      <div className="sticky top-4 flex size-6 flex-none">
        <input
          type="checkbox"
          className="peer size-full cursor-pointer appearance-none rounded border border-neutral-200 bg-white transition-all checked:border-neutral-900 checked:bg-neutral-800 disabled:opacity-40"
          checked={isDone}
          disabled={isPending}
          onChange={() => toggle()}
        />
        <Check
          className="text-netural-900 absolute left-1 top-1 opacity-0 transition-all peer-checked:text-white peer-checked:opacity-100 peer-disabled:opacity-40"
          size={16}
          strokeWidth={4}
        />
      </div>
      <div className="flex w-full flex-col gap-1 text-balance break-keep">
        <h2 className="font-medium text-neutral-900 decoration-transparent transition-colors group-has-[:checked]:text-neutral-400 group-has-[:checked]:line-through group-has-[:checked]:decoration-neutral-900">
          {title}
        </h2>
        <p className="text-sm text-neutral-500 transition-colors empty:hidden group-has-[:checked]:text-neutral-400">
          {description}
        </p>
        {error && (
          <div
            role="alert"
            className="mt-2 flex w-full items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600"
          >
            <AlertCircle />
            <span>{error.message}</span>
          </div>
        )}
      </div>
    </label>
  );
}
