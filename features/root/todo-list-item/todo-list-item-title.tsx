import type { TodoListItemProps } from '@/features/root/todo-list-item';

type TodoListItemTitleProps = Pick<TodoListItemProps['todo'], 'title'>;

const TodoListItemTitle = ({ title }: TodoListItemTitleProps) => {
  return <p>{title}</p>;
};

export default TodoListItemTitle;
