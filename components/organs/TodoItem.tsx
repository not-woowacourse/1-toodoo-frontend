'use client';

import { Todo } from '@/types/types';
import CompleteTodoCheckbox from '@/components/atoms/CompleteTodoCheckbox';
import TodoInfo from '@/components/atoms/TodoInfo';

// Todo box
// 수정, 삭제 버튼
// checkBox 기능 ; check -> sonner toast 생성

type TodoItemProps = {
  todo: Todo;
  hideCompleted: boolean;
};

export const TodoItem = ({ todo, hideCompleted }: TodoItemProps) => {
  const { id, title, description, isDone } = todo;
  const isHidden = hideCompleted && isDone;

  return (
    <li className="items-top flex space-x-2" hidden={isHidden}>
      <CompleteTodoCheckbox todoId={id} isDone={isDone} />
      <div className="grid gap-1.5 leading-none">
        <TodoInfo title={title} description={description} />
      </div>
    </li>
  );
};
