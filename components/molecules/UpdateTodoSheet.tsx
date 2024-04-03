'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEventHandler, useState } from 'react';
import { toast } from 'sonner';
import { PencilLine } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QUERY_KEYS } from '@/constants/constants';
import { apiPatchTodo } from '@/lib/apis';
import { Todo } from '@/types/types';

type UpdateTodoSheetProps = {
  todo: Todo;
};

type dataPatchTodoInfo = {
  todoId: number;
  title: string;
  description: string;
};
const SUCCES_UPDATE_MESSAGE = '할 일을 수정했어요.';
const FAIL_UPDATE_MESSAGE = '할 일 수정에 실패했어요. 잠시 후에 시도해주세요.';

const handlePatchTodoInfo = async (data: dataPatchTodoInfo) => {
  const { todoId, title, description } = data;

  if (title === '') {
    throw new Error('title is required');
  }

  await apiPatchTodo(todoId, {
    title,
    description: description === '' ? null : description,
  });
};

const UpdateTodoSheet = ({ todo }: UpdateTodoSheetProps) => {
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(
    todo.description ?? '',
  );

  const isTitleEmpty = title === '';
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handlePatchTodoInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.Todos });

      toast.success(SUCCES_UPDATE_MESSAGE);
    },
    onError: () => {
      toast.error(FAIL_UPDATE_MESSAGE);
    },
  });

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    setTitle(value);
  };

  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.currentTarget.value;
    setDescription(value);
  };

  const handleSubmit = () => {
    mutate({ todoId: todo.id, title, description });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="sm">
          <PencilLine className="h-5 w-5 text-neutral-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Update Todo</SheetTitle>
          <SheetDescription>
            View and edit the details of this reminder.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={handleTitleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button disabled={isTitleEmpty} onClick={handleSubmit}>
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateTodoSheet;
