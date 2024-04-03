'use client';

import {
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
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
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
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
        ref={inputRef}
        value={text}
        onChange={handleChange}
        className="rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 shadow outline-none ring-rose-500 ring-offset-2 transition-all focus:ring-2"
      />
    </label>
  );
}
