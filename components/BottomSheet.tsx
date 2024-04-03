import { X } from 'lucide-react';
import {
  useRef,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useEffect,
  type KeyboardEventHandler,
} from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
}

export function BottomSheet({
  isOpen,
  setIsOpen,
  title,
  children,
}: BottomSheetProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  if (isOpen === false) return null;

  const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (event) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <dialog
      className="mb-0 flex w-full max-w-xl flex-col gap-4 rounded-t-xl bg-white p-6 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] shadow-lg transition-[padding] backdrop:bg-neutral-900/80"
      ref={dialogRef}
      onKeyDown={handleKeyDown}
    >
      <div className="text-neutral-901 flex w-full items-center justify-between gap-2 px-1">
        <div className="text-lg font-bold">{title}</div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="닫기"
          className="flex size-8 items-center justify-center rounded outline-none ring-rose-500 ring-offset-2 transition-all hover:bg-neutral-200 focus-visible:bg-neutral-200 focus-visible:ring-2 active:scale-95"
        >
          <X className="flex-none" />
        </button>
      </div>
      <div>{children}</div>
    </dialog>
  );
}