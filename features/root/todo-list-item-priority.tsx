import getPriorityStylingInfo from '@/features/root/lib/get-priority-styling-info';
import { cn } from '@/lib/utils';
import { Priority } from '@/types/unions/priority';

type TodoListItemPriorityProps = {
  priority: Priority;
};

const TodoListItemPriority = ({ priority }: TodoListItemPriorityProps) => {
  const { color, text } = getPriorityStylingInfo(priority);

  return <div className={cn(color, 'text-sm')}>{text}</div>;
};

export default TodoListItemPriority;
