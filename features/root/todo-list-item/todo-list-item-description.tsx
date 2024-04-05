import type { TodoListItemProps } from '@/features/root/todo-list-item';

type TodoListItemDescriptionProps = Pick<
  TodoListItemProps['todo'],
  'description'
>;

const TodoListItemDescription = ({
  description,
}: TodoListItemDescriptionProps) => {
  return <p className="text-xs text-neutral-500">{description}</p>;
};

export default TodoListItemDescription;
