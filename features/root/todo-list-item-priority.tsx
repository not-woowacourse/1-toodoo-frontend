import { Priority } from '@/types/enums/priority.enum';

type TodoListItemPriorityProps = {
  priority: Priority;
};

const TodoListItemPriority = ({ priority }: TodoListItemPriorityProps) => {
  return <div>{priority}</div>;
};

export default TodoListItemPriority;
