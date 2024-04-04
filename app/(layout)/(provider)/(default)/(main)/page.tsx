'use client';

import { useState } from 'react';

import TodoList from '@/components/TodoList';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useMutationCreateTodo from '@/react-query/mutations/useMutationCreateTodo';

export default function Todo() {
  const { mutate: createTodo } = useMutationCreateTodo();
  const [title, setValue] = useState<string>('');
  const [desc, setDesc] = useState<string>('');

  const handleCreateTodo = () => {
    createTodo({ title });
  };

  const handleChangeTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);
  };

  const handleChangeDescription: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    const newDesc = e.currentTarget.value;
    setDesc(newDesc);
  };

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" className="px-2 py-6 w-full justify-start">
            + Add Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
            <DialogDescription>add your own task.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-left">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                value={title}
                onChange={handleChangeTitle}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-left">
                Description
              </Label>
              <Input
                id="description"
                className="col-span-3"
                value={desc}
                onChange={handleChangeDescription}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleCreateTodo}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <TodoList />
    </div>
  );
}
