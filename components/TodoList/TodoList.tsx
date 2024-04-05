'use client';

import { useState } from 'react';

import TodoItem from '@/components/TodoItem/TodoItem';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useQueryGetTodoList from '@/react-query/queries/useQueryGetTodoList';

export default function TodoList() {
  const { data: todoList } = useQueryGetTodoList();
  const [filtered, setFiltered] = useState(true);
  const filteredTodoList = filtered
    ? todoList?.filter((todo) => !todo.isDone)
    : todoList;
  return (
    <div className="flex flex-col gap-y-2">
      <Separator className="my-1" />
      <div className="flex justify-end">
        <Tabs
          defaultValue="filtered"
          onClick={() => {
            setFiltered((prev) => !prev);
          }}
          value={filtered ? 'filtered' : 'all'}
        >
          <TabsList>
            <TabsTrigger value="filtered">filtered</TabsTrigger>
            <TabsTrigger value="all">all</TabsTrigger>
          </TabsList>
        </Tabs>
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
