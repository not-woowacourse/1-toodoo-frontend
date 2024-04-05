'use client';

import { useMemo, useState } from 'react';

import ShowAlreadyDoneToggle from '@/features/root/todo-fetcher/show-already-done-toggle';
import TodoList from '@/features/root/todo-fetcher/todo-list';
import type { Todo } from '@/types/todo';

type TodoResultProps = {
  result: Todo[];
};

const filterTodoPredicate = (isShowAlreadyDone: boolean) => (todo: Todo) => {
  if (isShowAlreadyDone) {
    return true;
  }

  return !todo.isDone;
};

const sortTodoPredicateLatestFirst = (a: Todo, b: Todo) => {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
};

const TodoResult = ({ result }: TodoResultProps) => {
  const [isShowAlreadyDone, setIsAlreadyDone] = useState<boolean>(false);

  const handlePressedChange = (pressed: boolean) => {
    setIsAlreadyDone(pressed);
  };

  const filteredResult = useMemo(() => {
    return result.filter(filterTodoPredicate(isShowAlreadyDone));
  }, [result, isShowAlreadyDone]);

  const sortedResult = useMemo(() => {
    return filteredResult.sort(sortTodoPredicateLatestFirst);
  }, [filteredResult]);

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
      <TodoList todos={sortedResult} />
    </div>
  );
};

export default TodoResult;
