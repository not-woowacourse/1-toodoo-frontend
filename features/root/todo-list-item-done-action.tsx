import { Checkbox } from '@/components/ui/checkbox';

type TodoListItemDoneActionProps = {
  todoId: number;
};

const TodoListItemDoneAction = ({ todoId }: TodoListItemDoneActionProps) => {
  return <Checkbox className="mt-1" />;
};

export default TodoListItemDoneAction;
