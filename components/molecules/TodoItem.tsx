'use client';

import { Todo } from '@/types/types';
import CompleteTodoCheckbox from '@/components/atoms/CompleteTodoCheckbox';
import TodoInfo from '@/components/atoms/TodoInfo';

import { UpdateTodoSheet } from './UpdateTodoSheet';
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
    <li
      className="flex items-center space-x-2 w-full bg-white rounded-md p-3 h-14"
      hidden={isHidden}
    >
      <CompleteTodoCheckbox todoId={id} isDone={isDone} />
      <TodoInfo title={title} description={description} />
      <UpdateTodoSheet todo={todo} />
    </li>
  );
};
