import {
  useState,
  type Dispatch,
  type SetStateAction,
  type FormEvent,
} from 'react';
import { CheckCircle } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

import { BottomSheet } from '@/components/BottomSheet';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import type { Todo, TodoPatchResponse } from '@/lib/types';
import { API_URL, DEFAULT_HEADERS } from '@/lib/constants';

interface EditTodoSheetProps {
  todo: Todo;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function EditTodoSheet({ todo, isOpen, setIsOpen }: EditTodoSheetProps) {
  const [title, setNewTitle] = useState(todo.title);
  const [description, setNewDescription] = useState(todo.description ?? '');

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ title, description }: Pick<Todo, 'title' | 'description'>) =>
      axios.patch<TodoPatchResponse>(
        `${API_URL}/todos/${todo.id}`,
        { title, description },
        { headers: DEFAULT_HEADERS },
      ),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['todos'] });

      setIsOpen(false);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    mutate({ title, description });
  };

  return (
    <BottomSheet title="할 일 수정" isOpen={isOpen} setIsOpen={setIsOpen}>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <TextInput
          label="제목"
          placeholder="과제 제출"
          autoFocus
          text={title}
          setText={setNewTitle}
        />
        <TextInput
          label="설명"
          placeholder="12월 31일까지 제출"
          text={description}
          setText={setNewDescription}
        />
        <Button
          type="submit"
          icon={CheckCircle}
          isLoading={isPending}
          text="수정"
          className="w-full"
        />
      </form>
    </BottomSheet>
  );
}
