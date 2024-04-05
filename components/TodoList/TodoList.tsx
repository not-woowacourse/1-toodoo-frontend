'use client';

import { useState } from 'react';

import TodoItem from '@/components/TodoItem/TodoItem';
import { Button } from '@/components/ui/button';
import useQueryGetTodoList from '@/react-query/queries/useQueryGetTodoList';

export default function TodoList() {
  const { data: todoList } = useQueryGetTodoList();
  const [filtered, setFiltered] = useState(true);
  const filteredTodoList = filtered
    ? todoList?.filter((todo) => !todo.isDone)
    : todoList;
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-end">
        <Button
          onClick={() => {
            setFiltered((prev) => !prev);
          }}
        >
          {filtered ? '전체 보기' : '남은 할일 보기'}
        </Button>
      </div>
      <ul className="flex flex-col gap-y-1 w-full">
        {filteredTodoList?.map((todo) => (
          <TodoItem
            key={todo.id}
            id={String(todo.id)}
            title={todo.title}
            description={todo.description}
            initialIsDone={todo.isDone}
            date={todo.updatedAt}
          />
        ))}
      </ul>
    </div>
  );
}
