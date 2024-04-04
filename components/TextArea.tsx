'use client';

import {
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from 'react';

interface TextAreaProps {
  label: string;
  placeholder: string;
  autoFocus?: boolean;
  rows?: number;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}

export function TextArea({
  label,
  placeholder,
  autoFocus = false,
  rows = 1,
  text,
  setText,
}: TextAreaProps) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoFocus && ref.current) {
      ref.current.autofocus = true;
    }
  }, [autoFocus]);

  return (
    <label className="flex flex-col gap-0.5">
      <span className="px-1 text-sm font-semibold text-neutral-500">
        {label}
      </span>
      <textarea
        placeholder={placeholder}
        rows={rows}
        ref={ref}
        value={text}
        onChange={handleChange}
        className="resize-none rounded-xl border border-neutral-300 bg-neutral-50 px-3.5 py-2.5 shadow-sm outline-none ring-rose-500 ring-offset-2 transition-all focus:ring-2"
      />
    </label>
  );
}
