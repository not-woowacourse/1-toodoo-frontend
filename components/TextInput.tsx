import { useEffect, useRef } from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  autoFocus?: boolean;
}

export function TextInput({ label, placeholder, autoFocus }: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <label className="flex flex-col gap-0.5">
      <span className="px-1 text-sm font-semibold text-neutral-500">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        ref={inputRef}
        className="rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 shadow outline-none ring-rose-500 ring-offset-2 transition-all focus:ring-2"
      />
    </label>
  );
}
