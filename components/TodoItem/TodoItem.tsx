'use client';

import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { useState } from 'react';

import TodoForm from '@/components/TodoForm/TodoForm';
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import useMutationDeleteTodo from '@/react-query/mutations/useMutationDeleteTodo';
import useMutationEditTodo from '@/react-query/mutations/useMutationEditTodo';
import formatDate from '@/utils/formatDate';

interface TodoItemProps {
  id: string;
  title: string;
  description?: string;
  initialIsDone?: boolean;
  date?: string;
}

// TODO: draft value, method hook 으로 분리 / 객체로 묶어서 관리
export default function TodoItem({
  id,
  title,
  description,
  date,
  initialIsDone,
}: TodoItemProps) {
  const { mutate: editTodo } = useMutationEditTodo(id);
  const { mutate: deleteTodo } = useMutationDeleteTodo(id);

  const [isDone, setIsDone] = useState<boolean>(initialIsDone || false);
  const [titleDraft, setTitleDraft] = useState<string>();
  const [descriptionDraft, setDescriptionDraft] = useState<string>();

  const titleValue = titleDraft ?? title;
  const descriptionValue = descriptionDraft ?? description;

  const handleClickDelete = () => {
    deleteTodo();
  };
  const handleClickEdit = () => {
    editTodo({ title: titleValue, description: descriptionValue });
  };

  const handleChangeTitle = (value: string) => setTitleDraft(value);
  const handleChangeDescription = (value: string) => setDescriptionDraft(value);

  const handleClickCheckbox = () => {
    const newIsDone = !isDone;
    setIsDone(newIsDone);
    editTodo({ isDone: newIsDone });
  };

  // 수정 초기화
  const handleReset = () => {
    setTitleDraft(undefined);
    setDescriptionDraft(undefined);
  };

  return (
    <div className="flex justify-between items-center hover:bg-black/5 p-4 transition-colors">
      <div
        className="flex gap-x-2 cursor-pointer select-none flex-1"
        onClick={handleClickCheckbox}
      >
        <Checkbox checked={isDone} onChange={handleClickCheckbox} />
        <div className="grid gap-1.5 leading-none">
          <h5 className="text-lg font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {title}
          </h5>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
          <p className="text-xs text-gray-500">{formatDate(date)}</p>
        </div>
      </div>
      <div className="gap-x-1 flex">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={'outline'}>🪄</Button>
          </DialogTrigger>
          <TodoForm
            type="edit"
            title={titleValue}
            description={descriptionValue}
            onClick={handleClickEdit}
            onChangeTitle={handleChangeTitle}
            onReset={handleReset}
            onChangeDescription={handleChangeDescription}
          />
        </Dialog>

        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant={'outline'}>❎</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                <span className="text-blue-500">{title}</span> 할일을
                삭제할까요?
              </AlertDialogTitle>
              <AlertDialogDescription>
                삭제된 데이터는 복구될 수 없습니다.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>취소</AlertDialogCancel>
              <AlertDialogAction
                onClick={handleClickDelete}
                className="bg-red-600"
              >
                삭제
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
