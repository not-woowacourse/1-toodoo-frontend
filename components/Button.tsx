'use client';

import { Loader2, type LucideIcon } from 'lucide-react';
import { type MouseEventHandler, useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

interface ButtonProps {
  icon: LucideIcon;
  className?: string;
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  autoFocus?: boolean;
  type?: HTMLButtonElement['type'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  icon: Icon,
  className,
  text,
  disabled = false,
  isLoading = false,
  autoFocus = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.autofocus = true;
    }
  }, [autoFocus]);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      ref={ref}
      className={cn(
        'flex justify-center gap-2 rounded-xl bg-neutral-900 p-3 text-white shadow outline-none ring-rose-500 ring-offset-2 transition-all enabled:hover:bg-neutral-800 enabled:focus-visible:bg-neutral-800 enabled:focus-visible:ring-2 enabled:active:scale-95 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
    >
      {isLoading ? (
        <Loader2 className="flex-none animate-spin" />
      ) : (
        <Icon className="flex-none" />
      )}
      <span>{text}</span>
    </button>
  );
}
