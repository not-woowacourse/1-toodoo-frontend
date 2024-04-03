'use client';
import { useQuery } from '@tanstack/react-query';

import { apiGetTodos } from '@/lib/apis';
import { TodoItem } from '@/components/molecules/TodoItem';

const TodoListBody = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: apiGetTodos,
  });

  if (isLoading) {
    return <div className="font-semibold text-xl">Loading...</div>;
  }

  if (isError) {
    return <div className="font-semibold text-xl">Error</div>;
  }

  const todos = data?.data;

  if (todos?.length === 0) {
    return <div className="font-semibold text-xl">No data</div>;
  }

  return (
    <ul className="flex flex-col gap-2 w-full h-full overflow-y-scroll">
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} hideCompleted={false} />
      ))}
    </ul>
  );
};

export default TodoListBody;
