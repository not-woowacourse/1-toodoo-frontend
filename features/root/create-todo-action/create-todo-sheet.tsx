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
import { axiosPostTodo } from '@/lib/apis';

type CreateTodoSheetProps = {
  trigger: ReactNode;
};

type CreateTodoFormSchema = {
  title: string;
};

const createTodoFormInitialValues: CreateTodoFormSchema = {
  title: '',
};

const CreateTodoSheet = ({ trigger }: CreateTodoSheetProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: axiosPostTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODOS });

      toast.success('할 일을 추가했어요.');
    },
    onError: () => {
      toast.error('할 일 추가에 실패했어요. 잠시 후에 시도해주세요.');
    },
  });

  const { values, handleChange } = useForm<CreateTodoFormSchema>({
    initialValues: createTodoFormInitialValues,
  });

  const { title } = values;

  const isTitleEmpty = title === '';

  const handleSubmit = () => {
    mutate({ title });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
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
              name="title"
              value={title}
              onChange={handleChange}
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

export default CreateTodoSheet;
