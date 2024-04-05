'use client';
import { createContext, ReactNode, useReducer } from 'react';
import { useQuery } from '@tanstack/react-query';

import { apiGetTodos } from '@/lib/apis';
import { Todo } from '@/types/types';

type TodoContext = {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean;
  isShowDone: boolean;
  handleIsShowDone: (action: Action) => void;
};

export type Action = { type: 'TOGGLE' };

const initState = { isShowDone: false };

function todoReducer(state: typeof initState, action: Action) {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, isShowDone: !state.isShowDone };
    default:
      throw new Error('Unauthorized action type');
  }
}

export const TodoContext = createContext<TodoContext>({
  todos: [],
  isLoading: true,
  isError: false,
  isShowDone: false,
  handleIsShowDone: () => {},
});

export default function TodoContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(todoReducer, initState);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: apiGetTodos,
  });

  function handleIsShowDone() {
    dispatch({
      type: 'TOGGLE',
    });
  }

  const ctxValue = {
    todos: data?.data || [],
    isLoading: isLoading,
    isError: isError,
    isShowDone: state.isShowDone,
    handleIsShowDone: handleIsShowDone,
  };

  console.log('Context : ', ctxValue.todos);

  return (
    <TodoContext.Provider value={ctxValue}>{children}</TodoContext.Provider>
  );
}
