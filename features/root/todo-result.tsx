import TodoList from '@/features/root/todo-list';
import { Todo } from '@/types/todo';

type TodoResultProps = {
  result: Todo[];
};

const TodoResult = ({ result }: TodoResultProps) => {
  return <TodoList todos={result} />;
};

export default TodoResult;
