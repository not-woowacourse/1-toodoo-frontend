import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { QUERY_KEYS } from '@/constants/query-keys';
import TodoListItemDoneCheckbox from '@/features/root/todo-list-item/todo-list-item-done-checkbox';
import { axiosPatchTodoOf } from '@/lib/apis';
import type { TodoListItemProps } from '@/features/root/todo-list-item';
import type { PickAndRename } from '@/types/utility-types';

import type { CheckedState } from '@radix-ui/react-checkbox';

type TodoListItemDoneActionProps = PickAndRename<
  TodoListItemProps['todo'],
  {
    id: 'todoId';
    isDone: 'isDone';
  }
>;

const TodoListItemDoneAction = ({
  todoId,
  isDone,
}: TodoListItemDoneActionProps) => {
  const queryClient = useQueryClient();

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

type AxiosPatchTodoIsDoneOfParams = TodoListItemDoneActionProps;

const axiosPatchTodoIsDoneOf = async (params: AxiosPatchTodoIsDoneOfParams) => {
  const { todoId, isDone } = params;

  await axiosPatchTodoOf(todoId, { isDone });
};

export default TodoListItemDoneAction;
