import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import {
  useState,
  type Dispatch,
  type SetStateAction,
  type FormEvent,
} from 'react';
import { CheckCircle } from 'lucide-react';

import { BottomSheet } from '@/components/BottomSheet';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import type { Todo, TodoPostResponse } from '@/lib/types';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';

interface AddTodoSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddTodoSheet({ isOpen, setIsOpen }: AddTodoSheetProps) {
  const [title, setTitle] = useState('');

  const queryClient = useQueryClient();

  const { mutate, isPending, status } = useMutation({
    mutationFn: ({ title }: Pick<Todo, 'title'>) =>
      axios.post<TodoPostResponse>(
        `${API_URL}/todos`,
        { title },
        { headers: DEFAULT_HEADERS },
      ),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['todos'] });

      setTitle('');
      setIsOpen(false);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ title });
  };

  return (
    <BottomSheet title="새 할 일" isOpen={isOpen} setIsOpen={setIsOpen}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TextInput
          label="제목"
          placeholder="과제 제출"
          autoFocus
          text={title}
          setText={setTitle}
        />
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
