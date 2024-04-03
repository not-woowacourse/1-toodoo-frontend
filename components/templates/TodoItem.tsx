'use client';

import { CheckedState } from '@radix-ui/react-checkbox';

import { Todo } from '@/types/types';
import { Checkbox } from '@/components/ui/checkbox';

// Todo box
// 수정, 삭제 버튼
// checkBox 기능 ; check -> sonner toast 생성

type TodoItemProps = {
  todo: Todo;
  hideCompleted: boolean;
};

export const TodoItem = ({ todo, hideCompleted }: TodoItemProps) => {
  const { id, title, description, isDone } = todo;
  const isHidden = hideCompleted && isDone;

  const handleCheckedChange = (checked: CheckedState) => {};

  return (
    <li className="items-top flex space-x-2" hidden={isHidden}>
      <Checkbox
        id={`todo-check-${id}`}
        defaultChecked={isDone}
        onCheckedChange={handleCheckedChange}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`todo-check-${id}`}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {title}
        </label>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </li>
  );
};
