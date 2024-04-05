import { CheckedState } from '@radix-ui/react-checkbox';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import { QUERY_KEYS } from '@/constants/constants';
import { apiPatchTodo } from '@/lib/apis';
import { Checkbox } from '@/components/ui/checkbox';

type CompleteTodoCheckboxProps = {
  todoId: number;
  isDone: boolean;
};

const SUCCES_DONE_MESSAGE = '할 일 완료 상태를 변경했어요.';
const FAIL_DONE_MESSAGE =
  '할 일 완료 상태 변경에 실패했어요. 잠시 후에 시도해주세요.';

const handlePatchTodoDone = async (data: CompleteTodoCheckboxProps) => {
  const { todoId, isDone } = data;

  await apiPatchTodo(todoId, { isDone });
};

const CompleteTodoCheckbox = ({
  todoId,
  isDone,
}: CompleteTodoCheckboxProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: handlePatchTodoDone,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.Todos });

      toast.success(SUCCES_DONE_MESSAGE);
    },
    onError: () => {
      toast.error(FAIL_DONE_MESSAGE);
    },
  });

  const handleCheckedChange = (checked: CheckedState) => {
    if (checked === 'indeterminate') {
      throw new Error('indeterminate state is not allowed');
    }

    mutate({ todoId, isDone: checked });
  };

  return (
    <Checkbox defaultChecked={isDone} onCheckedChange={handleCheckedChange} />
  );
};

export default CompleteTodoCheckbox;
