'use client';

import { useState } from 'react';

import TodoItem from '@/components/TodoItem/TodoItem';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useQueryGetTodoList from '@/react-query/queries/useQueryGetTodoList';

export default function TodoList() {
  const { data: todoList } = useQueryGetTodoList();
  const [filtered, setFiltered] = useState(true);
  const filteredTodoList = todoList?.filter((todo) => !todo.isDone);

  return (
    <div className="flex flex-col gap-y-2">
      <Separator className="my-1" />
      <div className="flex justify-between items-center">
        <div>
          총{' '}
          <span className="text-red-500">
            {(filtered ? filteredTodoList : todoList)?.length}
          </span>
          개의 할 일이 있습니다 ✨
        </div>
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
        {(filtered ? filteredTodoList : todoList)?.map((todo) => (
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
