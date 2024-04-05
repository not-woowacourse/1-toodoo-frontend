'use client';

import { Todo } from '@/types/types';
import CompleteTodoCheckbox from '@/components/atoms/CompleteTodoCheckbox';
import TodoInfo from '@/components/atoms/TodoInfo';
import DeleteTodoButton from '@/components/atoms/DeleteTodoButton';
import UpdateTodoSheet from '@/components/molecules/UpdateTodoSheet';

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, description, isDone } = todo;

  return (
    <li className="w-full h-14 p-3 flex items-center gap-3 bg-white rounded-md">
      <CompleteTodoCheckbox todoId={id} isDone={isDone} />
      <TodoInfo title={title} description={description} />
      <UpdateTodoSheet todo={todo} />
      <DeleteTodoButton todoId={id} />
    </li>
  );
};
