'use client';

import CreateTodo from '@/components/CreateTodo/CreateTodo';
import TodoList from '@/components/TodoList';

export default function Todo() {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <CreateTodo />
      <TodoList />
    </div>
  );
}
