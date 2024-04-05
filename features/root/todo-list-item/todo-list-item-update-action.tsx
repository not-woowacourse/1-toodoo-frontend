import type { TodoListItemProps } from '@/features/root/todo-list-item';
import TodoListItemUpdateButton from '@/features/root/todo-list-item/todo-list-item-update-button';
import TodoListItemUpdateSheet from '@/features/root/todo-list-item/todo-list-item-update-sheet';

type TodoListItemUpdateActionProps = TodoListItemProps;

const TodoListItemUpdateAction = ({ todo }: TodoListItemUpdateActionProps) => {
  return (
    <TodoListItemUpdateSheet
      trigger={<TodoListItemUpdateButton />}
      todo={todo}
    />
  );
};

export default TodoListItemUpdateAction;
