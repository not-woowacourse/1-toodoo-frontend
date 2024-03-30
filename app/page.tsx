'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { TodoCard } from '@/components/TodoCard';
import type { TodoGetResponse } from '@/lib/types';

const RootPage = () => {
  const [showDone, setShowDone] = useState(false);

  const { data, isLoading } = useQuery<TodoGetResponse>({
    queryKey: ['todos'],
    select: (data) =>
      data
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        .filter((todo) => (showDone ? true : !todo.isDone)),
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-4 transition-[padding] sm:p-8">
      <header className="flex w-full max-w-xl flex-wrap items-center justify-between gap-4 px-3 pb-4 transition-[padding] sm:px-6 sm:pb-8">
        <h1 className="max-w-xl text-3xl font-bold text-neutral-800">할 일</h1>
        <label className="ml-auto flex items-center gap-3">
          <span className="text-balance text-right text-sm font-bold text-neutral-500">
            완료로 표시한 항목 표시
          </span>
          <div className="relative">
            <input
              type="checkbox"
              className="peer absolute inset-0 opacity-0"
              checked={showDone}
              onChange={() => setShowDone((prev) => !prev)}
            />
            <div className="relative h-6 w-10 flex-none cursor-pointer rounded-full border border-neutral-200 bg-white shadow-sm ring-rose-500 ring-offset-2 transition-all after:absolute after:top-1 after:h-4 after:w-4 after:-translate-y-[0.0625rem] after:translate-x-1 after:rounded-full after:bg-neutral-300 after:transition-all hover:after:translate-x-1.5 hover:after:bg-neutral-400 active:after:scale-90 peer-checked:after:translate-x-[1.125rem] peer-checked:after:bg-neutral-900 hover:peer-checked:after:translate-x-4 hover:peer-checked:after:bg-neutral-700 peer-focus-visible:ring-2 peer-focus-visible:after:translate-x-1.5 peer-focus-visible:after:bg-neutral-400 peer-focus-visible:peer-checked:after:translate-x-4 peer-focus-visible:peer-checked:after:bg-neutral-700 peer-active:after:scale-90" />
          </div>
        </label>
      </header>
      {isLoading ? <p>Loading...</p> : null}
      {!data && !isLoading ? <p>에러</p> : null}
      {data && data.length === 0 ? <p>텅</p> : null}
      {data && data.length > 0 && (
        <ul className="flex w-full max-w-xl flex-col gap-3">
          {data.map((item) => (
            <TodoCard todo={item} key={item.id} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default RootPage;
