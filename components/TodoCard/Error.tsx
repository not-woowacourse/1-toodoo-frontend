import { AlertCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ErrorProps {
  intent: string;
  error: Error;
  className?: string;
}

export function Error({ intent, error, className }: ErrorProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600',
        className,
      )}
    >
      <AlertCircle className="flex-none" />
      <span>
        {intent} 실패 ({error.message})
      </span>
    </div>
  );
}
