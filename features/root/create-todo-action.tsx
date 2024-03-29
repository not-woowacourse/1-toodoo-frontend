'use client';

import { MouseEventHandler } from 'react';

import CreateTodoFab from '@/features/root/create-todo-fab';

const CreateTodoAction = () => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {};

  return <CreateTodoFab onClick={handleClick} />;
};

export default CreateTodoAction;
