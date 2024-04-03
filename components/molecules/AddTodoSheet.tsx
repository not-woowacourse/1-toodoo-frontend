'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ChangeEventHandler, useState } from 'react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

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
import { apiPostTodo } from '@/lib/apis';

const SUCCES_ADD_MESSAGE = '할 일을 추가했어요.';
const FAIL_ADD_MESSAGE = '할 일 추가에 실패했어요. 잠시 후에 시도해주세요.';

export const AddTodoSheet = () => {
  const [title, setTitle] = useState<string>('');
  const isTitleEmpty = title === '';
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: apiPostTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.Todos });

      toast.success(SUCCES_ADD_MESSAGE);
    },
    onError: () => {
      toast.error(FAIL_ADD_MESSAGE);
    },
  });

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const titleValue = e.currentTarget.value;
    setTitle(titleValue);
  };
  const handleSubmit = () => {
    mutate({ title });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="">
          <Plus className="mr-2 h-4 w-4" />
          New Reminder
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>New Todo</SheetTitle>
          <SheetDescription>Create a new reminder.</SheetDescription>
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
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button disabled={isTitleEmpty} onClick={handleSubmit}>
              Create
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
