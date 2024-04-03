import { CheckedState } from '@radix-ui/react-checkbox';

import { Checkbox } from '@/components/ui/checkbox';

type CompleteTodoCheckboxProps = {
  todoId: number;
  isDone: boolean;
};

const CompleteTodoCheckbox = ({
  todoId,
  isDone,
}: CompleteTodoCheckboxProps) => {
  const handleCheckedChange = (checked: CheckedState) => {};

  return (
    <Checkbox defaultChecked={isDone} onCheckedChange={handleCheckedChange} />
  );
};

export default CompleteTodoCheckbox;
