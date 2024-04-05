'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { CheckCircle } from 'lucide-react';
import {
  type Dispatch,
  type FormEvent,
  type SetStateAction,
  useState,
} from 'react';

import { BottomSheet } from '@/components/BottomSheet';
import { Button } from '@/components/Button';
import { TextInput } from '@/components/TextInput';
import { Error } from '@/components/TodoCard/Error';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';
import type { Todo, TodoPostResponse } from '@/lib/types';

interface AddTodoSheetProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function AddTodoSheet({ isOpen, setIsOpen }: AddTodoSheetProps) {
  const [title, setTitle] = useState('');

  const trimmedTitle = title.trim();

  const queryClient = useQueryClient();

  const {
    mutate: add,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ title }: Pick<Todo, 'title'>) =>
      axios.post<TodoPostResponse>(
        `${API_URL}/todos`,
        { title },
        { headers: DEFAULT_HEADERS },
      ),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['todos'] });

      setTitle('');
      setIsOpen(false);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    add({ title: trimmedTitle });
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
        {error && <Error intent="추가" error={error} />}
        <Button
          type="submit"
          icon={CheckCircle}
          text="추가"
          className="w-full"
          isLoading={isPending}
          disabled={trimmedTitle === ''}
        />
      </form>
    </BottomSheet>
  );
}
