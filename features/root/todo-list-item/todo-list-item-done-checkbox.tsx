import { Checkbox } from '@/components/ui/checkbox';

import type { CheckedState } from '@radix-ui/react-checkbox';


type TodoListItemDoneCheckboxProps = {
  defaultChecked: boolean;
  onCheckedChange: (checked: CheckedState) => void;
};

const TodoListItemDoneCheckbox = ({
  defaultChecked,
  onCheckedChange,
}: TodoListItemDoneCheckboxProps) => {
  return (
    <Checkbox
      className="mt-1"
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
    />
  );
};

export default TodoListItemDoneCheckbox;
