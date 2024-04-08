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
import { TextArea } from '@/components/TextArea';
import { TextInput } from '@/components/TextInput';
import { Error } from '@/components/TodoCard/Error';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';
import type { Todo, TodoPatchResponse } from '@/lib/types';

interface EditTodoSheetProps {
  todo: Todo;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function EditTodoSheet({ todo, isOpen, setIsOpen }: EditTodoSheetProps) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description ?? '');

  const trimmedTitle = title.trim();
  const trimmedDescription = description.trim();

  const queryClient = useQueryClient();

  const {
    mutate: edit,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ title, description }: Pick<Todo, 'title' | 'description'>) =>
      axios.patch<TodoPatchResponse>(
        `${API_URL}/todos/${todo.id}`,
        { title, description },
        { headers: DEFAULT_HEADERS },
      ),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['todos'] });

      setIsOpen(false);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      trimmedTitle === todo.title &&
      trimmedDescription === todo.description
    ) {
      setTitle(todo.title);
      setDescription(todo.description ?? '');
      setIsOpen(false);

      return;
    }
    edit({ title: trimmedTitle, description: trimmedDescription });
  };

  return (
    <BottomSheet title="할 일 수정" isOpen={isOpen} setIsOpen={setIsOpen}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TextInput
          label="제목"
          placeholder="과제 제출"
          autoFocus
          text={title}
          setText={setTitle}
        />
        <TextArea
          rows={5}
          label="설명"
          placeholder="12월 31일까지 제출"
          text={description}
          setText={setDescription}
        />
        {error && <Error intent="수정" error={error} />}
        <Button
          type="submit"
          icon={CheckCircle}
          isLoading={isPending}
          text="수정"
          className="w-full"
          disabled={trimmedTitle === ''}
        />
      </form>
    </BottomSheet>
  );
}