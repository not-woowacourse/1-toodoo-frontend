'use client';
import { cn } from '@/lib/utils';
import TodoListBody from '@/components/organs/TodoListBody';
import TodoListHeader from '@/components/organs/TodoListHeader';

const TodoList = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-5',
        'mt-12',
        'w-full h-full',
        'rounded-xl',
      )}
    >
      <TodoListHeader />
      <TodoListBody />
    </div>
  );
};

export default TodoList;
