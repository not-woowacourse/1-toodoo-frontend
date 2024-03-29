'use client';

import { useState } from 'react';

import ShowAlreadyDoneToggle from '@/features/root/show-already-done-toggle';
import TodoList from '@/features/root/todo-list';
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

  const { length } = result;

  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between">
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
