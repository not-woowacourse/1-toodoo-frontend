import type { Dispatch, SetStateAction } from 'react';
import { CheckCircle } from 'lucide-react';

import { BottomSheet } from '@/components/BottomSheet';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';

interface AddTodoSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddTodoSheet({ isOpen, setIsOpen }: AddTodoSheetProps) {
  return (
    <BottomSheet title="새 할 일" isOpen={isOpen} setIsOpen={setIsOpen}>
      <form className="flex flex-col gap-3">
        <TextInput label="제목" placeholder="과제 제출" autoFocus />
        <Button
          type="submit"
          icon={CheckCircle}
          text="추가"
          className="w-full"
          onClick={() => {}}
        />
      </form>
    </BottomSheet>
  );
}
