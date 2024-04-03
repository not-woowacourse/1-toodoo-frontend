'use client';

import { Todo } from '@/types/types';
import CompleteTodoCheckbox from '@/components/atoms/CompleteTodoCheckbox';
import TodoInfo from '@/components/atoms/TodoInfo';
import DeleteTodoButton from '@/components/atoms/DeleteTodoButton';
import UpdateTodoSheet from '@/components/molecules/UpdateTodoSheet';

type TodoItemProps = {
  todo: Todo;
  hideCompleted: boolean;
};

export const TodoItem = ({ todo, hideCompleted }: TodoItemProps) => {
  const { id, title, description, isDone } = todo;
  const isHidden = hideCompleted && isDone;

  return (
    <li
      className="w-full h-14 p-3 flex items-center gap-3 bg-white rounded-md"
      hidden={isHidden}
    >
      <CompleteTodoCheckbox todoId={id} isDone={isDone} />
      <TodoInfo title={title} description={description} />
      <UpdateTodoSheet todo={todo} />
      <DeleteTodoButton todoId={id} />
    </li>
  );
};
