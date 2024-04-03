'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { PlusCircle } from 'lucide-react';

import { TodoCard } from '@/components/TodoCard';
import type { TodoGetResponse } from '@/lib/types';
import { Button } from '@/components/Button';
import { AddTodoSheet } from '@/components/AddTodoSheet';
import { Toggle } from '@/components/Toggle';
import { Error } from '@/components/TodoCard/Error';
import { Skeleton } from '@/components/TodoCard/Skeleton';

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
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center p-4 transition-[padding] sm:p-8">
      <Button
        icon={PlusCircle}
        text="새 할 일"
        onClick={() => setIsAddTodoSheetOpen(true)}
        className="fixed bottom-[calc(env(safe-area-inset-bottom)+1.5rem)]"
      />
      <header className="flex w-full flex-wrap items-center justify-between gap-4 px-3 pb-4 transition-[padding] sm:px-6 sm:pb-8">
        <h1 className="text-3xl font-bold text-neutral-900">할 일</h1>
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
          {Array.from({ length: 4 }).map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      )}
      {error && <Error intent="로딩" error={error} className="w-full" />}
      {data && data.length === 0 ? <p>텅</p> : null}
      {data && data.length > 0 && (
        <ul className="flex w-full flex-col gap-3">
          {data.map((item) => (
            <TodoCard todo={item} key={item.id} />
          ))}
        </ul>
      )}
    </main>
  );
}
