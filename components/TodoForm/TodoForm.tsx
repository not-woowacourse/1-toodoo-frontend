import { DialogClose } from '@radix-ui/react-dialog';

import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TodoFormProps {
  type: 'create' | 'edit';
  title: string;
  description?: string;
  onClick?: () => void;
  onChangeTitle: (value: string) => void;
  onChangeDescription: (value: string) => void;
  onReset?: () => void;
}

export default function TodoForm({
  type,
  title,
  description = '',
  onClick,
  onChangeTitle,
  onChangeDescription,
  onReset,
}: TodoFormProps) {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{type === 'create' ? 'Add' : 'Edit'} Reminder</DialogTitle>
        <DialogDescription>
          {type === 'create' ? 'add' : 'edit'} your own task.
        </DialogDescription>
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
            onChange={(e) => onChangeTitle(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-left">
            Description
          </Label>
          <Input
            id="description"
            className="col-span-3"
            value={description}
            onChange={(e) => onChangeDescription(e.target.value)}
          />
        </div>
      </div>
      <DialogFooter className="flex !justify-between">
        <DialogClose asChild>
          <Button variant={'ghost'} className="bg-gray-100">
            Cancel
          </Button>
        </DialogClose>
        <div className="flex gap-x-1">
          <Button
            variant={'secondary'}
            className="bg-blue-100"
            onClick={onReset}
          >
            Reset
          </Button>
          <DialogClose asChild>
            <Button
              disabled={!title}
              className="bg-red-100"
              variant={'secondary'}
              onClick={() => {
                if (onClick) {
                  onClick();
                }
              }}
            >
              Save
            </Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
