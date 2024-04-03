import { AlertCircle } from 'lucide-react';

interface ErrorProps {
  intent: string;
  error: Error;
}

export function Error({ intent, error }: ErrorProps) {
  return (
    <div
      role="alert"
      className="flex items-center gap-2 rounded-lg bg-red-100 p-2.5 text-sm font-semibold text-red-600"
    >
      <AlertCircle />
      <span>
        {intent} 실패 ({error.message})
      </span>
    </div>
  );
}
