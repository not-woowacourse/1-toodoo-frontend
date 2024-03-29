import TodoListItemDescription from '@/features/root/todo-list-item-description';
import TodoListItemDoneAction from '@/features/root/todo-list-item-done-action';
import TodoListItemPriority from '@/features/root/todo-list-item-priority';
import TodoListItemTitle from '@/features/root/todo-list-item-title';
import { Todo } from '@/types/todo';

type TodoListItemProps = {
  todo: Todo;
};

const TodoListItem = ({
  todo: { id, title, description, priority, isDone },
}: TodoListItemProps) => {
  return (
    <li className="flex gap-4">
      <TodoListItemDoneAction todoId={id} />
      <div className="flex flex-col">
        <div className="flex gap-1">
          {priority !== null && <TodoListItemPriority priority={priority} />}
          <TodoListItemTitle title={title} />
        </div>
        {description !== null && (
          <TodoListItemDescription description={description} />
        )}
      </div>
    </li>
  );
};

export default TodoListItem;
