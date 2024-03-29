import TodoList from '@/features/root/todo-list';
import { Todo } from '@/types/todo';

type TodoResultProps = {
  result: Todo[];
};

const TodoResult = ({ result }: TodoResultProps) => {
  const { length } = result;

  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm text-neutral-500">
        총 {length}개의 할 일이 있습니다.
      </p>
      <TodoList todos={result} />
    </div>
  );
};

export default TodoResult;
