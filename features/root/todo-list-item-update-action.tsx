'use client';

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
import TodoListItemUpdateButton from '@/features/root/todo-list-item-update-button';
import { Todo } from '@/types/todo';

type TodoListItemUpdateActionProps = {
  todo: Todo;
};

const TodoListItemUpdateAction = ({ todo }: TodoListItemUpdateActionProps) => {
  const { title, description } = todo;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <TodoListItemUpdateButton />
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Details</SheetTitle>
          <SheetDescription>
            View and edit the details of this reminder.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" value={title} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              value={description ?? ''}
              className="col-span-3"
            />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default TodoListItemUpdateAction;
