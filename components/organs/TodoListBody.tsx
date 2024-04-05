import { useContext } from 'react';

import { TodoItem } from '@/components/molecules/TodoItem';
import { TodoContext } from '@/store/todo-context';
import { SkeletonItem } from '@/components/molecules/SkeletonItem';

const TodoListBody = () => {
  const { todos, isLoading, isError } = useContext(TodoContext);

  let content;

  if (isLoading) {
    const skeletons = Array.from({ length: 6 }, (_, i) => i);
    content = skeletons.map((_, index) => <SkeletonItem key={index} />);
  } else if (isError) {
    content = <div className="font-semibold text-xl">Error</div>;
  } else if (!todos || todos.length === 0) {
    content = <div className="font-semibold text-xl">No data</div>;
  } else {
    content = todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  }

  return (
    <ul className="flex flex-col gap-2 w-full h-full overflow-y-scroll px-1 scrollbar-hide">
      {content}
    </ul>
  );
};

export default TodoListBody;
