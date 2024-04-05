import { useContext } from 'react';

import { TodoItem } from '@/components/molecules/TodoItem';
import { TodoContext } from '@/store/todo-context';

const TodoListBody = () => {
  const { todos, isLoading, isError } = useContext(TodoContext);

  if (isLoading) {
    return <div className="font-semibold text-xl">Loading...</div>;
  }

  if (isError) {
    return <div className="font-semibold text-xl">Error</div>;
  }

  if (todos?.length === 0) {
    return <div className="font-semibold text-xl">No data</div>;
  }

  return (
    <ul className="flex flex-col gap-2 w-full h-full overflow-y-scroll px-1 scrollbar-hide">
      {todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default TodoListBody;
