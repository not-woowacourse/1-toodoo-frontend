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
    <main className="flex min-h-screen w-screen flex-col items-center p-4 sm:p-8">
      <h1 className="w-full max-w-xl break-keep pb-4 pl-3.5 text-3xl font-bold text-neutral-800 sm:pb-8">
        할 일
      </h1>
      {isLoading ? <p>Loading...</p> : null}
      {!sorted && !isLoading ? <p>에러</p> : null}
      {sorted && sorted.length === 0 ? <p>텅</p> : null}
      {sorted && sorted.length > 0 && (
        <ul className="flex w-full max-w-xl flex-col gap-3">
          {sorted.map((item) => (
            <TodoCard todo={item} key={item.id} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default RootPage;
