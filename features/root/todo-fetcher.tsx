'use client';

import { useQuery } from '@tanstack/react-query';

import TodoResult from '@/features/root/todo-result';
import { axiosGetTodos } from '@/lib/apis';

const TodoFetcher = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: axiosGetTodos,
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

  return <TodoResult result={data.data} />;
};

export default TodoFetcher;
