'use client';

import { useState } from 'react';

import ShowAlreadyDoneToggle from '@/features/root/todo-fetcher/show-already-done-toggle';
import TodoList from '@/features/root/todo-fetcher/todo-list';
import { Todo } from '@/types/todo';

type TodoResultProps = {
  result: Todo[];
};

const TodoResult = ({ result }: TodoResultProps) => {
  const [isShowAlreadyDone, setIsAlreadyDone] = useState<boolean>(false);

  const handlePressedChange = (pressed: boolean) => {
    setIsAlreadyDone(pressed);
  };

  if (!isShowAlreadyDone) {
    result = result.filter((todo) => !todo.isDone);
  }

  result.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
  );

  const { length } = result;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-500">
          총 {length}개의 할 일이 있습니다.
        </p>
        <ShowAlreadyDoneToggle
          defaultPressed={isShowAlreadyDone}
          onPressedChange={handlePressedChange}
        />
      </div>
      <TodoList todos={result} />
    </div>
  );
};

export default TodoResult;
