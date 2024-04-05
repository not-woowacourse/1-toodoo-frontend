'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type ReactNode } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
import { QUERY_KEYS } from '@/constants/query-keys';
import useForm from '@/hooks/use-form';
import { axiosPatchTodoOf } from '@/lib/apis';
import type { Todo } from '@/types/todo';

type TodoListItemUpdateSheetProps = {
  trigger: ReactNode;
  todo: Todo;
};

type UpdateTodoFormSchema = {
  title: string;
  description: string;
};

const TodoListItemUpdateSheet = ({
  trigger,
  todo,
}: TodoListItemUpdateSheetProps) => {
  const queryClient = useQueryClient();

  const axiosPatchTodoTitleAndDescriptionOf = async (data: {
    todoId: number;
    title: string;
    description: string;
  }) => {
    const { todoId, title, description } = data;

    if (title === '') {
      throw new Error('title is required'); /* unreachable */
    }

    await axiosPatchTodoOf(todoId, {
      title,
      description: description === '' ? null : description,
    });
  };

  const { mutate } = useMutation({
    mutationFn: axiosPatchTodoTitleAndDescriptionOf,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });

      toast.success('할 일을 수정했어요.');
    },
    onError: () => {
      toast.error('할 일 수정에 실패했어요. 잠시 후에 시도해주세요.');
    },
  });

  const updateTodoFormInitialValues: UpdateTodoFormSchema = {
    title: todo.title,
    description: todo.description ?? '',
  };

  const { values, handleChange } = useForm<UpdateTodoFormSchema>({
    initialValues: updateTodoFormInitialValues,
  });

  const { title, description } = values;

  const isTitleEmpty = title === '';

  const handleSubmit = () => {
    mutate({
      todoId: todo.id,
      title,
      description,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
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
              name="title"
              value={title}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
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

export default TodoListItemUpdateSheet;
