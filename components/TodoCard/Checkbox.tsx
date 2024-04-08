import { Check, Loader2 } from 'lucide-react';
import type { ChangeEventHandler } from 'react';

import type { Todo } from '@/lib/types';

interface CheckboxProps {
  htmlId: string;
  isDone: Todo['isDone'];
  isLoading: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export function Checkbox({
  htmlId,
  isDone,
  isLoading,
  onChange,
}: CheckboxProps) {
  return (
    <div className="text-netural-900 sticky top-3.5 m-3.5 mr-0 flex size-6 flex-none">
      <input
        id={htmlId}
        type="checkbox"
        className="peer size-full cursor-pointer appearance-none rounded border border-neutral-200 bg-white shadow-sm outline-none ring-rose-500 ring-offset-2 transition-all checked:border-neutral-900 checked:bg-neutral-800 focus-visible:ring-2 enabled:hover:border-neutral-300 enabled:hover:bg-neutral-100 checked:enabled:hover:border-neutral-800 checked:enabled:hover:bg-neutral-700 enabled:focus-visible:border-neutral-300 enabled:focus-visible:bg-neutral-100 checked:enabled:focus-visible:border-neutral-800 checked:enabled:focus-visible:bg-neutral-700 enabled:active:scale-90 disabled:cursor-not-allowed disabled:opacity-50"
        checked={isDone}
        disabled={isLoading}
        onChange={onChange}
      />
      {isLoading ? (
        <Loader2
          className="pointer-events-none absolute left-1 top-1 flex-none animate-spin opacity-50 peer-checked:text-white"
          size={16}
          strokeWidth={3}
        />
      ) : (
        <Check
          className="pointer-events-none absolute left-1 top-1 flex-none opacity-0 transition-transform peer-checked:text-white peer-checked:opacity-100 peer-active:scale-90"
          size={16}
          strokeWidth={4}
        />
      )}
    </div>
  );
}