'use client';
import { cn } from '@/lib/utils';
import TodoListBody from '@/components/organs/TodoListBody';

const TodoList = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-1',
        'mt-12',
        'w-full h-full',
        'rounded-xl',
      )}
    >
      <TodoListBody />
    </div>
  );
};

export default TodoList;
