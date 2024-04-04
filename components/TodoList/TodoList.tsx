'use client';

import InformBox from '@/components/TodoItem/TodoItem';
import useQueryGetTodoList from '@/react-query/queries/useQueryGetTodoList';

export default function TodoList() {
  const { data: todoList, isLoading, isError } = useQueryGetTodoList();

  if (isLoading || isError) return <></>;

  return (
    <ul className="flex flex-col gap-y-1 w-full">
      {todoList &&
        todoList.map((todo) => (
          <InformBox
            key={todo.id}
            title={todo.title}
            description={todo.description}
            initialIsChecked={todo.isDone}
            date={todo.updatedAt}
          />
        ))}
    </ul>
  );
}
