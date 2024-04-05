'use client';

import { useMemo, useState } from 'react';

import ShowAlreadyDoneToggle from '@/features/root/todo-fetcher/show-already-done-toggle';
import TodoList from '@/features/root/todo-fetcher/todo-list';
import TodoResultDescriptor from '@/features/root/todo-fetcher/todo-result-descriptor';
import type { Todo } from '@/types/todo';

type TodoResultProps = {
  result: Todo[];
};

const TodoResult = ({ result }: TodoResultProps) => {
  const [isShowAlreadyDone, setIsAlreadyDone] = useState<boolean>(false);

  const handlePressedChange = (pressed: boolean) => {
    setIsAlreadyDone(pressed);
  };

  const filteredNotDoneResult = useMemo(() => {
    return result.filter(filterTodoPredicateNotDone);
  }, [result]);

  const sortedLatestFirstResult = useMemo(() => {
    if (isShowAlreadyDone) {
      return result.sort(sortTodoPredicateLatestFirst);
    }

    return filteredNotDoneResult.sort(sortTodoPredicateLatestFirst);
  }, [filteredNotDoneResult, isShowAlreadyDone]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <TodoResultDescriptor
          isShowAlreadyDone={isShowAlreadyDone}
          totalLength={result.length}
          notDoneLength={filteredNotDoneResult.length}
        />
        <ShowAlreadyDoneToggle
          defaultPressed={isShowAlreadyDone}
          onPressedChange={handlePressedChange}
        />
      </div>
      <TodoList todos={sortedLatestFirstResult} />
    </div>
  );
};

const filterTodoPredicateNotDone = (todo: Todo) => {
  return !todo.isDone;
};

const sortTodoPredicateLatestFirst = (a: Todo, b: Todo) => {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
};

export default TodoResult;
