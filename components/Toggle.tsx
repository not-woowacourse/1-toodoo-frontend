import type { Dispatch, SetStateAction } from 'react';

interface ToggleProps {
  label: string;
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
}

export function Toggle({ label, isOn, setIsOn }: ToggleProps) {
  return (
    <label className="ml-auto flex items-center gap-3">
      <span className="text-balance text-right text-sm font-bold text-neutral-500">
        {label}
      </span>
      <div className="relative">
        <input
          type="checkbox"
          className="peer absolute inset-0 opacity-0"
          checked={isOn}
          onChange={() => setIsOn((prev) => !prev)}
        />
        <div className="relative h-6 w-10 flex-none cursor-pointer rounded-full border border-neutral-200 bg-white shadow-sm ring-rose-500 ring-offset-2 transition-all after:absolute after:top-1 after:h-4 after:w-4 after:-translate-y-[0.0625rem] after:translate-x-1 after:rounded-full after:bg-neutral-300 after:transition-all hover:after:translate-x-1.5 hover:after:bg-neutral-400 active:after:scale-90 peer-checked:after:translate-x-[1.125rem] peer-checked:after:bg-neutral-900 hover:peer-checked:after:translate-x-4 hover:peer-checked:after:bg-neutral-700 peer-focus-visible:ring-2 peer-focus-visible:after:translate-x-1.5 peer-focus-visible:after:bg-neutral-400 peer-focus-visible:peer-checked:after:translate-x-4 peer-focus-visible:peer-checked:after:bg-neutral-700 peer-active:after:scale-90" />
      </div>
    </label>
  );
}
