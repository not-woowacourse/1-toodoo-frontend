'use client';

import { useQueryClient } from '@tanstack/react-query';

import CreateTodo from '@/components/CreateTodo/CreateTodo';
import TodoList from '@/components/TodoList';
import { Button } from '@/components/ui/button';
import { useAPI } from '@/contexts/api.context/api.context';

export default function Todo() {
  const queryClient = useQueryClient();
  const api = useAPI();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    queryClient.clear();
    api.removeToken();
    window.location.reload();
  };
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Button
        className="absolute top-0 right-4 bg-gray-300"
        size={'sm'}
        onClick={handleLogout}
      >
        Logout
      </Button>
      <CreateTodo />
      <TodoList />
    </div>
  );
}
