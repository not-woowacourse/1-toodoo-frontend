'use client';

import { useQuery } from '@tanstack/react-query';
import { Bird, Github, PlusCircle } from 'lucide-react';
import { useState } from 'react';

import { AddTodoSheet } from '@/components/AddTodoSheet';
import { Button } from '@/components/Button';
import { TodoCard } from '@/components/TodoCard';
import { Error } from '@/components/TodoCard/Error';
import { Skeleton } from '@/components/TodoCard/Skeleton';
import { Toggle } from '@/components/Toggle';
import type { TodoGetResponse } from '@/lib/types';

export default function RootPage() {
  const [showDone, setShowDone] = useState(false);

  const { data, isLoading, error } = useQuery<TodoGetResponse>({
    queryKey: ['todos'],
    select: (data) =>
      data
        .filter((todo) => (showDone ? true : !todo.isDone))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt)),
  });

  const [isAddTodoSheetOpen, setIsAddTodoSheetOpen] = useState(false);

  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center p-4 pb-[calc(env(safe-area-inset-bottom)+6rem)] transition-[padding] sm:p-8 sm:pb-[calc(env(safe-area-inset-bottom)+6rem)]">
      <Button
        icon={PlusCircle}
        text="새 할 일"
        onClick={() => setIsAddTodoSheetOpen(true)}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.5rem)] z-10"
      />
      <header className="flex w-full flex-wrap items-center justify-between gap-4 px-3 pb-4 transition-[padding] sm:px-6 sm:pb-8">
        <div className="flex items-center gap-2 text-neutral-800">
          <h1 className="text-3xl font-bold">할 일</h1>
          <a
            target="_blank"
            href="https://github.com/te6-in/not-woowacourse-1-toodoo-frontend"
            className="flex size-9 items-center justify-center rounded-lg outline-none ring-rose-500 ring-offset-2 transition-all hover:bg-neutral-200 focus-visible:bg-neutral-200 focus-visible:ring-2 active:scale-95"
          >
            <Github size={22} />
          </a>
        </div>
        <Toggle
          label="완료된 항목 표시"
          isOn={showDone}
          setIsOn={setShowDone}
        />
      </header>
      <AddTodoSheet
        isOpen={isAddTodoSheetOpen}
        setIsOpen={setIsAddTodoSheetOpen}
      />
      {isLoading && (
        <div className="flex w-full flex-col gap-3">
          <div className="sr-only" role="status">
            로딩 중입니다.
          </div>
          <div className="flex flex-col gap-3">
            <div className="ml-auto mr-2 h-4 w-16 animate-pulse rounded bg-neutral-200" />
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        </div>
      )}
      {error && <Error intent="로딩" error={error} className="w-full" />}
      {data && data.length === 0 ? (
        <div className="my-8 flex flex-col items-center gap-4 text-sm font-medium text-neutral-500">
          <Bird size={48} />
          <div>모든 할 일을 완료했어요.</div>
        </div>
      ) : null}
      {data && data.length > 0 && (
        <div className="flex flex-col gap-2">
          <div className="px-2 text-right text-sm font-semibold text-neutral-600">
            {data.length}개의 항목
          </div>
          <ul className="flex w-full flex-col gap-3">
            {data.map((item) => (
              <TodoCard todo={item} key={item.id} />
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
