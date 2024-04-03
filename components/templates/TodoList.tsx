'use client';
import { useQuery } from '@tanstack/react-query';

import { apiGetTodos } from '@/lib/apis';
import { TodoItem } from '@/components/organs/TodoItem';

const TodoList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: apiGetTodos,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  const todos = data.data;

  return (
    <div className="flex flex-col gap-1">
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} hideCompleted={false} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
