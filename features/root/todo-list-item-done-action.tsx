import { CheckedState } from '@radix-ui/react-checkbox';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { QUERY_KEYS } from '@/constants/query-keys';
import TodoListItemDoneCheckbox from '@/features/root/todo-list-item-done-checkbox';
import { axiosPatchTodoOf } from '@/lib/apis';

type TodoListItemDoneActionProps = {
  todoId: number;
  isDone: boolean;
};

const TodoListItemDoneAction = ({
  todoId,
  isDone,
}: TodoListItemDoneActionProps) => {
  const queryClient = useQueryClient();

  const axiosPatchTodoIsDoneOf = async (data: {
    todoId: number;
    isDone: boolean;
  }) => {
    const { todoId, isDone } = data;

    await axiosPatchTodoOf(todoId, { isDone });
  };

  const { mutate } = useMutation({
    mutationFn: axiosPatchTodoIsDoneOf,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.TODOS,
      });
      toast.success('할 일 완료 상태를 변경했어요.');
    },
    onError: () => {
      toast.error('할 일 완료 상태 변경에 실패했어요. 잠시 후에 시도해주세요.');
    },
  });

  const handleCheckedChange = (checked: CheckedState) => {
    if (checked === 'indeterminate') {
      throw new Error('indeterminate state is not allowed');
    }

    mutate({
      todoId,
      isDone: checked,
    });
  };

  return (
    <TodoListItemDoneCheckbox
      defaultChecked={isDone}
      onCheckedChange={handleCheckedChange}
    />
  );
};

export default TodoListItemDoneAction;
