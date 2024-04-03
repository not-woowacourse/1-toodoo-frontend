import type { MouseEventHandler } from 'react';

import { cn } from '@/lib/utils';

import type { LucideIcon } from 'lucide-react';

interface ButtonProps {
  icon: LucideIcon;
  className?: string;
  text: string;
  type?: HTMLButtonElement['type'];
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  icon: Icon,
  className,
  text,
  type = 'button',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'flex justify-center gap-2 rounded-xl bg-neutral-900 p-3 text-white shadow-md outline-none ring-rose-500 ring-offset-2 transition-all enabled:hover:bg-neutral-800 enabled:focus-visible:bg-neutral-800 enabled:focus-visible:ring-2 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      <Icon className="flex-none" />
      <span>{text}</span>
    </button>
  );
}
