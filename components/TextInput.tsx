'use client';

import {
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
  useEffect,
  useRef,
} from 'react';

interface TextInputProps {
  label: string;
  placeholder: string;
  autoFocus?: boolean;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function TextInput({
  label,
  placeholder,
  autoFocus,
  text,
  setText,
}: TextInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.autofocus = true;
    }
  }, [autoFocus]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <label className="flex flex-col gap-0.5">
      <span className="px-1 text-sm font-semibold text-neutral-500">
        {label}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        value={text}
        onChange={handleChange}
        className="rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 shadow-sm outline-none ring-rose-500 ring-offset-2 transition-all focus:ring-2"
      />
    </label>
  );
}