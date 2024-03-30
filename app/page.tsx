'use client';

import { useQuery } from '@tanstack/react-query';

import { TodoCard } from '@/components/TodoCard';
import type { TodoGetResponse } from '@/lib/types';

const RootPage = () => {
  const { data, isLoading } = useQuery<TodoGetResponse>({
    queryKey: ['todos'],
  });

  const sorted = data?.sort((a, b) => a.createdAt.localeCompare(b.createdAt));

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center p-4">
      <h1 className="mb-8 text-3xl font-bold text-neutral-800">
        My To-Do List
      </h1>
      {!data || isLoading ? <p>Loading...</p> : null}
      {data && (
        <ul className="flex w-full max-w-xl flex-col gap-3">
          {data.map((item) => (
            <li key={item.id}>
              <TodoCard todo={item} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default RootPage;
