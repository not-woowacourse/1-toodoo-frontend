import { Loader2, type LucideIcon } from 'lucide-react';
import type { MouseEventHandler } from 'react';

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function ActionButton({
  icon: Icon,
  label,
  disabled,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="sticky top-2.5 flex size-8 items-center justify-center rounded text-neutral-600 outline-none ring-rose-500 ring-offset-2 transition-all focus-visible:ring-2 enabled:hover:bg-neutral-200 enabled:focus-visible:bg-neutral-200 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <Icon size={20} />
    </button>
  );
}
